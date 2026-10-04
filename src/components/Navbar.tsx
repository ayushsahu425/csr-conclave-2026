import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import emblem from '../assets/centenary-emblem.webp';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onOpenRegister: () => void;
  onOpenSponsor: () => void;
}

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'why-attend', label: 'Why Attend' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'speakers', label: 'Speakers' },
  { id: 'projects', label: 'Projects' },
  { id: 'sponsorship', label: 'Sponsorship' },
  { id: 'venue', label: 'Venue' },
];

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen, onOpenRegister, onOpenSponsor }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const solid = scrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-sand-300/60 bg-sand-50/90 shadow-[0_8px_30px_-20px_rgba(61,11,22,0.45)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-[76px] items-center justify-between gap-6">
        <a href="#top" className="group flex items-center gap-3">
          <img
            src={emblem}
            alt="Shatabdi Samriddhi 2026 centenary emblem"
            className="h-11 w-11 rounded-full shadow-md ring-2 ring-white/40 transition-transform duration-700 group-hover:rotate-[360deg]"
          />
          <span className="leading-tight">
            <span
              className={`block font-display text-[17px] font-semibold transition-colors ${
                solid ? 'text-maroon-800' : 'text-sand-50'
              }`}
            >
              IIT (ISM) Dhanbad
            </span>
            <span
              className={`block text-[10px] font-semibold uppercase tracking-[0.24em] transition-colors ${
                solid ? 'text-maroon-500' : 'text-sand-300'
              }`}
            >
              CSR Conclave 2026
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`relative rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                  solid
                    ? isActive
                      ? 'text-maroon-700'
                      : 'text-ink-soft hover:text-maroon-700'
                    : isActive
                      ? 'text-white'
                      : 'text-sand-100/80 hover:text-white'
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left rounded-full transition-transform duration-500 ${
                    solid ? 'bg-maroon-600' : 'bg-sand-200'
                  } ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                />
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button onClick={onOpenSponsor} className={solid ? 'btn-outline !px-5 !py-2.5' : 'btn-outline-light !px-5 !py-2.5'}>
            Sponsor
          </button>
          <button onClick={onOpenRegister} className={solid ? 'btn-primary !px-5 !py-2.5' : 'btn-sand !px-5 !py-2.5'}>
            Register
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`rounded-full p-2 lg:hidden ${solid ? 'text-maroon-800' : 'text-sand-50'}`}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div className={`accordion-body lg:hidden`} data-open={mobileMenuOpen}>
        <div>
          <div className="container-x flex flex-col gap-1 pb-6 pt-2">
            {LINKS.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-sand-200 py-3 font-display text-lg text-maroon-800"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {l.label}
              </a>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSponsor();
                }}
                className="btn-outline"
              >
                Sponsor
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="btn-primary"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
