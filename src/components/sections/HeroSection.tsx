export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#243829]">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 h-[850px] w-full opacity-[0.08]">
        <img
          src="/images/atmospheric-backdrop.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative flex items-center gap-14 px-[182px] py-[110px]">
        {/* Left: Text content */}
        <div className="flex w-[630px] shrink-0 flex-col gap-7">
          {/* Label */}
          <p className="sh-label text-[#f7f5ee]">
            SageHaven Bancorp · Investor overview
          </p>

          {/* Headline */}
          <h1 className="sh-headline-xl text-[#f7f5ee]">
            Banking for everything you are building.
          </h1>

          {/* Introduction */}
          <div className="flex w-[570px] flex-col gap-[30px]">
            <p className="sh-body-lg text-[#f7f5ee]">
              Sophisticated business banking and highly personal private
              banking, brought together in one modern relationship.
            </p>

            {/* CTAs */}
            <div className="flex gap-[14px]">
              <a
                href="#documents"
                className="sh-button sh-button-primary"
              >
                <span>Review offering documents</span>
                <span>→</span>
              </a>
              <a
                href="#fund"
                className="sh-button sh-button-outline text-[#f7f5ee]"
              >
                Fund your investment
              </a>
            </div>

            {/* Call invitation */}
            <a
              href="#schedule"
              className="group inline-flex items-center gap-2 text-[16px] text-[#f7f5ee]"
            >
              <span>Prefer a conversation first?  Schedule a call</span>
              <img
                src="/images/arrow-northeast.svg"
                alt=""
                className="h-[10px] w-[10px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Right: Bridge image */}
        <div className="relative min-h-[590px] flex-1 overflow-hidden rounded-[32px]">
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
