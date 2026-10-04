import { EVENT } from '../data/mockData';

const toICSDate = (iso: string) =>
  new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

/** Builds and downloads an .ics file for the conclave (IST times converted to UTC). */
export function downloadICS(opts?: { title?: string; start?: string; end?: string; description?: string }) {
  const title = opts?.title ?? `${EVENT.name} – ${EVENT.subtitle}`;
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//IIT ISM Dhanbad//CSR Conclave 2026//EN',
    'BEGIN:VEVENT',
    `UID:csr-conclave-2026-${Date.now()}@iitism.ac.in`,
    `DTSTAMP:${toICSDate(new Date().toISOString())}`,
    `DTSTART:${toICSDate(opts?.start ?? EVENT.start)}`,
    `DTEND:${toICSDate(opts?.end ?? EVENT.end)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${(opts?.description ?? EVENT.tagline).replace(/,/g, '\\,')}`,
    `LOCATION:${EVENT.venue.replace(/,/g, '\\,')}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'csr-conclave-2026.ics';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/** Parse an agenda slot like "10:00 AM - 10:35 AM" into IST ISO strings on event day. */
export function slotToISO(slot: string) {
  const parts = slot.split('-').map((s) => s.trim());
  const conv = (t: string) => {
    const m = t.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
    if (!m) return EVENT.start;
    let h = parseInt(m[1], 10) % 12;
    if (m[3].toUpperCase() === 'PM') h += 12;
    return `2026-12-04T${String(h).padStart(2, '0')}:${m[2]}:00+05:30`;
  };
  return { start: conv(parts[0]), end: conv(parts[1] ?? parts[0]) };
}
