export function Header() {
  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "How to invest", href: "#how-to-invest" },
    { label: "Offering documents", href: "#documents" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-[#f7f5ee]">
      <div className="flex h-[86px] items-center justify-between px-[182px]">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <div className="relative flex items-center">
            {/* Garland + SH Monogram */}
            <div className="relative h-[58px] w-[63px]">
              <img
                src="/images/garland.svg"
                alt=""
                className="absolute inset-0 h-full w-full"
              />
              <img
                src="/images/sh-monogram.svg"
                alt=""
                className="absolute left-[27px] top-[9px] h-[41px] w-[37px]"
              />
            </div>
            {/* Typemark */}
            <img
              src="/images/typemark.svg"
              alt="SageHaven"
              className="ml-[25px] h-[31px] w-[165px]"
            />
          </div>
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-[#243829] transition-colors hover:text-[#3a503b]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#documents"
            className="sh-button sh-button-outline h-[54px] border-[#243829] text-[14px] text-[#243829]"
          >
            Review offering
          </a>
        </nav>
      </div>
    </header>
  );
}
