import { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyAttend from './components/WhyAttend';
import Timeline from './components/Timeline';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import Projects from './components/Projects';
import Sponsorship from './components/Sponsorship';
import Venue from './components/Venue';
import Footer from './components/Footer';

import RegistrationModal from './components/modals/RegistrationModal';
import ProjectInterestModal from './components/modals/ProjectInterestModal';
import SponsorModal from './components/modals/SponsorModal';
import SpeakerBioModal from './components/modals/SpeakerBioModal';

import type { CSRProject, Speaker } from './types';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [sponsorModalOpen, setSponsorModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<CSRProject | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const openRegister = () => setRegModalOpen(true);
  const openSponsor = () => setSponsorModalOpen(true);

  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onOpenRegister={openRegister}
        onOpenSponsor={openSponsor}
      />

      <main>
        <Hero onOpenRegister={openRegister} onOpenSponsor={openSponsor} />
        <About />
        <WhyAttend />
        <Timeline />
        <Agenda />
        <Speakers onSelectSpeaker={setSelectedSpeaker} />
        <Projects onSelectProject={setSelectedProject} />
        <Sponsorship onOpenSponsor={openSponsor} />
        <Venue />
      </main>

      <Footer onOpenRegister={openRegister} />

      {regModalOpen && <RegistrationModal onClose={() => setRegModalOpen(false)} />}
      {selectedProject && <ProjectInterestModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      {sponsorModalOpen && <SponsorModal onClose={() => setSponsorModalOpen(false)} />}
      {selectedSpeaker && <SpeakerBioModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />}
    </div>
  );
}
