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
  nameHindi: 'शताब्दी समृद्धि',
  subtitle: 'CSR Conclave',
  eyebrow: 'IIT (ISM) Dhanbad | Centenary Year 1926–2026',
  tagline:
    'Celebrating a century of IIT (ISM) Dhanbad by building partnerships for education, innovation and societal impact.',
  dateLabel: 'Friday, 4 December 2026',
  timeLabel: '10:00 AM IST',
  shortDate: '04 · 12 · 2026',
  start: '2026-12-04T10:00:00+05:30',
  end: '2026-12-04T17:00:00+05:30',
  venueName: 'Penman Auditorium',
  venue: 'Penman Auditorium, IIT (ISM) Dhanbad',
  city: 'Dhanbad, Jharkhand 826004',
  presenter: 'Office of Alumni Affairs Cell / Public Relations Cell, IIT(ISM)',
  address: 'Administrative Block, 1st Floor,Office of Alumni Affairs Cell / Public Relations Cell, IIT (ISM) Dhanbad, Jharkhand 826004',
  contactPerson: 'Ms. Shrishti Shankar',
  email: 'centenary@iitism.ac.in',
  phone: '+91 77639 74506',
  website: 'https://www.iitism.ac.in',
  mapsQuery: 'Penman Auditorium, IIT (ISM) Dhanbad',
};

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const STATS = [
  { value: 100, suffix: '', label: 'Years of IIT (ISM) Dhanbad' },
  { value: 100, suffix: '+', label: 'Delegates expected' }
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const ABOUT = {
  paragraphs: [
    'Established in 1926 as the Indian School of Mines, Dhanbad, IIT (ISM) has spent a century advancing knowledge, fostering innovation, and contributing to India’s growth. As the Institute marks its centenary, it invites India’s corporate and public sector leaders to build on this legacy through meaningful CSR partnerships.',
    'Shatabdi Samriddhi 2026 brings together CSR leaders, PSU representatives, government officials, and distinguished academicians on a common platform to explore opportunities for collaboration. Drawing upon IIT (ISM)’s expertise in mining, earth sciences, energy, and allied disciplines, the conclave aims to connect institutional research and innovation with industry priorities and pressing societal needs.',
    'More than a gathering of stakeholders, it is a platform to translate dialogue into partnerships, research into actionable solutions, and shared commitments into measurable, lasting impact for communities and the nation.',
  ],
  pillars: ['Education', 'Innovation', 'Societal Impact'],
  captionYears: '1926–2026',
  caption: 'A century of nation-building from Dhanbad',
  video: '/campus-drone.mp4',
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
    icon: 'handshake',
    title: 'Synergising Industry and Academia',
    desc: 'Establishing enduring partnerships between corporate organisations and IIT (ISM) Dhanbad to advance collaborative research, strengthen academic infrastructure, and translate institutional expertise into innovative solutions for real-world challenges.',
  },
  {
    icon: 'sprout',
    title: 'Advancing the Green and Clean Energy Transition',
    desc: 'Leveraging IIT (ISM) Dhanbad’s expertise in mining, minerals and energy to promote sustainable technologies, encourage responsible resource utilisation, and accelerate India’s transition towards a cleaner, more resilient energy future.',
  },
  {
    icon: 'flask',
    title: 'Fostering Innovation and Social Impact',
    desc: 'Mobilising CSR partnerships to expand educational opportunities, empower emerging talent through scholarships and fellowships, support transformative research, and advance impactful initiatives that create lasting value for communities.',
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
    photo: '/speakers/sukumar-mishra.jpg',
    bio: 'As IIT (ISM) Dhanbad celebrates a century of excellence, Shatabdi Samriddhi 2026 – CSR Conclave offers an opportunity to build meaningful partnerships between industry and academia. By fostering collaboration in education, research, innovation and social development, we aim to translate our institutional strengths into lasting societal impact.',
    sessionTitle: 'Inaugural Session',
  },
  {
    id: 'sp2',
    name: 'Prof. Rajeev Upadhyay',
    title: 'Dean, Alumni Affairs',
    org: 'IIT (ISM) Dhanbad',
    category: 'Academia',
    photo: '/speakers/rajeev-upadhyay.jpg',
    bio: 'Shatabdi Samriddhi 2026 – CSR Conclave seeks to transform corporate commitment into meaningful social impact through collaboration between industry and academia. By promoting clean energy, sustainable infrastructure, research, scholarships and student welfare, the Conclave aims to create lasting value for society.',
    sessionTitle: 'Welcome Address & Institutional Overview',
  },
  {
    id: 'sp3',
    name: 'Prof. Alok Kumar Das',
    title: 'Dean, Innovation & Corporate Relations',
    org: 'IIT (ISM) Dhanbad',
    category: 'Academia',
    photo: '/speakers/alok-kumar-das.jpg',
    bio: 'Shatabdi Samriddhi 2026 – CSR Conclave provides a platform to strengthen industry–academia partnerships and translate innovative ideas into impactful solutions. By connecting corporate expertise with institutional research, technological innovation and entrepreneurial talent, we aim to address pressing societal challenges and promote sustainable development.',
    sessionTitle: 'Industry–Academia Connect',
  },
  {
    id: 'sp4',
    name: 'CMD [TBC]',
    title: 'Chairman-cum-Managing Director',
    org: 'Bharat Coking Coal Limited (BCCL)',
    category: 'PSU',
    bio: 'Details will be shared once confirmed.',
    sessionTitle: 'Addresses by Guest Speakers & Industry Leaders',
  },
  {
    id: 'sp5',
    name: 'Speaker [TBC]',
    title: 'Senior Leadership',
    org: 'Oil India Limited',
    category: 'PSU',
    bio: 'Details will be shared once confirmed.',
    sessionTitle: 'Addresses by Guest Speakers & Industry Leaders',
  },
  {
    id: 'sp6',
    name: 'Speaker [TBC]',
    title: 'Senior Leadership',
    org: 'NTPC Limited',
    category: 'PSU',
    bio: 'Details will be shared once confirmed.',
    sessionTitle: 'Addresses by Guest Speakers & Industry Leaders',
  },
];

