import type { AgendaItem, CSRProject, Speaker } from '../types';

export const CENTENARY_MILESTONES = [
  {
    year: '1926',
    title: 'Founding of ISM',
    desc: 'Established by Lord Irwin as the Indian School of Mines to pioneer mineral and energy development.',
  },
  {
    year: '1957',
    title: 'Earth Sciences Expansion',
    desc: 'Introduced Petroleum Engineering and Applied Geophysics, expanding national industrial support.',
  },
  {
    year: '2016',
    title: 'IIT Status Accorded',
    desc: 'Formally integrated into the IIT ecosystem as Indian Institute of Technology (ISM) Dhanbad.',
  },
  {
    year: '2026',
    title: 'Centenary Conclave',
    desc: 'Celebrating 100 years of knowledge and launching "Shatabdi Samriddhi" for national impact.',
  },
];

export const ALUMNI_LEADERS = [
  {
    name: 'Dr. A. K. Singh',
    title: 'Ex-CMD, Coal India Ltd.',
    batch: 'Class of 1982',
  },
  {
    name: 'Smt. R. Mukherjee',
    title: 'Director (HR), ONGC',
    batch: 'Class of 1991',
  },
  {
    name: 'Rajesh Verma',
    title: 'VP, Tata Steel CSR Foundation',
    batch: 'Class of 1998',
  },
  {
    name: 'Dr. S. K. Roy',
    title: 'Advisor, Ministry of Mines',
    batch: 'Class of 1988',
  },
];

export const AGENDA_DATA: AgendaItem[] = [
  {
    id: 'a1',
    time: '09:00 AM - 10:00 AM',
    title: 'Delegate Registration & Centenary Networking Breakfast',
    session: 'Ceremony / Break',
    type: 'break',
    speakers: [],
    description:
      'Pass verification via QR scan, distribution of delegate kits and the Centenary Partnership Booklet.',
    venue: 'Main Auditorium Foyer',
  },
  {
    id: 'a2',
    time: '10:00 AM - 10:35 AM',
    title: 'Inaugural Session: Shatabdi Samriddhi Opening',
    session: 'Session I: Shatabdi',
    type: 'ceremony',
    speakers: [
      'Prof. Sukumar Mishra (Director, IIT ISM)',
      'Chief Guest (Ministry of Coal / Mines) [TBC]',
    ],
    description:
      'Welcome address, ceremonial lamp lighting, and official release of the IIT (ISM) CSR Project Compendium.',
    venue: 'Golden Jubilee Hall',
  },
  {
    id: 'a3',
    time: '10:35 AM - 11:30 AM',
    title: 'Faculty Research Showcase: Mining Tech & Clean Energy',
    session: 'Session I: Shatabdi',
    type: 'showcase',
    speakers: ['Prof. V.M.S.R. Murthy', 'Prof. L.A. Kumaraswamidhas'],
    description:
      'Presentations on high-impact CSR-ready technologies in mine safety, critical mineral recovery, and clean tech.',
    venue: 'Golden Jubilee Hall',
  },
  {
    id: 'a4',
    time: '11:45 AM - 01:00 PM',
    title: 'Session II: PSU & CSR Leadership Summit',
    session: 'Session II: Samriddhi',
    type: 'panel',
    speakers: ['CSR Heads (Coal India, NTPC, ONGC, Tata Steel) [TBC]'],
    description:
      'Panel discussion on regional community development, skilling initiatives, and sustainable land reclamation.',
    venue: 'Golden Jubilee Hall',
  },
  {
    id: 'a5',
    time: '01:00 PM - 02:00 PM',
    title: 'Networking Lunch & CSR Project Pitch Exhibition',
    session: 'Ceremony / Break',
    type: 'break',
    speakers: [],
    description:
      'Interactive exhibition stalls featuring 15+ CSR-ready research projects and direct interaction with faculty PIs.',
    venue: 'Executive Dining Hall',
  },
  {
    id: 'a6',
    time: '02:00 PM - 03:30 PM',
    title: 'LoI / MoU Exchange Ceremony & Partnership Booklet Launch',
    session: 'Session II: Samriddhi',
    type: 'ceremony',
    speakers: ['Corporate Relations Team', 'Industry & PSU Signatories'],
    description:
      'Formal exchange of Letters of Intent and MoUs between funding partners and IIT (ISM) research leads.',
    venue: 'Golden Jubilee Hall',
  },
];

