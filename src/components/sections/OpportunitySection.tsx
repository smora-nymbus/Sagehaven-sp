export function OpportunitySection() {
  return (
    <section
      id="overview"
      className="w-full bg-sh-cream px-5 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-section-x lg:py-section-y"
    >
      <div className="flex flex-col gap-10 md:gap-16">
        {/* Top: Headline + Description */}
        <div className="flex flex-col gap-6 md:gap-10 lg:flex-row lg:items-end lg:gap-17.5">
          {/* Left: Headline */}
          <div className="flex flex-col gap-4 md:gap-6.5 lg:w-155 lg:shrink-0">
            <p className="sh-label text-sh-forest">The opportunity</p>
            <h2 className="font-serif text-3xl leading-[1.1] text-sh-forest sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.08] lg:tracking-[-0.01em]">
              Commercial capability, met with private attention.
            </h2>
          </div>

          {/* Right: Description */}
          <p className="text-base leading-relaxed text-sh-charcoal sm:text-lg md:text-[18px] md:leading-[1.65] lg:w-142.75">
            Sagehaven combines business banking and private banking with a
            banker who knows you. Accounts, payments, and treasury tools help
            you manage your company's day-to-day finances, while personal
            banking services address your needs outside the business. The
            services are distinct, but your bankers work together when the two
            overlap, so you don't have to explain the same situation twice.
          </p>
        </div>

        {/* Bottom: Editorial Image with Overlay */}
        <div className="sh-image-container relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 md:h-96 lg:h-105 lg:rounded-[32px]">
          {/* Background Image */}
          <img
            src="/images/business-owners.png"
            alt="Business owners looking ahead"
            className="sh-image-hover absolute inset-0 h-full w-full object-cover object-top lg:left-0 lg:top-[-62%] lg:h-[190%] lg:object-center"
          />

          {/* Glassmorphic Overlay Card - Hidden on mobile, shown on md+ */}
          <div className="sh-glass-card absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur-[9px] sm:bottom-6 sm:left-6 sm:right-auto sm:w-80 sm:rounded-2xl sm:p-5 md:bottom-8 md:left-8 md:w-96 md:p-6 lg:bottom-29.25 lg:left-22 lg:w-105 lg:rounded-[20px] lg:p-7">
            <div className="flex flex-col gap-3 lg:gap-4">
              {/* Label Badge */}
              <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-sh-gold-light px-2 py-1 lg:px-2.5 lg:py-1.25">
                <div className="h-1.5 w-1.5 rounded-[3px] bg-sh-gold" />
                <span className="text-[10px] font-semibold uppercase text-sh-gold sm:text-[11px]">
                  One bank. Both sides of your life.
                </span>
              </div>

              {/* Card Title */}
              <p className="text-sm font-semibold leading-normal text-[#1a1a1a] sm:text-base lg:text-[18px]">
                Business banking and private banking, with bankers who work
                together.
              </p>

              {/* Divider - hidden on smallest screens */}
              <div className="hidden h-px w-full bg-[#e5e5e5] sm:block" />

              {/* Footer - hidden on smallest screens */}
              <p className="hidden text-[11px] font-medium text-sh-gold sm:block lg:text-[12px]">
                Sagehaven Bancorp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
