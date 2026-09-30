import type { Speaker } from '../../types';

interface SpeakerBioModalProps {
  speaker: Speaker;
  onClose: () => void;
}

export default function SpeakerBioModal({
  speaker,
  onClose,
}: SpeakerBioModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

        {/* Header */}
        <div className="bg-[#4A081B] px-6 py-5 text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Distinguished Speaker
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                Speaker Profile
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-2xl text-white/70 transition hover:text-white"
              aria-label="Close speaker profile"
            >
              ×
            </button>
          </div>
        </div>

        {/* Speaker Profile */}
        <div className="p-6">

          <div className="flex flex-col gap-6 sm:flex-row">

            {/* Photo */}
            <div className="mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-2xl bg-[#FAF6F0] sm:mx-0">
              <img
                src={speaker.photo}
                alt={speaker.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Basic Info */}
            <div className="flex-1">
              <span className="inline-block rounded-full bg-[#6B0C28]/5 px-3 py-1 text-xs font-semibold text-[#6B0C28]">
                {speaker.category}
              </span>

              <h3 className="mt-3 text-2xl font-bold text-[#4A081B]">
                {speaker.name}
              </h3>

              <p className="mt-1 font-semibold text-[#D4AF37]">
                {speaker.title}
              </p>

              <p className="mt-2 text-sm text-gray-600">
                {speaker.org}
              </p>
            </div>

          </div>

          {/* Session */}
          <div className="mt-7 rounded-xl bg-[#FAF6F0] p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Conclave Session
            </p>

            <p className="mt-2 font-semibold text-[#4A081B]">
              {speaker.sessionTitle}
            </p>
          </div>

          {/* Biography */}
          <div className="mt-7">
            <h4 className="text-lg font-bold text-[#4A081B]">
              Biography
            </h4>

            <p className="mt-3 leading-relaxed text-gray-600">
              {speaker.bio}
            </p>
          </div>

          {/* Close */}
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-[#6B0C28] px-6 py-3 font-semibold text-white transition hover:bg-[#4A081B]"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}