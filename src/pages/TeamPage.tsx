import { ArrowDown, ArrowUpRight, Mail, Users } from 'lucide-react';
import { EVENT, LEADERSHIP_MESSAGES } from '../data/mockData';
import Avatar from '../components/ui/Avatar';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';

export default function TeamPage() {
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
                Meet the institutional leadership guiding the CSR Conclave as IIT (ISM) Dhanbad marks a century of knowledge, innovation and societal impact.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#leadership" className="btn-primary">
                  Meet the leadership <ArrowDown className="h-4 w-4" />
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

      <section className="section overflow-hidden bg-maroon-900 text-sand-50">
        <div className="hatch pointer-events-none absolute right-0 top-0 h-40 w-14 text-sand-100/10" />
        <div className="container-x relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sand-100/15 bg-sand-100/5 text-sand-200">
              <Users className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.26em] text-sand-300">The wider team</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-sand-50 md:text-5xl">
              Many hands.
              <span className="block font-light italic text-sand-300">One shared purpose.</span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="rounded-3xl border border-sand-100/15 bg-white/[0.04] p-7 md:p-9">
            <p className="text-base leading-8 text-sand-100/85">
              The organising committee, faculty coordinators and student team will be featured in this space once the final roster and approved portraits are ready.
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
