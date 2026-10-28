export function HowToInvestSection() {
  const steps = [
    {
      number: "01",
      title: "Review the offering",
      description:
        "Read and download the official offering documents for the full terms, eligibility requirements and risks. Take the time you need to make an informed decision.",
      cta: "Review offering documents",
      href: "#documents",
      hasArrow: false,
    },
    {
      number: "02",
      title: "Complete & fund",
      description:
        "Complete the subscription materials, then follow the funding instructions provided in the official offering documents. Confirm any questions with the team before proceeding.",
      cta: "Complete & fund investment",
      href: "#fund",
      hasArrow: true,
    },
    {
      number: "03",
      title: "Speak to the team",
      description:
        "Have questions before you make a commitment? Schedule a conversation with the Sagehaven team to discuss the offering and walk through the process.",
      cta: "Schedule a call",
      href: "#schedule",
      hasArrow: false,
    },
  ];

  return (
    <section
      id="how-to-invest"
      className="w-full bg-sh-forest-deep px-5 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-section-x lg:py-27.5"
    >
      <div className="flex flex-col gap-8 md:gap-10 lg:gap-13">
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6.5">
          <p className="sh-label text-sh-cream">How to invest</p>
          <h2 className="font-serif text-3xl leading-[1.1] text-sh-cream sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.08]">
            Ready to take the next step?
          </h2>
          <p className="text-base leading-relaxed text-sh-cream sm:text-lg md:text-[18px] md:leading-[1.65]">
            A clear path forward, with a conversation whenever you need one.
          </p>
        </div>

        {/* Step Cards - stack on mobile/tablet, row on desktop */}
        <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:gap-6 lg:h-105">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col justify-between rounded-xl bg-sh-cream p-5 sm:rounded-2xl sm:p-6 lg:flex-1 lg:min-w-0 lg:rounded-card lg:p-7.5"
            >
              {/* Step Content */}
              <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
                {/* Step Number */}
                <p className="text-xl text-sh-sage sm:text-2xl lg:text-[26px]">
                  {step.number}
                </p>

                {/* Step Title */}
                <h3 className="font-serif text-xl text-sh-sage sm:text-2xl lg:text-[30px] lg:leading-[1.08]">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm leading-relaxed text-sh-charcoal sm:text-base lg:text-[18px] lg:leading-[1.65]">
                  {step.description}
                </p>
              </div>

              {/* CTA Button */}
              <a
                href={step.href}
                className="sh-button sh-button-outline mt-6 inline-flex w-full justify-center border-sh-sage text-sh-sage sm:w-fit sm:justify-start lg:mt-8"
              >
                <span>{step.cta}</span>
                {step.hasArrow && <span>→</span>}
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-xs leading-relaxed text-sh-cream sm:text-sm lg:text-[14px]">
          The official offering documents govern the investment. Please review
          them carefully before making a commitment.
        </p>
      </div>
    </section>
  );
}
