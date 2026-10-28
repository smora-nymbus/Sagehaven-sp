import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "How to invest", href: "#how-to-invest" },
    { label: "Offering documents", href: "#documents" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-sh-cream">
      <div className="flex h-16 items-center justify-between px-5 sm:px-8 md:px-12 lg:h-21.5 lg:px-section-x">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <div className="relative flex items-center">
            {/* Garland + SH Monogram */}
            <div className="relative h-10 w-11 lg:h-14.5 lg:w-15.75">
              <img
                src="/images/garland.svg"
                alt=""
                className="absolute inset-0 h-full w-full"
              />
              <img
                src="/images/sh-monogram.svg"
                alt=""
                className="absolute left-[47%] top-[15%] h-[70%] w-[58%]"
              />
            </div>
            {/* Typemark - hidden on small mobile */}
            <img
              src="/images/typemark.svg"
              alt="SageHaven"
              className="ml-4 hidden h-6 w-32 sm:block lg:ml-6.25 lg:h-7.75 lg:w-41.25"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-sh-forest transition-colors hover:text-sh-sage"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#documents"
            className="sh-button sh-button-outline h-13.5 border-sh-forest text-[14px] text-sh-forest"
          >
            Review offering
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-sh-forest lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-black/10 bg-sh-cream px-5 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-[16px] text-sh-forest transition-colors hover:text-sh-sage"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#documents"
              onClick={() => setMobileMenuOpen(false)}
              className="sh-button sh-button-outline mt-2 w-full border-sh-forest text-center text-[14px] text-sh-forest"
            >
              Review offering
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
