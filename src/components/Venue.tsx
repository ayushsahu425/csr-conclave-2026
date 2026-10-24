import { useState } from 'react';
import {
  Car,
  ChevronDown,
  Download,
  MapPin,
  Plane,
  TrainFront,
} from 'lucide-react';
import { DOWNLOADS, EVENT, FAQS, TRAVEL } from '../data/mockData';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const ICONS = {
  train: TrainFront,
  plane: Plane,
  car: Car,
} as const;

export default function Venue() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const mapQuery = 'Penman Auditorium, IIT (ISM) Dhanbad';

  return (
    <section id="venue" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Venue and Travel"
          title={EVENT.venue}
          description={`${EVENT.dateLabel} | ${EVENT.city}`}
        />

        {/* Map and Getting Here */}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          {/* Map */}
          <Reveal className="card h-full overflow-hidden">
            <div className="relative h-full min-h-[460px] overflow-hidden bg-sand-200">
              <iframe
                title="Map – Penman Auditorium, IIT (ISM) Dhanbad"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  mapQuery
                )}&z=16&output=embed`}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-sand-50/95 p-4 shadow-card backdrop-blur">
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-600 text-sand-50">
                    <MapPin className="h-5 w-5" />
                  </span>

                  <span className="text-sm leading-tight">
                    <span className="block font-semibold text-maroon-900">
                      Penman Auditorium
                    </span>
                    <span className="text-ink-muted">
                      IIT (ISM) Dhanbad, Jharkhand 826004
                    </span>
                  </span>
                </span>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    mapQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !px-4 !py-2"
                >
                  Directions
                </a>
              </div>
            </div>
          </Reveal>

          {/* Getting Here */}
          <Reveal delay={100} className="card flex h-full flex-col p-7">
            <h3 className="text-xl font-semibold">Getting Here</h3>

            <div className="mt-5 flex flex-1 flex-col justify-around gap-5">
              {TRAVEL.map((t) => {
                const Icon =
                  ICONS[t.icon as keyof typeof ICONS] ?? MapPin;

                return (
                  <div key={t.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-maroon-50 text-maroon-600">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>

                    <div>
                      <p className="font-semibold text-ink">{t.title}</p>
                      <p className="text-justified mt-0.5 text-sm leading-relaxed text-ink-soft">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* FAQ and Downloads */}
        <div
          id="faq"
          className="mt-20 grid gap-10 lg:grid-cols-[1.4fr_1fr]"
        >
          {/* FAQ */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Before You Arrive"
            />

            <div className="mt-8 divide-y divide-sand-300 border-y border-sand-300">
              {FAQS.map((f, i) => {
                const isOpen = openFaq === i;

                return (
                  <Reveal key={f.q} delay={i * 60}>
                    <button
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : i)
                      }
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-display text-lg transition-colors ${
                          isOpen
                            ? 'text-maroon-700'
                            : 'text-maroon-900'
                        }`}
                      >
                        {f.q}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                          isOpen
                            ? 'rotate-180 border-maroon-600 bg-maroon-600 text-sand-50'
                            : 'border-sand-400 text-maroon-600'
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>

                    <div
                      className="accordion-body"
                      data-open={isOpen}
                    >
                      <div>
                        <p className="text-justified whitespace-pre-line pb-5 pr-12 text-[15px] leading-relaxed text-ink-soft">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Downloads */}
          <Reveal
            delay={150}
            className="h-fit rounded-3xl bg-maroon-900 p-8 text-sand-50"
          >
            <p className="eyebrow eyebrow-light">Downloads</p>

            <h3 className="mt-3 text-2xl font-semibold !text-sand-50">
              Brochure and Press Kit
            </h3>

            <ul className="mt-6 space-y-3">
              {DOWNLOADS.map((d) => (
                <li
                  key={d.label}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-sand-100/10"
                >
                  <span>
                    <span className="block text-sm font-semibold">
                      {d.label}
                    </span>
                    <span className="text-xs text-sand-200/60">
                      {d.note}
                    </span>
                  </span>

                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand-100/10 text-sand-300"
                    aria-label="Coming soon"
                    title="Coming soon"
                  >
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