import { MapPin, Train, Plane } from 'lucide-react';

export default function Venue() {
  return (
    <section id="venue" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6B0C28]">
            Venue & Access
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#4A081B] md:text-4xl">
            Golden Jubilee Hall
          </h2>

          <p className="mt-4 text-gray-600">
            IIT (ISM) Campus, Dhanbad
          </p>
        </div>

        {/* Venue Content */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {/* Venue Card */}
          <div className="rounded-2xl bg-[#FAF6F0] p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6B0C28] text-white">
              <MapPin className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-[#4A081B]">
              Golden Jubilee Hall
            </h3>

            <p className="mt-3 leading-relaxed text-gray-600">
              IIT (ISM) Campus, Dhanbad, Jharkhand
            </p>

            <div className="mt-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=IIT+ISM+Dhanbad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-[#6B0C28] px-5 py-3 font-semibold text-white transition hover:bg-[#4A081B]"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Travel Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

            <h3 className="text-xl font-bold text-[#4A081B]">
              How to Reach
            </h3>

            {/* Railway */}
            <div className="mt-6 flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FAF6F0] text-[#6B0C28]">
                <Train className="h-5 w-5" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Dhanbad Junction
                </h4>

                <p className="mt-1 text-sm text-gray-600">
                  Approximately 3 km from the IIT (ISM) campus.
                </p>
              </div>
            </div>

            {/* Airports */}
            <div className="mt-6 flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FAF6F0] text-[#6B0C28]">
                <Plane className="h-5 w-5" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Nearest Airports
                </h4>

                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  Ranchi — 140 km
                  <br />
                  Gaya — 140 km
                  <br />
                  Kolkata — 260 km
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}