import { useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Camera, Mail, UserRound } from 'lucide-react';
import { EVENT, LEADERSHIP_MESSAGES } from '../data/mockData';
import Avatar from '../components/ui/Avatar';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';

const TEAM_DEPARTMENTS = [
  {
    id: 'outreach',
    name: 'Outreach',
    number: '01',
    description: 'The people building connections with institutions, organisations and partners.',
  },
  {
    id: 'sponsorship',
    name: 'Sponsorship',
    number: '02',
    description: 'The team coordinating sponsorship relationships and partnership support.',
  },
  {
    id: 'web-design',
    name: 'Web & Design',
    number: '03',
    description: 'The people shaping the digital experience and visual identity of the Conclave.',
  },
  {
    id: 'content',
    name: 'Content',
    number: '04',
    description: 'The team bringing the Conclave story, information and communications together.',
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    number: '05',
    description: 'The people making sure speakers, guests and delegates feel welcome.',
  },
];

const MEMBER_SLOTS = Array.from({ length: 6 }, (_, index) => index + 1);

function MemberPlaceholder({ number }: { number: number }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-sand-300/80 bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-maroon-300 hover:shadow-lift">
      <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden bg-gradient-to-br from-sand-100 via-sand-200 to-sand-300">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(#7A172B_0.7px,transparent_0.7px)] [background-size:12px_12px]" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-maroon-600/15 bg-sand-50/80 text-maroon-500 shadow-sm transition-transform duration-500 group-hover:scale-105">
          <UserRound className="h-10 w-10" strokeWidth={1.25} />
        </div>
        <span className="absolute bottom-4 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-sand-50/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-maroon-700">
          <Camera className="h-3.5 w-3.5" /> Photo to be added
        </span>
        <span className="absolute right-4 top-4 font-display text-2xl font-semibold text-maroon-700/45">
          {String(number).padStart(2, '0')}
        </span>
      </div>

      <div className="p-5 md:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-maroon-500">
          Team member {String(number).padStart(2, '0')}
        </p>
        <h4 className="mt-2 font-display text-xl font-semibold text-maroon-950">
          Name to be added
        </h4>
        <div className="mt-4 border-t border-sand-200 pt-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted">
            Department
          </p>
          <p className="mt-1 text-sm font-medium text-ink-soft">Department to be added</p>
        </div>
        <p className="mt-4 min-h-[3.5rem] text-sm leading-6 text-ink-muted">
          Short description to be added. Add a brief introduction about this team member here.
        </p>
      </div>
    </article>
  );
}

