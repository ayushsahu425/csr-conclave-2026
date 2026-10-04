import { FlaskConical, HandHeart, Handshake, Sprout } from 'lucide-react';
import { WHY_ATTEND } from '../data/mockData';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const ICONS = { flask: FlaskConical, hand: HandHeart, handshake: Handshake, sprout: Sprout } as const;

export default function WhyAttend() {
  return (
    <section id="why-attend" className="section bg-sand-100">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Attend"
          title="One day. Every stakeholder in CSR."
          description="Built for CSR heads, foundation leads, PSU officials and industry leaders who want to fund work that lasts."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_ATTEND.map((w, i) => {
            const Icon = ICONS[w.icon as keyof typeof ICONS];
            return (
              <Reveal key={w.title} delay={i * 100}>
                <div className="card card-hover group h-full p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon-50 text-maroon-600 transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-maroon-600 group-hover:text-sand-50">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <p className="mt-6 font-display text-sm text-sand-600">0{i + 1}</p>
                  <h3 className="mt-1 text-xl font-semibold">{w.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{w.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