export const LEADERSHIP_MESSAGES = [
  {
    name: 'Prof. Sukumar Mishra',
    role: 'Director, IIT (ISM) Dhanbad',
    photo: '/speakers/sukumar-mishra.jpg',
    message: [
      'As IIT (ISM) Dhanbad celebrates a century of excellence, Shatabdi Samriddhi 2026 – CSR Conclave offers an opportunity to build meaningful partnerships between industry and academia. By fostering collaboration in education, research, innovation and social development, we aim to translate our institutional strengths into lasting societal impact.',
      'As we embark on our next century, we invite our corporate partners and stakeholders to join us in building a more sustainable and inclusive future.',
    ],
  },
  {
    name: 'Prof. Rajeev Upadhyay',
    role: 'Dean, Alumni Affairs, IIT (ISM) Dhanbad',
    photo: '/speakers/rajeev-upadhyay.jpg',
    message: [
      'Shatabdi Samriddhi 2026 – CSR Conclave seeks to transform corporate commitment into meaningful social impact through collaboration between industry and academia. By promoting clean energy, sustainable infrastructure, research, scholarships and student welfare, the Conclave aims to create lasting value for society.',
      'Together, we can empower future generations and advance inclusive and sustainable national development.',
    ],
  },
  {
    name: 'Prof. Alok Kumar Das',
    role: 'Dean, Innovation & Corporate Relations, IIT (ISM) Dhanbad',
    photo: '/speakers/alok-kumar-das.jpg',
    message: [
      'Shatabdi Samriddhi 2026 – CSR Conclave provides a platform to strengthen industry–academia partnerships and translate innovative ideas into impactful solutions. By connecting corporate expertise with institutional research, technological innovation and entrepreneurial talent, we aim to address pressing societal challenges and promote sustainable development.',
      'Through collaborative initiatives, we aspire to build enduring partnerships that create shared value for industry, the Institute and society.',
    ],
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
    name: 'Silver',
    price: '₹[TBC] + GST',
    blurb: 'Supporting Partner of the CSR Conclave.',
    highlights: [
      'Recognition as a Supporting Partner',
      'Small logo on the website, brochures and sponsor displays',
      'Standard listing on standees, banners and promotional displays',
      'Dedicated campaign on all official social media platforms',
      'Certificate presented by institute leadership',
    ],
    featured: false,
  },
  {
    name: 'Gold',
    price: '₹[TBC] + GST',
    blurb: 'Gold Partner of the CSR Conclave.',
    highlights: [
      'Recognition as a Gold Partner',
      'Medium logo on the website, brochures and sponsor displays',
      'Prominent listing on standees, banners and promotional displays',
      'Dedicated campaign on all official social media platforms',
      'Certificate presented by institute leadership',
    ],
    featured: false,
  },
  {
    name: 'Diamond',
    price: '₹[TBC] + GST',
    blurb: 'Principal Partner of the CSR Conclave.',
    highlights: [
      'Recognition as the Principal Partner',
      'Large logo on the backdrop, invitations, website and digital promotions',
      'Very prominent visibility on banners and standees, second only to Platinum',
      'Dedicated exhibition stall',
      'Dedicated campaign on all official social media platforms',
      'Memento presented by institute leadership',
    ],
    featured: false,
  },
  {
    name: 'Platinum',
    price: '₹[TBC] + GST',
    blurb: 'Title / Presenting Partner of the CSR Conclave.',
    highlights: [
      'Recognition as the Title / Presenting Partner',
      'Largest logo on the backdrop, website and digital promotions',
      'Highest visibility on banners, standees and promotional displays',
      'Dedicated exhibition stall',
      'Dedicated campaign on all official social media platforms',
      'Memento presented by institute leadership',
    ],
    featured: false,
  },
];

