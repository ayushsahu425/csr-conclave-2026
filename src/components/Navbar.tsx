interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onOpenRegister: () => void;
  onOpenSponsor: () => void;
}

export default function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen,
  onOpenRegister,
  onOpenSponsor,
}: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-[#4A081B] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <a href="#" className="text-xl font-bold">
          IIT (ISM) Dhanbad
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <a href="#about" className="hover:text-[#D4AF37]">
            About
          </a>

          <a href="#agenda" className="hover:text-[#D4AF37]">
            Agenda
          </a>

          <a href="#speakers" className="hover:text-[#D4AF37]">
            Speakers
          </a>

          <a href="#projects" className="hover:text-[#D4AF37]">
            Projects
          </a>

          <a href="#venue" className="hover:text-[#D4AF37]">
            Venue
          </a>

          <button
            onClick={onOpenRegister}
            className="rounded-md bg-[#D4AF37] px-4 py-2 font-semibold text-[#4A081B]"
          >
            Register
          </button>

          <button
            onClick={onOpenSponsor}
            className="rounded-md border border-[#D4AF37] px-4 py-2 font-semibold text-[#D4AF37]"
          >
            Sponsor
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-white/20 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>

            <a href="#agenda" onClick={() => setMobileMenuOpen(false)}>
              Agenda
            </a>

            <a href="#speakers" onClick={() => setMobileMenuOpen(false)}>
              Speakers
            </a>

            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </a>

            <a href="#venue" onClick={() => setMobileMenuOpen(false)}>
              Venue
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="rounded-md bg-[#D4AF37] px-4 py-2 font-semibold text-[#4A081B]"
            >
              Register
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSponsor();
              }}
              className="rounded-md border border-[#D4AF37] px-4 py-2 font-semibold text-[#D4AF37]"
            >
              Sponsor
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}