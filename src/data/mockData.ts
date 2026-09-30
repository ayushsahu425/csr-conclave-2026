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
    desc: 'Celebrating 100 years of knowledge and launching "Shatabdi Se Samriddhi" for national impact.',
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
    title: 'Inaugural Session: Shatabdi Se Samriddhi Opening',
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
    photo:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    bio: 'Prof. Sukumar Mishra is the Director of IIT (ISM) Dhanbad. He is a renowned academician and researcher in electrical engineering and power systems.',
    sessionTitle: 'Inaugural Address: Shatabdi Se Samriddhi',
  },
  {
    id: 'sp2',
    name: 'Prof. V.M.S.R. Murthy',
    title: 'Senior Faculty & Patentee',
    org: 'Dept. of Mining Engineering, IIT (ISM)',
    category: 'Academia',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bio: 'Lead inventor for patented self-indexing mechanisms in heavy mining machinery with extensive expertise in mine mechanization and safety.',
    sessionTitle: 'Faculty Research Showcase',
  },
  {
    id: 'sp3',
    name: 'Prof. L.A. Kumaraswamidhas',
    title: 'Professor & Lead Researcher',
    org: 'Dept. of Mechanical Engineering, IIT (ISM)',
    category: 'Academia',
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    bio: 'Pioneer in continuous excavator component lifecycle optimization and sustainable mechanical design for heavy mining equipment.',
    sessionTitle: 'Faculty Research Showcase',
  },
  {
    id: 'sp4',
    name: 'Shri A. K. Singh [TBC]',
    title: 'Director (Technical / CSR)',
    org: 'Major Public Sector Undertaking (PSU)',
    category: 'PSU',
    photo:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    bio: 'Experienced PSU executive overseeing multi-crore regional CSR interventions in mining belts across Jharkhand and Odisha.',
    sessionTitle: 'Session II: PSU Summit',
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