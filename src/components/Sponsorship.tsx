interface SponsorshipProps {
  onOpenSponsor: () => void;
}

const sponsorshipTiers = [
  {
    title: 'Strategic Partner',
    description:
      'For organisations seeking a deeper partnership with the CSR Conclave and its research ecosystem.',
  },
  {
    title: 'Knowledge Partner',
    description:
      'Support knowledge exchange, research showcases and meaningful CSR conversations.',
  },
  {
    title: 'CSR Partner',
    description:
      'Explore opportunities to support CSR-ready projects presented at the conclave.',
  },
];

export default function Sponsorship({
  onOpenSponsor,
}: SponsorshipProps) {
  return (
    <section
      id="sponsorship"
      className="bg-[#4A081B] py-20 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Partnership
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Partner With IIT (ISM)
          </h2>

          <p className="mt-5 leading-relaxed text-white/70">
            Connect with researchers, industry leaders and CSR
            stakeholders through the CSR Conclave 2026.
          </p>
        </div>

        {/* Partnership Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.title}
              className="rounded-xl border border-[#D4AF37]/30 bg-white/5 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37] font-bold text-[#4A081B]">
                ✓
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#D4AF37]">
                {tier.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {tier.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-[#D4AF37]/30 bg-white/5 p-8 text-center">
          <h3 className="text-2xl font-bold">
            Interested in partnering with us?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Submit a sponsorship enquiry to discuss partnership
            opportunities with the CSR Conclave team.
          </p>

          <button
            onClick={onOpenSponsor}
            className="mt-6 rounded-md bg-[#D4AF37] px-7 py-3 font-semibold text-[#4A081B] transition hover:brightness-110"
          >
            Submit Sponsorship Enquiry
          </button>
        </div>

      </div>
    </section>
  );
}