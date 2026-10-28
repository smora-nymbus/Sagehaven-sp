import { useState, useRef, useEffect } from "react";
import { ComponentCard } from "./components/ComponentCard";
import { tokens } from "./tokens";
import {
  generateTokensJSON,
  generateTokensCSS,
  generateTokensSCSS,
  downloadFile,
} from "./utils/downloadUtils";

// Sample button components for preview
function PrimaryButton() {
  return (
    <button className="inline-flex items-center justify-center gap-3.5 h-13.5 px-7 rounded-full bg-sh-cream text-sh-forest text-base border border-sh-cream hover:bg-white transition-colors">
      <span>Review offering documents</span>
      <span>→</span>
    </button>
  );
}

function OutlineButtonDark() {
  return (
    <button className="inline-flex items-center justify-center h-13.5 px-7 rounded-full bg-transparent text-sh-cream text-base border border-sh-cream hover:bg-white/10 transition-colors">
      Fund your investment
    </button>
  );
}

function OutlineButtonLight() {
  return (
    <button className="inline-flex items-center justify-center h-13.5 px-7 rounded-full bg-transparent text-sh-forest text-base border border-sh-forest hover:bg-black/5 transition-colors">
      Talk to the team
    </button>
  );
}

// Color swatch component
function ColorSwatch({
  name,
  hex,
  textDark = false,
}: {
  name: string;
  hex: string;
  textDark?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col cursor-pointer" onClick={handleCopy}>
      <div
        className={`h-16 rounded-lg flex items-end p-2 ${textDark ? "text-sh-forest" : "text-sh-cream"} relative group`}
        style={{ backgroundColor: hex }}
      >
        <span className="text-xs font-medium">{copied ? "Copied!" : hex}</span>
      </div>
      <span className="text-sm text-sh-charcoal mt-1">{name}</span>
    </div>
  );
}

// Typography sample
function TypographySample() {
  return (
    <div className="space-y-4 text-left">
      <p className="font-serif text-[52px] leading-[1.08] text-sh-forest">
        Times New Roman — Headlines
      </p>
      <p className="text-[20px] leading-[1.52] text-sh-charcoal">
        Inter / System Sans — Body text at 20px with relaxed line height
      </p>
      <p className="text-[18px] leading-[1.65] text-sh-charcoal">
        Body text at 18px — Used for descriptions and paragraph content
      </p>
      <p className="text-[14px] uppercase tracking-[0.02em] text-sh-forest">
        Labels — 14px uppercase with letter spacing
      </p>
      <p className="text-[11px] uppercase tracking-[0.02em] text-sh-gold">
        Small labels — 11px uppercase (footer navigation)
      </p>
    </div>
  );
}

// Animation demo component
function AnimationDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);

  const replay = () => {
    setIsPlaying(false);
    setKey((k) => k + 1);
    setTimeout(() => setIsPlaying(true), 50);
  };

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex gap-4 flex-wrap justify-center">
        {["up", "down", "left", "right"].map((direction, index) => (
          <div
            key={`${key}-${direction}`}
            className="w-16 h-16 bg-sh-sage rounded-card flex items-center justify-center"
            style={{
              opacity: isPlaying ? 1 : 0,
              transform: isPlaying
                ? "none"
                : direction === "up"
                  ? "translateY(30px)"
                  : direction === "down"
                    ? "translateY(-30px)"
                    : direction === "left"
                      ? "translateX(30px)"
                      : "translateX(-30px)",
              transition: `opacity 0.5s ease-out ${index * 100}ms, transform 0.5s ease-out ${index * 100}ms`,
            }}
          >
            <span className="text-sh-cream text-xs uppercase">{direction}</span>
          </div>
        ))}
      </div>
      <button onClick={replay} className="text-sm text-sh-sage hover:underline">
        ↻ Replay animation
      </button>
    </div>
  );
}

