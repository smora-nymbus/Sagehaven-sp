export function HumanConnectionSection() {
  return (
    <section className="w-full bg-sh-sage-light px-5 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-section-x lg:py-section-y">
      <div className="flex flex-col gap-8 md:gap-12 lg:flex-row lg:items-center lg:gap-20">
        {/* Left: Personal Conversation Image */}
        <div className="sh-image-container relative h-64 w-full shrink-0 overflow-hidden rounded-2xl sm:h-80 md:h-96 lg:h-112.5 lg:w-130 lg:rounded-[32px]">
          <img
            src="/images/personal-conversation.png"
            alt="Personal conversation with Sagehaven banker"
            className="sh-image-hover absolute inset-0 h-full w-full object-cover object-center lg:left-[-42%] lg:top-[-14%] lg:h-[129%] lg:w-[167%] lg:max-w-none"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-1 flex-col gap-4 md:gap-5 lg:gap-6.5">
          {/* Botanical Monogram - smaller on mobile */}
          <div className="relative h-10 w-12 sm:h-12 sm:w-14 lg:h-14.5 lg:w-16">
            <img
              src="/images/botanical-garland.svg"
              alt=""
              className="absolute inset-0 h-full w-[98.6%]"
            />
            <img
              src="/images/botanical-sh.svg"
              alt=""
              className="absolute bottom-[13.35%] left-[42.07%] right-[0.01%] top-[15.73%]"
            />
          </div>

          {/* Label */}
          <p className="sh-label text-black">
            A relationship, not a transaction
          </p>

          {/* Headline */}
          <h2 className="font-serif text-3xl leading-[1.1] text-sh-forest sm:text-4xl md:text-5xl lg:w-109.5 lg:text-[52px] lg:leading-[1.08]">
            A human connection at every step.
          </h2>

          {/* Description */}
          <p className="text-base leading-relaxed text-sh-charcoal sm:text-lg md:text-[18px] md:leading-[1.65]">
            Investing should feel personal, not transactional. Our team is here
            to answer your questions, explain the process and help you
            understand the decision in front of you.
          </p>

          {/* CTA */}
          <a
            href="#schedule"
            className="mt-2 inline-flex h-13.5 w-full items-center justify-center gap-3.5 rounded-full border border-sh-forest px-7 text-base text-sh-forest transition-all duration-300 hover:-translate-y-0.5 hover:bg-sh-forest/10 sm:w-fit"
          >
            Talk to the team
          </a>
        </div>
      </div>
    </section>
  );
}
