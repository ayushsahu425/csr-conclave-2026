export interface RegistrationData {
  fullName: string;
  organisation: string;
  designation: string;
  category: string;
  email: string;
  phone: string;
  consent: boolean;
}

export interface IssuedPass extends RegistrationData {
  passId: string;
  timestamp: string;
}

export interface ProjectLeadData {
  projectId: string;
  projectTitle: string;
  applicantName: string;
  organisation: string;
  designation: string;
  email: string;
  phone: string;
  proposedBudget: string;
  message: string;
}

export interface SponsorEnquiryData {
  companyName: string;
  contactPerson: string;
  designation: string;
  email: string;
  phone: string;
  tier: string;
  message: string;
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  org: string;
  category: 'Chief Guest' | 'Academia' | 'Industry' | 'PSU' | 'Government';
  photo?: string;
  linkedin?: string;
  bio: string;
  sessionTitle: string;
}

export interface CSRProject {
  id: string;
  code: string;
  /** Label on the card, e.g. 'CSR Project' or 'Social Initiative'. */
  kind: string;
  title: string;
  description: string;
  /** Amount shown large on the card, e.g. '₹5–25 lakh'. */
  support: string;
  /** Small line under the amount, e.g. 'Sponsorship packages'. */
  supportNote?: string;
  beneficiaries?: string;
  scheduleVII?: string;
  focusAreas?: string;
  duration?: string;
  proponent: string;
  proponentLocation?: string;
}

/** Projects already supported through CSR at IIT (ISM) Dhanbad (details to be added). */
export interface SupportedProject {
  id: string;
  title: string;
  /** Company or organisation that supported it. */
  partner: string;
  description: string;
}

export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  /** Label shown on the row, e.g. "Session I | Shatabdi", "Break", "Closing". */
  session: string;
  /** Which session tab the row belongs to (null = shown only under "Full Day"). */
  track: 'I' | 'II' | null;
  type: 'welcome' | 'ceremony' | 'talk' | 'panel' | 'showcase' | 'break' | 'closing';
  speakers: string[];
  description: string;
  venue?: string;
}