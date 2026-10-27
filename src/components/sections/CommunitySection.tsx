export function CommunitySection() {
  return (
    <section className="w-full bg-[#27382a] px-[182px] pb-[100px] pt-[120px]">
      <div className="flex flex-col gap-16">
        {/* Community Invitation */}
        <div className="flex flex-col items-center gap-7">
          {/* Label */}
          <p className="sh-label text-[#f7f5ee]">Built around community</p>

          {/* Headline */}
          <h2 className="sh-headline-lg w-[1000px] text-center text-[#f7f5ee]">
            Built for the community.
            <br />
            Inspired by what comes next.
          </h2>

          {/* Description */}
          <div className="w-[760px] text-center">
            <p className="text-[20px] leading-[1.6] text-[#f7f5ee]">
              Thank you for your interest in SageHaven Bancorp.
              <br />
              Take a closer look at what we're building, and the role you could
              play in its future.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-[14px] pt-3">
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
              Fund investment
            </a>
            <a
              href="#schedule"
              className="sh-button sh-button-outline text-[#f7f5ee]"
            >
              Schedule a call
            </a>
          </div>
        </div>

        {/* Community Panorama */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-[32px]">
          <img
            src="/images/community-panorama.png"
            alt="Downtown Pittsburgh panorama"
            className="absolute left-0 top-[-27%] h-[200%] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
