import { useState } from 'react';

/**
 * Speaker portrait. Uses the official photo when available and falls back to a
 * maroon monogram if no photo is set or the image fails to load.
 */
export default function Avatar({ name, photo, className = '' }: { name: string; photo?: string; className?: string }) {
  const [failed, setFailed] = useState(false);

  if (photo && !failed) {
    return (
      <div className={`relative h-full w-full bg-sand-200 ${className}`}>
        <img
          src={photo}
          alt={`Portrait of ${name}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-[50%_10%]"
        />
        {/* subtle brand tint so mixed photo sources sit together */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon-900/25 via-transparent to-transparent" />
      </div>
    );
  }

  const initials = name
    .replace(/\[.*?\]|Prof\.|Dr\.|Shri|Smt\./g, '')
    .trim()
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-maroon-600 via-maroon-700 to-maroon-900 ${className}`}
    >
      <div className="hatch absolute inset-0 text-white/[0.04]" />
      <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full border-[18px] border-sand-200/10" />
      <span className="relative font-display text-5xl font-medium text-sand-100">{initials || '★'}</span>
    </div>
  );
}
