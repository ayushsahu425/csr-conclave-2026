import { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
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

  const [selectedProject, setSelectedProject] =
    useState<CSRProject | null>(null);

  const [selectedSpeaker, setSelectedSpeaker] =
    useState<Speaker | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF6F0] font-sans text-gray-900">

      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onOpenRegister={() => setRegModalOpen(true)}
        onOpenSponsor={() => setSponsorModalOpen(true)}
      />

      <Hero
        onOpenRegister={() => setRegModalOpen(true)}
        onOpenSponsor={() => setSponsorModalOpen(true)}
      />

      <About />

      <Timeline />

      <Agenda />

      <Speakers
        onSelectSpeaker={(speaker) => setSelectedSpeaker(speaker)}
      />

      <Projects
        onSelectProject={(project) => setSelectedProject(project)}
      />

      <Sponsorship
        onOpenSponsor={() => setSponsorModalOpen(true)}
      />

      <Venue />

      <Footer />

      {/* Registration Modal */}
      {regModalOpen && (
        <RegistrationModal
          onClose={() => setRegModalOpen(false)}
        />
      )}

      {/* Project Interest Modal */}
      {selectedProject && (
        <ProjectInterestModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Sponsorship Modal */}
      {sponsorModalOpen && (
        <SponsorModal
          onClose={() => setSponsorModalOpen(false)}
        />
      )}

      {/* Speaker Bio Modal */}
      {selectedSpeaker && (
        <SpeakerBioModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}

    </div>
  );
}