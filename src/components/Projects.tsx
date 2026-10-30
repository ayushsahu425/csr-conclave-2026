import { useState } from 'react';
import { ArrowRight, IndianRupee, Mail, Users } from 'lucide-react';
import { EVENT, PROJECTS_DATA } from '../data/mockData';
import type { CSRProject } from '../types';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const AREAS = ['All', 'Mine Safety', 'Clean Energy', 'Water and Health', 'Skilling', 'Land Reclamation'] as const;

export default function Projects({ onSelectProject }: { onSelectProject: (p: CSRProject) => void }) {
  const [area, setArea] = useState<(typeof AREAS)[number]>('All');
  const list = area === 'All' ? PROJECTS_DATA : PROJECTS_DATA.filter((p) => p.focusArea === area);

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="CSR Project Showcase"
          title=""
          description=""
        />

        <div className="min-h-8" />
      </div>
    </section>
  );
}