export const SPEAKERS_DATA: Speaker[] = [
  {
    id: 'sp1',
    name: 'Prof. Sukumar Mishra',
    title: 'Director',
    org: 'IIT (ISM) Dhanbad',
    category: 'Academia',
    bio: 'Prof. Sukumar Mishra is the Director of IIT (ISM) Dhanbad. He is a renowned academician and researcher in electrical engineering and power systems.',
    sessionTitle: 'Inaugural Address: Shatabdi Samriddhi',
  },
  {
    id: 'sp2',
    name: 'Prof. V.M.S.R. Murthy',
    title: 'Senior Faculty & Patentee',
    org: 'Dept. of Mining Engineering, IIT (ISM)',
    category: 'Academia',
    bio: 'Lead inventor for patented self-indexing mechanisms in heavy mining machinery with extensive expertise in mine mechanization and safety.',
    sessionTitle: 'Faculty Research Showcase',
  },
  {
    id: 'sp3',
    name: 'Prof. L.A. Kumaraswamidhas',
    title: 'Professor & Lead Researcher',
    org: 'Dept. of Mechanical Engineering, IIT (ISM)',
    category: 'Academia',
    bio: 'Pioneer in continuous excavator component lifecycle optimization and sustainable mechanical design for heavy mining equipment.',
    sessionTitle: 'Faculty Research Showcase',
  },
  {
    id: 'sp4',
    name: 'Shri A. K. Singh [TBC]',
    title: 'Director (Technical / CSR)',
    org: 'Major Public Sector Undertaking (PSU)',
    category: 'PSU',
    bio: 'Experienced PSU executive overseeing multi-crore regional CSR interventions in mining belts across Jharkhand and Odisha.',
    sessionTitle: 'Session II: PSU Summit',
  },
  {
    id: 'sp5',
    name: 'Chief Guest [TBC]',
    title: 'Ministry of Coal / Ministry of Mines',
    org: 'Government of India',
    category: 'Chief Guest',
    bio: 'The Chief Guest for the centenary CSR Conclave will be announced shortly.',
    sessionTitle: 'Inaugural Session',
  },
  {
    id: 'sp6',
    name: 'CSR Head [TBC]',
    title: 'Head – Corporate Social Responsibility',
    org: 'Leading Industry Partner',
    category: 'Industry',
    bio: 'An industry CSR leader joining the Samriddhi panel on community development in mining regions.',
    sessionTitle: 'Session II: PSU & CSR Leadership Summit',
  },
];

export const PROJECTS_DATA: CSRProject[] = [
  {
    id: 'prj-01',
    title: 'Self-Indexing Pick Assembly for Excavators (Patented)',
    focusArea: 'Mine Safety',
    problemStatement:
      'Reduces downtime and hazard risk in heavy mining excavator pick box assemblies through self-indexing rotational mechanics.',
    budget: '₹ 45 Lakhs',
    beneficiaries: 'Mining Workers & Heavy Machinery Operators',
    scheduleVII: 'Item (i) Promoting healthcare & workplace safety',
    piName: 'Prof. V.M.S.R. Murthy',
    dept: 'Mining Engineering',
  },
  {
    id: 'prj-02',
    title: 'Community Solar Micro-Grids for Mining Region Villages',
    focusArea: 'Clean Energy',
    problemStatement:
      'Deploying off-grid hybrid solar units in remote rural habitations surrounding coal fields to guarantee 24x7 clean power.',
    budget: '₹ 80 Lakhs',
    beneficiaries: '2,500+ Tribal Households',
    scheduleVII: 'Item (iv) Ensuring environmental sustainability',
    piName: 'Prof. S. Chakrabarti',
    dept: 'Electrical Engineering',
  },
  {
    id: 'prj-03',
    title: 'Mine Water Purification & Regional Potable Supply Unit',
    focusArea: 'Water & Health',
    problemStatement:
      'Advanced membrane filtration treatment converting discharged mine sump water into safe, WHO-compliant drinking water.',
    budget: '₹ 60 Lakhs',
    beneficiaries: '15,000 Local Villagers',
    scheduleVII:
      'Item (i) Eradicating hunger, poverty and safe drinking water',
    piName: 'Prof. A. K. Samanta',
    dept: 'Environmental Science',
  },
  {
    id: 'prj-04',
    title: 'Heavy Machinery Skilling & VR Simulator Lab for Youth',
    focusArea: 'Skilling',
    problemStatement:
      'Establishing virtual reality simulator training hubs to skill local unemployed youth for high-paying mining equipment operations.',
    budget: '₹ 1.2 Crores',
    beneficiaries: '500 Youth Annually',
    scheduleVII: 'Item (ii) Promoting education and vocational skills',
    piName: 'Prof. R. Chattopadhyay',
    dept: 'Humanities & Management',
  },
];

