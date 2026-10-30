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

      </div>
    </section>
  );
}
