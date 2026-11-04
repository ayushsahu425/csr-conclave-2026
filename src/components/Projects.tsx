import { ArrowRight, Building2, CalendarClock, Handshake, Mail, MapPin, Target, Users } from 'lucide-react';
import type { ReactNode } from 'react';
import { EVENT, PROJECTS_DATA, SUPPORTED_PROJECTS } from '../data/mockData';
import type { CSRProject } from '../types';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

/* Each card is split into 5 rows. With CSS subgrid the same row lines up
   across all cards in a line, so the cards look even. */
const ROWS = 'grid grid-rows-subgrid row-span-5';

export default function Projects({ onSelectProject }: { onSelectProject: (p: CSRProject) => void }) {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        {/* ============ Research projects ready to be funded ============ */}
        <SectionHeading
          eyebrow="CSR Project Showcase"
          title={
            <>
              Research, Ready to <em className="font-light text-maroon-600">Be Funded</em>
            </>
          }
          description="Discover research-driven projects and grassroots initiatives addressing societal challenges, advancing sustainable development and creating meaningful opportunities."
        />

        <div className="mt-12 grid gap-x-6 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS_DATA.map((p, i) => (
            <Reveal key={p.id} delay={i * 90} className={ROWS}>
              <article className={`card card-hover group relative gap-y-0 overflow-hidden ${ROWS}`}>
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-maroon-600 to-maroon-400 transition-transform duration-700 group-hover:scale-x-100" />

                {/* 1 · code + title */}
                <header className="px-6 pt-7 sm:px-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="chip">{p.kind}</span>
                    <span className="rounded-full bg-sand-100 px-2.5 py-1 font-display text-xs font-semibold tracking-wider text-sand-700">
                      {p.code}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[21px] font-semibold leading-snug text-maroon-900">{p.title}</h3>
                </header>

                {/* 2 · description */}
                <p className="px-6 pt-3 text-[15px] leading-relaxed text-ink-soft sm:px-7">{p.description}</p>

                {/* 3 · funding band */}
                <div className="mx-6 mt-6 grid grid-cols-[1fr_auto] items-center gap-4 self-start rounded-2xl bg-maroon-50 px-5 py-4 ring-1 ring-maroon-600/10 sm:mx-7">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-maroon-600/80">Support required</p>
                    <p className="mt-0.5 font-display text-[26px] font-semibold leading-tight text-maroon-700">{p.support}</p>
                    {p.supportNote && <p className="text-xs text-ink-muted">{p.supportNote}</p>}
                  </div>
                  {p.duration && (
                    <div className="border-l border-maroon-600/15 pl-4 text-right">
                      <CalendarClock className="ml-auto h-4 w-4 text-maroon-600" />
                      <p className="mt-1 text-sm font-semibold text-ink">{p.duration}</p>
                      <p className="text-[11px] text-ink-muted">duration</p>
                    </div>
                  )}
                </div>

                {/* 4 · details */}
                <dl className="space-y-4 px-6 pt-5 text-sm sm:px-7">
                  {p.beneficiaries && (
                    <Detail icon={<Users className="h-4 w-4" />} label="Beneficiaries" value={p.beneficiaries} />
                  )}
                  {p.scheduleVII && <Detail icon={<Target className="h-4 w-4" />} label="Schedule VII" value={p.scheduleVII} />}
                  {p.focusAreas && <Detail icon={<Target className="h-4 w-4" />} label="Focus areas" value={p.focusAreas} />}
                </dl>

                {/* 5 · proponent + button */}
                <footer className="mt-6 flex flex-col justify-end border-t border-sand-300/70 bg-sand-50/70 px-6 pb-6 pt-5 sm:px-7">
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-maroon-600 ring-1 ring-sand-300">
                      <Building2 className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 text-sm leading-snug">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Project proponent</p>
                      <p className="mt-0.5 font-semibold text-ink">{p.proponent}</p>
                      {p.proponentLocation && (
                        <p className="mt-0.5 flex items-start gap-1 text-ink-muted">
                          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          {p.proponentLocation}
                        </p>
                      )}
                    </div>
                  </div>
                  <button onClick={() => onSelectProject(p)} className="btn-primary group/btn mt-5 w-full">
                    Express interest
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-10 flex items-center justify-center gap-3 rounded-3xl bg-sand-100 p-6 text-center text-[15px] text-ink-soft ring-1 ring-sand-300/70">
          <Mail className="hidden h-5 w-5 shrink-0 text-maroon-600 md:block" />
          <span>
            Interested in a project? Write to{' '}
            <a href={`mailto:${EVENT.email}?subject=CSR%20Project%20Proposal%20Request`} className="font-semibold text-maroon-700 underline-offset-4 hover:underline">
              {EVENT.email}
            </a>{' '}
            to request the full proposal.
          </span>
        </Reveal>

        {/* ============ CSR supported projects @ IIT (ISM) Dhanbad ============ */}
        <div id="csr-supported" className="mt-24 scroll-mt-28">
          <SectionHeading
            eyebrow="Impact So Far"
            title={
              <>
                CSR Supported Projects <em className="font-light text-maroon-600">@ IIT (ISM) Dhanbad</em>
              </>
            }
            description="Projects at IIT (ISM) Dhanbad that have been made possible through CSR partnerships."
          />

          {SUPPORTED_PROJECTS.length === 0 ? (
            <Reveal delay={100} className="mx-auto mt-10 max-w-3xl">
              <div className="relative overflow-hidden rounded-3xl border border-sand-300/70 bg-gradient-to-br from-sand-50 via-white to-maroon-50 px-8 py-12 text-center shadow-card">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-maroon-600 text-sand-50 shadow-[0_10px_24px_-12px_rgba(122,23,43,0.7)]">
                  <Handshake className="h-6 w-6" />
                </span>
                <span className="chip mt-5">Coming soon</span>
                <p className="mt-4 font-display text-2xl font-semibold text-maroon-800">Details will be shared soon</p>
                <p className="mx-auto mt-2 max-w-lg text-[15px] leading-relaxed text-ink-soft">
                  Projects supported by our CSR partners will be showcased here.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {SUPPORTED_PROJECTS.map((s, i) => (
                <Reveal key={s.id} delay={i * 90}>
                  <article className="card h-full p-7">
                    <span className="chip">Supported by {s.partner}</span>
                    <h3 className="mt-4 text-xl font-semibold leading-snug">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{s.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Detail({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-sand-100 text-maroon-600">{icon}</span>
      <div>
        <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">{label}</dt>
        <dd className="mt-0.5 font-medium leading-snug text-ink">{value}</dd>
      </div>
    </div>
  );
}