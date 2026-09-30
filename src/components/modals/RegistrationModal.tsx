import { useState } from 'react';
import type { RegistrationData } from '../../types';

interface RegistrationModalProps {
  onClose: () => void;
}

export default function RegistrationModal({
  onClose,
}: RegistrationModalProps) {
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    organisation: '',
    designation: '',
    category: '',
    email: '',
    phone: '',
    dietary: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]:
        type === 'checkbox'
          ? (event.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.consent) {
      return;
    }

    setSubmitted(true);
  };

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
        <div className="flex items-center justify-between bg-[#4A081B] px-6 py-5 text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              CSR Conclave 2026
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              Delegate Registration
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-white/70 transition hover:text-white"
            aria-label="Close registration modal"
          >
            ×
          </button>
        </div>

        {submitted ? (
          /* Success */
          <div className="px-6 py-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
              ✓
            </div>

            <h3 className="mt-5 text-2xl font-bold text-[#4A081B]">
              Registration Submitted
            </h3>

            <p className="mx-auto mt-3 max-w-md text-gray-600">
              Thank you for registering for CSR Conclave 2026.
              Your registration details have been received.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-7 rounded-md bg-[#6B0C28] px-6 py-3 font-semibold text-white transition hover:bg-[#4A081B]"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">

            <div className="grid gap-5 md:grid-cols-2">

              {/* Full Name */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Organisation */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Organisation
                </label>

                <input
                  type="text"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
                  placeholder="Organisation / Institution"
                />
              </div>

              {/* Designation */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Designation
                </label>

                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
                  placeholder="Your designation"
                />
              </div>

              {/* Category */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
                >
                  <option value="">Select category</option>
                  <option value="Industry">Industry</option>
                  <option value="PSU">PSU</option>
                  <option value="Government">Government</option>
                  <option value="Academia">Academia</option>
                  <option value="CSR Professional">CSR Professional</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
                  placeholder="Phone number"
                />
              </div>

              {/* Dietary */}
              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-gray-700">
                  Dietary Preference
                </label>

                <select
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
                >
                  <option value="">Select preference</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Other">Other</option>
                </select>
              </div>

            </div>

            {/* Consent */}
            <label className="mt-6 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 accent-[#6B0C28]"
              />

              <span className="text-sm leading-relaxed text-gray-600">
                I consent to the collection and use of my registration
                information for the CSR Conclave 2026.
              </span>
            </label>

            {/* Buttons */}
            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={!formData.consent}
                className="rounded-md bg-[#6B0C28] px-6 py-3 font-semibold text-white transition hover:bg-[#4A081B] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Submit Registration
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}