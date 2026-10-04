import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import emblem from '../assets/centenary-emblem.webp';
import { EVENT } from '../data/mockData';
import Reveal from './ui/Reveal';

const QUICK = [
  ['About', '#about'],
  ['Why Attend', '#why-attend'],
  ['Agenda', '#agenda'],
  ['Speakers', '#speakers'],
  ['CSR Projects', '#projects'],
  ['Sponsorship', '#sponsorship'],
  ['Venue & FAQ', '#venue'],
];

const SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/school/iit-ism-dhanbad/', path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.85h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4z' },
  { label: 'X', href: 'https://x.com/iitismdhanbad', path: 'M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77zm-1.08 16.2h1.7L7.4 4.73H5.58z' },
  { label: 'YouTube', href: 'https://www.youtube.com/@iitismdhanbad', path: 'M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.75 15.02V8.98L15.5 12z' },
];

export default function Footer({ onOpenRegister }: { onOpenRegister: () => void }) {
  return (
    <footer className="relative overflow-hidden bg-maroon-950 text-sand-100">
      {/* CTA band */}
      <div className="container-x relative pt-20">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-maroon-600 px-8 py-12 md:px-14 md:py-16">
          <div className="hatch pointer-events-none absolute -left-4 top-0 h-full w-20 text-maroon-500/40" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[28px] border-sand-100/5" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="eyebrow eyebrow-light">{EVENT.dateLabel}</p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold !text-sand-50 md:text-4xl">
                Be part of the centenary. <em className="font-light text-sand-300">Reserve your seat.</em>
              </h2>
            </div>
            <button onClick={onOpenRegister} className="btn-sand group shrink-0 !px-8 !py-4">
              Register now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>
      </div>

      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={emblem} alt="" className="h-14 w-14 rounded-full" />
            <div className="leading-tight">
              <p className="font-display text-lg font-semibold text-sand-50">IIT (ISM) Dhanbad</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-300">Shatabdi Samriddhi 2026</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand-200/60">{EVENT.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-300">Explore</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {QUICK.map(([l, h]) => (
              <li key={h}>
                <a href={h} className="group inline-flex items-center gap-2 text-sand-200/70 transition-colors hover:text-sand-50">
                  <span className="h-px w-0 bg-sand-300 transition-all duration-300 group-hover:w-3" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-300">Contact</p>
          <ul className="mt-5 space-y-4 text-sm text-sand-200/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand-300" />
              <span>
                {EVENT.presenter}
                <br />
                Dhanbad, Jharkhand 826004
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sand-300" />
              <a href={`mailto:${EVENT.email}`} className="hover:text-sand-50">{EVENT.email}</a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sand-300" />
              <span>{EVENT.phone}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-300">Follow</p>
          <div className="mt-5 flex gap-3">
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-sand-100/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sand-100 hover:text-maroon-800">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-sand-100/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-sand-200/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Indian Institute of Technology (Indian School of Mines), Dhanbad. All rights reserved.</p>
          <p>Education · Innovation · Societal Impact</p>
        </div>
      </div>
    </footer>
  );
}
