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
        "Have questions before you make a commitment? Schedule a conversation with the SageHaven team to discuss the offering and walk through the process.",
      cta: "Schedule a call",
      href: "#schedule",
      hasArrow: false,
    },
  ];

  return (
    <section
      id="how-to-invest"
      className="w-full bg-sh-forest-deep px-section-x py-27.5"
    >
      <div className="flex flex-col gap-13">
        {/* Section Header */}
        <div className="flex flex-col gap-6.5">
          <p className="sh-label text-sh-cream">How to invest</p>
          <h2 className="sh-headline-md text-sh-cream">
            Ready to take the next step?
          </h2>
          <p className="sh-body-md text-sh-cream">
            A clear path forward, with a conversation whenever you need one.
          </p>
        </div>

        {/* Step Cards */}
        <div className="flex h-105 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-1 flex-col justify-between rounded-card bg-sh-cream p-7.5"
            >
              {/* Step Content */}
              <div className="flex flex-col gap-6">
                {/* Step Number */}
                <p className="text-[26px] text-sh-sage">{step.number}</p>

                {/* Step Title */}
                <h3 className="sh-headline-sm text-sh-sage">{step.title}</h3>

                {/* Step Description */}
                <p className="sh-body-md text-sh-charcoal">
                  {step.description}
                </p>
              </div>

              {/* CTA Button */}
              <a
                href={step.href}
                className="sh-button sh-button-outline inline-flex w-fit border-sh-sage text-sh-sage"
              >
                <span>{step.cta}</span>
                {step.hasArrow && <span>→</span>}
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="sh-body-xs text-sh-cream">
          The official offering documents govern the investment. Please review
          them carefully before making a commitment.
        </p>
      </div>
    </section>
  );
}
