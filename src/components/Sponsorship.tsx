
import { Check, ArrowRight } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

interface SponsorshipProps {
  onOpenSponsor: (tier?: string) => void;
}

const SPONSOR_TIERS = [
  {
    name: 'Platinum',
    recognition: 'Title / Presenting Partner',
    price: '₹3 lakh and above',
    featured: true,
    blurb:
      'Exclusive or first-priority recognition as the Platinum Sponsor, subject to availability.',
    highlights: [
      'Largest logo placement on the event backdrop, invitation, brochure, website and digital promotions.',
      'Premium exhibition stall to showcase products, technologies, CSR initiatives and innovations.',
      'Dedicated social media promotional campaign highlighting the sponsor’s CSR contributions.',
      'Priority interaction with institute leadership, faculty, researchers, incubated startups and industry delegates.',
      'Opportunity to explore CSR partnerships in research infrastructure, clean energy, scholarships and community development.',
      'Special felicitation by institute leadership.',
      '10 complimentary delegate passes.',
    ],
  },
  {
    name: 'Diamond',
    recognition: 'Principal Partner',
    price: '₹1 lakh – ₹3 lakh',
    featured: false,
    blurb:
      'Very prominent recognition as the Principal Partner.',
    highlights: [
      'Prominent logo placement on the event backdrop, website and selected promotional materials.',
      'Recognition during the inaugural and valedictory sessions.',
      'Opportunity to participate in a panel discussion or industry interaction, subject to approval.',
      'Priority exhibition stall, subject to availability.',
      'Dedicated sponsor highlights through social media posts.',
      'Networking with institute leadership, faculty, students, researchers and corporate representatives.',
      'Opportunity to discuss collaborative projects in R&D, green energy, incubation and student development.',
      'Special sponsor memento and certificate of appreciation.',
      '8 complimentary delegate passes.',
    ],
  },
  {
    name: 'Gold',
    recognition: 'Gold Partner',
    price: '₹75,000 – ₹1 lakh',
    featured: false,
    blurb: 'Prominent recognition as a Gold Partner.',
    highlights: [
      'Logo placement on the event brochure, website, sponsor board and selected event creatives.',
      'Acknowledgment during event proceedings.',
      'Standard exhibition space, subject to availability.',
      'Inclusion in official social media sponsor acknowledgment.',
      'Networking with corporate delegates, academic experts and CSR professionals.',
      'Opportunity to explore student scholarships, research support and community outreach partnerships.',
      'Memento and certificate of appreciation.',
      '5 complimentary delegate passes.',
    ],
  },
  {
    name: 'Silver',
    recognition: 'Supporting Partner',
    price: '₹50,000 – ₹75,000',
    featured: false,
    blurb: 'Recognition as a Supporting Partner.',
    highlights: [
      'Logo inclusion in the sponsor section of the event brochure and website.',
      'Recognition on the collective sponsor display.',
      'Group acknowledgment through official social media communications.',
      'Networking access during the conclave.',
      'Opportunity to learn about CSR projects and potential collaborations with IIT (ISM) Dhanbad.',
      'Certificate of appreciation.',
      '2 complimentary delegate passes.',
    ],
  },
];

const COMPARISON = [
  {
    feature: 'Recognition level',
    values: [
      'Title / Presenting Partner',
      'Principal Partner',
      'Gold Partner',
      'Supporting Partner',
    ],
  },
  {
    feature: 'Logo placement',
    values: [
      'Highest prominence / Website also',
      'Very prominent / Website also',
      'Prominent',
      'Standard listing',
    ],
  },
  {
    feature: 'Inaugural session',
    values: [
      'Special recognition',
      'Recognition',
      'Mention',
      'Mention',
    ],
  },
  {
    feature: 'Exhibition space',
    values: [
      'Premium stall*',
      'Priority stall*',
      'Standard stall*',
      'Standard stall',
    ],
  },
  {
    feature: 'Social media',
    values: [
      'Dedicated campaign on all platforms',
      'Multiple posts from all platforms',
      'Promotional posts*',
      'Group acknowledgment',
    ],
  },
  {
    feature: 'Delegate passes',
    values: ['10*', '8*', '5*', '2*'],
  },
  {
    feature: 'Felicitation',
    values: [
      'Special memento',
      'Special memento',
      'Memento',
      'Memento',
    ],
  },
  {
    feature: 'Networking',
    values: [
      'Priority engagement',
      'Priority engagement',
      'Networking access',
      'Networking access',
    ],
  },
];

const PLATINUM_EXTRAS = [
  {
    title: 'Clean & Green Energy Partner',
    description:
      'Recognition associated with clean energy, green hydrogen, renewable energy integration, energy storage and decarbonization initiatives.',
  },
  {
    title: 'Research & Innovation Partner',
    description:
      'Explore sponsored research, laboratory development, technology transfer and collaboration with faculty and incubated startups.',
  },
  {
    title: 'Education & Student Welfare Partner',
    description:
      'Support scholarships, fellowships, educational access and career development initiatives.',
  },
  {
    title: 'Community Development Partner',
    description:
      'Support technical skill training, healthcare outreach, rural development and environmental restoration.',
  },
];

