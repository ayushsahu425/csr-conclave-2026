import { useState } from 'react';
import type { CSRProject, ProjectLeadData } from '../../types';

interface ProjectInterestModalProps {
  project: CSRProject;
  onClose: () => void;
}

export default function ProjectInterestModal({
  project,
  onClose,
}: ProjectInterestModalProps) {
  const [formData, setFormData] = useState<ProjectLeadData>({
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

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
                CSR Project
              </p>

              <h2 className="mt-1 text-xl font-bold">
                Express Interest
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-2xl text-white/70 transition hover:text-white"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>

        {/* Project Summary */}
        <div className="border-b border-gray-200 bg-[#FAF6F0] px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6B0C28]">
            Selected Project
          </p>

          <h3 className="mt-2 text-lg font-bold text-[#4A081B]">
            {project.title}
          </h3>

          <div className="mt-3 grid gap-3 text-sm sm:grid-cols-3">
            <div>
              <span className="text-gray-500">Focus Area</span>
              <p className="font-semibold text-gray-800">
                {project.focusArea}
              </p>
            </div>

            <div>
              <span className="text-gray-500">Budget</span>
              <p className="font-semibold text-[#6B0C28]">
                {project.budget}
              </p>
            </div>

            <div>
              <span className="text-gray-500">PI</span>
              <p className="font-semibold text-gray-800">
                {project.piName}
              </p>
            </div>
          </div>
        </div>

        {submitted ? (
          /* Success State */
          <div className="px-6 py-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
              ✓
            </div>

            <h3 className="mt-5 text-2xl font-bold text-[#4A081B]">
              Interest Submitted
            </h3>

            <p className="mx-auto mt-3 max-w-md text-gray-600">
              Thank you for expressing interest in this CSR project.
              The project team can review your enquiry and connect
              with you for further discussion.
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

              {/* Applicant Name */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Applicant Name
                </label>

                <input
                  type="text"
                  name="applicantName"
                  value={formData.applicantName}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
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
                  placeholder="Organisation / Company"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
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
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
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
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
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
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
                />
              </div>

              {/* Proposed Budget */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Proposed Budget
                </label>

                <input
                  type="text"
                  name="proposedBudget"
                  value={formData.proposedBudget}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
                />
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
                  placeholder="Tell us about your interest in this project..."
                  className="mt-2 w-full resize-none rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-[#6B0C28] focus:ring-2 focus:ring-[#6B0C28]/10"
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
                Submit Interest
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}