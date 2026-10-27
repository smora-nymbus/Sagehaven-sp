export function HumanConnectionSection() {
  return (
    <section className="w-full bg-sh-sage-light px-section-x py-section-y">
      <div className="flex items-center gap-20">
        {/* Left: Personal Conversation Image */}
        <div className="relative h-112.5 w-130 shrink-0 overflow-hidden rounded-[32px]">
          <img
            src="/images/personal-conversation.png"
            alt="Personal conversation with SageHaven banker"
            className="absolute left-[-42%] top-[-14%] h-[129%] w-[167%] max-w-none object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-1 flex-col gap-6.5">
          {/* Botanical Monogram */}
          <div className="relative h-14.5 w-16">
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
          <h2 className="sh-headline-md w-109.5 text-sh-forest">
            A human connection at every step.
          </h2>

          {/* Description */}
          <p className="sh-body-md text-sh-charcoal">
            Investing should feel personal, not transactional. Our team is here
            to answer your questions, explain the process and help you
            understand the decision in front of you.
          </p>

          {/* CTA */}
          <a
            href="#schedule"
            className="sh-button sh-button-outline w-fit border-sh-forest text-sh-forest"
          >
            Talk to the team
          </a>
        </div>
      </div>
    </section>
  );
}
