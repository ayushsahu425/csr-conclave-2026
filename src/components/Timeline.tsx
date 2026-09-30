import { CENTENARY_MILESTONES } from '../data/mockData';

export default function Timeline() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6B0C28]">
            Our Journey
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#4A081B] md:text-4xl">
            A Century of Impact
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-5xl">

          {/* Horizontal line */}
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-[#D4AF37] md:block" />

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {CENTENARY_MILESTONES.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative text-center"
              >
                {/* Timeline dot */}
                <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#FAF6F0] bg-[#6B0C28] text-xs font-bold text-white shadow-md">
                  {index + 1}
                </div>

                {/* Year */}
                <div className="mt-5 text-2xl font-bold text-[#D4AF37]">
                  {milestone.year}
                </div>

                {/* Title */}
                <h3 className="mt-2 font-semibold text-[#4A081B]">
                  {milestone.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}