export const FAQS = [
  {
    q: 'Is there a dress code?',
    a: 'Business formals or Indian formals. Please carry a government photo ID along with your QR delegate pass.',
  },
  {
    q: 'Is parking available on campus?',
    a: 'Yes, delegate parking is available near the Golden Jubilee Hall. Volunteers will guide you from the main gate.',
  },
  {
    q: 'Who should attend the CSR Conclave 2026?',
    a: 'CSR Heads, Foundation Leads, PSU Executives, Government Officials, Industry Leaders, and IIT (ISM) Faculty / Researchers.',
  },
  {
    q: 'Is there a registration fee for invited delegates?',
    a: 'Registration is complimentary for invited corporate heads, PSU leaders, and faculty upon approval.',
  },
  {
    q: 'How can our company express interest in funding a project or sponsoring?',
    a: 'You can use the "Express Interest" button on any project card or submit the Sponsorship Enquiry form directly on this portal.',
  },
  {
    q: 'Where is the venue and how do I reach IIT (ISM) Dhanbad?',
    a: 'The conclave takes place at the Golden Jubilee Hall, IIT (ISM) Campus, Dhanbad. Dhanbad Junction is 3 km away; nearest airports are Ranchi (140 km), Gaya (140 km), and Kolkata (260 km).',
  },
];
/* ------------------------------------------------------------------ */
/* Event constants                                                    */
/* ------------------------------------------------------------------ */

export const EVENT = {
  name: 'Shatabdi Samriddhi 2026',
  subtitle: 'CSR Conclave',
  tagline:
    'Celebrating a Century of IIT (ISM) Dhanbad by Building Partnerships for Education, Innovation and Societal Impact.',
  dateLabel: 'Friday, 4 December 2026',
  shortDate: '04 · 12 · 2026',
  start: '2026-12-04T09:00:00+05:30',
  end: '2026-12-04T15:30:00+05:30',
  venue: 'Golden Jubilee Hall, IIT (ISM) Dhanbad',
  city: 'Dhanbad, Jharkhand',
  presenter: 'Office of Corporate Relations, IIT (ISM) Dhanbad',
  email: 'csrconclave@iitism.ac.in',
  phone: '+91 326 223 5000',
};

export const STATS = [
  { value: 100, suffix: '', label: 'Years of IIT (ISM)' },
  { value: 300, suffix: '+', label: 'Delegates expected' },
  { value: 15, suffix: '+', label: 'CSR-ready projects' },
  { value: 2, suffix: '', label: 'Flagship sessions' },
];

export const WHY_ATTEND = [
  {
    icon: 'flask',
    title: 'Research & Innovation',
    desc: 'See a century of mining, energy and earth-science expertise turned into deployable technology.',
  },
  {
    icon: 'hand',
    title: 'CSR Opportunities',
    desc: 'Discover vetted, Schedule VII-aligned projects with clear budgets, beneficiaries and PIs.',
  },
  {
    icon: 'handshake',
    title: 'Strategic Partnerships',
    desc: 'Meet PSU leaders, CSR heads and faculty in one room — and leave with LoIs and MoUs.',
  },
  {
    icon: 'sprout',
    title: 'Measurable Impact',
    desc: 'Fund outcomes in mining regions: clean water, safety, skilling, energy and land reclamation.',
  },
];

