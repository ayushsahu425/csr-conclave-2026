import { ALUMNI_LEADERS, CENTENARY_MILESTONES } from '../data/mockData';
import { useInView } from '../hooks/useInView';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Timeline() {
  const [lineRef, lineIn] = useInView<HTMLDivElement>();
  const alumni = [...ALUMNI_LEADERS, ...ALUMNI_LEADERS];

  return (
    <section id="centenary" className="section overflow-hidden bg-maroon-900 text-sand-50">
      <div className="hatch pointer-events-none absolute left-0 top-0 h-40 w-16 text-maroon-700/50" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full border border-sand-200/10" />

      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="Shatabdi · 1926 — 2026"
          title={
            <>
              A century of <em className="font-light text-sand-300">nation-building</em>
            </>
          }
          description="From the Indian School of Mines to an Institute of National Importance — the journey that brings us to this Conclave."
        />

        {/* Horizontal on desktop, swipeable on mobile */}
        <div ref={lineRef} className={`relative mt-16 ${lineIn ? 'is-visible' : ''}`}>
          <div className="absolute left-0 right-0 top-[27px] hidden h-px bg-sand-200/15 md:block" />
          <div className="draw-line absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-sand-300 via-sand-200 to-maroon-300 md:block" />

          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible md:px-0">
            {CENTENARY_MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={300 + i * 180} className="w-[78%] shrink-0 snap-start md:w-auto">
                <div className="relative">
                  <div
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border font-display text-lg ${
                      i === CENTENARY_MILESTONES.length - 1
                        ? 'border-sand-200 bg-sand-100 text-maroon-700'
                        : 'border-sand-200/30 bg-maroon-800 text-sand-200'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="mt-6 font-display text-5xl font-semibold text-sand-200">{m.year}</p>
                  <h3 className="mt-3 text-lg font-semibold !text-sand-50">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand-200/70">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Alumni strip */}
      <div className="relative mt-20 border-y border-sand-200/10 py-6">
        <p className="container-x mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-sand-300">
          Distinguished alumni supporting the Conclave
        </p>
        <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
            {alumni.map((a, i) => (
              <div key={i} className="flex items-center gap-4 rounded-full border border-sand-200/15 bg-white/5 py-2 pl-2 pr-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand-100 font-display text-sm font-semibold text-maroon-700">
                  {a.name.replace(/^(Dr\.|Smt\.)\s*/, '').split(' ').map((w) => w[0]).slice(0, 2).join('')}
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-sand-50">{a.name}</span>
                  <span className="block text-xs text-sand-200/70">
                    {a.title} · {a.batch}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
