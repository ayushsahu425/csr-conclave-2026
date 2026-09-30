export default function Footer() {
  return (
    <footer className="bg-[#4A081B] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              IIT (ISM) Dhanbad
            </h2>

            <p className="mt-2 text-[#D4AF37] font-semibold">
              CSR Conclave 2026
            </p>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Shatabdi Se Samriddhi — celebrating a century of
              knowledge, innovation and national impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#D4AF37]">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <a
                href="#about"
                className="transition hover:text-white"
              >
                About
              </a>

              <a
                href="#agenda"
                className="transition hover:text-white"
              >
                Agenda
              </a>

              <a
                href="#speakers"
                className="transition hover:text-white"
              >
                Speakers
              </a>

              <a
                href="#projects"
                className="transition hover:text-white"
              >
                CSR Projects
              </a>

              <a
                href="#sponsorship"
                className="transition hover:text-white"
              >
                Sponsorship
              </a>

              <a
                href="#venue"
                className="transition hover:text-white"
              >
                Venue
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#D4AF37]">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p>
                IIT (ISM) Dhanbad
              </p>

              <p>
                Dhanbad, Jharkhand, India
              </p>

              <p>
                CSR Conclave 2026
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-white/50 md:flex-row md:items-center md:justify-between">

            <p>
              © 2026 IIT (ISM) Dhanbad. All rights reserved.
            </p>

            <p>
              CSR Conclave 2026
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}