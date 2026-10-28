export function CommunitySection() {
  return (
    <section className="w-full bg-sh-forest-deep px-5 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-section-x lg:pb-25 lg:pt-section-y">
      <div className="flex flex-col gap-10 md:gap-16">
        {/* Community Invitation */}
        <div className="flex flex-col items-center gap-5 text-center md:gap-7">
          {/* Label */}
          <p className="sh-label text-sh-cream">Built around community</p>

          {/* Headline */}
          <h2 className="max-w-4xl font-serif text-3xl leading-[1.1] text-sh-cream sm:text-4xl md:text-5xl lg:w-250 lg:text-[60px] lg:leading-[1.1]">
            Built for the community.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Inspired by what comes next.
          </h2>

          {/* Description */}
          <div className="max-w-2xl lg:w-190">
            <p className="text-base leading-relaxed text-sh-cream sm:text-lg md:text-xl md:leading-[1.6]">
              Thank you for your interest in Sagehaven Bancorp.
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              Take a closer look at what we're building, and the role you could
              play in its future.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:gap-3.5 sm:pt-3">
            <a
              href="#documents"
              className="sh-button sh-button-primary group w-full justify-center sm:w-auto"
            >
              <span>Review offering documents</span>
              <span className="sh-arrow-animate">→</span>
            </a>
            <a
              href="#fund"
              className="sh-button sh-button-outline w-full justify-center text-sh-cream sm:w-auto"
            >
              Fund investment
            </a>
            <a
              href="#schedule"
              className="sh-button sh-button-outline w-full justify-center text-sh-cream sm:w-auto"
            >
              Schedule a call
            </a>
          </div>
        </div>

        {/* Community Panorama */}
        <div className="sh-image-container relative h-48 w-full overflow-hidden rounded-2xl sm:h-64 md:h-80 lg:h-100 lg:rounded-[32px]">
          <img
            src="/images/community-panorama.png"
            alt="Downtown Pittsburgh panorama"
            className="sh-image-hover absolute inset-0 h-full w-full object-cover object-center lg:left-0 lg:top-[-27%] lg:h-[200%]"
          />
        </div>
      </div>
    </section>
  );
}
