import type { ElementType, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

/** Fades/slides children in when scrolled into view. */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