// Download dropdown component
function DownloadDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const downloadOptions = [
    {
      label: "Tokens (JSON)",
      description: "Raw token values",
      action: () =>
        downloadFile(
          generateTokensJSON(),
          "sagehaven-tokens.json",
          "application/json",
        ),
    },
    {
      label: "Tokens (CSS)",
      description: "CSS custom properties",
      action: () =>
        downloadFile(generateTokensCSS(), "sagehaven-tokens.css", "text/css"),
    },
    {
      label: "Tokens (SCSS)",
      description: "SCSS variables",
      action: () =>
        downloadFile(
          generateTokensSCSS(),
          "sagehaven-tokens.scss",
          "text/plain",
        ),
    },
    {
      label: "Documentation (MD)",
      description: "Design system guide",
      action: async () => {
        const response = await fetch("/design-system/DESIGN_SYSTEM.md");
        if (response.ok) {
          const content = await response.text();
          downloadFile(content, "DESIGN_SYSTEM.md", "text/markdown");
        } else {
          window.open("/design-system/DESIGN_SYSTEM.md", "_blank");
        }
      },
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-sh-cream text-sh-forest px-5 py-2.5 rounded-full font-medium text-sm hover:bg-white transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <svg
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download
        <svg
          className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-64 bg-white rounded-card shadow-lg border border-sh-sage-light overflow-hidden z-50"
          role="listbox"
        >
          <div className="p-3 border-b border-sh-sage-light">
            <span className="text-xs text-sh-charcoal uppercase tracking-wide">
              Download Assets
            </span>
          </div>
          {downloadOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => {
                option.action();
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left hover:bg-sh-sage-light/50 transition-colors flex flex-col gap-0.5"
              role="option"
            >
              <span className="text-sm font-medium text-sh-forest">
                {option.label}
              </span>
              <span className="text-xs text-sh-charcoal">
                {option.description}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Asset preview component
function AssetPreview({
  name,
  path,
  bgDark = false,
}: {
  name: string;
  path: string;
  bgDark?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-24 h-24 ${bgDark ? "bg-sh-forest" : "bg-sh-cream"} rounded-card flex items-center justify-center p-3 border border-sh-sage-light`}
      >
        <img
          src={path}
          alt={name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <span className="text-xs text-sh-charcoal text-center">{name}</span>
    </div>
  );
}

export function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-sh-cream">
      {/* Header */}
      <header className="bg-sh-forest text-sh-cream py-16 px-5 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl">
              Sagehaven Bancorp Design System
            </h1>
            <p className="text-lg text-sh-cream/70 mt-3">
              Component library and design tokens for consistent brand
              implementation
            </p>
          </div>
          <DownloadDropdown />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 sm:px-10 md:px-16 lg:px-20 py-12">
        {/* Color Tokens Section */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-sh-forest mb-6">
            Color Tokens
          </h2>

          <div className="bg-white rounded-card p-6 border border-sh-sage-light space-y-8">
            <div>
              <h3 className="font-serif text-xl text-sh-forest mb-4">
                Primary Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <ColorSwatch name="Forest" hex={tokens.colors.primary.forest} />
                <ColorSwatch
                  name="Forest Deep"
                  hex={tokens.colors.primary.forestDeep}
                />
                <ColorSwatch name="Sage" hex={tokens.colors.primary.sage} />
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-sh-forest mb-4">
                Secondary Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ColorSwatch
                  name="Sage Light"
                  hex={tokens.colors.secondary.sageLight}
                  textDark
                />
                <ColorSwatch
                  name="Cream"
                  hex={tokens.colors.secondary.cream}
                  textDark
                />
                <ColorSwatch name="Gold" hex={tokens.colors.secondary.gold} />
                <ColorSwatch name="Gold Light" hex="#D4C4A8" textDark />
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-sh-forest mb-4">
                Neutral Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ColorSwatch
                  name="Charcoal"
                  hex={tokens.colors.neutral.charcoal}
                />
                <ColorSwatch name="Black" hex={tokens.colors.neutral.black} />
                <ColorSwatch
                  name="White"
                  hex={tokens.colors.neutral.white}
                  textDark
                />
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-sh-forest mb-6">
            Typography
          </h2>

          <div className="bg-white rounded-card p-6 border border-sh-sage-light">
            <TypographySample />
          </div>
        </section>

        {/* Assets Section */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-sh-forest mb-6">
            Brand Assets
          </h2>

          <div className="bg-white rounded-card p-6 border border-sh-sage-light space-y-8">
            <div>
              <h3 className="font-serif text-xl text-sh-forest mb-4">
                Logo Components
              </h3>
              <div className="flex gap-6 flex-wrap">
                <AssetPreview
                  name="Garland"
                  path={tokens.assets.logo.garland}
                />
                <AssetPreview
                  name="SH Monogram"
                  path={tokens.assets.logo.shMonogram}
                />
                <AssetPreview
                  name="Typemark"
                  path={tokens.assets.logo.typemark}
                />
                <AssetPreview
                  name="Botanical Garland"
                  path={tokens.assets.logo.botanicalGarland}
                />
                <AssetPreview
                  name="Botanical SH"
                  path={tokens.assets.logo.botanicalSh}
                />
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-sh-forest mb-4">
                Footer Logo (on dark)
              </h3>
              <div className="flex gap-6 flex-wrap">
                <AssetPreview
                  name="Garland Footer"
                  path={tokens.assets.logo.garlandFooter}
                  bgDark
                />
                <AssetPreview
                  name="SH Footer"
                  path={tokens.assets.logo.shFooter}
                  bgDark
                />
                <AssetPreview
                  name="Typemark Footer"
                  path={tokens.assets.logo.typemarkFooter}
                  bgDark
                />
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-sh-forest mb-4">Icons</h3>
              <div className="flex gap-6 flex-wrap">
                <AssetPreview
                  name="Arrow Northeast"
                  path={tokens.assets.icons.arrowNortheast}
                  bgDark
                />
                <AssetPreview
                  name="Divider"
                  path={tokens.assets.icons.divider}
                />
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-sh-forest mb-4">
                Photography
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="flex flex-col gap-2">
                  <img
                    src={tokens.assets.images.communityBridge}
                    alt="Community Bridge"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <span className="text-xs text-sh-charcoal">
                    Community Bridge
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src={tokens.assets.images.businessOwners}
                    alt="Business Owners"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <span className="text-xs text-sh-charcoal">
                    Business Owners
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src={tokens.assets.images.personalConversation}
                    alt="Personal Conversation"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <span className="text-xs text-sh-charcoal">
                    Personal Conversation
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src={tokens.assets.images.communityPanorama}
                    alt="Community Panorama"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <span className="text-xs text-sh-charcoal">
                    Community Panorama
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animations Section */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-sh-forest mb-6">
            Animations
          </h2>

          <div className="bg-white rounded-card p-6 border border-sh-sage-light space-y-8">
            <div>
              <h3 className="font-serif text-xl text-sh-forest mb-4">
                Scroll Reveal Directions
              </h3>
              <p className="text-sh-charcoal mb-6">
                Elements animate into view with configurable direction and
                stagger timing.
              </p>
              <AnimationDemo />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-sh-sage-light rounded-card">
                <span className="font-medium text-sm text-sh-forest">
                  Duration
                </span>
                <p className="text-sh-charcoal">500ms</p>
              </div>
              <div className="text-center p-4 bg-sh-sage-light rounded-card">
                <span className="font-medium text-sm text-sh-forest">
                  Translate
                </span>
                <p className="text-sh-charcoal">30px</p>
              </div>
              <div className="text-center p-4 bg-sh-sage-light rounded-card">
                <span className="font-medium text-sm text-sh-forest">
                  Easing
                </span>
                <p className="text-sh-charcoal">ease-out</p>
              </div>
              <div className="text-center p-4 bg-sh-sage-light rounded-card">
                <span className="font-medium text-sm text-sh-forest">
                  Stagger
                </span>
                <p className="text-sh-charcoal">100ms</p>
              </div>
            </div>
          </div>
        </section>

        {/* Components Grid */}
        <section>
          <h2 className="font-serif text-3xl text-sh-forest mb-6">
            Components
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary Button */}
            <ComponentCard
              name="Primary Button"
              description="Cream pill button with arrow. Used on dark backgrounds for primary CTAs."
              code={`<button className="inline-flex items-center gap-3.5 h-13.5 px-7 rounded-full bg-sh-cream text-sh-forest border border-sh-cream hover:bg-white">
  <span>Review offering documents</span>
  <span>→</span>
</button>`}
              prompt="Create a primary button for Sagehaven with cream (#f7f5ee) background, forest (#243829) text, pill shape (rounded-full), 54px height, arrow icon. Include hover state."
            >
              <div className="flex justify-center bg-sh-forest p-6 rounded-lg -mx-4 -mb-4 mt-4">
                <PrimaryButton />
              </div>
            </ComponentCard>

            {/* Outline Button Dark */}
            <ComponentCard
              name="Outline Button (Dark BG)"
              description="Transparent button with cream border. Used on dark backgrounds."
              code={`<button className="inline-flex items-center h-13.5 px-7 rounded-full bg-transparent text-sh-cream border border-sh-cream hover:bg-white/10">
  Fund your investment
</button>`}
              prompt="Create an outline button for dark backgrounds with transparent bg, cream (#f7f5ee) text and border, pill shape, 54px height."
            >
              <div className="flex justify-center bg-sh-forest p-6 rounded-lg -mx-4 -mb-4 mt-4">
                <OutlineButtonDark />
              </div>
            </ComponentCard>

            {/* Outline Button Light */}
            <ComponentCard
              name="Outline Button (Light BG)"
              description="Transparent button with forest border. Used on light backgrounds."
              code={`<button className="inline-flex items-center h-13.5 px-7 rounded-full bg-transparent text-sh-forest border border-sh-forest hover:bg-black/5">
  Talk to the team
</button>`}
              prompt="Create an outline button for light backgrounds with transparent bg, forest (#243829) text and border, pill shape."
            >
              <div className="flex justify-center">
                <OutlineButtonLight />
              </div>
            </ComponentCard>

            {/* Step Card */}
            <ComponentCard
              name="Step Card"
              description="Investment step card with number, title, description, and CTA. Used in HowToInvest section."
              code={`<div className="bg-sh-cream rounded-card p-7.5 flex flex-col justify-between h-105">
  <div className="flex flex-col gap-6">
    <p className="text-[26px] text-sh-sage">01</p>
    <h3 className="font-serif text-[30px] text-sh-sage">Review the offering</h3>
    <p className="text-[18px] text-sh-charcoal">Description...</p>
  </div>
  <button>Review offering documents</button>
</div>`}
              prompt="Create a step card for Sagehaven with cream background, 18px radius, step number in sage, serif title, charcoal description, and outline CTA button."
            >
              <div className="flex justify-center">
                <div className="bg-sh-cream rounded-card p-5 w-full">
                  <p className="text-[20px] text-sh-sage">01</p>
                  <h3 className="font-serif text-xl text-sh-sage mt-2">
                    Review the offering
                  </h3>
                  <p className="text-sm text-sh-charcoal mt-2 line-clamp-2">
                    Read and download the official offering documents...
                  </p>
                </div>
              </div>
            </ComponentCard>

            {/* Glassmorphic Card */}
            <ComponentCard
              name="Glassmorphic Overlay"
              description="Floating card with backdrop blur. Used over editorial images."
              code={`<div className="bg-white/80 backdrop-blur-[9px] rounded-[20px] p-7 shadow-[0px_8px_24px_rgba(0,0,0,0.1)]">
  <div className="bg-sh-gold-light rounded-full px-2.5 py-1">
    <span className="text-sh-gold text-[11px] uppercase">Label</span>
  </div>
  <p className="font-semibold text-[18px]">Title text</p>
</div>`}
              prompt="Create a glassmorphic overlay card with white/80 bg, backdrop blur, rounded-20px, shadow, gold badge, semibold title."
            >
              <div className="flex justify-center">
                <div className="bg-white/80 backdrop-blur-[9px] rounded-[20px] p-4 shadow-md">
                  <div className="inline-flex items-center gap-1.5 bg-sh-gold-light rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 rounded-[3px] bg-sh-gold" />
                    <span className="text-sh-gold text-[10px] uppercase font-semibold">
                      Label
                    </span>
                  </div>
                  <p className="font-semibold text-sm text-[#1a1a1a] mt-2">
                    Business banking and private banking
                  </p>
                </div>
              </div>
            </ComponentCard>

            {/* Section Label */}
            <ComponentCard
              name="Section Label"
              description="Uppercase label for section headers. 14px, uppercase, with letter spacing."
              code={`<p className="text-[14px] uppercase tracking-[0.02em] text-sh-cream">
  Sagehaven Bancorp · Investor overview
</p>`}
              prompt="Create a section label with 14px size, uppercase, 0.02em letter spacing. Can be cream on dark or forest on light."
            >
              <div className="flex flex-col gap-4">
                <div className="bg-sh-forest p-4 rounded-lg">
                  <p className="text-[14px] uppercase tracking-[0.02em] text-sh-cream">
                    The opportunity
                  </p>
                </div>
                <div className="bg-sh-cream p-4 rounded-lg">
                  <p className="text-[14px] uppercase tracking-[0.02em] text-sh-forest">
                    The opportunity
                  </p>
                </div>
              </div>
            </ComponentCard>
          </div>
        </section>

        {/* Spacing Reference */}
        <section className="mt-16">
          <h2 className="font-serif text-3xl text-sh-forest mb-6">
            Spacing Reference
          </h2>

          <div className="bg-white rounded-card p-6 border border-sh-sage-light">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h3 className="font-medium text-sh-forest mb-3">
                  Section Padding
                </h3>
                <ul className="text-sm text-sh-charcoal space-y-1">
                  <li>X: 182px (desktop)</li>
                  <li>Y: 120px (sections)</li>
                  <li>Y: 110px (hero)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-sh-forest mb-3">
                  Card Spacing
                </h3>
                <ul className="text-sm text-sh-charcoal space-y-1">
                  <li>Padding: 30px</li>
                  <li>Gap: 24px</li>
                  <li>Height: 420px (steps)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-sh-forest mb-3">
                  Border Radius
                </h3>
                <ul className="text-sm text-sh-charcoal space-y-1">
                  <li>Buttons: 100px (pill)</li>
                  <li>Cards: 18px</li>
                  <li>Images: 32px</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-sh-forest mb-3">Header</h3>
                <ul className="text-sm text-sh-charcoal space-y-1">
                  <li>Height: 86px</li>
                  <li>Border: 1px black</li>
                  <li>Position: sticky</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sh-forest text-sh-cream py-12 px-5 sm:px-10 md:px-16 lg:px-20 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm opacity-70">
            Sagehaven Bancorp Design System v2.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}
