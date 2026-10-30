import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/mockData';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>();

  return (
    <section id="faq" className="section bg-sand-100">
      <div className="container-x">
        <SectionHeading
          eyebrow="FAQs"
          title={
            <>
              Before You <em className="font-light text-maroon-600">Arrive</em>
            </>
          }
          description="Answers to common questions about the Conclave. For anything else, write to us at centenary@iitism.ac.in."
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-sand-300 rounded-3xl bg-white px-6 shadow-card ring-1 ring-sand-300/70 md:px-8">
          {FAQS.map((f, i) => {
            const isOpen = openFaq === i;

            return (
              <Reveal key={f.q} delay={i * 60}>
                <button
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-display text-lg transition-colors ${isOpen ? 'text-maroon-700' : 'text-maroon-900'}`}>
                    {f.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                      isOpen ? 'rotate-180 border-maroon-600 bg-maroon-600 text-sand-50' : 'border-sand-400 text-maroon-600'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <div className="accordion-body" data-open={isOpen}>
                  <div>
                    <p className="text-justified whitespace-pre-line pb-5 pr-12 text-[15px] leading-relaxed text-ink-soft">
                      {f.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}