export const SESSIONS = [
  {
    numeral: 'I',
    name: 'Shatabdi',
    title: 'A Century of Knowledge',
    focus: 'IIT (ISM) research, technology and legacy',
    points: [
      'Centenary journey of the institute',
      'Faculty research showcase — mining, energy, critical minerals, clean tech',
      'Alumni leadership addresses',
    ],
  },
  {
    numeral: 'II',
    name: 'Samriddhi',
    title: 'A Future of Shared Prosperity',
    focus: 'PSU and CSR summit',
    points: [
      'PSU leadership session and CSR-ready project pitches',
      'Community development in mining regions & skilling',
      'LoI / MoU exchanges and partnership booklet launch',
    ],
  },
];

export const SPONSOR_TIERS = [
  {
    name: 'Bronze',
    price: '₹ [TBC] + GST',
    blurb: 'A visible presence among CSR leaders and PSU delegates.',
    highlights: ['Logo on website & backdrop', '2 delegate passes', 'Mention in partnership booklet'],
    featured: false,
  },
  {
    name: 'Silver',
    price: '₹ [TBC] + GST',
    blurb: 'Showcase your CSR work with a booth and on-ground branding.',
    highlights: ['Exhibition booth', 'Standee & flyers in delegate kit', '4 delegate passes'],
    featured: true,
  },
  {
    name: 'Gold',
    price: '₹ [TBC] + GST',
    blurb: 'Title-level association with the centenary CSR Conclave.',
    highlights: ['Title branding', 'Speaking slot in Samriddhi session', 'Press mentions & 8 passes'],
    featured: false,
  },
];

// Comparison table: feature → [Bronze, Silver, Gold]
export const TIER_FEATURES: { feature: string; values: (boolean | string)[] }[] = [
  { feature: 'Logo on website & event backdrop', values: [true, true, true] },
  { feature: 'Delegate passes', values: ['2', '4', '8'] },
  { feature: 'Partnership booklet listing', values: ['Listing', 'Half page', 'Full page'] },
  { feature: 'Exhibition booth', values: [false, true, true] },
  { feature: 'Standee & flyers in delegate kit', values: [false, true, true] },
  { feature: 'Speaking slot (Samriddhi session)', values: [false, false, true] },
  { feature: 'Title branding & press mentions', values: [false, false, true] },
];

export const PARTNER_GROUPS = [
  { tier: 'Gold Partners', slots: 2 },
  { tier: 'Silver Partners', slots: 3 },
  { tier: 'Bronze & Knowledge Partners', slots: 5 },
];

export const TRAVEL = [
  { icon: 'train', title: 'By Rail', desc: 'Dhanbad Junction (DHN) — ~3 km from campus; well connected to Delhi, Kolkata and Mumbai.' },
  { icon: 'plane', title: 'By Air', desc: 'Ranchi (≈140 km) · Gaya (≈140 km) · Kolkata (≈260 km). Road transfer to Dhanbad.' },
  { icon: 'car', title: 'Local Transport', desc: 'Pre-paid taxis and app cabs from the station; campus shuttle for delegates on the day.' },
];

export const HOTELS = [
  { name: 'IIT (ISM) Guest House', note: 'On campus · limited rooms for invited delegates' },
  { name: 'Hotel options in Bank More / Hirapur', note: '3–5 partner hotels [TBC]' },
  { name: 'Dhanbad city centre', note: '10–15 min drive to venue' },
];

export const DOWNLOADS = [
  { label: 'Conclave Brochure', note: 'PDF · coming soon' },
  { label: 'Partnership Booklet', note: 'PDF · coming soon' },
  { label: 'Press Kit & Logos', note: 'ZIP · coming soon' },
];
