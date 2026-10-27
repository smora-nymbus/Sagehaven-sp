export function OpportunitySection() {
  return (
    <section
      id="overview"
      className="w-full bg-sh-cream px-section-x py-section-y"
    >
      <div className="flex flex-col gap-16">
        {/* Top: Headline + Description */}
        <div className="flex items-end gap-17.5">
          {/* Left: Headline */}
          <div className="flex w-155 shrink-0 flex-col gap-6.5">
            <p className="sh-label text-sh-forest">The opportunity</p>
            <h2 className="sh-headline-md text-sh-forest">
              Commercial capability, met with private attention.
            </h2>
          </div>

          {/* Right: Description */}
          <p className="sh-body-md w-142.75 text-sh-charcoal">
            SageHaven combines business banking and private banking with a
            banker who knows you. Accounts, payments, and treasury tools help
            you manage your company's day-to-day finances, while personal
            banking services address your needs outside the business. The
            services are distinct, but your bankers work together when the two
            overlap, so you don't have to explain the same situation twice.
          </p>
        </div>

        {/* Bottom: Editorial Image with Overlay */}
        <div className="relative h-105 w-full overflow-hidden rounded-[32px]">
          {/* Background Image */}
          <img
            src="/images/business-owners.png"
            alt="Business owners looking ahead"
            className="absolute left-0 top-[-62%] h-[190%] w-full object-cover"
          />

          {/* Glassmorphic Overlay Card */}
          <div className="absolute bottom-29.25 left-22 w-105 rounded-[20px] bg-white/80 p-7 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.1)] backdrop-blur-[9px]">
            <div className="flex flex-col gap-4">
              {/* Label Badge */}
              <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-sh-gold-light px-2.5 py-1.25">
                <div className="h-1.5 w-1.5 rounded-[3px] bg-sh-gold" />
                <span className="sh-label-sm font-semibold text-sh-gold">
                  One bank. Both sides of your life.
                </span>
              </div>

              {/* Card Title */}
              <p className="text-[18px] font-semibold leading-normal text-[#1a1a1a]">
                Business banking and private banking, with bankers who work
                together.
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-[#e5e5e5]" />

              {/* Footer */}
              <p className="text-[12px] font-medium text-sh-gold">
                SageHaven Bancorp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
