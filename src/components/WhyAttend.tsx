import { Check, FlaskConical, HandHeart, Handshake, Sprout } from 'lucide-react';
import { WHO_SHOULD_ATTEND, WHY_ATTEND } from '../data/mockData';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const ICONS = { flask: FlaskConical, hand: HandHeart, handshake: Handshake, sprout: Sprout } as const;

export default function WhyAttend() {
  return (
    <section id="why-attend" className="section bg-sand-100">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Attend?"
          title="One Day. Every Stakeholder in CSR."
          description="For CSR heads, foundation leaders, PSU officials and business leaders who want their investments to create lasting value."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_ATTEND.map((w, i) => {
            const Icon = ICONS[w.icon as keyof typeof ICONS];
            return (
              <Reveal key={w.title} delay={i * 100}>
                <div className="card card-hover group flex h-full flex-col p-6 xl:p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon-50 text-maroon-600 transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-maroon-600 group-hover:text-sand-50">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <p className="mt-6 font-display text-sm text-sand-600">0{i + 1}</p>
                  <h3 className="mt-1 text-xl font-semibold leading-snug lg:min-h-[2.75em]">{w.title}</h3>
                  <p className="text-justified mt-3 text-[14.5px] leading-relaxed tracking-[-0.005em] text-ink-soft">{w.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Who should attend */}
        <Reveal delay={150} className="mt-16">
          <div className="grid gap-8 rounded-3xl bg-white p-8 ring-1 ring-sand-300/70 md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow">Audience</p>
              <h3 className="mt-3 text-3xl font-semibold">Who Should Attend</h3>
            </div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {WHO_SHOULD_ATTEND.map((w) => (
                <li key={w} className="flex items-start gap-3 text-[15px] text-ink-soft">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-maroon-600 text-sand-50">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
