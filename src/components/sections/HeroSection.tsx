export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-sh-forest">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 h-212.5 w-full opacity-[0.08]">
        <img
          src="/images/atmospheric-backdrop.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative flex items-center gap-14 px-section-x py-27.5">
        {/* Left: Text content */}
        <div className="flex w-157.5 shrink-0 flex-col gap-7">
          {/* Label */}
          <p className="sh-label text-sh-cream">
            SageHaven Bancorp · Investor overview
          </p>

          {/* Headline */}
          <h1 className="sh-headline-xl text-sh-cream">
            Banking for everything you are building.
          </h1>

          {/* Introduction */}
          <div className="flex w-142.5 flex-col gap-7.5">
            <p className="sh-body-lg text-sh-cream">
              Sophisticated business banking and highly personal private
              banking, brought together in one modern relationship.
            </p>

            {/* CTAs */}
            <div className="flex gap-3.5">
              <a href="#documents" className="sh-button sh-button-primary">
                <span>Review offering documents</span>
                <span>→</span>
              </a>
              <a
                href="#fund"
                className="sh-button sh-button-outline text-sh-cream"
              >
                Fund your investment
              </a>
            </div>

            {/* Call invitation */}
            <a
              href="#schedule"
              className="group inline-flex items-center gap-2 text-[16px] text-sh-cream"
            >
              <span>Prefer a conversation first? Schedule a call</span>
              <img
                src="/images/arrow-northeast.svg"
                alt=""
                className="h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Right: Bridge image */}
        <div className="relative min-h-147.5 flex-1 overflow-hidden rounded-[32px]">
          <img
            src="/images/community-bridge.png"
            alt="Pittsburgh bridge connecting community"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
