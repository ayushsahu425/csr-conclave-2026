/**
 * Shatabdi Samriddhi 2026 – CSR Conclave · IIT (ISM) Dhanbad
 * Form backend: saves website submissions to this Google Sheet and sends emails.
 *
 * Setup (once): see docs/FORMS_SETUP.md in the website repo.
 *   1. Create a Google Sheet → Extensions → Apps Script → paste this file.
 *   2. Edit CONFIG below.
 *   3. Run `setup` once (authorises Sheets + Gmail and creates the tabs).
 *   4. Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone.
 *   5. Copy the Web app URL into the website (src/config.ts or VITE_FORMS_ENDPOINT).
 */

const CONFIG = {
  // Who receives a notification for every submission (comma-separate several).
  TEAM_EMAIL: 'csrconclave@iitism.ac.in',
  // Shown as the sender name on outgoing emails.
  SENDER_NAME: 'CSR Conclave 2026 · IIT (ISM) Dhanbad',
  // Replies from delegates/sponsors go here.
  REPLY_TO: 'csrconclave@iitism.ac.in',
  // Registration closes automatically at this many delegates.
  CAPACITY: 500,
  // Event details used in emails and the calendar invite (IST).
  EVENT_NAME: 'Shatabdi Samriddhi 2026 – CSR Conclave',
  EVENT_DATE_LABEL: 'Friday, 4 December 2026 · 9:00 AM IST',
  EVENT_START_UTC: '20261204T033000Z', // 09:00 IST
  EVENT_END_UTC: '20261204T100000Z', //   15:30 IST
  EVENT_VENUE: 'Penman Auditorium, IIT (ISM) Dhanbad, Jharkhand 826004',
  WEBSITE_URL: 'https://github.com/ayushsahu425/csr-conclave-2026', // replace with the live site URL
  // Optional: route project-interest leads to the PI as well. Key = project id on the website.
  PROJECT_PI_EMAILS: {
    // 'prj-01': 'pi.name@iitism.ac.in',
  },
};

const SHEETS = {
  register: {
    name: 'Registrations',
    headers: ['Timestamp', 'Pass ID', 'Full name', 'Organisation', 'Designation', 'Category', 'Email', 'Phone', 'Dietary', 'Consent', 'Checked in'],
  },
  sponsor: {
    name: 'Sponsor Enquiries',
    headers: ['Timestamp', 'Ref', 'Tier', 'Company', 'Contact person', 'Designation', 'Email', 'Phone', 'Message', 'Status'],
  },
  project: {
    name: 'Project Interest',
    headers: ['Timestamp', 'Ref', 'Project ID', 'Project title', 'Name', 'Organisation', 'Designation', 'Email', 'Phone', 'Indicative contribution', 'Message', 'Status'],
  },
};

/* ------------------------------------------------------------------ */
/* Entry points                                                        */
/* ------------------------------------------------------------------ */

/** Run once from the editor to authorise and create the tabs. */
function setup() {
  Object.keys(SHEETS).forEach(getSheet_);
  Logger.log('Tabs ready. Now Deploy → New deployment → Web app.');
}

/** Health check + seats remaining: GET <web-app-url> */
function doGet() {
  const used = Math.max(0, getSheet_('register').getLastRow() - 1);
  return json_({ ok: true, seatsLeft: Math.max(0, CONFIG.CAPACITY - used) });
}

function doPost(e) {
  let body;
  try {
    body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
  } catch (err) {
    return json_({ ok: false, error: 'Invalid request.' });
  }

  // Honeypot: real users never fill the hidden "website" field.
  if (body.website) return json_({ ok: true, ref: 'IGNORED' });

  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    switch (body.action) {
      case 'register':
        return json_(handleRegister_(body.data || {}));
      case 'sponsor':
        return json_(handleSponsor_(body.data || {}));
      case 'project':
        return json_(handleProject_(body.data || {}));
      default:
        return json_({ ok: false, error: 'Unknown form.' });
    }
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'Something went wrong. Please try again or email ' + CONFIG.REPLY_TO + '.' });
  } finally {
    lock.releaseLock();
  }
}

