
import { useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Camera } from 'lucide-react';

type TeamMember = {
  name: string;
  branch: string;
  description: string;
  photo?: string;
};

type TeamDepartment = {
  id: string;
  number: string;
  name: string;
  description: string;
  members: TeamMember[];
};

const TEAM_DEPARTMENTS: TeamDepartment[] = [
  {
    id: 'design',
    number: '01',
    name: 'Design',
    description:
      'Creating the visual identity and creative experience of the Conclave.',
    members: [
      {
        name: 'Aryan Sharma',
        branch: 'Department Of Applied Geophysics · Int. M.Tech Pre-Final Year',
        description:
          'A creative and enthusiastic member of the Design Team with an interest in visual creativity and professional design. He enjoys exploring new ideas, experimenting with design tools, and contributing to the visual identity of CSR Conclave 2026.',
        photo: '/team/aryan.webp',
      },
      {
        name: 'Navneet Patel',
        branch: 'Department Of Petroleum Engineering · B.Tech, Pre-Final Year',
        description:
          'A pre-final-year Petroleum Engineering student at IIT (ISM) Dhanbad and Design Head at SAAC. He enjoys exploring creative ideas, designing engaging visuals, and bringing fresh perspectives to collaborative projects.',
        photo: '/team/navneet.webp',
      },
      {
         name: 'Siddhi Sen',
         branch: 'Department Of Mining Engineering · B.Tech, Pre-Final Year',
         description:
           'A third-year Mining Engineering student at IIT (ISM) Dhanbad and Design Co-Head at SAAC. Passionate about design, creativity, and visual storytelling, she brings fresh ideas and a collaborative approach to creating meaningful designs.',
        photo: '/team/siddhi.webp',
       },
        {
         name: 'Ritik Kumar',
         branch: 'Department Of Engineering Physics · B.Tech, Pre-Final Year',
         description:
           'A third-year Mining Engineering student at IIT (ISM) Dhanbad and Design Co-Head at SAAC. Passionate about design, creativity, and visual storytelling, she brings fresh ideas and a collaborative approach to creating meaningful designs.',
        photo: '/team/ritik.webp',
       },
    ],
  },
  {
    id: 'outreach',
    number: '03',
    name: 'Outreach',
    description:
      'Connecting with institutions, organisations and potential partners.',
    members: [
      {
        name: 'Vishal Kannaujiya',
        branch: 'Department Of Mathematics & Computing · B.Tech, Pre-Final Year',
        description:
          'A third-year Mathematics and Computing student passionate about entrepreneurship, innovation, and social impact. Interested in team leadership, operations, and building strategic partnerships through outreach and collaboration.',
           photo: '/team/vishal.webp',
        },
        
        {
         name: 'Priyotosh Mazumder',
         branch: 'Department Of Management Studies and Industrial Engineering · MBA, First Year',
         description:
           'A first-year MBA student at IIT (ISM) Dhanbad with nearly two years of corporate experience at Tech Mahindra and Genpact. Recognised among InsideIIM’s 50 Most Promising MBA Students of 2026, he is passionate about product management, strategy, and innovation.',
        photo: '/team/priyotosh.webp',
        },
      {
        name: 'Muqseet Ahmed Bandukwala',
        branch: 'Department Of Petroleum Engineering · B.Tech, Pre-Final Year',
        description:
          'A Petroleum Engineering student at IIT (ISM) Dhanbad and a first-in-India finisher at PetroCup. He brings experience in event organisation and team coordination to the CSR Outreach Team, where he connects with companies and industry leaders to build partnerships and encourage meaningful CSR collaborations.',
        photo: '/team/muqseet.webp',
      },
      {
        name: 'K Vijaya Lakshmi',
        branch: 'Department Of Management Studies and Industrial Engineering · MBA, Second Year',
        description:
          'A second-year MBA student at IIT (ISM) Dhanbad with a passion for corporate relations and strategic networking. As part of the Corporate Outreach Team, she focuses on building industry partnerships and fostering meaningful collaborations for CSR Conclave 2026.',
        photo: '/team/Vijaya%20(1).webp',
      },
      {
        name: 'Abhinav Anand',
        branch: 'Department Of Management Studies and Industrial Engineering · MBA, First Year',
        description:
          'A first-year MBA student at IIT (ISM) Dhanbad with a keen interest in marketing, corporate partnerships, and social impact. As a member of the CSR Conclave Outreach Team, he focuses on connecting with corporate leaders, building strategic collaborations, and facilitating meaningful delegate engagement.',
        photo: '/team/abhinav.webp',
      },
       {
        name: 'Anshu Mishra',
        branch: 'MTECH IEM · M.Tech, First Year',
        description:
          'A first-year MBA student in Industrial Engineering and Management with an interest in corporate relations, strategic partnerships, and social impact. Brings strong communication, negotiation, and relationship-building skills to the team.',
        photo: '/team/anshu.webp',
      },
    ],
  },
  {
    id: 'web-dev',
    number: '04',
    name: 'Web Development',
    description:
      'Building and maintaining the digital experience of the Conclave.',
    members: [
      {
        name: 'Ayush Sahu',
        branch: 'Department Of Management Studies and Industrial Engineering ·MBA Business Analytics, First Year',
        description:
          'First-year MBA (Business Analytics) student at IIT (ISM) Dhanbad with a background in AI and Machine Learning. Experienced in delivering 40+ web development projects, with skills in full-stack development, technical SEO, and business automation.',
        photo: '/team/ayush.webp',
      },
      {
        name: 'Dipak Gupta',
        branch: 'Department Of Mining Engineering · B.Tech, Pre-Final Year',
        description:
          'A third-year Mining Engineering student at IIT (ISM) Dhanbad with a passion for technology and web development. As a member of the Web Development Team, he contributes his technical skills to building and maintaining the digital experience of CSR Conclave 2026.',
        photo: '/team/dipak.webp',
      },
      {
        name: 'Shreshth Lohiya',
        branch: 'Department Of Mining Engineering · B.Tech, Pre-Final Year',
        description:
          'A dedicated and enthusiastic Mining Engineering student at IIT (ISM) Dhanbad with an interest in learning, teamwork, and creative problem-solving. He aims to contribute to CSR Conclave 2026 through his creativity, technical skills, and collaborative approach.',
        photo: '/team/Shreshth%20Lohiya%20(1).webp',
      },
    ],
  },
  {
    id: 'content',
    number: '05',
    name: 'Content',
    description:
      'Shaping the Conclave story through content and communication.',
    members: [
      {
        name: 'Nehal Agarwal',
        branch: 'Department Of Electronics and Communication · B.Tech, Pre-Final Year',
        description:
          'A passionate communicator with a keen interest in content creation, storytelling, and creative expression. As a member of the Content Team for Shatabdi Samriddhi 2026, she contributes to crafting engaging content that reflects the vision of the Conclave and communicates its purpose effectively.',
        photo: '/team/nehal.webp',
      },
      {
        name: 'Pragati Kumari',
        branch: 'Department Of Mechanical Engineering · B.Tech, Final Year',
        description:
          'A final-year Mechanical Engineering student at IIT (ISM) Dhanbad with a passion for content creation, creative writing, and effective communication. As the Content Team Head, she focuses on crafting engaging narratives and meaningful content that highlight CSR initiatives and their social impact. She believes in the power of storytelling to inspire positive change.',
        photo: '/team/pragati.webp',
      },
      {
        name: 'Anchal Bharti',
        branch: 'Department Of Chemical Engineering · B.Tech, Final Year',
        description:
          'A final-year Chemical Engineering student at IIT (ISM) Dhanbad with an interest in creative writing, communication, and storytelling. As a member of the CSR Conclave Content Team, she believes in the power of collaboration and thoughtful communication to bring diverse perspectives together and create meaningful social impact.',
        },
    ],
  },
  {
    id: 'hospitality',
    number: '06',
    name: 'Hospitality',
    description:
      'Ensuring a welcoming and comfortable experience for every guest.',
    members: [
      {
        name: 'Hemant Raj Rana',
        branch: 'Department Of Petroleum Engineering · B.Tech, Pre-Final Year',
        description:
          'A third-year Petroleum Engineering student at IIT (ISM) Dhanbad with a keen interest in leadership, teamwork, and event management. As a member of the Hospitality Team, he contributes to creating a warm, welcoming, and memorable experience for guests at CSR Conclave 2026.',
        photo: '/team/hemant.webp',
      },
      {
        name: 'Hemya Sri',
        branch: 'Department Of Mechanical Engineering · B.Tech, Pre-Final Year',
        description:
          'A Mechanical Engineering student at IIT (ISM) Dhanbad with an interest in teamwork, event management, and learning new skills. As a member of the CSR Conclave Hospitality Team, she contributes to guest coordination and hospitality while supporting the smooth execution of event operations.',
        photo: '/team/hemya.webp',
      },
      {
        name: 'Radhe Shyam',
        branch: 'Department Of Petroleum Engineering · B.Tech, Final Year',
        description:
          'A final-year Petroleum Engineering student with an interest in leadership and teamwork. As a member of the Hospitality Team, he contributes to guest coordination and helps create a warm and welcoming experience at the CSR Conclave.',
        photo: '/team/radhe%20shyam.webp',
      },
    ],
  },
];

