import { useState } from 'react';
import { CalendarPlus, ChevronDown, MapPin, Printer } from 'lucide-react';
import { AGENDA_DATA } from '../data/mockData';
import { downloadICS, slotToISO } from '../lib/calendar';
import type { AgendaItem } from '../types';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const TABS = [
  { key: 'all', label: 'Full Day' },
  { key: 'Session I: Shatabdi', label: 'Session I · Shatabdi' },
  { key: 'Session II: Samriddhi', label: 'Session II · Samriddhi' },
] as const;

const TYPE_STYLE: Record<AgendaItem['type'], string> = {
  ceremony: 'bg-maroon-600 text-sand-50',
  talk: 'bg-maroon-100 text-maroon-800',
  panel: 'bg-maroon-100 text-maroon-800',
  showcase: 'bg-sand-200 text-maroon-800',
  break: 'bg-sand-100 text-ink-soft ring-1 ring-sand-300',
};

export default function Agenda() {
  const [tab, setTab] = useState<(typeof TABS)[number]['key']>('all');
  const [open, setOpen] = useState<string | null>('a2');

  const items = tab === 'all' ? AGENDA_DATA : AGENDA_DATA.filter((a) => a.session === tab);

  return (
    <section id="agenda" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Programme · 4 December 2026 (IST)"
          title="The Conclave Agenda"
          description="Two sessions that mirror the theme — the legacy of Shatabdi in the morning, the partnerships of Samriddhi through the afternoon."
        />

        <Reveal delay={100} className="mx-auto mt-12 flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="no-scrollbar -mx-5 flex w-full gap-2 overflow-x-auto px-5 md:mx-0 md:w-auto md:px-0" role="tablist">
            {TABS.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={tab === t.key}
                onClick={() => setTab(t.key)}
                className={`tab shrink-0 ${tab === t.key ? 'tab-active' : 'tab-idle'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="no-print flex gap-2">
            <button onClick={() => downloadICS()} className="btn-outline !px-4 !py-2">
              <CalendarPlus className="h-4 w-4" /> Add to calendar
            </button>
            <button onClick={() => window.print()} className="btn-outline !px-4 !py-2">
              <Printer className="h-4 w-4" /> PDF
            </button>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-8 max-w-5xl">
          {/* spine */}
          <div className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-maroon-300 via-sand-300 to-transparent md:left-[163px]" />

          <ol className="space-y-4">
            {items.map((item, i) => {
              const isOpen = open === item.id;
              const [from] = item.time.split('-');
              return (
                <Reveal as="li" key={`${tab}-${item.id}`} delay={i * 70} className="relative">
                  <div className="flex gap-5 md:gap-8">
                    {/* time */}
                    <div className="hidden w-[132px] shrink-0 pt-6 text-right md:block">
                      <p className="font-display text-xl font-semibold text-maroon-700">{from.trim()}</p>
                      <p className="text-xs text-ink-muted">{item.time.split('-')[1]?.trim()}</p>
                    </div>
                    {/* node */}
                    <div className="relative z-10 mt-6 flex h-10 w-10 shrink-0 items-center justify-center">
                      <span className={`h-3.5 w-3.5 rounded-full ring-4 ring-sand-50 transition-all duration-500 ${isOpen ? 'scale-125 bg-maroon-600' : 'bg-sand-400'}`} />
                    </div>
                    {/* card */}
                    <div className={`card flex-1 overflow-hidden transition-all duration-500 ${isOpen ? 'border-maroon-200 shadow-lift' : 'hover:border-maroon-200'}`}>
                      <button
                        className="flex w-full items-start justify-between gap-4 p-5 text-left md:p-6"
                        onClick={() => setOpen(isOpen ? null : item.id)}
                        aria-expanded={isOpen}
                      >
                        <div>
                          <p className="mb-2 text-sm font-semibold text-maroon-600 md:hidden">{item.time}</p>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${TYPE_STYLE[item.type]}`}>
                              {item.type}
                            </span>
                            <span className="text-xs font-medium text-ink-muted">{item.session}</span>
                          </div>
                          <h3 className="mt-2 text-lg font-semibold leading-snug md:text-xl">{item.title}</h3>
                        </div>
                        <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-maroon-600 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <div className="accordion-body" data-open={isOpen}>
                        <div>
                          <div className="border-t border-sand-200 px-5 pb-6 pt-4 md:px-6">
                            <p className="text-[15px] leading-relaxed text-ink-soft">{item.description}</p>
                            {item.speakers.length > 0 && (
                              <div className="mt-4 flex flex-wrap gap-2">
                                {item.speakers.map((s) => (
                                  <a key={s} href="#speakers" className="chip transition hover:bg-maroon-600 hover:text-sand-50">
                                    {s}
                                  </a>
                                ))}
                              </div>
                            )}
                            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-ink-muted">
                              <span className="inline-flex items-center gap-1.5">
                                <MapPin className="h-4 w-4 text-maroon-500" /> {item.venue}
                              </span>
                              <button
                                onClick={() => downloadICS({ title: item.title, description: item.description, ...slotToISO(item.time) })}
                                className="no-print inline-flex items-center gap-1.5 font-semibold text-maroon-600 hover:text-maroon-800"
                              >
                                <CalendarPlus className="h-4 w-4" /> Add this session
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
