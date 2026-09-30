import iitDhanbadImage from '../assets/iitdhanbad.webp';
interface HeroProps {
  onOpenRegister: () => void;
  onOpenSponsor: () => void;
}

export default function Hero({
  onOpenRegister,
  onOpenSponsor,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#4A081B] text-white">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[40px] border-[#D4AF37]" />

        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border-[50px] border-[#D4AF37]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">

        {/* Two-column Hero */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              IIT (ISM) Dhanbad
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              CSR Conclave
              <span className="block text-[#D4AF37]">
                2026
              </span>
            </h1>

            <div className="my-8 h-px w-24 bg-[#D4AF37]" />

            <h2 className="text-2xl font-semibold md:text-3xl">
              Shatabdi Se Samriddhi
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Celebrating 100 years of knowledge, innovation and
              national impact through meaningful CSR partnerships.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <button
                onClick={onOpenRegister}
                className="rounded-md bg-[#D4AF37] px-6 py-3 font-semibold text-[#4A081B] transition hover:brightness-110"
              >
                Register as Delegate
              </button>

              <button
                onClick={onOpenSponsor}
                className="rounded-md border border-[#D4AF37] px-6 py-3 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#4A081B]"
              >
                Explore Sponsorship
              </button>

            </div>

            {/* Bottom information */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
              <span>100 Years of IIT (ISM)</span>
              <span>•</span>
              <span>Dhanbad, Jharkhand</span>
              <span>•</span>
              <span>2026</span>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Gold frame */}
            <div className="absolute -inset-3 rounded-2xl border border-[#D4AF37]/40" />

            {/* Image */}
            <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl">

              <img
               src={iitDhanbadImage}
                alt="IIT (ISM) Dhanbad campus"
                className="h-full w-full object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A081B]/40 via-transparent to-transparent" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}