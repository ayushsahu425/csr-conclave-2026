import type { Speaker } from '../../types';
import Avatar from '../ui/Avatar';
import Modal from '../ui/Modal';

export default function SpeakerBioModal({ speaker, onClose }: { speaker: Speaker; onClose: () => void }) {
  return (
    <Modal onClose={onClose} eyebrow={speaker.category} title={speaker.name} size="md">
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="h-36 w-36 shrink-0 overflow-hidden rounded-2xl shadow-card">
          <Avatar name={speaker.name} photo={speaker.photo} />
        </div>
        <div>
          <p className="font-semibold text-maroon-700">{speaker.title}</p>
          <p className="text-sm text-ink-muted">{speaker.org}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{speaker.bio}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-sand-100 p-4">
        <div>
          <p className="label !mb-0">Session</p>
          <p className="font-display text-lg text-maroon-900">{speaker.sessionTitle}</p>
        </div>
        <a href="#agenda" onClick={onClose} className="btn-outline !px-4 !py-2">
          View in agenda
        </a>
      </div>
      {speaker.linkedin && (
        <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-maroon-600 hover:underline">
          LinkedIn profile →
        </a>
      )}
    </Modal>
  );
}
