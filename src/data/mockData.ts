/**
 * Website content — Shatabdi Samriddhi 2026 · CSR Conclave
 * Source: "Shatabdi_Samriddhi_2026_Revised_Combined_Website_Content.docx"
 * Edit text here; components read from this file.
 */
import type { AgendaItem, CSRProject, Speaker } from '../types';

/* ------------------------------------------------------------------ */
/* Event                                                               */
/* ------------------------------------------------------------------ */

export const EVENT = {
  name: 'Shatabdi Samriddhi 2026',
  subtitle: 'CSR Conclave',
  eyebrow: 'IIT (ISM) Dhanbad | Centenary Year 1926–2026',
  tagline:
    'Celebrating a century of IIT (ISM) Dhanbad by building partnerships for education, innovation and societal impact.',
  dateLabel: 'Friday, 4 December 2026',
  timeLabel: '9:00 AM IST',
  shortDate: '04 · 12 · 2026',
  start: '2026-12-04T09:00:00+05:30',
  end: '2026-12-04T15:30:00+05:30',
  venueName: 'Penman Auditorium',
  venue: 'Penman Auditorium, IIT (ISM) Dhanbad',
  city: 'Dhanbad, Jharkhand 826004',
  presenter: 'Office of Corporate Relations, IIT (ISM) Dhanbad',
  email: 'csrconclave@iitism.ac.in',
  phone: '+91 326 223 5000',
  mapsQuery: 'Penman Auditorium, IIT (ISM) Dhanbad',
};

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const STATS = [
  { value: 100, suffix: '', label: 'Years of IIT (ISM) Dhanbad' },
  { value: 300, suffix: '+', label: 'Delegates expected' },
  { value: 15, suffix: '+', label: 'CSR-ready projects' },
  { value: 2, suffix: '', label: 'Flagship sessions' },
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const ABOUT = {
  paragraphs: [
    'In 1926, the Indian School of Mines opened in Dhanbad to build the skills a growing nation needed. A hundred years later, IIT (ISM) Dhanbad begins its centenary year with an invitation to India’s CSR leaders.',
    'The Institute’s expertise in mining, earth sciences and energy can achieve more when industry joins in. Together, we can turn knowledge into meaningful outcomes for companies, communities and the country.',
    'Shatabdi Samriddhi 2026 brings CSR heads, PSU leaders, government officials and faculty together for one focused day. The aim is practical: to turn conversations into commitments and support research that can deliver measurable benefits.',
  ],
  pillars: ['Education', 'Innovation', 'Societal Impact'],
  captionYears: '1926–2026',
  caption: 'A century of nation-building from Dhanbad',
};

export const SESSIONS = [
  {
    numeral: 'I',
    name: 'Shatabdi',
    title: 'A Century of Knowledge',
    focus: 'Where legacy meets research, technology and ideas.',
    points: [
      'The Institute’s hundred-year story and its contributions.',
      'Faculty research in mining, energy, critical minerals and clean technology.',
      'Addresses by distinguished alumni.',
    ],
  },
  {
    numeral: 'II',
    name: 'Samriddhi',
    title: 'A Future of Shared Prosperity',
    focus: 'The PSU and CSR Summit.',
    points: [
      'PSU leadership dialogue and pitches for CSR-ready projects.',
      'Community development and skilling initiatives in India’s mining regions.',
      'Exchange of Letters of Intent (LoIs) and Memoranda of Understanding (MoUs), and launch of the Partnership Booklet.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Why Attend                                                          */
/* ------------------------------------------------------------------ */

export const WHY_ATTEND = [
  {
    icon: 'flask',
    title: 'Research and Innovation',
    desc: 'See a century of expertise in mining, energy and earth sciences translated into technologies ready for field application.',
  },
  {
    icon: 'hand',
    title: 'CSR Opportunities',
    desc: 'Explore projects aligned with Schedule VII of the Companies Act, 2013. Each project has a defined budget, identified beneficiaries and a named Principal Investigator.',
  },
  {
    icon: 'handshake',
    title: 'Strategic Partnerships',
    desc: 'Meet PSU leaders, CSR heads and faculty in one place. Build relationships and work towards formal commitments through LoIs and MoUs.',
  },
  {
    icon: 'sprout',
    title: 'Measurable Impact',
    desc: 'Support initiatives that improve daily life in mining regions through clean water, safer workplaces, skills development, energy access and land restoration.',
  },
];

export const WHO_SHOULD_ATTEND = [
  'CSR heads and sustainability leaders',
  'Corporate foundations and philanthropic organisations',
  'PSU directors and senior officials',
  'Government and ministry representatives',
  'Industry leaders and ESG professionals',
  'NGOs and implementation partners',
  'IIT (ISM) faculty, researchers and alumni',
];

/* ------------------------------------------------------------------ */
/* Shatabdi timeline + alumni                                          */
/* ------------------------------------------------------------------ */

export const CENTENARY_MILESTONES = [
  {
    year: '1926',
    title: 'The Indian School of Mines is founded',
    desc: 'Established under the leadership of Lord Irwin, then Viceroy of India, to develop expertise supporting the country’s mineral and energy sectors.',
  },
  {
    year: '1957',
    title: 'Expansion into earth sciences',
    desc: 'Petroleum Engineering and Applied Geophysics were introduced, broadening the Institute’s contribution to national industry.',
  },
  {
    year: '2016',
    title: 'IIT status',
    desc: 'The Institute joined the IIT system as the Indian Institute of Technology (Indian School of Mines) Dhanbad.',
  },
  {
    year: '2026',
    title: 'The Centenary Conclave',
    desc: 'A hundred years on, Shatabdi Samriddhi brings partners together to help shape the Institute’s next century of impact.',
  },
];

export const ALUMNI_LEADERS = [
  { name: 'Dr. A. K. Singh', title: 'Former CMD, Coal India Ltd.', batch: 'Class of 1982' },
  { name: 'Smt. R. Mukherjee', title: 'Director (HR), ONGC', batch: 'Class of 1991' },
  { name: 'Shri Rajesh Verma', title: 'Vice President, Tata Steel CSR Foundation', batch: 'Class of 1998' },
  { name: 'Dr. S. K. Roy', title: 'Advisor, Ministry of Mines', batch: 'Class of 1988' },
];

/* ------------------------------------------------------------------ */
/* Agenda (IST)                                                        */
/* ------------------------------------------------------------------ */

export const AGENDA_DATA: AgendaItem[] = [
  {
    id: 'a1',
    time: '09:00 AM - 10:00 AM',
    title: 'Registration and Centenary Networking Breakfast',
    session: 'Welcome',
    track: null,
    type: 'welcome',
    speakers: [],
    description: 'QR pass check-in, delegate kits and the Centenary Partnership Booklet.',
  },
  {
    id: 'a2',
    time: '10:00 AM - 10:35 AM',
    title: 'Inaugural Session',
    session: 'Session I | Shatabdi',
    track: 'I',
    type: 'ceremony',
    speakers: ['Prof. Sukumar Mishra, Director, IIT (ISM) Dhanbad', 'Chief Guest [TBC]'],
    description:
      'Welcome address, ceremonial lamp lighting and release of the IIT (ISM) CSR Project Compendium.',
    venue: EVENT.venue,
  },
  {
    id: 'a3',
    time: '10:35 AM - 11:30 AM',
    title: 'Faculty Research Showcase: Mining Technology and Clean Energy',
    session: 'Session I | Shatabdi',
    track: 'I',
    type: 'showcase',
    speakers: ['Prof. V. M. S. R. Murthy', 'Prof. L. A. Kumaraswamidhas'],
    description:
      'Presentations on CSR-ready work in mine safety, critical mineral recovery and clean technology.',
    venue: EVENT.venue,
  },
  {
    id: 'a4',
    time: '11:30 AM - 11:45 AM',
    title: 'Tea and Networking',
    session: 'Break',
    track: null,
    type: 'break',
    speakers: [],
    description: 'Tea and networking.',
  },
  {
    id: 'a5',
    time: '11:45 AM - 01:00 PM',
    title: 'PSU and CSR Leadership Summit',
    session: 'Session II | Samriddhi',
    track: 'II',
    type: 'panel',
    speakers: ['Shri A. K. Singh [TBC]', 'CSR Head [TBC]'],
    description:
      'Panel discussion on community development, skilling and sustainable land reclamation in mining regions.',
    venue: EVENT.venue,
  },
  {
    id: 'a6',
    time: '01:00 PM - 02:00 PM',
    title: 'Networking Lunch and Project Exhibition',
    session: 'Break',
    track: null,
    type: 'break',
    speakers: [],
    description:
      'Project exhibition featuring 15+ CSR-ready projects, with faculty Principal Investigators available for discussion.',
  },
  {
    id: 'a7',
    time: '02:00 PM - 03:30 PM',
    title: 'LoI and MoU Exchange and Partnership Booklet Launch',
    session: 'Session II | Samriddhi',
    track: 'II',
    type: 'ceremony',
    speakers: [],
    description: 'Funding partners and IIT (ISM) research leads formalise their commitments.',
    venue: EVENT.venue,
  },
  {
    id: 'a8',
    time: '03:30 PM onwards',
    title: 'Vote of Thanks and High Tea',
    session: 'Closing',
    track: null,
    type: 'closing',
    speakers: [],
    description: 'Vote of thanks and high tea.',
  },
];

/* ------------------------------------------------------------------ */
/* Speakers                                                            */
/* ------------------------------------------------------------------ */

export const SPEAKERS_DATA: Speaker[] = [
  {
    id: 'sp1',
    name: 'Prof. Sukumar Mishra',
    title: 'Director',
    org: 'IIT (ISM) Dhanbad',
    category: 'Academia',
    photo: 'https://www.iitism.ac.in/storage/files/director2.jpg',
    bio: 'Prof. Sukumar Mishra is the Director of IIT (ISM) Dhanbad. He is a renowned academician and researcher in electrical engineering and power systems.',
    sessionTitle: 'Inaugural address',
  },
  {
    id: 'sp5',
    name: 'Chief Guest [TBC]',
    title: 'Ministry of Coal or Ministry of Mines',
    org: 'Government of India',
    category: 'Government',
    bio: 'The Chief Guest for the Centenary CSR Conclave will be announced once confirmed.',
    sessionTitle: 'Inaugural session',
  },
  {
    id: 'sp2',
    name: 'Prof. V. M. S. R. Murthy',
    title: 'Senior Professor',
    org: 'Department of Mining Engineering, IIT (ISM)',
    category: 'Academia',
    photo: 'https://www.iitism.ac.in/facultyImages/Prof.%20V%20M%20S%20R%20Murthy.jpg',
    bio: 'Lead inventor for patented self-indexing mechanisms in heavy mining machinery, with extensive expertise in mine mechanisation and safety.',
    sessionTitle: 'Faculty Research Showcase',
  },
  {
    id: 'sp3',
    name: 'Prof. L. A. Kumaraswamidhas',
    title: 'Professor',
    org: 'Department of Mechanical Engineering, IIT (ISM)',
    category: 'Academia',
    photo: 'https://www.iitism.ac.in/facultyImages/Dr%20L%20A%20Kumaraswamidhas.jpg',
    bio: 'Works on component lifecycle optimisation and sustainable mechanical design for heavy mining equipment.',
    sessionTitle: 'Faculty Research Showcase',
  },
  {
    id: 'sp4',
    name: 'Shri A. K. Singh [TBC]',
    title: 'Director (Technical or CSR)',
    org: 'Public Sector Undertaking',
    category: 'PSU',
    bio: 'A PSU leader overseeing regional CSR interventions in India’s mining belts. Details will be shared once confirmed.',
    sessionTitle: 'PSU and CSR Leadership Summit',
  },
  {
    id: 'sp6',
    name: 'CSR Head [TBC]',
    title: 'Head of CSR',
    org: 'Industry partner',
    category: 'Industry',
    bio: 'An industry CSR leader joining the Samriddhi panel. Details will be shared once confirmed.',
    sessionTitle: 'PSU and CSR Leadership Summit',
  },
];

/* ------------------------------------------------------------------ */
/* CSR projects                                                        */
/* ------------------------------------------------------------------ */

export const PROJECTS_DATA: CSRProject[] = [
  {
    id: 'prj-01',
    code: 'PRJ-01',
    title: 'Self-Indexing Pick Assembly for Excavators (Patented)',
    focusArea: 'Mine Safety',
    problemStatement:
      'A rotating pick-box mechanism designed to reduce downtime and lower hazard risk in heavy mining excavators.',
    budget: '₹45 lakh',
    beneficiaries: 'Mine workers and heavy machinery operators',
    scheduleVII: 'Item (i), preventive health care [confirm applicability]',
    piName: 'Prof. V. M. S. R. Murthy',
    dept: 'Mining Engineering',
  },
  {
    id: 'prj-02',
    code: 'PRJ-02',
    title: 'Community Solar Micro-Grids for Mining-Region Villages',
    focusArea: 'Clean Energy',
    problemStatement:
      'Off-grid hybrid solar units for remote settlements around coalfields, providing reliable clean power around the clock.',
    budget: '₹80 lakh',
    beneficiaries: '2,500+ tribal households',
    scheduleVII: 'Item (iv), environmental sustainability',
    piName: 'Prof. S. Chakrabarti',
    dept: 'Electrical Engineering',
  },
  {
    id: 'prj-03',
    code: 'PRJ-03',
    title: 'Mine Water Purification and Village Drinking Water Supply',
    focusArea: 'Water and Health',
    problemStatement:
      'Membrane filtration to treat discharged mine-sump water and provide safe drinking water to nearby villages, subject to applicable water-quality standards.',
    budget: '₹60 lakh',
    beneficiaries: '15,000 villagers',
    scheduleVII: 'Item (i), safe drinking water',
    piName: 'Prof. A. K. Samanta',
    dept: 'Chemical Engineering',
  },
  {
    id: 'prj-04',
    code: 'PRJ-04',
    title: 'Virtual Reality Simulator Lab for Heavy Machinery Skills',
    focusArea: 'Skilling',
    problemStatement:
      'Virtual-reality training hubs to prepare local youth for employment operating mining equipment.',
    budget: '₹1.2 crore',
    beneficiaries: '500 young people annually',
    scheduleVII: 'Item (ii), education and vocational skills',
    piName: 'Prof. R. Chattopadhyay',
    dept: 'Humanities and Management',
  },
];

/* ------------------------------------------------------------------ */
/* Sponsorship                                                         */
/* ------------------------------------------------------------------ */

export const SPONSOR_TIERS = [
  {
    name: 'Bronze',
    price: '₹[TBC] + GST',
    blurb: 'A visible presence among CSR leaders and PSU delegates.',
    highlights: ['Logo on the website and event backdrop', '2 delegate passes', 'Listing in the Partnership Booklet'],
    featured: false,
  },
  {
    name: 'Silver',
    price: '₹[TBC] + GST',
    blurb: 'A strong on-ground presence with a dedicated exhibition booth.',
    highlights: ['Exhibition booth at the Conclave', 'Standee and flyers in the delegate kit', '4 delegate passes'],
    featured: true,
  },
  {
    name: 'Gold',
    price: '₹[TBC] + GST',
    blurb: 'Title-level association with the Centenary CSR Conclave.',
    highlights: ['Title branding', 'Speaking slot in the Samriddhi session', 'Press mentions and 8 delegate passes'],
    featured: false,
  },
  {
    name: 'Platinum',
    price: '₹[TBC] + GST',
    blurb: 'The highest sponsorship tier, designed for strategic engagement and prominent visibility.',
    highlights: [
      'Premium logo placement across event materials',
      'Dedicated brand visibility at the venue',
      'Speaking or engagement opportunity',
      '8 delegate passes',
    ],
    featured: false,
  },
];

// Comparison table: feature → [Bronze, Silver, Gold, Platinum]
export const TIER_FEATURES: { feature: string; values: (boolean | string)[] }[] = [
  { feature: 'Logo on website and event backdrop', values: [true, true, true, true] },
  { feature: 'Delegate passes', values: ['2', '4', '8', '8'] },
  { feature: 'Partnership Booklet', values: ['Listing', 'Half page', 'Full page', '[TBC]'] },
  { feature: 'Exhibition booth', values: [false, true, false, false] },
  { feature: 'Standee and flyers in delegate kit', values: [false, true, false, false] },
  { feature: 'Speaking slot in Samriddhi session', values: [false, false, true, true] },
  { feature: 'Title branding and press mentions', values: [false, false, true, '[TBC]'] },
];

export const PARTNER_GROUPS = [
  { tier: 'Gold Partners', slots: 2 },
  { tier: 'Silver Partners', slots: 3 },
  { tier: 'Bronze and Knowledge Partners', slots: 5 },
];

/* ------------------------------------------------------------------ */
/* Venue, travel and stay                                              */
/* ------------------------------------------------------------------ */

export const TRAVEL = [
  {
    icon: 'train',
    title: 'By rail',
    desc: 'Dhanbad Junction (DHN) is about 3 km from campus, with train connections to Delhi, Kolkata and Mumbai.',
  },
  {
    icon: 'plane',
    title: 'By air',
    desc: 'The listed airports are Ranchi (about 140 km), Gaya (about 140 km) and Kolkata (about 260 km). Dhanbad can be reached by road from each.',
  },
  {
    icon: 'car',
    title: 'On arrival',
    desc: 'Pre-paid taxis and cab services are available from the railway station. A campus shuttle is planned for delegates on the day.',
  },
];

export const HOTELS = [
  { name: 'IIT (ISM) Guest House', note: 'On campus, with limited rooms for invited delegates.' },
  { name: 'Bank More and Hirapur', note: 'Partner hotels [TBC], a short drive from the venue.' },
  { name: 'Dhanbad city centre', note: 'About 10 to 15 minutes from campus by road.' },
];

/* ------------------------------------------------------------------ */
/* FAQ and downloads                                                   */
/* ------------------------------------------------------------------ */

export const FAQS = [
  {
    q: 'Who is the Conclave for?',
    a: 'CSR leaders, foundation heads, PSU officials, government representatives, industry leaders, and IIT (ISM) faculty and researchers.',
  },
  { q: 'Is there a registration fee?', a: '[TBC]' },
  {
    q: 'Can CSR funds support IIT (ISM) projects?',
    a: 'Schedule VII of the Companies Act, 2013 includes eligible CSR activities involving research and development and contributions to qualifying institutions. Please contact the Office of Corporate Relations to discuss a proposed partnership and confirm its compliance requirements.',
  },
  {
    q: 'How can my organisation fund a project or sponsor the event?',
    a: 'Write to csrconclave@iitism.ac.in. The Office of Corporate Relations will share project details and sponsorship options.',
  },
  {
    q: 'What is the dress code?',
    a: 'Business formals or Indian formals are recommended. Please carry a government-issued photo ID and your QR delegate pass.',
  },
  { q: 'Is parking available on campus?', a: '[TBC]' },
  {
    q: 'Where is the venue?',
    a: 'The Conclave is planned for Penman Auditorium, IIT (ISM) Dhanbad. Dhanbad Junction is about 3 km away. Please see the Venue, Travel and Stay section for information about airports and accommodation.',
  },
];

export const DOWNLOADS = [
  { label: 'Conclave Brochure', note: 'PDF · Coming soon' },
  { label: 'Partnership Booklet', note: 'PDF · Coming soon' },
  { label: 'Press Kit and Logos', note: 'ZIP · Coming soon' },
];

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const FOOTER_ABOUT =
  'Shatabdi Samriddhi 2026 celebrates a century of IIT (ISM) Dhanbad by building partnerships for education, innovation and societal impact.';
