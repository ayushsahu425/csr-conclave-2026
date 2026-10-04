import { useState } from 'react';
import { CircleCheck } from 'lucide-react';
import type { CSRProject, ProjectLeadData } from '../../types';
import Modal from '../ui/Modal';
import Field from '../ui/Field';

export default function ProjectInterestModal({ project, onClose }: { project: CSRProject; onClose: () => void }) {
  const [form, setForm] = useState<ProjectLeadData>({
    projectId: project.id,
    projectTitle: project.title,
    applicantName: '',
    organisation: '',
    designation: '',
    email: '',
    phone: '',
    proposedBudget: '',
    message: '',
  });
  const [done, setDone] = useState(false);
  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <Modal onClose={onClose} eyebrow={`Express interest · ${project.focusArea}`} title={project.title}>
      {done ? (
        <div className="py-4 text-center">
          <CircleCheck className="mx-auto h-14 w-14 text-maroon-600" strokeWidth={1.5} />
          <p className="mt-4 text-ink-soft">
            Your interest has been routed to <strong className="text-ink">{project.piName}</strong> ({project.dept}) and the Corporate Relations
            office. Expect a response within three working days.
          </p>
          <button onClick={onClose} className="btn-primary mt-8">
            Done
          </button>
        </div>
      ) : (
        <>
          <div className="mb-6 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-sand-300 text-sm">
            {[
              ['Budget', project.budget],
              ['Beneficiaries', project.beneficiaries],
              ['PI', project.piName],
            ].map(([k, v]) => (
              <div key={k} className="bg-sand-100 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">{k}</p>
                <p className="mt-0.5 font-medium leading-snug text-maroon-800">{v}</p>
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <Field label="Your name">
              <input required name="applicantName" value={form.applicantName} onChange={set} className="input" />
            </Field>
            <Field label="Organisation">
              <input required name="organisation" value={form.organisation} onChange={set} className="input" />
            </Field>
            <Field label="Designation">
              <input required name="designation" value={form.designation} onChange={set} className="input" />
            </Field>
            <Field label="Indicative contribution">
              <select name="proposedBudget" value={form.proposedBudget} onChange={set} className="input">
                <option value="">Select range</option>
                <option>Up to ₹25 Lakhs</option>
                <option>₹25 – 50 Lakhs</option>
                <option>₹50 Lakhs – 1 Crore</option>
                <option>Full project funding</option>
              </select>
            </Field>
            <Field label="Email">
              <input required type="email" name="email" value={form.email} onChange={set} className="input" />
            </Field>
            <Field label="Phone">
              <input required type="tel" name="phone" value={form.phone} onChange={set} className="input" />
            </Field>
            <Field label="Message (optional)" className="sm:col-span-2">
              <textarea name="message" rows={3} value={form.message} onChange={set} className="input resize-none" />
            </Field>
            <button type="submit" className="btn-primary !py-3.5 sm:col-span-2">
              Submit interest
            </button>
          </form>
        </>
      )}
    </Modal>
  );
}
