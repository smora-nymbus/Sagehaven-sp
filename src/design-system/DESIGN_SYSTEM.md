# SageHaven Bancorp Design System

## Overview

This design system defines the visual language and component library for SageHaven Bancorp. All components should follow these guidelines to maintain brand consistency.

---

## Brand Identity

**Tagline:** "Banking for everything you are building."

**Voice:** Sophisticated, trustworthy, personal, community-focused, grounded

**Visual Style:** Nature-inspired, premium banking aesthetic with warm, organic tones

---

## Color Palette

### Primary Colors

| Name        | Hex       | CSS Variable             | Usage                                        |
| ----------- | --------- | ------------------------ | -------------------------------------------- |
| Forest      | `#243829` | `--color-sh-forest`      | Headers, primary headings, hero text         |
| Forest Deep | `#27382a` | `--color-sh-forest-deep` | Section backgrounds (HowToInvest, Community) |
| Sage        | `#3a503b` | `--color-sh-sage`        | Step numbers, card accents, CTAs             |

### Secondary Colors

| Name       | Hex                         | CSS Variable            | Usage                                 |
| ---------- | --------------------------- | ----------------------- | ------------------------------------- |
| Sage Light | `#e0e7dc`                   | `--color-sh-sage-light` | Section backgrounds (HumanConnection) |
| Cream      | `#f7f5ee`                   | `--color-sh-cream`      | Page backgrounds, light text          |
| Gold       | `#8b6f3a`                   | `--color-sh-gold`       | Accent labels, badges                 |
| Gold Light | `rgba(180, 155, 100, 0.15)` | `--color-sh-gold-light` | Badge backgrounds                     |

### Neutral Colors

| Name     | Hex                      | Usage             |
| -------- | ------------------------ | ----------------- |
| Charcoal | `#36454f`                | Body text         |
| Black    | `#000000`                | Footer background |
| White    | `#ffffff`                | Cards, overlays   |
| Divider  | `rgba(247,245,237,0.16)` | Footer divider    |

---

## Typography

### Font Families

| Type  | Font                      | Usage                          |
| ----- | ------------------------- | ------------------------------ |
| Serif | Times New Roman, Georgia  | Headlines (h1-h6)              |
| Sans  | Inter, DM Sans, system-ui | Body text, UI elements, labels |

### Type Scale

| Class          | Size | Line Height | Letter Spacing | Usage                      |
| -------------- | ---- | ----------- | -------------- | -------------------------- |
| sh-headline-xl | 88px | 1.04        | -0.01em        | Hero headlines             |
| sh-headline-lg | 60px | 1.1         | —              | Large section titles       |
| sh-headline-md | 52px | 1.08        | -0.01em        | Section headlines          |
| sh-headline-sm | 30px | 1.08        | —              | Card titles                |
| sh-body-lg     | 20px | 1.52        | —              | Large body text            |
| sh-body-md     | 18px | 1.65        | —              | Standard body              |
| sh-body-sm     | 16px | 1.5         | —              | Small body, buttons        |
| sh-body-xs     | 14px | 1.5         | —              | Small text, labels         |
| sh-label       | 14px | 1           | 0.02em         | Section labels (uppercase) |
| sh-label-sm    | 11px | 1           | 0.02em         | Footer labels (uppercase)  |

---

## Spacing Scale

Based on 4px grid with specific section values:

### Base Scale

- `1` = 4px
- `2` = 8px
- `3` = 12px
- `4` = 16px
- `5` = 20px
- `6` = 24px
- `7` = 28px
- `8` = 32px
- `10` = 40px
- `12` = 48px
- `14` = 56px
- `16` = 64px
- `20` = 80px

### Section Spacing

- **Section X Padding:** 182px (desktop)
- **Section Y Padding:** 120px (default), 110px (hero)
- **Card Gaps:** 24px between step cards
- **Content Gaps:** 26-28px between text elements

---

## Border Radius

| Name | Value | Usage                |
| ---- | ----- | -------------------- |
| sm   | 6px   | Small elements       |
| md   | 18px  | Cards, step cards    |
| lg   | 20px  | Overlay cards        |
| xl   | 32px  | Images, hero images  |
| full | 100px | Buttons (pill shape) |

---

## Shadows

