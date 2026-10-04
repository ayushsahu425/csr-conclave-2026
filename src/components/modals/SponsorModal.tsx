import { useState } from 'react';
import { CircleCheck } from 'lucide-react';
import { SPONSOR_TIERS } from '../../data/mockData';
import type { SponsorEnquiryData } from '../../types';
import Modal from '../ui/Modal';
import Field from '../ui/Field';

const EMPTY: SponsorEnquiryData = { companyName: '', contactPerson: '', designation: '', email: '', phone: '', tier: '', message: '' };

export default function SponsorModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState(EMPTY);
  const [done, setDone] = useState(false);
  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  if (done) {
    return (
      <Modal onClose={onClose} eyebrow="Sponsorship" title="Enquiry received" size="md">
        <div className="py-4 text-center">
          <CircleCheck className="mx-auto h-14 w-14 text-maroon-600" strokeWidth={1.5} />
          <p className="mt-4 text-ink-soft">
            Thank you, <strong className="text-ink">{form.contactPerson}</strong>. The brochure is on its way to{' '}
            <strong className="text-ink">{form.email}</strong>, and our Corporate Relations team will follow up within two working days with
            invoice and bank details.
          </p>
          <button onClick={onClose} className="btn-primary mt-8">
            Done
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal onClose={onClose} eyebrow="Partner with the centenary" title="Sponsorship Enquiry">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
        className="grid gap-4 sm:grid-cols-2"
      >
        <div className="grid grid-cols-3 gap-2 sm:col-span-2">
          {SPONSOR_TIERS.map((t) => (
            <button
              type="button"
              key={t.name}
              onClick={() => setForm((p) => ({ ...p, tier: t.name }))}
              className={`rounded-2xl border p-3 text-left transition-all duration-300 ${
                form.tier === t.name ? 'border-maroon-600 bg-maroon-600 text-sand-50 shadow-card' : 'border-sand-300 bg-white hover:border-maroon-300'
              }`}
            >
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] opacity-70">Tier</span>
              <span className="font-display text-lg">{t.name}</span>
            </button>
          ))}
        </div>
        <Field label="Company" className="sm:col-span-2">
          <input required name="companyName" value={form.companyName} onChange={set} className="input" />
        </Field>
        <Field label="Contact person">
          <input required name="contactPerson" value={form.contactPerson} onChange={set} className="input" />
        </Field>
        <Field label="Designation">
          <input required name="designation" value={form.designation} onChange={set} className="input" />
        </Field>
        <Field label="Email">
          <input required type="email" name="email" value={form.email} onChange={set} className="input" />
        </Field>
        <Field label="Phone">
          <input required type="tel" name="phone" value={form.phone} onChange={set} className="input" />
        </Field>
        <Field label="Message (optional)" className="sm:col-span-2">
          <textarea name="message" rows={3} value={form.message} onChange={set} className="input resize-none" placeholder="Tell us about your CSR priorities" />
        </Field>
        <button type="submit" disabled={!form.tier} className="btn-primary !py-3.5 sm:col-span-2">
          {form.tier ? `Send enquiry for ${form.tier}` : 'Select a tier to continue'}
        </button>
      </form>
    </Modal>
  );
}
