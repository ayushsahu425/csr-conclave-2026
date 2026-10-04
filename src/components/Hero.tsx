import { useEffect, useState } from 'react';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import emblem from '../assets/centenary-emblem.webp';
import campus from '../assets/campus.webp';
import { EVENT, STATS } from '../data/mockData';
import { useCountdown } from '../hooks/useCountdown';
import { useInView } from '../hooks/useInView';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenSponsor: () => void;
}

const stagger = (i: number) => ({ animationDelay: `${120 + i * 110}ms` });

function CountUp({ to, suffix, run }: { to: number; suffix: string; run: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setN(to);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const dur = 1600;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return (
    <>
      {n}
      {suffix}
    </>
  );
}

function Countdown() {
  const c = useCountdown(EVENT.start);
  const units = [
    { v: c.days, l: 'Days' },
    { v: c.hours, l: 'Hours' },
    { v: c.minutes, l: 'Minutes' },
    { v: c.seconds, l: 'Seconds' },
  ];
  if (c.done) {
    return (
      <p className="font-display text-2xl text-maroon-700">
        The Conclave is <em>live</em> — welcome to Shatabdi Samriddhi.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {units.map((u) => (
        <div key={u.l} className="rounded-xl bg-sand-100 px-2 py-3 text-center ring-1 ring-sand-300/70">
          <div className="overflow-hidden">
            <span key={u.v} className="block animate-tick font-display text-3xl font-semibold tabular-nums text-maroon-700 sm:text-4xl">
              {String(u.v).padStart(2, '0')}
            </span>
          </div>
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">{u.l}</span>
        </div>
      ))}
    </div>
  );
}

export default function Hero({ onOpenRegister, onOpenSponsor }: HeroProps) {
  const [statsRef, statsInView] = useInView<HTMLDivElement>();

  return (
    <section id="top" className="relative">
      {/* ---------- Maroon stage ---------- */}
      <div className="relative overflow-hidden bg-maroon-600 pb-56 pt-28 text-sand-50 md:pb-48 md:pt-40">
        {/* depth */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_20%,#9E2F46_0%,transparent_55%),radial-gradient(90%_70%_at_0%_100%,#3D0B16_0%,transparent_60%)]" />
        <div className="grain pointer-events-none absolute inset-0 opacity-60" />
        {/* hatch stripes, echoing the patent creative */}
        <div className="hatch pointer-events-none absolute left-0 top-28 h-56 w-10 text-maroon-400/30 md:w-16" />
        <div className="hatch pointer-events-none absolute bottom-40 right-0 h-56 w-10 text-maroon-400/30 md:w-16" />
        {/* concentric arcs */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full border border-sand-200/10" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-sand-200/10" />

        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Copy */}
          <div>
            <p className="eyebrow eyebrow-light animate-fade-up" style={stagger(0)}>
              Office of Corporate Relations presents
            </p>

            <h1 className="mt-6 animate-fade-up font-display !text-sand-50" style={stagger(1)}>
              <span className="block text-[2.75rem] font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
                Shatabdi Samriddhi
              </span>
              <span className="mt-1 block text-[2.75rem] font-light italic leading-[1.02] text-sand-300 sm:text-6xl lg:text-7xl">
                2026
              </span>
            </h1>

            <div className="mt-6 flex animate-fade-up items-center gap-4" style={stagger(2)}>
              <span className="h-px w-12 bg-sand-300/60" />
              <span className="text-sm font-semibold uppercase tracking-[0.42em] text-sand-100">CSR Conclave</span>
            </div>

            <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-sand-100/85" style={stagger(3)}>
              {EVENT.tagline}
            </p>

            <div className="mt-8 flex animate-fade-up flex-wrap gap-3 text-sm" style={stagger(4)}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur">
                <CalendarDays className="h-4 w-4 text-sand-300" /> {EVENT.dateLabel}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur">
                <MapPin className="h-4 w-4 text-sand-300" /> IIT (ISM) Campus, Dhanbad
              </span>
            </div>

            <div className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row" style={stagger(5)}>
              <button onClick={onOpenRegister} className="btn-sand group !px-7 !py-3.5">
                Register as Delegate
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={onOpenSponsor} className="btn-outline-light !px-7 !py-3.5">
                Become a Sponsor
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[460px] animate-fade-up" style={stagger(3)}>
            <div className="relative aspect-square">
              {/* rotating dashed ring */}
              <svg className="absolute inset-0 h-full w-full animate-spin-slow" viewBox="0 0 200 200" aria-hidden>
                <circle cx="100" cy="100" r="97" fill="none" stroke="rgba(241,229,211,0.35)" strokeWidth="0.6" strokeDasharray="2 5" />
              </svg>
              <div className="absolute inset-[6%] rounded-full bg-gradient-to-br from-sand-100/15 to-transparent ring-1 ring-sand-100/15" />
              <div className="absolute inset-[11%] animate-float">
                <img
                  src={emblem}
                  alt="Shatabdi Samriddhi 2026 – CSR Conclave emblem, IIT (ISM) Dhanbad"
                  className="h-full w-full rounded-full shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>
            {/* campus postcard */}
            <figure className="absolute -bottom-6 -left-2 w-36 rotate-[-6deg] rounded-xl bg-sand-50 p-1.5 shadow-lift transition-transform duration-500 hover:rotate-0 sm:-left-10 sm:w-52">
              <img src={campus} alt="Heritage building, IIT (ISM) Dhanbad" className="aspect-[4/3] w-full rounded-lg object-cover" />
              <figcaption className="px-1 pb-0.5 pt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-maroon-600">
                Est. 1926 · Dhanbad
              </figcaption>
            </figure>
          </div>
        </div>

        {/* curved beige base */}
        <svg className="absolute -bottom-px left-0 w-full text-sand-50" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
          <path fill="currentColor" d="M0,80 C360,140 1080,0 1440,70 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* ---------- Countdown + stats card ---------- */}
      <div className="container-x relative z-10 -mt-28 md:-mt-32">
        <div className="card grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Countdown to the Conclave</p>
            <p className="mt-2 font-display text-xl text-maroon-900">
              {EVENT.dateLabel} · 9:00 AM IST
            </p>
            <div className="mt-5">
              <Countdown />
            </div>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-sand-300/60 sm:grid-cols-4 lg:grid-cols-2">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white p-5">
                <div className="font-display text-4xl font-semibold text-maroon-600">
                  <CountUp to={s.value} suffix={s.suffix} run={statsInView} />
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