| Name | Value                            | Usage                |
| ---- | -------------------------------- | -------------------- |
| sm   | `0px 4px 12px rgba(0,0,0,0.06)`  | Subtle elevation     |
| md   | `0px 8px 24px rgba(0,0,0,0.1)`   | Glassmorphic overlay |
| lg   | `0px 12px 32px rgba(0,0,0,0.12)` | Prominent cards      |

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
- [GlassmorphicCard](#glassmorphiccard)

---

## Component Specifications

### Header

**Purpose:** Sticky navigation with logo and nav links.

**Specs:**

- Height: 86px
- Background: `#f7f5ee` (cream)
- Border: 1px solid black (bottom)
- Padding X: 182px

**Elements:**

- Logo: Garland + SH Monogram + Typemark
- Nav links: 15px, `#243829`
- CTA Button: Outline style

---

### Footer

**Purpose:** Page footer with brand info, navigation, and legal disclosures.

**Specs:**

- Background: `#000000` (black)
- Padding: 80px top, 40px bottom, 182px horizontal

**Sections:**

1. Brand column (logo + tagline)
2. Investors nav column
3. Connect nav column
4. Divider line
5. Investment disclosures
6. Copyright bar

---

### Button

**Base Specs:**

- Height: 54px
- Padding X: 28px
- Border Radius: 100px (pill)
- Font Size: 16px
- Gap: 14px (for icon buttons)

**Variants:**

1. **Primary** (`.sh-button-primary`)
   - Background: `#f7f5ee` (cream)
   - Text: `#243829` (forest)
   - Border: 1px solid `#f7f5ee`
2. **Outline** (`.sh-button-outline`)
   - Background: transparent
   - Text: inherit (context-dependent)
   - Border: 1px solid currentColor

---

### StepCard

**Purpose:** Investment step card with number, title, description, and CTA.

**Specs:**

- Background: `#f7f5ee` (cream)
- Border Radius: 18px
- Padding: 30px
- Height: 420px (in grid)

**Content:**

- Step number: 26px, `#3a503b` (sage)
- Title: 30px serif, `#3a503b`
- Description: 18px, `#36454f` (charcoal)
- CTA: Outline button, `#3a503b`

---

### GlassmorphicCard

**Purpose:** Floating overlay card with blur effect.

**Specs:**

- Background: `rgba(255,255,255,0.82)`
- Backdrop Filter: `blur(9px)`
- Border Radius: 20px
- Shadow: `0px 8px 24px rgba(0,0,0,0.1)`
- Padding: 28px

**Content:**

- Badge: Gold label with dot
- Title: 18px semibold, `#1a1a1a`
- Divider line
- Footer text: 12px medium, `#8b6f3a`

---

## Section Specifications

### HeroSection

**Background:** `#243829` (forest) with atmospheric backdrop (8% opacity)

**Layout:** Two-column (text left, image right)

**Elements:**

- Label: Uppercase, cream
- Headline: 88px serif, cream
- Body: 20px, cream
- CTAs: Primary + Outline buttons
- Image: 590px height, 32px radius

---

### OpportunitySection

**Background:** `#f7f5ee` (cream)

**Layout:**

- Top: Two-column (headline left, description right)
- Bottom: Full-width editorial image with floating card

**Image Positioning:** `top: -62%`, `height: 190%` (shows business owner centered)

---

### HowToInvestSection

**Background:** `#27382a` (forest deep)

**Layout:**

- Header text block
- 3-column card grid (equal width)
- Disclaimer text

---

### HumanConnectionSection

**Background:** `#e0e7dc` (sage light)

**Layout:** Two-column (image left, content right)

**Elements:**

- Botanical monogram
- Label + Headline + Body
- CTA button

---

### CommunitySection

**Background:** `#27382a` (forest deep)

**Layout:** Centered content with panorama image

**Elements:**

- Label + Headline (centered)
- Description (centered)
- 3 action buttons
- Panorama image (400px height, 32px radius)

---

## Assets

### Logo Components

| Asset             | Path                            | Usage            |
| ----------------- | ------------------------------- | ---------------- |
| Garland           | `/images/garland.svg`           | Header logo      |
| SH Monogram       | `/images/sh-monogram.svg`       | Header logo      |
| Typemark          | `/images/typemark.svg`          | Header logo      |
| Garland Footer    | `/images/garland-footer.svg`    | Footer logo      |
| SH Footer         | `/images/sh-footer.svg`         | Footer logo      |
| Typemark Footer   | `/images/typemark-footer.svg`   | Footer logo      |
| Botanical Garland | `/images/botanical-garland.svg` | Section monogram |
| Botanical SH      | `/images/botanical-sh.svg`      | Section monogram |

### Icons

| Icon            | Path                          | Usage                |
| --------------- | ----------------------------- | -------------------- |
| Arrow Northeast | `/images/arrow-northeast.svg` | Call invitation link |
| Divider         | `/images/divider.svg`         | Card dividers        |

### Photography

| Image                 | Path                                | Usage                        |
| --------------------- | ----------------------------------- | ---------------------------- |
| Atmospheric Backdrop  | `/images/atmospheric-backdrop.png`  | Hero background (8% opacity) |
| Community Bridge      | `/images/community-bridge.png`      | Hero image                   |
| Business Owners       | `/images/business-owners.png`       | Opportunity section          |
| Personal Conversation | `/images/personal-conversation.png` | Human Connection section     |
| Community Panorama    | `/images/community-panorama.png`    | Community section            |

---

## CSS Classes Reference

### Typography

```css
.sh-headline-xl  /* 88px serif headline */
.sh-headline-lg  /* 60px serif headline */
.sh-headline-md  /* 52px serif headline */
.sh-headline-sm  /* 30px serif headline */
.sh-body-lg      /* 20px body */
.sh-body-md      /* 18px body */
.sh-body-sm      /* 16px body */
.sh-body-xs      /* 14px body */
.sh-label        /* 14px uppercase label */
.sh-label-sm     /* 11px uppercase label */
```

### Buttons

```css
.sh-button           /* Base button styles */
.sh-button-primary   /* Cream background, dark text */
.sh-button-outline   /* Transparent with border */
```

### Layout

```css
.sh-section-padding  /* 182px horizontal padding */
.sh-image-radius     /* 32px border radius for images */
.sh-card-radius      /* 18px border radius for cards */
```

---

## Usage Guidelines

### Do's

- ✅ Use design tokens for all colors, spacing, and typography
- ✅ Use Times New Roman for all headlines
- ✅ Maintain the nature-inspired, warm aesthetic
- ✅ Follow the established spacing patterns
- ✅ Use pill-shaped buttons consistently

### Don'ts

- ❌ Hardcode color values
- ❌ Use arbitrary spacing values
- ❌ Mix headline fonts with body fonts inappropriately
- ❌ Use sharp corners on images or cards
- ❌ Deviate from the established color palette

---

## Version History

| Version | Date       | Changes                                 |
| ------- | ---------- | --------------------------------------- |
| 2.0.0   | 2026-10-27 | Complete redesign for SageHaven Bancorp |
| 1.0.0   | 2026-10-26 | Initial design system (StrategistBank)  |
