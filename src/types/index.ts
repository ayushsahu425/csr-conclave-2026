export interface RegistrationData {
  fullName: string;
  organisation: string;
  designation: string;
  category: string;
  email: string;
  phone: string;
  dietary: string;
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
  photo: string;
  bio: string;
  sessionTitle: string;
}

export interface CSRProject {
  id: string;
  title: string;
  focusArea:
    | 'Mine Safety'
    | 'Clean Energy'
    | 'Water & Health'
    | 'Skilling'
    | 'Land Reclamation';
  problemStatement: string;
  budget: string;
  beneficiaries: string;
  scheduleVII: string;
  piName: string;
  dept: string;
}

export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  session: 'Session I: Shatabdi' | 'Session II: Samriddhi' | 'Ceremony / Break';
  type: 'ceremony' | 'talk' | 'panel' | 'showcase' | 'break';
  speakers: string[];
  description: string;
  venue: string;
}