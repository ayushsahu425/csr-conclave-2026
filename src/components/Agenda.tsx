import { useState } from 'react';
import { CalendarPlus, ChevronDown, MapPin,FileDown} from 'lucide-react';
import { downloadICS, slotToISO } from '../lib/calendar';
import type { AgendaItem } from '../types';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';


const TYPE_STYLE: Record<AgendaItem['type'], string> = {
  welcome: 'bg-sand-200 text-maroon-800',
  closing: 'bg-sand-200 text-maroon-800',
  ceremony: 'bg-maroon-600 text-sand-50',
  talk: 'bg-maroon-100 text-maroon-800',
  panel: 'bg-maroon-100 text-maroon-800',
  showcase: 'bg-sand-200 text-maroon-800',
  break: 'bg-sand-100 text-ink-soft ring-1 ring-sand-300',
};

const PROGRAMME: AgendaItem[] = [
  {
    id: 'a1',
    time: '10:00 AM - 10:20 AM',
    title: 'Inaugural Session',
    session: 'Inaugural Session',
    track: null,
    type: 'ceremony',
    speakers: ['Prof. Sukumar Mishra, Director, IIT (ISM) Dhanbad'],
    description: 'Welcome Address & Institutional Overview.',
    venue: '',
  },
  {
    id: 'a2',
    time: '10:20 AM - 10:50 AM',
    title: 'Addresses by Guest Speakers & Industry Leaders',
    session: 'Talk',
    track: null,
    type: 'talk',
    speakers: [],
    description: 'Addresses by guest speakers and leaders from industry and PSUs.',
    venue: '',
  },
  {
    id: 'a3',
    time: '10:50 AM - 11:20 AM',
    title: 'Interactive Showcase',
    session: 'Showcase',
    track: null,
    type: 'showcase',
    speakers: [],
    description: 'An interactive showcase of IIT (ISM) Dhanbad’s research, innovation and institutional strengths.',
    venue: '',
  },
  {
    id: 'a4',
    time: '11:20 AM - 11:50 AM',
    title: 'Networking Tea Break',
    session: 'Break',
    track: null,
    type: 'break',
    speakers: [],
    description: 'Tea and networking.',
    venue: '',
  },
  {
    id: 'a5',
    time: '11:50 AM - 12:35 PM',
    title: 'Plenary Session I: The Changing Landscape of CSR',
    session: 'Panel',
    track: null,
    type: 'panel',
    speakers: [],
    description:
      'Redefining corporate responsibility in a changing world: emerging CSR priorities, innovative and inclusive growth, industry–academia collaboration and long-term impact.',
    venue: '',
  },
  {
    id: 'a6',
    time: '12:35 PM - 1:35 PM',
    title: 'Networking Lunch',
    session: 'Break',
    track: null,
    type: 'break',
    speakers: [],
    description: 'Lunch and networking.',
    venue: '',
  },
  {
    id: 'a7',
    time: '1:35 PM - 2:20 PM',
    title: 'Industry–Academia Connect',
    session: 'Panel',
    track: null,
    type: 'panel',
    speakers: ['Prof. Alok Kumar Das, Dean (ICR), IIT (ISM) Dhanbad'],
    description:
      'Exploring emerging energy technologies, interdisciplinary research and industry–academia partnerships to accelerate India’s clean energy transition and build a sustainable energy future.',
    venue: '',
  },
  {
    id: 'a8',
    time: '2:20 PM - 4:00 PM',
    title: 'Incubated Project Showcase',
    session: 'Showcase',
    track: null,
    type: 'showcase',
    speakers: [],
    description: 'A showcase of projects and startups incubated at IIT (ISM) Dhanbad.',
    venue: '',
  },
  {
    id: 'a9',
    time: '4:00 PM - 5:00 PM',
    title: 'Valedictory Session and Felicitation',
    session: 'Closing',
    track: null,
    type: 'closing',
    speakers: [],
    description: 'Valedictory session and felicitation of partners.',
    venue: '',
  },
];