/* ------------------------------------------------------------------ */
/* Handlers                                                            */
/* ------------------------------------------------------------------ */

function handleRegister_(d) {
  const required = ['fullName', 'organisation', 'designation', 'category', 'email', 'phone'];
  const missing = required.filter((k) => !clean_(d[k]));
  if (missing.length) return { ok: false, error: 'Please fill in all required fields.' };
  if (!isEmail_(d.email)) return { ok: false, error: 'Please enter a valid email address.' };
  if (!d.consent) return { ok: false, error: 'Please accept the consent to continue.' };

  const sheet = getSheet_('register');
  const email = clean_(d.email).toLowerCase();
  const rows = Math.max(0, sheet.getLastRow() - 1);

  if (rows > 0) {
    const emails = sheet.getRange(2, 7, rows, 1).getValues().map((r) => String(r[0]).toLowerCase().trim());
    const idx = emails.indexOf(email);
    if (idx !== -1) {
      const existingPass = sheet.getRange(idx + 2, 2).getValue();
      return { ok: false, duplicate: true, error: 'This email is already registered (pass ' + existingPass + '). Please check your inbox.' };
    }
  }
  if (rows >= CONFIG.CAPACITY) {
    return { ok: false, full: true, error: 'Registrations are full. Please write to ' + CONFIG.REPLY_TO + ' to join the waitlist.' };
  }

  const passId = 'SS26-' + randomId_(5);
  sheet.appendRow([
    new Date(), passId, clean_(d.fullName), clean_(d.organisation), clean_(d.designation), clean_(d.category),
    email, phone_(d.phone), clean_(d.dietary), 'Yes', '',
  ]);

  sendRegistrationEmail_(passId, d, email);
  notifyTeam_('New registration: ' + clean_(d.fullName) + ' (' + clean_(d.organisation) + ')', [
    ['Pass ID', passId], ['Name', d.fullName], ['Organisation', d.organisation], ['Designation', d.designation],
    ['Category', d.category], ['Email', email], ['Phone', d.phone], ['Dietary', d.dietary],
    ['Total registered', rows + 1 + ' / ' + CONFIG.CAPACITY],
  ]);

  return { ok: true, passId: passId, seatsLeft: CONFIG.CAPACITY - rows - 1 };
}

function handleSponsor_(d) {
  const required = ['tier', 'companyName', 'contactPerson', 'designation', 'email', 'phone'];
  if (required.some((k) => !clean_(d[k]))) return { ok: false, error: 'Please fill in all required fields.' };
  if (!isEmail_(d.email)) return { ok: false, error: 'Please enter a valid email address.' };

  const ref = 'SP-' + randomId_(5);
  getSheet_('sponsor').appendRow([
    new Date(), ref, clean_(d.tier), clean_(d.companyName), clean_(d.contactPerson), clean_(d.designation),
    clean_(d.email), phone_(d.phone), clean_(d.message), 'New',
  ]);

  sendMail_(clean_(d.email), 'Your sponsorship enquiry – ' + CONFIG.EVENT_NAME, emailShell_(
    'Thank you for your interest',
    '<p>Dear ' + esc_(d.contactPerson) + ',</p>' +
      '<p>Thank you for enquiring about the <b>' + esc_(d.tier) + ' Partner</b> tier for ' + esc_(CONFIG.EVENT_NAME) + '. ' +
      'Our Alumni Affairs team will contact you within two working days with the partnership brochure, invoice and bank details.</p>' +
      '<p>Your reference number is <b>' + ref + '</b>.</p>'
  ));
  notifyTeam_('Sponsor enquiry (' + clean_(d.tier) + '): ' + clean_(d.companyName), [
    ['Ref', ref], ['Tier', d.tier], ['Company', d.companyName], ['Contact', d.contactPerson], ['Designation', d.designation],
    ['Email', d.email], ['Phone', d.phone], ['Message', d.message],
  ], clean_(d.email));

  return { ok: true, ref: ref };
}

