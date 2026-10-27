export function Header() {
  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "How to invest", href: "#how-to-invest" },
    { label: "Offering documents", href: "#documents" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-sh-cream">
      <div className="flex h-21.5 items-center justify-between px-section-x">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <div className="relative flex items-center">
            {/* Garland + SH Monogram */}
            <div className="relative h-14.5 w-15.75">
              <img
                src="/images/garland.svg"
                alt=""
                className="absolute inset-0 h-full w-full"
              />
              <img
                src="/images/sh-monogram.svg"
                alt=""
                className="absolute left-6.75 top-2.25 h-10.25 w-9.25"
              />
            </div>
            {/* Typemark */}
            <img
              src="/images/typemark.svg"
              alt="SageHaven"
              className="ml-6.25 h-7.75 w-41.25"
            />
          </div>
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-10">
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
      </div>
    </header>
  );
}
