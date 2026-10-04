import { useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  onClose: () => void;
  eyebrow: string;
  title: string;
  children: ReactNode;
  size?: 'md' | 'lg';
}

/** Shared animated modal shell: ESC to close, backdrop click, scroll lock. */
export default function Modal({ onClose, eyebrow, title, children, size = 'lg' }: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-maroon-950/70 p-0 backdrop-blur-sm animate-backdrop-in sm:items-center sm:p-4"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className={`flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-3xl bg-sand-50 shadow-2xl animate-modal-in sm:rounded-3xl ${
          size === 'lg' ? 'max-w-2xl' : 'max-w-lg'
        }`}
      >
        <div className="relative overflow-hidden bg-maroon-600 px-6 py-6 text-sand-50 sm:px-8">
          <div className="hatch pointer-events-none absolute -right-6 top-0 h-full w-24 text-maroon-500/40" />
          <p className="relative text-[11px] font-semibold uppercase tracking-[0.28em] text-sand-300">{eyebrow}</p>
          <h2 className="relative mt-1 pr-10 font-display text-2xl font-semibold !text-sand-50">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full p-2 text-sand-200 transition hover:rotate-90 hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-6 sm:px-8">{children}</div>
      </div>
    </div>
  );
}