function handleProject_(d) {
  const required = ['projectId', 'applicantName', 'organisation', 'designation', 'email', 'phone'];
  if (required.some((k) => !clean_(d[k]))) return { ok: false, error: 'Please fill in all required fields.' };
  if (!isEmail_(d.email)) return { ok: false, error: 'Please enter a valid email address.' };

  const ref = 'PI-' + randomId_(5);
  getSheet_('project').appendRow([
    new Date(), ref, clean_(d.projectId), clean_(d.projectTitle), clean_(d.applicantName), clean_(d.organisation),
    clean_(d.designation), clean_(d.email), phone_(d.phone), clean_(d.proposedBudget), clean_(d.message), 'New',
  ]);

  sendMail_(clean_(d.email), 'Your interest in "' + clean_(d.projectTitle) + '"', emailShell_(
    'Interest received',
    '<p>Dear ' + esc_(d.applicantName) + ',</p>' +
      '<p>Thank you for expressing interest in <b>' + esc_(d.projectTitle) + '</b>. Your details have been shared with the principal investigator and the Alumni Affairs office, who will respond within three working days.</p>' +
      '<p>Your reference number is <b>' + ref + '</b>.</p>'
  ));
  const piEmail = CONFIG.PROJECT_PI_EMAILS[clean_(d.projectId)];
  notifyTeam_('Project interest: ' + clean_(d.projectTitle) + ' – ' + clean_(d.organisation), [
    ['Ref', ref], ['Project', d.projectTitle + ' (' + d.projectId + ')'], ['Name', d.applicantName], ['Organisation', d.organisation],
    ['Designation', d.designation], ['Email', d.email], ['Phone', d.phone], ['Indicative contribution', d.proposedBudget], ['Message', d.message],
  ], clean_(d.email), piEmail);

  return { ok: true, ref: ref };
}

/* ------------------------------------------------------------------ */
/* Emails                                                              */
/* ------------------------------------------------------------------ */

function sendRegistrationEmail_(passId, d, email) {
  const qrData = 'CSR26|' + passId + '|' + clean_(d.fullName) + '|' + email;
  const qrBlob = UrlFetchApp.fetch('https://quickchart.io/qr?size=320&margin=1&dark=3D0B16&light=FDFAF5&text=' + encodeURIComponent(qrData))
    .getBlob().setName(passId + '-qr.png');

  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//IIT ISM Dhanbad//CSR Conclave 2026//EN', 'METHOD:PUBLISH',
    'BEGIN:VEVENT', 'UID:' + passId + '@iitism.ac.in', 'DTSTAMP:' + Utilities.formatDate(new Date(), 'UTC', "yyyyMMdd'T'HHmmss'Z'"),
    'DTSTART:' + CONFIG.EVENT_START_UTC, 'DTEND:' + CONFIG.EVENT_END_UTC, 'SUMMARY:' + CONFIG.EVENT_NAME,
    'LOCATION:' + CONFIG.EVENT_VENUE.replace(/,/g, '\\,'), 'DESCRIPTION:Delegate pass ' + passId,
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n');
  const icsBlob = Utilities.newBlob(ics, 'text/calendar', 'csr-conclave-2026.ics');

  const html = emailShell_(
    "You're registered",
    '<p>Dear ' + esc_(d.fullName) + ',</p>' +
      '<p>Your registration for <b>' + esc_(CONFIG.EVENT_NAME) + '</b> is confirmed. Please show the QR pass below at the registration desk along with a government photo ID.</p>' +
      '<table role="presentation" style="margin:20px 0;border:1px solid #E5D3B8;border-radius:16px;background:#fff;width:100%">' +
      '<tr><td style="padding:20px;width:170px"><img src="cid:qr" width="160" height="160" alt="QR pass" style="display:block"></td>' +
      '<td style="padding:20px;font-size:14px;color:#2B1A1D;line-height:1.7">' +
      '<b style="font-size:18px;color:#3D0B16">' + esc_(d.fullName) + '</b><br>' + esc_(d.organisation) + '<br>' +
      'Pass ID: <b style="color:#7A172B;font-family:monospace">' + passId + '</b><br>' +
      esc_(CONFIG.EVENT_DATE_LABEL) + '<br>' + esc_(CONFIG.EVENT_VENUE) + '</td></tr></table>' +
      '<p>A calendar invite is attached. We look forward to welcoming you to IIT (ISM) Dhanbad in its centenary year.</p>'
  );

  MailApp.sendEmail({
    to: email,
    subject: 'Your delegate pass ' + passId + ' – ' + CONFIG.EVENT_NAME,
    htmlBody: html,
    name: CONFIG.SENDER_NAME,
    replyTo: CONFIG.REPLY_TO,
    inlineImages: { qr: qrBlob },
    attachments: [qrBlob, icsBlob],
  });
}

