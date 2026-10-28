export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-sh-forest">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 h-full w-full opacity-[0.08] lg:h-212.5">
        <img
          src="/images/atmospheric-backdrop.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-8 px-5 py-12 sm:px-8 md:gap-12 md:px-12 md:py-16 lg:flex-row lg:items-center lg:gap-14 lg:px-section-x lg:py-27.5">
        {/* Left: Text content */}
        <div className="flex flex-col gap-5 md:gap-7 lg:w-157.5 lg:shrink-0">
          {/* Label */}
          <p className="sh-label text-sh-cream">
            Sagehaven Bancorp · Investor overview
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl leading-[1.08] text-sh-cream sm:text-5xl md:text-6xl lg:text-[88px] lg:leading-[1.04] lg:tracking-[-0.01em]">
            Banking for everything you are building.
          </h1>

          {/* Introduction */}
          <div className="flex flex-col gap-5 md:gap-7.5 lg:w-142.5">
            <p className="text-base leading-relaxed text-sh-cream sm:text-lg md:text-xl md:leading-[1.52]">
              Sophisticated business banking and highly personal private
              banking, brought together in one modern relationship.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-3.5">
              <a
                href="#documents"
                className="sh-button sh-button-primary w-full justify-center sm:w-auto"
              >
                <span>Review offering documents</span>
                <span>→</span>
              </a>
              <a
                href="#fund"
                className="sh-button sh-button-outline w-full justify-center text-sh-cream sm:w-auto"
              >
                Fund your investment
              </a>
            </div>

            {/* Call invitation */}
            <a
              href="#schedule"
              className="group inline-flex items-center gap-2 text-[14px] text-sh-cream sm:text-[16px]"
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
        <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 md:h-96 lg:min-h-147.5 lg:flex-1 lg:rounded-[32px]">
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
