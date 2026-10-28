export function Footer() {
  const investorsLinks = [
    { label: "Overview", href: "#overview" },
    { label: "How to invest", href: "#how-to-invest" },
    { label: "Offering documents", href: "#documents" },
    { label: "Complete & fund investment", href: "#fund" },
  ];

  const connectLinks = [{ label: "Talk to the team", href: "#schedule" }];

  return (
    <footer className="w-full bg-black px-5 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-16 md:px-12 lg:px-section-x lg:pt-20">
      <div className="flex flex-col gap-8 sm:gap-10">
        {/* Footer Directory */}
        <div className="flex flex-col gap-10 pb-4 sm:pb-6 md:flex-row md:gap-12 lg:gap-16">
          {/* Brand Introduction */}
          <div className="flex flex-col gap-5 sm:gap-6 md:w-72 md:shrink-0 lg:w-85">
            {/* Logo */}
            <div className="relative inline-flex items-start">
              {/* Garland + SH Monogram */}
              <div className="relative h-12 w-13 sm:h-14.25 sm:w-15.5">
                <img
                  src="/images/garland-footer.svg"
                  alt=""
                  className="absolute inset-0 h-full w-full"
                />
                <img
                  src="/images/sh-footer.svg"
                  alt=""
                  className="absolute left-[43%] top-[16%] h-[70%] w-[59%]"
                />
              </div>
              {/* Typemark */}
              <img
                src="/images/typemark-footer.svg"
                alt="Sagehaven"
                className="ml-4 mt-2.5 h-6 w-32 sm:ml-6 sm:mt-3.25 sm:h-7.5 sm:w-40.5"
              />
            </div>

            {/* Tagline */}
            <p className="max-w-[290px] text-sm leading-relaxed text-sh-cream sm:text-[14px] sm:leading-[1.6] lg:w-72.5">
              Built for business. Grounded in relationships. Explore the next
              chapter with Sagehaven Bancorp.
            </p>
          </div>

          {/* Links Columns - side by side on mobile */}
          <div className="flex flex-1 gap-8 sm:gap-12 md:gap-16">
            {/* Investors Column */}
            <div className="flex flex-1 flex-col gap-4 sm:gap-5">
              <p className="sh-label-sm text-sh-cream">Investors</p>
              {investorsLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-sh-cream transition-colors hover:text-white/80 sm:text-[14.5px]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Connect Column */}
            <div className="flex flex-1 flex-col gap-4 sm:gap-5">
              <p className="sh-label-sm text-sh-cream">Connect</p>
              {connectLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-sh-cream transition-colors hover:text-white/80 sm:text-[14.5px]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[rgba(247,245,237,0.16)]" />

        {/* Investment Disclosures */}
        <div className="flex flex-col gap-3 sm:gap-4.5">
          <p className="text-sm leading-relaxed text-sh-cream sm:text-base sm:leading-normal">
            An investment is not a bank deposit. It is not FDIC insured and
            involves risk of capital loss.
          </p>
          <p className="text-xs leading-relaxed text-sh-cream sm:text-[13px] sm:leading-[1.7]">
            This page is for general information only and is not an offer to
            sell or a solicitation of an offer to buy securities. Any offering
            is made solely through the official offering documents. Review those
            materials for complete terms, eligibility requirements and risk
            factors before making an investment decision.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between sm:pt-2.5">
          <p className="text-xs text-sh-cream sm:text-[13px]">
            © 2026 Sagehaven Bancorp. All rights reserved.
          </p>
          <p className="text-sm text-sh-cream sm:text-lg lg:text-[20px]">
            Sagehaven Bancorp · Investors
          </p>
        </div>
      </div>
    </footer>
  );
}
