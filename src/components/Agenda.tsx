import { AGENDA_DATA } from '../data/mockData';

export default function Agenda() {
  return (
    <section id="agenda" className="bg-[#FAF6F0] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6B0C28]">
            Programme
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#4A081B] md:text-4xl">
            Conclave Agenda
          </h2>

          <p className="mt-4 text-gray-600">
            A day of research showcases, CSR leadership discussions,
            project pitches and partnership opportunities.
          </p>
        </div>

        {/* Agenda Items */}
        <div className="mx-auto mt-12 max-w-5xl space-y-5">
          {AGENDA_DATA.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-[#D4AF37]/30 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start">

                {/* Time */}
                <div className="shrink-0 md:w-44">
                  <p className="font-semibold text-[#6B0C28]">
                    {item.time}
                  </p>

                  <span className="mt-2 inline-block rounded-full bg-[#FAF6F0] px-3 py-1 text-xs font-medium text-gray-600">
                    {item.type}
                  </span>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#4A081B]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#D4AF37]">
                    {item.session}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                  {/* Speakers */}
                  {item.speakers.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Speakers
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.speakers.map((speaker) => (
                          <span
                            key={speaker}
                            className="rounded-full bg-[#6B0C28]/5 px-3 py-1 text-sm text-[#6B0C28]"
                          >
                            {speaker}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Venue */}
                  <div className="mt-4 text-sm text-gray-500">
                    <span className="font-semibold">Venue:</span>{' '}
                    {item.venue}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}