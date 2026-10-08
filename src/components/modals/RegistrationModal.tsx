import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { CalendarPlus, CircleCheck, Share2 } from 'lucide-react';
import { EVENT } from '../../data/mockData';
import { downloadICS } from '../../lib/calendar';
import type { IssuedPass, RegistrationData } from '../../types';
import Modal from '../ui/Modal';
import Field from '../ui/Field';

const CATEGORIES = ['CSR Head / Foundation', 'PSU', 'Government', 'Industry', 'Academia / Faculty', 'Student', 'Media', 'Other'];
const DIETARY = ['Vegetarian', 'Non-Vegetarian'];

// In-memory duplicate check (replace with API call once the backend is wired up).
const registeredEmails = new Set<string>();

const EMPTY: RegistrationData = {
  fullName: '',
  organisation: '',
  designation: '',
  category: '',
  email: '',
  phone: '',
  dietary: '',
  consent: false,
};

export default function RegistrationModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<RegistrationData>(EMPTY);
  const [error, setError] = useState('');
  const [pass, setPass] = useState<IssuedPass | null>(null);
  const [qr, setQr] = useState('');

  useEffect(() => {
    if (!pass) return;
    QRCode.toDataURL(`CSR26|${pass.passId}|${pass.fullName}|${pass.email}`, {
      margin: 1,
      width: 320,
      color: { dark: '#3D0B16', light: '#FDFAF5' },
    }).then(setQr);
  }, [pass]);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
    setError('');
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = form.email.trim().toLowerCase();
    if (!/^[6-9]\d{9}$|^\+?\d[\d\s-]{8,14}$/.test(form.phone.trim())) return setError('Please enter a valid phone number.');
    if (registeredEmails.has(email)) return setError('This email is already registered. Check your inbox for your pass.');
    if (!form.consent) return setError('Please accept the consent to continue.');
    registeredEmails.add(email);
    setPass({
      ...form,
      passId: `SS26-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
      timestamp: new Date().toISOString(),
    });
  };

  const share = async () => {
    const text = `I'm attending ${EVENT.name} – ${EVENT.subtitle} at IIT (ISM) Dhanbad on ${EVENT.dateLabel}.`;
    if (navigator.share) {
      try {
        await navigator.share({ title: EVENT.name, text, url: location.href });
      } catch {
        /* dismissed */
      }
    } else {
      await navigator.clipboard?.writeText(`${text} ${location.href}`);
    }
  };

  if (pass) {
    return (
      <Modal onClose={onClose} eyebrow="Registration confirmed" title="You're registered!" size="md">
        <div className="text-center">
          <CircleCheck className="mx-auto h-12 w-12 text-maroon-600" strokeWidth={1.5} />
          <p className="mt-3 text-ink-soft">
            A confirmation with your QR pass has been sent to <strong className="text-ink">{pass.email}</strong>.
          </p>
        </div>

        {/* Pass */}
        <div className="relative mt-6 overflow-hidden rounded-3xl bg-white shadow-lift ring-1 ring-sand-300">
          <div className="bg-maroon-600 px-6 py-4 text-sand-50">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-sand-300">Delegate pass</p>
            <p className="font-display text-xl">{EVENT.name}</p>
          </div>
          <div className="flex flex-col items-center gap-5 p-6 sm:flex-row sm:items-start">
            {qr ? <img src={qr} alt="QR pass" className="h-36 w-36 rounded-xl" /> : <div className="h-36 w-36 animate-pulse rounded-xl bg-sand-200" />}
            <dl className="flex-1 space-y-2 text-sm">
              <div>
                <dt className="label !mb-0">Name</dt>
                <dd className="font-display text-lg text-maroon-900">{pass.fullName}</dd>
              </div>
              <div>
                <dt className="label !mb-0">Organisation</dt>
                <dd>{pass.organisation}</dd>
              </div>
              <div className="flex gap-6">
                <div>
                  <dt className="label !mb-0">Pass ID</dt>
                  <dd className="font-mono font-semibold text-maroon-700">{pass.passId}</dd>
                </div>
                <div>
                  <dt className="label !mb-0">Date</dt>
                  <dd>{EVENT.shortDate}</dd>
                </div>
              </div>
            </dl>
          </div>
          <div className="border-t border-dashed border-sand-300 bg-sand-50 px-6 py-3 text-xs text-ink-muted">{EVENT.venue}</div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button onClick={() => downloadICS()} className="btn-primary">
            <CalendarPlus className="h-4 w-4" /> Add to calendar
          </button>
          <button onClick={share} className="btn-outline">
            <Share2 className="h-4 w-4" /> Share
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal onClose={onClose} eyebrow={`${EVENT.subtitle} · ${EVENT.dateLabel}`} title="Delegate Registration">
      <div className="mb-6 flex flex-wrap gap-2 text-xs">
        <span className="chip">Complimentary for invited delegates</span>
        <span className="chip">QR pass by email</span>
      </div>
      <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" className="sm:col-span-2">
          <input required name="fullName" value={form.fullName} onChange={set} className="input" placeholder="e.g. Ananya Sharma" />
        </Field>
        <Field label="Organisation">
          <input required name="organisation" value={form.organisation} onChange={set} className="input" />
        </Field>
        <Field label="Designation">
          <input required name="designation" value={form.designation} onChange={set} className="input" />
        </Field>
        <Field label="Category">
          <select required name="category" value={form.category} onChange={set} className="input">
            <option value="">Select category</option>
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="Dietary preference">
          <select name="dietary" value={form.dietary} onChange={set} className="input">
            <option value="">Select preference</option>
            {DIETARY.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="Email">
          <input required type="email" name="email" value={form.email} onChange={set} className="input" placeholder="name@company.com" />
        </Field>
        <Field label="Phone">
          <input required type="tel" name="phone" value={form.phone} onChange={set} className="input" placeholder="+91 98xxxxxxxx" />
        </Field>

        <label className="flex items-start gap-3 rounded-xl bg-sand-100 p-4 text-sm text-ink-soft sm:col-span-2">
          <input type="checkbox" name="consent" checked={form.consent} onChange={set} className="mt-0.5 h-4 w-4 accent-maroon-600" />
          I agree to be contacted by the Office of Corporate Relations, IIT (ISM) Dhanbad about the Conclave and consent to my details being used for event logistics.
        </label>

        {error && <p className="rounded-xl bg-maroon-50 px-4 py-3 text-sm font-medium text-maroon-700 sm:col-span-2">{error}</p>}

        <button type="submit" className="btn-primary !py-3.5 sm:col-span-2">
          Complete registration
        </button>
      </form>
    </Modal>
  );
}
