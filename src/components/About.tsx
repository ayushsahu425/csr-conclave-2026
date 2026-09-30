import { CENTENARY_MILESTONES } from '../data/mockData';

export default function About() {
  return (
    <section id="about" className="bg-[#FAF6F0] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6B0C28]">
            About the Conclave
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#4A081B] md:text-4xl">
            Shatabdi Se Samriddhi
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Celebrating 100 years of knowledge and launching
            <span className="font-semibold text-[#6B0C28]">
              {' '}“Shatabdi Se Samriddhi”
            </span>
            {' '}for national impact.
          </p>
        </div>

        {/* Centenary Timeline */}
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {CENTENARY_MILESTONES.map((milestone) => (
            <div
              key={milestone.year}
              className="rounded-xl border border-[#D4AF37]/30 bg-white p-6 shadow-sm"
            >
              <div className="text-3xl font-bold text-[#D4AF37]">
                {milestone.year}
              </div>

              <h3 className="mt-3 text-lg font-semibold text-[#4A081B]">
                {milestone.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {milestone.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}