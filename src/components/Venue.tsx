import { useState } from 'react';
import { BedDouble, Car, ChevronDown, Download, MapPin, Plane, TrainFront } from 'lucide-react';
import { DOWNLOADS, EVENT, FAQS, HOTELS, TRAVEL } from '../data/mockData';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const ICONS = { train: TrainFront, plane: Plane, car: Car } as const;

export default function Venue() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="venue" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Venue, Travel & Stay" title="Golden Jubilee Hall, IIT (ISM) Dhanbad" description={`${EVENT.dateLabel} · ${EVENT.city}`} />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* Map */}
          <Reveal className="card overflow-hidden">
            <div className="relative aspect-[4/3] bg-sand-200 lg:aspect-auto lg:h-full lg:min-h-[460px]">
              {/* stylised fallback shown until / unless the map embed loads */}
              <div className="absolute inset-0 overflow-hidden" aria-hidden>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(122,23,43,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(122,23,43,0.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
                <div className="absolute left-[-10%] top-[38%] h-3 w-[120%] -rotate-12 bg-sand-50/80" />
                <div className="absolute left-[55%] top-[-10%] h-[120%] w-3 rotate-[8deg] bg-sand-50/80" />
                <span className="absolute left-1/2 top-[40%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-maroon-600 text-sand-50 shadow-lift">
                  <span className="absolute inset-0 animate-ping rounded-full bg-maroon-500/40" />
                  <MapPin className="relative h-5 w-5" />
                </span>
              </div>
              <iframe
                title="Map – IIT (ISM) Dhanbad"
                src="https://maps.google.com/maps?q=IIT%20(ISM)%20Dhanbad&z=15&output=embed"
                className="absolute inset-0 h-full w-full grayscale-[35%] sepia-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-sand-50/95 p-4 shadow-card backdrop-blur">
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon-600 text-sand-50">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="text-sm leading-tight">
                    <span className="block font-semibold text-maroon-900">Golden Jubilee Hall</span>
                    <span className="text-ink-muted">IIT (ISM) Campus, Dhanbad 826004</span>
                  </span>
                </span>
                <a href="https://www.google.com/maps/search/?api=1&query=IIT+ISM+Dhanbad" target="_blank" rel="noopener noreferrer" className="btn-primary !px-4 !py-2">
                  Directions
                </a>
              </div>
            </div>
          </Reveal>

          {/* Travel + stay */}
          <div className="space-y-6">
            <Reveal delay={100} className="card p-7">
              <h3 className="text-xl font-semibold">Getting here</h3>
              <div className="mt-5 space-y-5">
                {TRAVEL.map((t) => {
                  const Icon = ICONS[t.icon as keyof typeof ICONS];
                  return (
                    <div key={t.title} className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-maroon-50 text-maroon-600">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="font-semibold text-ink">{t.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{t.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
            <Reveal delay={180} className="card p-7">
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                <BedDouble className="h-5 w-5 text-maroon-600" /> Where to stay
              </h3>
              <ul className="mt-4 divide-y divide-sand-200">
                {HOTELS.map((h) => (
                  <li key={h.name} className="flex flex-wrap items-baseline justify-between gap-2 py-3 text-sm">
                    <span className="font-semibold text-ink">{h.name}</span>
                    <span className="text-ink-muted">{h.note}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* FAQ + downloads */}
        <div id="faq" className="mt-20 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading align="left" eyebrow="FAQ" title="Before you arrive" />
            <div className="mt-8 divide-y divide-sand-300 border-y border-sand-300">
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <Reveal key={f.q} delay={i * 60}>
                    <button className="flex w-full items-center justify-between gap-6 py-5 text-left" onClick={() => setOpenFaq(open ? null : i)} aria-expanded={open}>
                      <span className={`font-display text-lg transition-colors ${open ? 'text-maroon-700' : 'text-maroon-900'}`}>{f.q}</span>
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${open ? 'rotate-180 border-maroon-600 bg-maroon-600 text-sand-50' : 'border-sand-400 text-maroon-600'}`}>
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                    <div className="accordion-body" data-open={open}>
                      <div>
                        <p className="pb-5 pr-12 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={150} className="h-fit rounded-3xl bg-maroon-900 p-8 text-sand-50">
            <p className="eyebrow eyebrow-light">Downloads</p>
            <h3 className="mt-3 text-2xl font-semibold !text-sand-50">Brochure & press kit</h3>
            <ul className="mt-6 space-y-3">
              {DOWNLOADS.map((d) => (
                <li key={d.label} className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-sand-100/10">
                  <span>
                    <span className="block text-sm font-semibold">{d.label}</span>
                    <span className="text-xs text-sand-200/60">{d.note}</span>
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sand-100/10 text-sand-300">
                    <Download className="h-4 w-4" />
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
