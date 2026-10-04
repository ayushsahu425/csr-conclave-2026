/** Monogram avatar used until official speaker photographs are supplied. */
export default function Avatar({ name, photo, className = '' }: { name: string; photo?: string; className?: string }) {
  if (photo) return <img src={photo} alt={name} className={`h-full w-full object-cover ${className}`} />;
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
