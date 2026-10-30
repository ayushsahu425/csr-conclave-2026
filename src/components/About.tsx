import campus from '../assets/campus.webp';
import { ABOUT } from '../data/mockData';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About the Conclave"
              title={
                <>
                  A Hundred Years of Knowledge, <em className="font-light text-maroon-600">Shared for Prosperity</em>
                </>
              }
            />
            <Reveal delay={120} className="mt-6 space-y-4 text-justified text-[17px] leading-relaxed text-ink-soft">
              {ABOUT.paragraphs.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </Reveal>
            <Reveal delay={200} className="mt-8 flex flex-wrap gap-2">
              {ABOUT.pillars.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={150} className="relative">
            <div className="hatch absolute -right-3 -top-3 h-28 w-28 rounded-tr-3xl text-maroon-600/20" />
            <div className="relative overflow-hidden rounded-3xl shadow-lift">
              {ABOUT.video ? (
                <video
                  src={ABOUT.video}
                  poster={campus}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Drone view of the IIT (ISM) Dhanbad campus"
                  className="aspect-[16/11] w-full object-cover"
                />
              ) : (
                <img src={campus} alt="IIT (ISM) Dhanbad heritage building and gardens" className="aspect-[16/11] w-full object-cover transition-transform duration-[2s] hover:scale-105" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-sand-50">
                <p className="font-display text-3xl font-semibold !text-sand-50">{ABOUT.captionYears}</p>
                <p className="text-sm text-sand-200">{ABOUT.caption}</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Two sessions mirror the two halves of the theme */}
        <div className="mt-24">
          <SectionHeading eyebrow="The Programme" title="Two Flagship Sessions. One Shared Vision." />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SESSIONS.map((s, i) => (
            <Reveal key={s.name} delay={i * 140}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 md:p-10 ${
                  i === 0 ? 'bg-white ring-1 ring-sand-300/70' : 'bg-maroon-600 text-sand-50'
                }`}
              >
                <span
                  className={`pointer-events-none absolute -right-2 -top-10 font-display text-[11rem] font-semibold leading-none transition-transform duration-700 group-hover:-translate-y-2 ${
                    i === 0 ? 'text-maroon-50' : 'text-maroon-500/40'
                  }`}
                >
                  {s.numeral}
                </span>
                <p className={`relative text-xs font-semibold uppercase tracking-[0.28em] ${i === 0 ? 'text-maroon-500' : 'text-sand-300'}`}>
                  Session {s.numeral}
                </p>
                <h3 className={`relative mt-3 text-3xl font-semibold ${i === 1 ? '!text-sand-50' : ''}`}>
                  {s.name}: <span className="font-light italic">{s.title}</span>
                </h3>
                <p className={`relative mt-2 text-sm font-medium ${i === 0 ? 'text-ink-muted' : 'text-sand-200/80'}`}>{s.focus}</p>
                <ul className="relative mt-6 flex flex-1 flex-col justify-around gap-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed">
                      <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${i === 0 ? 'bg-maroon-600' : 'bg-sand-300'}`} />
                      <span className={`text-justified ${i === 0 ? 'text-ink-soft' : 'text-sand-100/90'}`}>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
