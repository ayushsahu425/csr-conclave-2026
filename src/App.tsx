import { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyAttend from './components/WhyAttend';
import Timeline from './components/Timeline';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import Venue from './components/Venue';
import Footer from './components/Footer';

import RegistrationModal from './components/modals/RegistrationModal';
import SpeakerBioModal from './components/modals/SpeakerBioModal';

import type { Speaker } from './types';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const openRegister = () => setRegModalOpen(true);

  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onOpenRegister={openRegister}
      />

      <main>
        <Hero onOpenRegister={openRegister} />
        <About />
        <WhyAttend />
        <Timeline />
        <Agenda />
        <Speakers onSelectSpeaker={setSelectedSpeaker} />
        <Venue />
      </main>

      <Footer onOpenRegister={openRegister} />

      {regModalOpen && <RegistrationModal onClose={() => setRegModalOpen(false)} />}
      {selectedSpeaker && <SpeakerBioModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />}
    </div>
  );
}