// Comparison table: feature → [Silver, Gold, Diamond, Platinum]
export const TIER_FEATURES: { feature: string; values: (boolean | string)[] }[] = [
  { feature: 'Recognition level', values: ['Supporting Partner', 'Gold Partner', 'Principal Partner', 'Title / Presenting Partner'] },
  { feature: 'Logo on website', values: ['Small', 'Medium', 'Large', 'Title Sponsor (largest)'] },
  { feature: 'Standees and banners', values: ['Standard listing', 'Prominent', 'Very prominent', 'Highest prominence'] },
  { feature: 'Exhibition stall', values: [false, false, true, true] },
  { feature: 'Dedicated social media campaign', values: [true, true, true, true] },
  { feature: 'Felicitation', values: ['Certificate', 'Certificate', 'Memento', 'Memento'] },
];

// Extra CSR partnership options, shown below the cards for Platinum sponsors
export const PLATINUM_EXTRAS = [
  { title: 'Clean & Green Energy Partner', desc: 'Clean energy, green hydrogen, renewable integration, energy storage and decarbonisation.' },
  { title: 'Research & Innovation Partner', desc: 'Sponsored research, laboratory development, technology transfer and incubated startups.' },
  { title: 'Education & Student Welfare Partner', desc: 'Scholarships, fellowships, educational access and career development.' },
  { title: 'Community Development Partner', desc: 'Skill training, healthcare outreach, rural development and environmental restoration.' },
];

// size = Tailwind classes for each logo box in that row
export const PARTNER_GROUPS = [
  { tier: 'Platinum Partners', slots: 1, size: 'h-32 w-72' },
  { tier: 'Diamond Partners', slots: 2, size: 'h-28 w-64' },
  { tier: 'Gold Partners', slots: 3, size: 'h-24 w-52' },
  { tier: 'Silver and Knowledge Partners', slots: 5, size: 'h-20 w-40' },
];

/* ------------------------------------------------------------------ */
/* Venue, travel                                             */
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
    a: 'Schedule VII of the Companies Act, 2013 includes eligible CSR activities involving research and development and contributions to qualifying institutions. Please contact the Office of Alumni Affairs to discuss a proposed partnership and confirm its compliance requirements.',
  },
  {
    q: 'How can my organisation fund a project or sponsor the event?',
    a: 'Write to centenary@iitism.ac.in. The Office of Alumni Affairs will share project details and sponsorship options.',
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

// export const DOWNLOADS = [
//   { label: 'Conclave Brochure', note: 'PDF | Coming soon' },
//   { label: 'Partnership Booklet', note: 'PDF | Coming soon' },
//   { label: 'Press Kit and Logos', note: 'ZIP | Coming soon' },
// ];

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const FOOTER_ABOUT =
  'Shatabdi Samriddhi 2026 celebrates a century of IIT (ISM) Dhanbad by building partnerships for education, innovation and societal impact.';
