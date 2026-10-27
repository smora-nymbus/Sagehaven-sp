# SageHaven Bancorp Design System

## Overview

This design system defines the visual language and component library for SageHaven Bancorp. All components should follow these guidelines to maintain brand consistency.

---

## Brand Identity

**Tagline:** "A Community Bank with Heart."

**Voice:** Warm, trustworthy, rooted in community, sophisticated yet approachable

**Brand Essence:** SageHaven represents growth, stability, and natural wisdom — combining the calming presence of sage with the security of a haven.

---

## Color Palette

### Primary Colors

| Name        | Hex       | Usage                                |
| ----------- | --------- | ------------------------------------ |
| Forest      | `#243829` | Headers, primary headings, hero text |
| Forest Deep | `#27382a` | Gradient endpoints, deep backgrounds |
| Sage        | `#3a503b` | Primary buttons, section backgrounds |
| Sage Light  | `#e0e7dc` | Light backgrounds, subtle accents    |

### Secondary Colors

| Name  | Hex       | Usage                            |
| ----- | --------- | -------------------------------- |
| Cream | `#f7f5ee` | Page backgrounds, content areas  |
| Gold  | `#8b6f3a` | Accent borders, premium elements |
| Black | `#000000` | Strong text, high-contrast areas |

### Neutral Colors

| Name       | Hex       | Usage                        |
| ---------- | --------- | ---------------------------- |
| Charcoal   | `#36454f` | Body text, descriptions      |
| White      | `#ffffff` | Cards, content backgrounds   |
| Border     | `#e2e8f0` | Card borders, dividers       |
| Gray Light | `#94a3b8` | Secondary text, placeholders |

### Semantic Colors

| Name       | Hex       | Usage                     |
| ---------- | --------- | ------------------------- |
| Background | `#f7f5ee` | Default page background   |
| Surface    | `#ffffff` | Card and content surfaces |
| Text       | `#36454f` | Primary body text         |
| TextMuted  | `#64748b` | Secondary/muted text      |
| Success    | `#3a503b` | Success states            |
| Warning    | `#8b6f3a` | Warning states            |
| Error      | `#b91c1c` | Error states              |

---

## Typography

### Font Families

| Type    | Font                                   | Usage                               |
| ------- | -------------------------------------- | ----------------------------------- |
| Heading | Times New Roman, Georgia, Times, serif | All headings (h1-h6), display text  |
| Body    | Inter, system-ui, sans-serif           | Body text, descriptions, paragraphs |
| UI      | DM Sans, system-ui, sans-serif         | Buttons, labels, badges, UI text    |

### Type Scale

| Name | Size | Line Height | Usage                    |
| ---- | ---- | ----------- | ------------------------ |
| 7xl  | 96px | 1.0         | Hero headlines (desktop) |
| 6xl  | 72px | 1.0         | Large section titles     |
| 5xl  | 60px | 1.05        | Section titles (desktop) |
| 4xl  | 48px | 1.1         | Major headings           |
| 3xl  | 36px | 1.2         | Card titles, subsections |
| 2xl  | 30px | 1.2         | Medium headings          |
| xl   | 24px | 1.3         | Large body text          |
| lg   | 20px | 1.5         | Card descriptions        |
| md   | 18px | 1.5         | Standard body            |
| base | 16px | 1.5         | UI text, labels          |
| sm   | 14px | 1.5         | Small text, captions     |
| xs   | 12px | 1.5         | Fine print, badges       |

### Font Weights

| Name     | Weight | Usage                      |
| -------- | ------ | -------------------------- |
| normal   | 400    | Body text                  |
| medium   | 500    | UI elements, emphasis      |
| semibold | 600    | Subheadings, buttons       |
| bold     | 700    | Headlines, strong emphasis |

---

## Spacing Scale

Based on 4px grid:

- `1` = 4px
- `2` = 8px
- `3` = 12px
- `4` = 16px
- `5` = 20px
- `6` = 24px
- `8` = 32px
- `10` = 40px
- `12` = 48px
- `16` = 64px
- `20` = 80px
- `24` = 96px
- `32` = 128px

### Section Padding

- Mobile: `px-4` (16px) to `px-6` (24px)
- Tablet: `md:px-8` (32px) to `md:px-12` (48px)
- Desktop: `lg:px-16` (64px) to `lg:px-24` (96px)

---

## Border Radius

| Name | Value  | Usage                  |
| ---- | ------ | ---------------------- |
| none | 0      | Sharp corners          |
| sm   | 4px    | Small elements         |
| md   | 6px    | Buttons, inputs        |
| lg   | 8px    | Cards                  |
| xl   | 12px   | Large containers       |
| 2xl  | 16px   | Feature cards          |
| 3xl  | 24px   | Hero elements          |
| full | 9999px | Pills, circular shapes |

---

## Shadows

