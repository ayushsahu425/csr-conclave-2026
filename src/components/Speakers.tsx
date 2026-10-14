import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SPEAKERS_DATA } from '../data/mockData';
import type { Speaker } from '../types';
import Avatar from './ui/Avatar';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

// Only show filter chips for categories that currently have speakers.
const ORDER: Speaker['category'][] = ['Chief Guest', 'Government', 'Academia', 'PSU', 'Industry'];
const FILTERS = ['All', ...ORDER.filter((c) => SPEAKERS_DATA.some((s) => s.category === c))];

export default function Speakers({ onSelectSpeaker }: { onSelectSpeaker: (s: Speaker) => void }) {
  const [filter, setFilter] = useState('All');
  const list = filter === 'All' ? SPEAKERS_DATA : SPEAKERS_DATA.filter((s) => s.category === filter);

  return (
    <section id="speakers" className="section bg-sand-100">
      <div className="container-x">
        <SectionHeading
          eyebrow="Speakers"
          title="Voices Shaping the Conclave"
          description="Leaders from academia, PSUs, government and industry will share the stage. More names will be announced once confirmed."
        />

        <Reveal delay={100} className="no-scrollbar -mx-5 mt-10 flex gap-2 overflow-x-auto px-5 md:mx-0 md:justify-center md:px-0">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`tab shrink-0 ${filter === f ? 'tab-active' : 'tab-idle'}`}>
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((sp, i) => (
            <Reveal key={`${filter}-${sp.id}`} delay={i * 80}>
              <button
                onClick={() => onSelectSpeaker(sp)}
                className="card card-hover group flex h-full w-full flex-col overflow-hidden text-left"
              >
                <div className="relative aspect-[16/10] sm:aspect-[5/4] overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                    <Avatar name={sp.name} photo={sp.photo} />
                  </div>
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-sand-50 text-maroon-700 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="chip self-start !px-2.5 !py-0.5 text-[10px] uppercase tracking-wider">{sp.category}</span>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{sp.name}</h3>
                  <p className="mt-1 text-sm font-medium text-maroon-600">{sp.title}</p>
                  <p className="mt-1 text-sm text-ink-muted">{sp.org}</p>
                  <p className="mt-auto border-t border-sand-200 pt-4 text-xs font-medium text-ink-soft">{sp.sessionTitle}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