export default function Agenda() {
  const [open, setOpen] = useState<string | null>('a1');
  const items = PROGRAMME;

  return (
    <section id="agenda" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Agenda"
          title="Programme | Friday, 4 December 2026"
          description="From the inaugural session to the valedictory and felicitation, a full day of dialogue, showcases and partnership. All times are in Indian Standard Time (IST)."        />

        <Reveal
          delay={100}
          className="mx-auto mt-12 flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row"
        >
          {/* <div
            className="no-scrollbar -mx-5 flex w-full gap-2 overflow-x-auto px-5 md:mx-0 md:w-auto md:px-0"
            role="tablist"
          >
            {TABS.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={tab === t.key}
                onClick={() => setTab(t.key)}
                className={`tab shrink-0 ${
                  tab === t.key ? 'tab-active' : 'tab-idle'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div> */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="tab tab-active">Full Day</span>
            <span className="text-sm font-medium text-ink-muted">10:00 AM – 5:00 PM IST</span>
          </div>

          <div className="no-print flex gap-2">
            <button
              onClick={() => downloadICS()}
              className="btn-outline !px-4 !py-2"
            >
              <CalendarPlus className="h-4 w-4" />
              Add to calendar
            </button>

            <a
              href="/Shatabdi-Samriddhi-2026-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !px-4 !py-2"
            >
              <FileDown className="h-4 w-4" />
              PDF
            </a>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-8 max-w-5xl">
          {/* Timeline spine */}
          <div className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-maroon-300 via-sand-300 to-transparent md:left-[163px]" />

          <ol className="space-y-4">
            {items.map((item, i) => {
              const isOpen = open === item.id;
              const [from, to] = item.time.split(' - ');
              const until =
                to ??
                (item.time.includes('onwards') ? 'onwards' : '');
              const fromLabel = from.replace(' onwards', '');

              return (
                <Reveal
                  as="li"
                  key={`${item.id}`}
                  delay={i * 70}
                  className="relative"
                >
                  <div className="flex gap-5 md:gap-8">
                    {/* Time */}
                    <div className="hidden w-[132px] shrink-0 pt-6 text-right md:block">
                      <p className="font-display text-xl font-semibold text-maroon-700">
                        {fromLabel.trim()}
                      </p>
                      <p className="text-xs text-ink-muted">{until}</p>
                    </div>

                    {/* Timeline node */}
                    <div className="relative z-10 mt-6 flex h-10 w-10 shrink-0 items-center justify-center">
                      <span
                        className={`h-3.5 w-3.5 rounded-full ring-4 ring-sand-50 transition-all duration-500 ${
                          isOpen
                            ? 'scale-125 bg-maroon-600'
                            : 'bg-sand-400'
                        }`}
                      />
                    </div>

                    {/* Agenda card */}
                    <div
                      className={`card flex-1 overflow-hidden transition-all duration-500 ${
                        isOpen
                          ? 'border-maroon-200 shadow-lift'
                          : 'hover:border-maroon-200'
                      }`}
                    >
                      <button
                        className="flex w-full items-start justify-between gap-4 p-5 text-left md:p-6"
                        onClick={() => setOpen(isOpen ? null : item.id)}
                        aria-expanded={isOpen}
                      >
                        <div>
                          <p className="mb-2 text-sm font-semibold text-maroon-600 md:hidden">
                            {item.time}
                          </p>

                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
                                TYPE_STYLE[item.type]
                              }`}
                            >
                              {item.type}
                            </span>

                            {/* {item.session.toLowerCase() !== item.type && (
                              <span className="text-xs font-medium text-ink-muted">
                                {item.session}
                              </span>
                            )} */}
                          </div>

                          <h3 className="mt-2 text-lg font-semibold leading-snug md:text-xl">
                            {item.title}
                          </h3>
                        </div>

                        <ChevronDown
                          className={`mt-1 h-5 w-5 shrink-0 text-maroon-600 transition-transform duration-500 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <div className="accordion-body" data-open={isOpen}>
                        <div>
                          <div className="border-t border-sand-200 px-5 pb-6 pt-4 md:px-6">
                            <p className="text-justified text-[15px] leading-relaxed text-ink-soft">
                              {item.description}
                            </p>

                            {item.speakers.length > 0 && (
                              <div className="mt-4 flex flex-wrap gap-2">
                                {item.speakers.map((speaker) => (
                                  <a
                                    key={speaker}
                                    href="#speakers"
                                    className="chip transition hover:bg-maroon-600 hover:text-sand-50"
                                  >
                                    {speaker}
                                  </a>
                                ))}
                              </div>
                            )}

                            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-ink-muted">
                              {item.venue ? (
                                <span className="inline-flex items-center gap-1.5">
                                  <MapPin className="h-4 w-4 text-maroon-500" />
                                  {item.venue}
                                </span>
                              ) : (
                                <span />
                              )}

                              <button
                                onClick={() =>
                                  downloadICS({
                                    title: item.title,
                                    description: item.description,
                                    ...slotToISO(item.time),
                                  })
                                }
                                className="no-print inline-flex items-center gap-1.5 font-semibold text-maroon-600 hover:text-maroon-800"
                              >
                                <CalendarPlus className="h-4 w-4" />
                                Add this session
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