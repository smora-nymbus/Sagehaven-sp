export function OpportunitySection() {
  return (
    <section
      id="overview"
      className="w-full bg-[#f7f5ee] px-[182px] py-[120px]"
    >
      <div className="flex flex-col gap-16">
        {/* Top: Headline + Description */}
        <div className="flex items-end gap-[70px]">
          {/* Left: Headline */}
          <div className="flex w-[620px] shrink-0 flex-col gap-[26px]">
            <p className="sh-label text-[#243829]">The opportunity</p>
            <h2 className="sh-headline-md text-[#243829]">
              Commercial capability, met with private attention.
            </h2>
          </div>

          {/* Right: Description */}
          <p className="sh-body-md w-[571px] text-[#36454f]">
            SageHaven combines business banking and private banking with a
            banker who knows you. Accounts, payments, and treasury tools help
            you manage your company's day-to-day finances, while personal
            banking services address your needs outside the business. The
            services are distinct, but your bankers work together when the two
            overlap, so you don't have to explain the same situation twice.
          </p>
        </div>

        {/* Bottom: Editorial Image with Overlay */}
        <div className="relative h-[420px] w-full overflow-hidden rounded-[32px]">
          {/* Background Image */}
          <img
            src="/images/business-owners.png"
            alt="Business owners looking ahead"
            className="absolute left-0 top-[-62%] h-[190%] w-full object-cover"
          />

          {/* Glassmorphic Overlay Card */}
          <div className="absolute bottom-[117px] left-[88px] w-[420px] rounded-[20px] bg-white/80 p-7 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.1)] backdrop-blur-[9px]">
            <div className="flex flex-col gap-4">
              {/* Label Badge */}
              <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[rgba(180,155,100,0.15)] px-2.5 py-[5px]">
                <div className="h-1.5 w-1.5 rounded-[3px] bg-[#8b6f3a]" />
                <span className="sh-label-sm font-semibold text-[#8b6f3a]">
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
              <p className="text-[12px] font-medium text-[#8b6f3a]">
                SageHaven Bancorp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