| Name      | Value                                                                       | Usage              |
| --------- | --------------------------------------------------------------------------- | ------------------ |
| sm        | `0 1px 2px rgba(0, 0, 0, 0.05)`                                             | Subtle elevation   |
| md        | `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`     | Cards (default)    |
| lg        | `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`   | Elevated elements  |
| xl        | `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)` | Modals, popovers   |
| 2xl       | `0 25px 50px -12px rgba(0, 0, 0, 0.25)`                                     | Prominent elements |
| card      | `0 4px 24px rgba(0, 0, 0, 0.08)`                                            | Content cards      |
| cardHover | `0 12px 28px rgba(0, 0, 0, 0.12)`                                           | Card hover state   |
| button    | `0 4px 12px rgba(58, 80, 59, 0.2)`                                          | Primary buttons    |
| glass     | `0 8px 32px rgba(0, 0, 0, 0.1)`                                             | Glassmorphic cards |

---

## Components Catalog

### Layout Components

- [Header](#header)
- [Footer](#footer)

### Section Components

- [HeroSection](#herosection)
- [OpportunitySection](#opportunitysection)
- [HowToInvestSection](#howtoinvestsection)
- [HumanConnectionSection](#humanconnectionsection)
- [CommunitySection](#communitysection)

### UI Components

- [Button](#button)
- [StepCard](#stepcard)
- [GlassCard](#glasscard)
- [AnimatedSection](#animatedsection)

---

## Component Specifications

### Header

**Purpose:** Main page header with logo, navigation, and CTA button.

**Features:**

- Full-width cream background
- Left-aligned typemark logo
- Right-aligned "Invest Now" button
- Sticky positioning on scroll (optional)

**Tokens Used:**

- Background: `colors.secondary.cream`
- Logo: `/images/typemark.svg`
- Button: `colors.primary.forest`, white text

---

### HeroSection

**Purpose:** Full-viewport hero with headline, description, and atmospheric imagery.

**Features:**

- Large serif headline with brand colors
- Supporting body copy
- Full-width atmospheric background image
- Decorative garland element

**Tokens Used:**

- Background: `colors.secondary.cream`
- Headline: `colors.primary.forest`, `typography.fontFamilies.heading`
- Body: `colors.neutral.charcoal`, `typography.fontFamilies.body`
- Image: `/images/atmospheric-backdrop.png`
- Decoration: `/images/garland.svg`

---

### OpportunitySection

**Purpose:** Highlight investment opportunity with glassmorphic card overlay on imagery.

**Features:**

- Business owners image background
- Glassmorphic card with headline and description
- Decorative divider element
- Subtle backdrop blur effect

**Tokens Used:**

- Background image: `/images/business-owners.png`
- Card: White with `backdrop-filter: blur(8px)`, 95% opacity
- Headline: `colors.primary.forest`
- Body: `colors.neutral.charcoal`
- Divider: `/images/divider.svg`

---

### HowToInvestSection

**Purpose:** Three-step investment process cards.

**Features:**

- Forest green background
- Three numbered step cards
- Arrow decorations between steps
- Clear iconography and descriptions

**Tokens Used:**

- Background: `colors.primary.forest`
- Cards: `colors.secondary.cream`
- Step numbers: `colors.primary.sage`
- Arrows: `/images/arrow-northeast.svg`

---

### HumanConnectionSection

**Purpose:** Emphasize personal banking relationship.

**Features:**

- Personal conversation imagery
- Botanical monogram decoration
- Warm, inviting copy

**Tokens Used:**

- Background: `colors.secondary.cream`
- Image: `/images/personal-conversation.png`
- Monogram: `/images/botanical-sh.svg`
- Headline: `colors.primary.forest`

---

### CommunitySection

**Purpose:** Community-focused messaging with panoramic imagery.

**Features:**

- Full-width community panorama
- Centered headline overlay
- Brand garland decoration

**Tokens Used:**

- Background image: `/images/community-panorama.png`
- Headline: `colors.secondary.cream` (on dark overlay)
- Decoration: `/images/garland.svg`

---

### Footer

**Purpose:** Page footer with brand info, contact details, and legal links.

**Sections:**

1. Brand column with footer logo and tagline
2. Contact information
3. Legal links
4. Copyright and disclosures

**Tokens Used:**

- Background: `colors.primary.forest`
- Text: `colors.secondary.cream`, `colors.primary.sageLight`
- Logo: `/images/sh-footer.svg`, `/images/typemark-footer.svg`
- Decoration: `/images/garland-footer.svg`

---

### Button

**Variants:**

1. **Primary** - Forest green background, cream text
2. **Secondary** - Cream background, forest text, gold border
3. **Outline** - Transparent background, forest border and text
4. **Ghost** - No background, forest text

**Tokens Used:**

- Primary: `colors.primary.forest`, `shadows.button`
- Secondary: `colors.secondary.cream`, border `colors.secondary.gold`
- Font: `typography.fontFamilies.ui`, `typography.fontWeights.semibold`

---

### GlassCard

**Purpose:** Glassmorphic card component with backdrop blur.

**Tokens Used:**

- Background: `rgba(255, 255, 255, 0.95)`
- Backdrop filter: `blur(8px)`
- Border: `rgba(255, 255, 255, 0.2)`
- Shadow: `shadows.glass`

---

### AnimatedSection

**Purpose:** Wrapper component for scroll-triggered reveal animations.

**Props:**

| Prop        | Type                                          | Default | Description                          |
| ----------- | --------------------------------------------- | ------- | ------------------------------------ |
| direction   | "up" \| "down" \| "left" \| "right" \| "none" | "up"    | Animation direction                  |
| delay       | number                                        | 0       | Animation delay in ms                |
| mobileDelay | number                                        | delay   | Separate delay for mobile (< 1024px) |

**Tokens Used:**

- Duration: `animations.duration.slow` (600ms)
- Easing: `animations.easing.easeOut`

---

## Backgrounds & Decorations

### Page Backgrounds

| Page          | Background | Notes       |
| ------------- | ---------- | ----------- |
| Splash        | `#f7f5ee`  | Solid cream |
| Design System | `#f7f5ee`  | Solid cream |

### Section Backgrounds

| Section          | Background  | Notes                  |
| ---------------- | ----------- | ---------------------- |
| Header           | `#f7f5ee`   | Cream                  |
| Hero             | `#f7f5ee`   | With atmospheric image |
| Opportunity      | Image-based | Business owners photo  |
| How To Invest    | `#243829`   | Forest green           |
| Human Connection | `#f7f5ee`   | Cream                  |
| Community        | Image-based | Community panorama     |
| Footer           | `#243829`   | Forest green           |

### Brand Assets

| Asset             | Path                            | Usage                    |
| ----------------- | ------------------------------- | ------------------------ |
| Typemark          | `/images/typemark.svg`          | Header logo              |
| Typemark Footer   | `/images/typemark-footer.svg`   | Footer logo (light)      |
| SH Monogram       | `/images/sh-monogram.svg`       | Compact brand mark       |
| SH Footer         | `/images/sh-footer.svg`         | Footer monogram          |
| Garland           | `/images/garland.svg`           | Decorative botanical     |
| Garland Footer    | `/images/garland-footer.svg`    | Footer botanical (light) |
| Botanical SH      | `/images/botanical-sh.svg`      | Botanical monogram       |
| Botanical Garland | `/images/botanical-garland.svg` | Full botanical element   |
| Divider           | `/images/divider.svg`           | Section dividers         |
| Arrow Northeast   | `/images/arrow-northeast.svg`   | Step connections         |

### Photography

| Image                 | Path                                | Usage               |
| --------------------- | ----------------------------------- | ------------------- |
| Atmospheric Backdrop  | `/images/atmospheric-backdrop.png`  | Hero background     |
| Business Owners       | `/images/business-owners.png`       | Opportunity section |
| Personal Conversation | `/images/personal-conversation.png` | Human connection    |
| Community Panorama    | `/images/community-panorama.png`    | Community section   |
| Community Bridge      | `/images/community-bridge.png`      | Alternate community |

---

## Animations & Transitions

### Animation Durations

| Name   | Value | Usage                            |
| ------ | ----- | -------------------------------- |
| fast   | 150ms | Hover states, micro-interactions |
| normal | 300ms | Default transitions              |
| slow   | 600ms | Scroll reveal animations         |
| slower | 800ms | Page entrance animations         |

### Easing Functions

| Name      | Value                                   | Usage                 |
| --------- | --------------------------------------- | --------------------- |
| easeOut   | ease-out                                | Standard animations   |
| easeInOut | ease-in-out                             | Reversible animations |
| spring    | cubic-bezier(0.175, 0.885, 0.32, 1.275) | Bouncy effects        |

### Scroll Reveal

Default settings for scroll-triggered animations:

- **Threshold:** 0.1 (10% visibility triggers animation)
- **Translate distance:** 30px
- **Duration:** 600ms
- **Stagger delay:** 150ms between items

### Hover Effects

| Name            | Effect                                |
| --------------- | ------------------------------------- |
| lift            | translateY(-4px) with enhanced shadow |
| colorTransition | Smooth color changes over 200ms       |
| scale           | scale(1.02) subtle zoom               |

---

## Responsive Breakpoints

| Name | Width  | Usage             |
| ---- | ------ | ----------------- |
| sm   | 640px  | Small tablets     |
| md   | 768px  | Tablets           |
| lg   | 1024px | Small desktops    |
| xl   | 1280px | Standard desktops |
| 2xl  | 1536px | Large screens     |

---

## Usage Guidelines

### Do's

- ✅ Use design tokens for all colors, spacing, and typography
- ✅ Follow mobile-first responsive approach
- ✅ Maintain consistent spacing using the 4px grid
- ✅ Use Times New Roman for headlines, Inter/DM Sans for body
- ✅ Embrace the natural, earthy color palette
- ✅ Use botanical decorations sparingly for elegance

### Don'ts

- ❌ Hardcode color values
- ❌ Use arbitrary spacing values
- ❌ Mix serif and sans-serif inappropriately
- ❌ Overuse decorative elements
- ❌ Ignore responsive breakpoints
- ❌ Use harsh, unnatural colors

---

## Version History

| Version | Date       | Changes                                 |
| ------- | ---------- | --------------------------------------- |
| 1.0.0   | 2026-10-27 | Initial SageHaven Bancorp design system |