export default function TeamPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Team · Shatabdi Samriddhi 2026 | IIT (ISM) Dhanbad';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <section id="team" className="relative overflow-hidden bg-sand-100 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_100%_0%,rgba(158,47,70,0.10),transparent_65%)]" />
        <div className="hatch pointer-events-none absolute right-0 top-28 h-52 w-10 text-maroon-600/10 md:w-16" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow">Shatabdi Samriddhi 2026 · The People</p>
              <h1 className="mt-7 max-w-3xl font-display text-5xl font-semibold leading-[1.04] tracking-tight text-maroon-950 sm:text-6xl lg:text-7xl">
                A shared vision.
                <span className="mt-2 block font-light italic text-maroon-600">A team behind it.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-ink-soft md:text-lg">
                Meet the institutional leadership and the teams bringing the CSR Conclave together as IIT (ISM) Dhanbad marks a century of knowledge, innovation and societal impact.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#departments" className="btn-primary">
                  Meet the teams <ArrowDown className="h-4 w-4" />
                </a>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon-700">1926 — 2026</span>
              </div>
            </div>

            <Reveal delay={120} className="relative mx-auto w-full max-w-lg">
              <div className="relative overflow-hidden rounded-[2rem] bg-maroon-900 p-7 text-sand-50 shadow-lift md:p-9">
                <div className="hatch pointer-events-none absolute -right-3 top-0 h-full w-20 text-sand-100/10" />
                <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full border-[28px] border-sand-100/5" />
                <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-sand-300">One institution · One hundred years</p>
                <p className="relative mt-7 font-display text-7xl font-semibold leading-none text-sand-100 sm:text-8xl">100<span className="text-maroon-300">.</span></p>
                <p className="relative mt-3 max-w-xs font-display text-2xl leading-snug text-sand-100">Years of ideas becoming impact.</p>
                <div className="relative mt-10 flex items-center justify-between border-t border-sand-100/15 pt-5">
                  <span className="text-xs font-medium tracking-wide text-sand-200/70">IIT (ISM) Dhanbad</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sand-300">Centenary year</span>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 -z-0 h-24 w-24 rounded-full border border-maroon-300/50" />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="leadership" className="section bg-sand-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Leadership & Guidance"
            title={<>The people guiding <em className="font-light text-maroon-600">the next century.</em></>}
            description="Institutional leadership perspectives on building meaningful partnerships between industry, academia and society."
          />

          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {LEADERSHIP_MESSAGES.map((leader, index) => (
              <Reveal key={leader.name} delay={index * 100}>
                <article className="group card card-hover h-full overflow-hidden">
                  <div className="relative aspect-[5/4] overflow-hidden bg-sand-200">
                    <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.035]">
                      <Avatar name={leader.name} photo={leader.photo} />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-maroon-950/45 to-transparent" />
                    <span className="absolute bottom-4 left-5 rounded-full border border-white/30 bg-sand-50/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-maroon-700">
                      Institute leadership
                    </span>
                  </div>
                  <div className="flex h-full flex-col p-6 md:p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-maroon-600">{leader.role}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-maroon-950">{leader.name}</h3>
                    <div className="my-5 h-px w-12 bg-maroon-300 transition-all duration-500 group-hover:w-20 group-hover:bg-maroon-600" />
                    <p className="text-sm leading-7 text-ink-soft">{leader.message[0]}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="departments" className="section bg-sand-100">
        <div className="container-x">
          <SectionHeading
            eyebrow="The Organising Team"
            title={<>Five teams. <em className="font-light text-maroon-600">One shared purpose.</em></>}
            description="Meet the people working across the Conclave. Each department has six member slots, ready for the approved photographs, names, academic departments and introductions."
          />

          <nav aria-label="Team departments" className="mt-10 flex flex-wrap justify-center gap-2">
            {TEAM_DEPARTMENTS.map((department) => (
              <a key={department.id} href={`#${department.id}`} className="rounded-full border border-maroon-600/20 bg-white/75 px-4 py-2 text-xs font-semibold text-maroon-700 transition-all duration-300 hover:border-maroon-600 hover:bg-maroon-600 hover:text-sand-50">
                {department.name}
              </a>
            ))}
          </nav>

          <div className="mt-14 space-y-16 md:mt-20 md:space-y-20">
            {TEAM_DEPARTMENTS.map((department, departmentIndex) => (
              <section key={department.id} id={department.id} className="scroll-mt-28">
                <Reveal className="mb-7 flex flex-col gap-3 border-b border-sand-300 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-maroon-500">
                      Department {department.number}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-semibold text-maroon-950 md:text-4xl">
                      {department.name}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-soft">{department.description}</p>
                  </div>
                  <span className="inline-flex w-fit rounded-full border border-maroon-600/15 bg-white px-3 py-1.5 text-xs font-semibold text-maroon-700">
                    6 member placeholders
                  </span>
                </Reveal>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
                  {MEMBER_SLOTS.map((slot) => (
                    <Reveal key={`${department.id}-${slot}`} delay={(slot - 1) * 55 + departmentIndex * 35}>
                      <MemberPlaceholder number={slot} />
                    </Reveal>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section overflow-hidden bg-maroon-900 text-sand-50">
        <div className="hatch pointer-events-none absolute right-0 top-0 h-40 w-14 text-sand-100/10" />
        <div className="container-x relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sand-300">Be part of the centenary</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-sand-50 md:text-5xl">
              Many hands.
              <span className="block font-light italic text-sand-300">One shared purpose.</span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="rounded-3xl border border-sand-100/15 bg-white/[0.04] p-7 md:p-9">
            <p className="text-base leading-8 text-sand-100/85">
              Have an update for the organising team or want to share the final member details? Get in touch with the Conclave team.
            </p>
            <a href={`mailto:${EVENT.email}?subject=Shatabdi%20Samriddhi%202026%20-%20Team`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sand-200 transition-colors hover:text-white">
              Contact the Conclave team <Mail className="h-4 w-4" />
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand-100 py-10">
        <div className="container-x flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="font-display text-xl text-maroon-900">Shatabdi Samriddhi 2026 <span className="font-light italic text-maroon-600">· CSR Conclave</span></p>
          <a href="/#top" className="text-sm font-semibold text-maroon-700 transition-colors hover:text-maroon-900">Back to the conclave <ArrowUpRight className="inline h-4 w-4" /></a>
        </div>
      </section>
    </>
  );
}