function notifyTeam_(subject, rows, replyTo, extraTo) {
  const to = [CONFIG.TEAM_EMAIL, extraTo].filter(Boolean).join(',');
  if (!to) return;
  const table = rows
    .filter((r) => clean_(r[1]))
    .map((r) => '<tr><td style="padding:6px 12px;color:#8A7A7C">' + esc_(r[0]) + '</td><td style="padding:6px 12px">' + esc_(r[1]) + '</td></tr>')
    .join('');
  MailApp.sendEmail({
    to: to,
    subject: '[CSR Conclave] ' + subject,
    htmlBody: '<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">' + table + '</table>' +
      '<p style="font-family:Arial,sans-serif;font-size:12px;color:#8A7A7C">Full list: ' + SpreadsheetApp.getActive().getUrl() + '</p>',
    name: CONFIG.SENDER_NAME,
    replyTo: replyTo || CONFIG.REPLY_TO,
  });
}

function sendMail_(to, subject, html) {
  MailApp.sendEmail({ to: to, subject: subject, htmlBody: html, name: CONFIG.SENDER_NAME, replyTo: CONFIG.REPLY_TO });
}

function emailShell_(title, inner) {
  return '<div style="background:#FDFAF5;padding:24px;font-family:Arial,Helvetica,sans-serif">' +
    '<div style="max-width:600px;margin:0 auto;background:#FDFAF5">' +
    '<div style="background:#7A172B;color:#FDFAF5;padding:24px 28px;border-radius:16px 16px 0 0">' +
    '<div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#E5D3B8">Shatabdi Samriddhi 2026 · CSR Conclave</div>' +
    '<div style="font-family:Georgia,serif;font-size:24px;margin-top:6px">' + esc_(title) + '</div></div>' +
    '<div style="background:#ffffff;padding:24px 28px;border:1px solid #F1E5D3;border-top:0;border-radius:0 0 16px 16px;font-size:15px;line-height:1.6;color:#2B1A1D">' +
    inner +
    '<p style="margin-top:24px">Warm regards,<br><b>Office of Alumni Affairs</b><br>IIT (ISM) Dhanbad</p></div>' +
    '<p style="text-align:center;font-size:12px;color:#8A7A7C;margin-top:16px">Education · Innovation · Societal Impact</p>' +
    '</div></div>';
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function getSheet_(key) {
  const def = SHEETS[key];
  const ss = SpreadsheetApp.getActive();
  let sh = ss.getSheetByName(def.name);
  if (!sh) {
    sh = ss.insertSheet(def.name);
    sh.appendRow(def.headers);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, def.headers.length).setFontWeight('bold').setBackground('#7A172B').setFontColor('#FDFAF5');
    sh.autoResizeColumns(1, def.headers.length);
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function clean_(v) {
  // Trim, cap length, and neutralise spreadsheet formula injection.
  let s = String(v == null ? '' : v).trim().slice(0, 1000);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function phone_(v) {
  // Leading apostrophe keeps "+91…" as text in the sheet.
  return "'" + String(v == null ? '' : v).replace(/[^\d+\s-]/g, '').trim().slice(0, 20);
}

function esc_(v) {
  return String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

function isEmail_(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean_(v));
}

function randomId_(n) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < n; i++) s += chars.charAt(Math.floor(Math.random() * chars.length));
  return s;
}
