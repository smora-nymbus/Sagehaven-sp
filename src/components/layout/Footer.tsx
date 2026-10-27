export function Footer() {
  const investorsLinks = [
    { label: "Overview", href: "#overview" },
    { label: "How to invest", href: "#how-to-invest" },
    { label: "Offering documents", href: "#documents" },
    { label: "Complete & fund investment", href: "#fund" },
  ];

  const connectLinks = [{ label: "Talk to the team", href: "#schedule" }];

  return (
    <footer className="w-full bg-black px-[182px] pb-10 pt-20">
      <div className="flex flex-col gap-10">
        {/* Footer Directory */}
        <div className="flex gap-16 pb-6">
          {/* Brand Introduction */}
          <div className="flex w-[340px] shrink-0 flex-col gap-6">
            {/* Logo */}
            <div className="relative inline-flex items-start">
              {/* Garland + SH Monogram */}
              <div className="relative h-[57px] w-[62px]">
                <img
                  src="/images/garland-footer.svg"
                  alt=""
                  className="absolute inset-0 h-full w-full"
                />
                <img
                  src="/images/sh-footer.svg"
                  alt=""
                  className="absolute left-[26.5px] top-[9px] h-[40px] w-[36.5px]"
                />
              </div>
              {/* Typemark */}
              <img
                src="/images/typemark-footer.svg"
                alt="SageHaven"
                className="ml-[24px] mt-[13px] h-[30px] w-[162px]"
              />
            </div>

            {/* Tagline */}
            <p className="w-[290px] text-[14px] leading-[1.6] text-[#f7f5ee]">
              Built for business. Grounded in relationships. Explore the next
              chapter with SageHaven Bancorp.
            </p>
          </div>

          {/* Investors Column */}
          <div className="flex flex-1 flex-col gap-5">
            <p className="sh-label-sm text-[#f7f5ee]">Investors</p>
            {investorsLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14.5px] text-[#f7f5ee] transition-colors hover:text-white/80"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Connect Column */}
          <div className="flex flex-1 flex-col gap-5">
            <p className="sh-label-sm text-[#f7f5ee]">Connect</p>
            {connectLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14.5px] text-[#f7f5ee] transition-colors hover:text-white/80"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[rgba(247,245,237,0.16)]" />

        {/* Investment Disclosures */}
        <div className="flex flex-col gap-[18px]">
          <p className="text-[16px] leading-[1.5] text-[#f7f5ee]">
            An investment is not a bank deposit. It is not FDIC insured and
            involves risk of capital loss.
          </p>
          <p className="text-[13px] leading-[1.7] text-[#f7f5ee]">
            This page is for general information only and is not an offer to
            sell or a solicitation of an offer to buy securities. Any offering
            is made solely through the official offering documents. Review those
            materials for complete terms, eligibility requirements and risk
            factors before making an investment decision.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-between pt-[10px]">
          <p className="text-[13px] text-[#f7f5ee]">
            © 2026 SageHaven Bancorp. All rights reserved.
          </p>
          <p className="text-[20px] text-[#f7f5ee]">
            SageHaven Bancorp · Investors
          </p>
        </div>
      </div>
    </footer>
  );
}