/* =========================================
   LEADERSHIP / OFFICIAL CARDS
========================================= */
function BranchLines({ branch }: { branch: string }) {
  const [department, ...rest] = branch.split(/\s*·\s*/);
  const year = rest.join(' · ');

  return (
    <>
      {year && <span className="block text-ink-muted">{year}</span>}
      <span className={`block font-semibold leading-snug text-ink-soft ${year ? 'mt-2' : ''}`}>
        {department}
      </span>
    </>
  );
}
type OfficialMember = {
  name: string;
  role: string;
  photo?: string;
  description?: string;
  branch?: string;
};

function OfficialCard({ member }: { member: OfficialMember }) {
  const initials = member.name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="group overflow-hidden rounded-2xl border border-sand-300/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-maroon-300 hover:shadow-lift">
      {/* MOBILE CARD — matches regular team member cards */}
      <div className="flex items-center gap-4 p-3 sm:hidden">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-sand-100 via-sand-200 to-sand-300">
          {member.photo ? (
            <img
              src={member.photo}
              loading="lazy"
              decoding="async"
              alt={member.name}
              onError={(event) => { event.currentTarget.style.display = 'none'; }}
              className="h-full w-full object-cover object-[center_14%]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-display text-3xl font-semibold text-maroon-700">
              {initials}
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1 py-1">
          <h4 className="truncate font-display text-lg font-semibold leading-tight text-maroon-950">
            {member.name}
          </h4>
          <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-maroon-600">
            {member.role}
          </p>
          <div className="my-2 h-px w-8 bg-maroon-300" />
                    {member.branch && (
            <p className="text-[11px] leading-4 text-ink-muted">
              <BranchLines branch={member.branch} />
            </p>
          )}
        </div>
      </div>

      {/* DESKTOP CARD — same dimensions and spacing as MemberCard */}
      <div className="hidden sm:block">
        <div className="relative aspect-[4/3.5] overflow-hidden bg-gradient-to-br from-sand-100 via-sand-200 to-sand-300">
          {member.photo ? (
            <img
              src={member.photo}
              loading="lazy"
              decoding="async"
              alt={member.name}
              onError={(event) => { event.currentTarget.style.display = 'none'; }}
              className="h-full w-full object-cover object-[center_14%] transition-transform duration-700 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-display text-6xl font-semibold text-maroon-700 lg:text-7xl">
              {initials}
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-maroon-950/35 to-transparent" />
        </div>
        <div className="px-3.5 py-3 lg:px-4 lg:py-3.5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-maroon-500">
            {member.role}
          </p>
          <h3 className="mt-1.5 break-words font-display text-lg font-semibold leading-tight text-maroon-950 xl:text-xl">
            {member.name}
          </h3>
          <div className="my-2.5 h-px w-10 bg-maroon-300 transition-all duration-300 group-hover:w-16 group-hover:bg-maroon-600" />
                  {member.branch && (
            <p className="text-xs font-medium text-ink-muted">
              <BranchLines branch={member.branch} />
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

/* =========================================
   REGULAR TEAM MEMBER CARD
========================================= */

function MemberCard({
  member,
}: {
  member: TeamMember;
}) {
  const initials = member.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="group overflow-hidden rounded-2xl border border-sand-300/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-maroon-300 hover:shadow-lift">
      {/* MOBILE CARD */}
      <div className="flex items-center gap-4 p-3 sm:hidden">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-sand-100 via-sand-200 to-sand-300">
          {member.photo ? (
            <img
              src={member.photo}
              loading="lazy"
              decoding="async"
              alt={member.name}
              className="h-full w-full object-cover object-[center_14%]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center text-maroon-700">
              <span className="font-display text-3xl font-semibold">
                {initials}
              </span>
              <span className="mt-1 flex items-center gap-1 text-[8px] font-semibold uppercase tracking-wider text-maroon-600/70">
                <Camera className="h-3 w-3" />
                Photo
              </span>
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1 py-1">
          <h4 className="truncate font-display text-lg font-semibold leading-tight text-maroon-950">
            {member.name}
          </h4>

          <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-maroon-600">
            Team Member
          </p>

          <div className="my-2 h-px w-8 bg-maroon-300" />

          <BranchLines branch={member.branch} />


        </div>
      </div>

      {/* DESKTOP CARD */}
      <div className="hidden sm:block">
        <div className="relative aspect-[4/3.5] overflow-hidden bg-gradient-to-br from-sand-100 via-sand-200 to-sand-300">
          {member.photo ? (
            <img
              src={member.photo}
              loading="lazy"
              decoding="async"
              alt={member.name}
              className="h-full w-full object-cover object-[center_14%] transition-transform duration-700 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center text-maroon-700">
              <span className="font-display text-6xl font-semibold lg:text-7xl">
                {initials}
              </span>

              <span className="mt-3 flex items-center gap-1.5 rounded-full border border-white/70 bg-sand-50/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-maroon-600">
                <Camera className="h-3.5 w-3.5" />
                Photo coming soon
              </span>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-maroon-950/35 to-transparent" />
        </div>

        <div className="px-3.5 py-3 lg:px-4 lg:py-3.5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-maroon-500">
            Team Member
          </p>

          <h4 className="mt-1.5 font-display text-lg font-semibold leading-tight text-maroon-950 xl:text-xl">
            {member.name}
          </h4>

          <div className="my-2.5 h-px w-10 bg-maroon-300 transition-all duration-300 group-hover:w-16 group-hover:bg-maroon-600" />

          <p className="text-xs font-medium text-ink-muted">
                                <BranchLines branch={member.branch} />        
          </p>


        </div>
      </div>
    </article>
  );
}

/* =========================================
   MAIN TEAM PAGE
========================================= */

export default function TeamPage() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      'Our Team · Shatabdi Samriddhi 2026 | IIT (ISM) Dhanbad';

    return () => {
      document.title = previousTitle;
    };
  }, []);

  const totalMembers = TEAM_DEPARTMENTS.reduce(
    (total, department) => total + department.members.length,
    0
  );

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="team"
        className="relative overflow-hidden bg-sand-100 pb-12 pt-28 sm:pb-16 sm:pt-32"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_100%_0%,rgba(158,47,70,0.10),transparent_65%)]" />

        <div className="hatch pointer-events-none absolute right-0 top-24 h-40 w-12 text-maroon-600/10 sm:w-16" />

        <div className="container-x relative">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="eyebrow">
                Shatabdi Samriddhi 2026 · The People
              </p>

              <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-maroon-950 sm:text-5xl md:text-6xl">
                A shared vision.
                <span className="mt-1 block font-light italic text-maroon-600">
                  A team behind it.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
                Meet the people working together to bring Shatabdi Samriddhi
                2026 to life. A team united by ideas, creativity and a shared
                commitment to meaningful impact.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a href="#departments" className="btn-primary">
                  Meet the team
                  <ArrowDown className="h-4 w-4" />
                </a>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon-700">
                  1926 — 2026
                </span>
              </div>
            </div>

            {/* ORGANISING TEAM COUNTER */}
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#7A172B] via-[#6B0C28] to-[#4A081B] p-6 text-[#FAF6F0] shadow-[0_20px_50px_rgba(74,8,27,0.22)] sm:p-8">
                <div className="hatch pointer-events-none absolute -right-3 top-0 h-full w-16 text-[#F6D8D8]/15" />

                <div className="pointer-events-none absolute -bottom-16 -left-10 h-52 w-52 rounded-full border-[24px] border-[#F6D8D8]/[0.06]" />

                <p className="relative text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F0D9A5]">
                  The organising team
                </p>

                <p className="relative mt-5 font-display text-6xl font-semibold leading-none text-[#FAF6F0] sm:text-7xl">
                  {String(totalMembers).padStart(2, '0')}
                  <span className="text-[#D4AF37]">.</span>
                </p>

                <p className="relative mt-2 font-display text-xl text-[#FAF6F0] sm:text-2xl">
                  People. One purpose.
                </p>

                <div className="relative mt-7 flex items-center justify-between border-t border-[#FAF6F0]/20 pt-4">
                  <span className="text-xs text-[#E8D8C8]">
                    IIT (ISM) Dhanbad
                  </span>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F0D9A5]">
                    Centenary year
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 -z-0 h-16 w-16 rounded-full border border-maroon-300/50 sm:h-20 sm:w-20" />
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS SECTION */}
      <section id="departments" className="section scroll-mt-20 bg-sand-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">The People Behind the Conclave</p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-maroon-950 sm:text-4xl">
              Meet the <em className="font-light text-maroon-600">people.</em>
            </h2>

            <p className="mt-3 text-sm leading-7 text-ink-soft sm:text-base">
              Different skills, different responsibilities, one shared
              ambition — making the Conclave memorable.
            </p>
          </div>

          {/* DEPARTMENT NAVIGATION */}
          <nav
            aria-label="Team departments"
            className="mt-7 flex flex-wrap justify-center gap-2"
          >
            {TEAM_DEPARTMENTS.map((department) => (
              <a
                key={department.id}
                href={`#${department.id}`}
                className="rounded-full border border-maroon-600/20 bg-white px-4 py-2 text-xs font-semibold text-maroon-700 transition-all duration-300 hover:border-maroon-600 hover:bg-maroon-600 hover:text-sand-50"
              >
                {department.name}
                <span className="ml-1.5 text-maroon-400">
                  {department.members.length}
                </span>
              </a>
            ))}
          </nav>

          {/* LEADERSHIP, ORGANISING COMMITTEE & STUDENT COORDINATORS */}
          <section className="mb-12 mt-8 space-y-12 sm:mb-16 sm:mt-10 sm:space-y-16">
            {/* PATRONAGE */}
            <div>
              <div className="mb-5 border-b border-sand-300 pb-3 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-maroon-500">
                  Institutional Guidance
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-maroon-950 sm:text-3xl">
                  Patronage &amp; <em className="font-light text-maroon-600">Advisory</em>
                </h3>
              </div>
              <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-3 xl:gap-5">
                <OfficialCard member={{ name: 'Prof. Sukumar Mishra', role: 'Chief Patron', photo: '/speakers/sukumar-mishra.png', description: 'Institutional leadership and guidance.' }} />
                <OfficialCard member={{ name: 'Prof. Sarat Kumar Das', role: 'Patron',  description: 'Guidance and support for the Conclave.' }} />
                <OfficialCard member={{ name: 'Shri Prabodh Pandey', role: 'Advisor', description: 'Strategic direction and mentorship.' }} />
              </div>
            </div>

            {/* ORGANISING COMMITTEE */}
            <div>
              <div className="mb-5 flex flex-col gap-2 border-b border-sand-300 pb-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-maroon-500">
                    Executive Committee
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-maroon-950 sm:text-3xl">
                    Organising Committee
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-ink-soft sm:text-sm">
                    The team responsible for coordination, execution, and operations.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-4">
                <OfficialCard member={{ name: 'Prof. Alok Kumar Das', role: 'Convener' }} />
                <OfficialCard member={{ name: 'Prof. Rajeev Upadhyay',photo: '/team/Rajeev.webp', role: 'Co-Convener' }} />
                <OfficialCard member={{ name: 'Mr. Mrityunjay Sharma', role: 'Organisation Secretary' }} />
                <OfficialCard member={{ name: 'Ms. Shrishti Shankar', role: 'Joint Organising Secretary' }} />
                <OfficialCard member={{ name: 'Mr. Ashish Kumar', role: 'Treasurer' }} />
                <OfficialCard member={{ name: 'Mr. Mukul Kumar Keshari', role: 'Assistant Treasurer' }} />
                <OfficialCard member={{ name: 'Mr. Ajit Jha', role: 'Executive Member' }} />
              </div>
            </div>

            {/* STUDENT COORDINATORS */}
            <div>
              <div className="mb-5 flex items-end justify-between border-b border-sand-300 pb-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-maroon-500">
                    Student Leadership
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-maroon-950 sm:text-3xl">
                    Student Coordinators
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-4">
                <OfficialCard member={{ name: 'Sahil Sharma', role: 'Overall Coordinator',branch: 'Department Of Electronics And Communication Engineering · B.Tech, Final Year', photo: '/team/sahil%20sharma.webp', description: 'Leading the organising team and overseeing the planning and execution of Shatabdi Samriddhi 2026. Coordinating across departments, guiding key initiatives and ensuring that every team works towards a shared vision.' }} />
                <OfficialCard member={{ name: 'Sriya Pissapatti', role: 'Overall Co-Coordinator',branch: 'Department Of Management Studies and Industrial Engineering · MBA, Final Year', photo: '/team/sriya.webp', description: 'Supporting the overall leadership and coordination of the Conclave. Working closely with departmental teams, facilitating collaboration and helping ensure the smooth execution of activities and event initiatives.' }} />
                <OfficialCard member={{ name: 'Ashmita Choudhary', role: 'Overall Co-Coordinator',branch: 'Department Of Petroleum Engineering · B.Tech, Final Year', photo: '/team/ASHMITA.jpeg', description: 'Supporting the overall leadership and coordination of the Conclave. Working closely with departmental teams, facilitating collaboration and helping ensure the smooth execution of activities and event initiatives.' }} />              
                <OfficialCard member={{ name: 'Priyansh Murarka', role: 'Overall Co-Coordinator',branch: 'Department Of Electronics And Communication Engineering · B.Tech, Final Year', photo: '/team/Priyansh_Murarka.webp', description: 'Supporting the overall leadership and coordination of the Conclave. Working closely with departmental teams, facilitating collaboration and helping ensure the smooth execution of activities and event initiatives.' }} />
              </div>
            </div>
          </section>

          {/* DEPARTMENT MEMBER SECTIONS */}
          <div className="space-y-10 sm:space-y-12">
            {TEAM_DEPARTMENTS.map((department) => (
              <section
                key={department.id}
                id={department.id}
                className="scroll-mt-28"
              >
                <div className="mb-5 flex flex-col gap-3 border-b border-sand-300 pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-maroon-500">
                      Department {department.number}
                    </p>

                    <h3 className="mt-1 font-display text-2xl font-semibold text-maroon-950 sm:text-3xl">
                      {department.name}
                    </h3>

                    <p className="mt-1 max-w-xl text-xs leading-6 text-ink-soft sm:text-sm">
                      {department.description}
                    </p>
                  </div>

                  <span className="inline-flex w-fit items-center rounded-full border border-maroon-600/15 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-maroon-700">
                    {department.members.length}{' '}
                    {department.members.length === 1 ? 'Member' : 'Members'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-4">
                  {department.members.map((member) => (
                    <MemberCard
                      key={`${department.id}-${member.name}`}
                      member={member}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-sand-100 py-6">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="font-display text-lg text-maroon-900">
            Shatabdi Samriddhi 2026
            <span className="font-light italic text-maroon-600">
              {' '}· CSR Conclave
            </span>
          </p>

          <a
            href="/#top"
            className="text-xs font-semibold text-maroon-700 transition-colors hover:text-maroon-900"
          >
            Back to the Conclave
            <ArrowUpRight className="ml-1 inline h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}