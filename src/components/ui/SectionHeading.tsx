import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const center = align === 'center';
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <p className={`eyebrow ${light ? 'eyebrow-light' : ''} ${center ? 'justify-center' : ''}`}>{eyebrow}</p>
      <h2
        className={`mt-4 text-balance text-4xl font-semibold leading-[1.1] md:text-5xl ${
          light ? '!text-sand-50' : ''
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-sand-200/80' : 'text-ink-soft'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
