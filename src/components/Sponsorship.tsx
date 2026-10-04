import { Check, Minus, ArrowRight } from 'lucide-react';
import { PARTNER_GROUPS, SPONSOR_TIERS, TIER_FEATURES } from '../data/mockData';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Sponsorship({ onOpenSponsor }: { onOpenSponsor: () => void }) {
  return (
    <>
      <section id="sponsorship" className="section overflow-hidden bg-maroon-600 text-sand-50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_0%,#9E2F46_0%,transparent_60%),radial-gradient(70%_60%_at_0%_100%,#3D0B16_0%,transparent_60%)]" />
        <div className="hatch pointer-events-none absolute right-0 top-24 h-48 w-14 text-maroon-400/30" />

        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="Sponsorship"
            title={
              <>
                Partner with a <em className="font-light text-sand-300">centenary.</em>
              </>
            }
            description="Associate your organisation with 100 years of IIT (ISM) Dhanbad — in front of CSR heads, PSU leadership and policymakers."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {SPONSOR_TIERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1.5 ${
                    t.featured
                      ? 'bg-sand-50 text-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] lg:-my-4 lg:py-12'
                      : 'bg-white/[0.06] ring-1 ring-sand-100/15 backdrop-blur'
                  }`}
                >
                  {t.featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-maroon-800 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sand-100">
                      Most chosen
                    </span>
                  )}
                  <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${t.featured ? 'text-maroon-500' : 'text-sand-300'}`}>
                    {t.name} Partner
                  </p>
                  <p className={`mt-4 font-display text-3xl font-semibold ${t.featured ? 'text-maroon-700' : 'text-sand-50'}`}>{t.price}</p>
                  <p className={`mt-3 text-[15px] leading-relaxed ${t.featured ? 'text-ink-soft' : 'text-sand-100/75'}`}>{t.blurb}</p>
                  <ul className="mt-6 space-y-3">
                    {t.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm">
                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${t.featured ? 'bg-maroon-600 text-sand-50' : 'bg-sand-100/15 text-sand-200'}`}>
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className={t.featured ? 'text-ink' : 'text-sand-100/90'}>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={onOpenSponsor} className={`mt-auto w-full ${t.featured ? 'btn-primary' : 'btn-outline-light'} !mt-8`}>
                    Enquire for {t.name}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          {/* comparison table */}
          <Reveal delay={150} className="mt-16">
            <div className="overflow-x-auto rounded-3xl bg-sand-50 text-ink shadow-lift">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead className="sticky top-0 bg-sand-100">
                  <tr>
                    <th className="px-6 py-5 font-display text-lg font-semibold text-maroon-900">Compare benefits</th>
                    {SPONSOR_TIERS.map((t) => (
                      <th key={t.name} className={`px-6 py-5 text-center text-xs font-semibold uppercase tracking-[0.2em] ${t.featured ? 'text-maroon-600' : 'text-ink-soft'}`}>
                        {t.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TIER_FEATURES.map((row) => (
                    <tr key={row.feature} className="border-t border-sand-200 transition-colors hover:bg-maroon-50/50">
                      <td className="px-6 py-4 font-medium">{row.feature}</td>
                      {row.values.map((v, i) => (
                        <td key={i} className={`px-6 py-4 text-center ${i === 1 ? 'bg-maroon-50/40' : ''}`}>
                          {v === true ? (
                            <Check className="mx-auto h-5 w-5 text-maroon-600" strokeWidth={2.5} />
                          ) : v === false ? (
                            <Minus className="mx-auto h-4 w-4 text-sand-400" />
                          ) : (
                            <span className="font-semibold text-maroon-800">{v}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-xs text-sand-200/70">
              Prices to be confirmed. Bank details and invoice are shared by the Corporate Relations team in reply to your enquiry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Partners wall */}
      <section id="partners" className="section bg-sand-100 !py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Sponsors & Partners" title="In good company" description="Partner logos will appear here as organisations confirm. Yours could be one of them." />
          <div className="mt-12 space-y-10">
            {PARTNER_GROUPS.map((g, gi) => (
              <Reveal key={g.tier} delay={gi * 100}>
                <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-ink-muted">{g.tier}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {Array.from({ length: g.slots }).map((_, i) => (
                    <button
                      key={i}
                      onClick={onOpenSponsor}
                      className={`group flex items-center justify-center rounded-2xl border border-dashed border-sand-400 bg-white/60 text-sm text-ink-muted transition-all duration-300 hover:border-maroon-400 hover:bg-white hover:text-maroon-700 ${
                        gi === 0 ? 'h-28 w-64' : gi === 1 ? 'h-24 w-52' : 'h-20 w-40'
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        Your logo here <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </span>
                    </button>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
