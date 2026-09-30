import { SPEAKERS_DATA } from '../data/mockData';
import type { Speaker } from '../types';

interface SpeakersProps {
  onSelectSpeaker: (speaker: Speaker) => void;
}

export default function Speakers({
  onSelectSpeaker,
}: SpeakersProps) {
  return (
    <section id="speakers" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6B0C28]">
            Distinguished Speakers
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#4A081B] md:text-4xl">
            Voices Shaping the Conclave
          </h2>

          <p className="mt-4 text-gray-600">
            Meet the academics and industry leaders contributing to
            the CSR Conclave 2026.
          </p>
        </div>

        {/* Speaker Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SPEAKERS_DATA.map((speaker) => (
            <button
              key={speaker.id}
              onClick={() => onSelectSpeaker(speaker)}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Photo */}
              <div className="aspect-square overflow-hidden bg-[#FAF6F0]">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="p-5">
                <span className="inline-block rounded-full bg-[#6B0C28]/5 px-3 py-1 text-xs font-semibold text-[#6B0C28]">
                  {speaker.category}
                </span>

                <h3 className="mt-4 text-lg font-bold text-[#4A081B]">
                  {speaker.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#D4AF37]">
                  {speaker.title}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  {speaker.org}
                </p>

                <p className="mt-4 text-xs font-medium text-gray-500">
                  {speaker.sessionTitle}
                </p>

                <span className="mt-4 inline-block text-sm font-semibold text-[#6B0C28]">
                  View Bio →
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}