export default function Sponsorship({
  onOpenSponsor,
}: SponsorshipProps) {
  return (
    <>
      <section
        id="sponsorship"
        className="section relative overflow-hidden bg-maroon-600 text-sand-50"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_0%,#9E2F46_0%,transparent_60%),radial-gradient(70%_60%_at_0%_100%,#3D0B16_0%,transparent_60%)]" />

        <div className="hatch pointer-events-none absolute right-0 top-24 h-48 w-14 text-maroon-400/30" />

        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="Sponsorship"
            title={
              <>
                Shatabdi Samriddhi –{' '}
                <em className="font-light text-sand-300">
                  CSR Conclave 2026
                </em>
              </>
            }
            description="A platform for corporate organizations, academia and innovators to collaborate on education, research, clean energy and societal impact."
          />

          <p className="mt-5 text-center text-sm text-sand-200/80">
            4 December 2026 | Celebrating a Century of Excellence
          </p>

          {/* Sponsorship Categories */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:items-stretch">
            {SPONSOR_TIERS.map((tier, index) => (
              <Reveal key={tier.name} delay={index * 100}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1.5 ${
                    tier.featured
                      ? 'bg-sand-50 text-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]'
                      : 'bg-white/[0.06] ring-1 ring-sand-100/15 backdrop-blur'
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-7 rounded-full bg-maroon-800 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sand-100">
                      Title / Presenting Partner
                    </span>
                  )}

                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.25em] ${
                      tier.featured
                        ? 'text-maroon-500'
                        : 'text-sand-300'
                    }`}
                  >
                    {tier.name} Sponsor
                  </p>

                  <h3
                    className={`mt-2 text-sm font-medium ${
                      tier.featured
                        ? 'text-ink-soft'
                        : 'text-sand-200'
                    }`}
                  >
                    {tier.recognition}
                  </h3>

                  <p
                    className={`mt-5 font-display text-2xl font-semibold ${
                      tier.featured
                        ? 'text-maroon-700'
                        : 'text-sand-50'
                    }`}
                  >
                    {tier.price}
                  </p>

                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      tier.featured
                        ? 'text-ink-soft'
                        : 'text-sand-100/75'
                    }`}
                  >
                    {tier.blurb}
                  </p>

                  <ul className="mb-8 mt-6 space-y-3">
                    {tier.highlights.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            tier.featured
                              ? 'bg-maroon-600 text-sand-50'
                              : 'bg-sand-100/15 text-sand-200'
                          }`}
                        >
                          <Check
                            className="h-3 w-3"
                            strokeWidth={3}
                          />
                        </span>

                        <span
                          className={
                            tier.featured
                              ? 'text-ink'
                              : 'text-sand-100/90'
                          }
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onOpenSponsor(tier.name)}
                    className={`mt-auto w-full ${
                      tier.featured
                        ? 'btn-primary'
                        : 'btn-outline-light'
                    }`}
                  >
                    Enquire for {tier.name}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Additional Platinum Opportunities */}
          <Reveal delay={120} className="mt-16">
            <div className="rounded-3xl bg-white/[0.06] p-7 ring-1 ring-sand-100/15 backdrop-blur md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand-300">
                For Platinum Sponsors
              </p>

              <h3 className="mt-3 text-2xl font-semibold !text-sand-50">
                Additional CSR Partnership Opportunities
              </h3>

              <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {PLATINUM_EXTRAS.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/5 p-5 ring-1 ring-sand-100/10"
                  >
                    <h4 className="font-semibold text-sand-50">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-relaxed text-sand-100/75">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Comparison Table */}
          <Reveal delay={150} className="mt-16">
            <div className="overflow-x-auto rounded-3xl bg-sand-50 text-ink shadow-lift">
              <table className="w-full min-w-[850px] text-left text-sm">
                <thead className="bg-sand-100">
                  <tr>
                    <th className="px-5 py-5 font-display text-lg font-semibold text-maroon-900">
                      Benefit
                    </th>

                    {SPONSOR_TIERS.map((tier) => (
                      <th
                        key={tier.name}
                        className="px-5 py-5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-maroon-700"
                      >
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {COMPARISON.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-t border-sand-200 transition-colors hover:bg-maroon-50/50"
                    >
                      <td className="px-5 py-4 font-semibold text-maroon-900">
                        {row.feature}
                      </td>

                      {row.values.map((value, index) => (
                        <td
                          key={index}
                          className={`px-5 py-4 text-center text-ink-soft ${
                            index === 0 ? 'bg-maroon-50/40' : ''
                          }`}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Indicative Contribution */}
          <Reveal delay={180} className="mt-12">
            <div className="rounded-3xl bg-white/[0.06] p-7 ring-1 ring-sand-100/15 md:p-9">
              <h3 className="text-2xl font-semibold !text-sand-50">
                Indicative Sponsorship Contribution
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-sand-200/75">
                The following figures are illustrative proposals for discussion and are not official institute-approved rates.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {SPONSOR_TIERS.map((tier) => (
                  <div
                    key={tier.name}
                    className="rounded-2xl bg-white/5 p-5 ring-1 ring-sand-100/10"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand-300">
                      {tier.name}
                    </p>

                    <p className="mt-3 font-display text-xl font-semibold text-sand-50">
                      {tier.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Enquiry */}
          <Reveal delay={200} className="mt-12 text-center">
            <button
              onClick={() => onOpenSponsor()}
              className="btn-sand group !px-8"
            >
              Enquire About Sponsorship
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>

          <p className="mt-8 text-center text-xs leading-relaxed text-sand-200/70">
            All benefits remain subject to approval and availability.
          </p>
        </div>
      </section>
    </>
  );
}
