import { useState } from 'react';
import { ArrowRight, IndianRupee, Users } from 'lucide-react';
import { PROJECTS_DATA } from '../data/mockData';
import type { CSRProject } from '../types';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const AREAS = ['All', 'Mine Safety', 'Clean Energy', 'Water & Health', 'Skilling', 'Land Reclamation'] as const;

export default function Projects({ onSelectProject }: { onSelectProject: (p: CSRProject) => void }) {
  const [area, setArea] = useState<(typeof AREAS)[number]>('All');
  const list = area === 'All' ? PROJECTS_DATA : PROJECTS_DATA.filter((p) => p.focusArea === area);

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="CSR Project Showcase"
          title={
            <>
              Research, ready to <em className="font-light text-maroon-600">fund.</em>
            </>
          }
          description="Every project is scoped with a problem, budget, beneficiaries and Schedule VII alignment — and led by an IIT (ISM) principal investigator."
        />

        <Reveal delay={100} className="no-scrollbar -mx-5 mt-10 flex gap-2 overflow-x-auto px-5 md:mx-0 md:justify-center md:px-0">
          {AREAS.map((a) => (
            <button key={a} onClick={() => setArea(a)} className={`tab shrink-0 ${area === a ? 'tab-active' : 'tab-idle'}`}>
              {a}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {list.length === 0 && (
            <p className="col-span-full rounded-2xl border border-dashed border-sand-400 p-10 text-center text-ink-muted">
              Projects in this focus area will be published soon.
            </p>
          )}
          {list.map((p, i) => (
            <Reveal key={`${area}-${p.id}`} delay={i * 90}>
              <article className="card card-hover group relative flex h-full flex-col overflow-hidden p-7 md:p-8">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-maroon-600 to-maroon-400 transition-transform duration-700 group-hover:scale-x-100" />
                <div className="flex items-center justify-between gap-3">
                  <span className="chip">{p.focusArea}</span>
                  <span className="font-display text-sm text-sand-600">{p.id.toUpperCase()}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.problemStatement}</p>

                <dl className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-sand-100 p-5">
                  <div>
                    <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                      <IndianRupee className="h-3.5 w-3.5" /> Budget
                    </dt>
                    <dd className="mt-1 font-display text-2xl font-semibold text-maroon-700">{p.budget.replace('₹ ', '₹')}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                      <Users className="h-3.5 w-3.5" /> Beneficiaries
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ink">{p.beneficiaries}</dd>
                  </div>
                  <div className="col-span-2 border-t border-sand-300/70 pt-3">
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Schedule VII</dt>
                    <dd className="mt-1 text-sm text-ink-soft">{p.scheduleVII}</dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-1">
                  <p className="text-sm leading-tight">
                    <span className="block font-semibold text-ink">{p.piName}</span>
                    <span className="text-ink-muted">{p.dept}</span>
                  </p>
                  <button onClick={() => onSelectProject(p)} className="btn-primary group/btn">
                    Express interest
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
