import { useState } from 'react';
import type { SponsorEnquiryData } from '../../types';

interface SponsorModalProps {
  onClose: () => void;
}

const sponsorshipTiers = [
  'Strategic Partner',
  'Knowledge Partner',
  'CSR Partner',
];

export default function SponsorModal({
  onClose,
}: SponsorModalProps) {
  const [formData, setFormData] = useState<SponsorEnquiryData>({
    companyName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    tier: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
        <div className="bg-[#4A081B] px-6 py-5 text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                CSR Conclave 2026
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                Sponsorship Enquiry
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-2xl text-white/70 transition hover:text-white"
              aria-label="Close sponsorship modal"
            >
              ×
            </button>
          </div>
        </div>

        {submitted ? (
          /* Success State */
          <div className="px-6 py-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
              ✓
            </div>

            <h3 className="mt-5 text-2xl font-bold text-[#4A081B]">
              Enquiry Submitted
            </h3>

            <p className="mx-auto mt-3 max-w-md text-gray-600">
              Thank you for your interest in partnering with
              CSR Conclave 2026. Your enquiry has been received.
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

              {/* Company Name */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Company Name
                </label>

                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  placeholder="Company / Organisation"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
                />
              </div>

              {/* Contact Person */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Contact Person
                </label>

                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  placeholder="Full name"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
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
                  placeholder="Your designation"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
                />
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
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
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
                  placeholder="Phone number"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6B0C28] focus:ring-2 focus:ring-[#4A081B]/10"
                />
              </div>

              {/* Tier */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Partnership Tier
                </label>

                <select
                  name="tier"
                  value={formData.tier}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
                >
                  <option value="">
                    Select partnership tier
                  </option>

                  {sponsorshipTiers.map((tier) => (
                    <option key={tier} value={tier}>
                      {tier}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your sponsorship interest..."
                  className="mt-2 w-full resize-none rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
                />
              </div>

            </div>

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
                className="rounded-md bg-[#6B0C28] px-6 py-3 font-semibold text-white transition hover:bg-[#4A081B]"
              >
                Submit Enquiry
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}