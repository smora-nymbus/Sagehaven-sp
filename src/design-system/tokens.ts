/**
 * SageHaven Bancorp Design Tokens
 *
 * This file contains all design tokens for the SageHaven brand.
 * Use these tokens consistently across all components.
 */

export const tokens = {
  // ===================
  // COLORS
  // ===================
  colors: {
    // Primary Brand Colors
    primary: {
      forest: "#243829", // Primary dark - headers, primary headings
      forestDeep: "#27382a", // Deep forest - section backgrounds
      sage: "#3a503b", // Sage green - step numbers, accents
    },

    // Secondary Brand Colors
    secondary: {
      sageLight: "#e0e7dc", // Light sage - section backgrounds
      cream: "#f7f5ee", // Warm cream - page backgrounds, light text
      gold: "#8b6f3a", // Gold accent - labels, badges
      goldLight: "rgba(180, 155, 100, 0.15)", // Gold badge background
    },

    // Neutral Colors
    neutral: {
      charcoal: "#36454f", // Body text
      black: "#000000", // Footer background
      white: "#ffffff", // Pure white
      divider: "rgba(247, 245, 237, 0.16)", // Footer divider
    },

    // Semantic Colors
    semantic: {
      success: "#3a503b",
      successLight: "#e0e7dc",
      warning: "#8b6f3a",
      error: "#c53030",
      info: "#243829",
    },

    // Extended colors
    extended: {
      textDark: "#1a1a1a", // Dark text in cards
      overlayBg: "rgba(255, 255, 255, 0.82)", // Glassmorphic overlay
    },
  },

  // ===================
  // TYPOGRAPHY
  // ===================
  typography: {
    fontFamilies: {
      serif: '"Times New Roman", "Georgia", serif', // Headlines
      sans: '"Inter", "DM Sans", system-ui, sans-serif', // Body/UI
    },

    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
    },

    fontSizes: {
      xs: "11px", // Labels small
      sm: "13px", // Footer small text
      base: "14px", // Labels, body small
      md: "16px", // Buttons, body
      lg: "18px", // Body text
      xl: "20px", // Large body
      "2xl": "26px", // Step numbers
      "3xl": "30px", // Step titles
      "4xl": "52px", // Section headlines
      "5xl": "60px", // Large headlines
      "6xl": "88px", // Hero headline
    },

    lineHeights: {
      tight: 1.04, // Headlines XL
      snug: 1.08, // Headlines
      normal: 1.5, // Body
      relaxed: 1.6, // Large body
      loose: 1.65, // Body paragraphs
    },

    // Predefined text styles
    styles: {
      headlineXl: {
        fontFamily: '"Times New Roman", "Georgia", serif',
        fontSize: "88px",
        lineHeight: 1.04,
        letterSpacing: "-0.01em",
        fontWeight: 400,
      },
      headlineLg: {
        fontFamily: '"Times New Roman", "Georgia", serif',
        fontSize: "60px",
        lineHeight: 1.1,
        fontWeight: 400,
      },
      headlineMd: {
        fontFamily: '"Times New Roman", "Georgia", serif',
        fontSize: "52px",
        lineHeight: 1.08,
        letterSpacing: "-0.01em",
        fontWeight: 400,
      },
      headlineSm: {
        fontFamily: '"Times New Roman", "Georgia", serif',
        fontSize: "30px",
        lineHeight: 1.08,
        fontWeight: 400,
      },
      bodyLg: {
        fontSize: "20px",
        lineHeight: 1.52,
      },
      bodyMd: {
        fontSize: "18px",
        lineHeight: 1.65,
      },
      bodySm: {
        fontSize: "16px",
        lineHeight: 1.5,
      },
      label: {
        fontSize: "14px",
        textTransform: "uppercase",
        letterSpacing: "0.02em",
        lineHeight: 1,
      },
      labelSm: {
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.02em",
        lineHeight: 1,
      },
    },
  },

  // ===================
  // SPACING
  // ===================
  spacing: {
    px: "1px",
    0: "0",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    10: "40px",
    12: "48px",
    14: "56px",
    16: "64px",
    20: "80px",
    24: "96px",
    28: "110px",
    30: "120px",
    // Section-specific
    sectionX: "182px",
    sectionY: "120px",
    heroY: "110px",
  },

  // ===================
  // BORDER RADIUS
  // ===================
  borderRadius: {
    none: "0",
    sm: "6px",
    md: "18px", // Cards
    lg: "20px", // Overlay cards
    xl: "32px", // Images
    full: "100px", // Buttons (pill)
  },

  // ===================
  // SHADOWS
  // ===================
  shadows: {
    sm: "0px 4px 12px rgba(0, 0, 0, 0.06)",
    md: "0px 8px 24px rgba(0, 0, 0, 0.1)", // Overlay card
    lg: "0px 12px 32px rgba(0, 0, 0, 0.12)",
    card: "0px 8px 24px rgba(0, 0, 0, 0.1)", // Glassmorphic overlay
  },

  // ===================
  // BREAKPOINTS
  // ===================
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // ===================
  // Z-INDEX
  // ===================
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 50, // Header
    fixed: 30,
    modal: 40,
    tooltip: 50,
  },

  // ===================
  // ANIMATIONS
  // ===================
  animations: {
    duration: {
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
      slower: "500ms",
    },

    easing: {
      ease: "ease",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
    },

    scrollReveal: {
      threshold: 0.1,
      translateDistance: "30px",
      duration: "500ms",
      staggerDelay: 100,
    },

    entrance: {
      fadeUp: {
        from: { opacity: 0, transform: "translateY(30px)" },
        to: { opacity: 1, transform: "translateY(0)" },
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      scaleUp: {
        from: { opacity: 0, transform: "scale(0.98)" },
        to: { opacity: 1, transform: "scale(1)" },
      },
    },

    hover: {
      lift: {
        transform: "translateY(-4px)",
      },
      colorTransition: "background-color 0.2s ease, color 0.2s ease",
    },
  },

  // ===================
  // TRANSITIONS
  // ===================
  transitions: {
    default: "all 0.2s ease",
    colors:
      "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
    transform: "transform 0.2s ease-out",
    opacity: "opacity 0.2s ease-out",
  },

  // ===================
  // BACKGROUNDS
  // ===================
  backgrounds: {
    pages: {
      default: "#f7f5ee", // Cream
    },

    sections: {
      cream: "#f7f5ee",
      sageLight: "#e0e7dc",
      forestDeep: "#27382a",
      forest: "#243829",
      black: "#000000",
    },
  },

  // ===================
  // ASSETS
  // ===================
  assets: {
    // Logo components
    logo: {
      garland: "/images/garland.svg",
      shMonogram: "/images/sh-monogram.svg",
      typemark: "/images/typemark.svg",
      // Footer variants
      garlandFooter: "/images/garland-footer.svg",
      shFooter: "/images/sh-footer.svg",
      typemarkFooter: "/images/typemark-footer.svg",
      // Botanical monogram (small)
      botanicalGarland: "/images/botanical-garland.svg",
      botanicalSh: "/images/botanical-sh.svg",
    },

    // Icons
    icons: {
      arrowNortheast: "/images/arrow-northeast.svg",
      divider: "/images/divider.svg",
    },

    // Photography
    images: {
      atmosphericBackdrop: "/images/atmospheric-backdrop.png",
      communityBridge: "/images/community-bridge.png",
      businessOwners: "/images/business-owners.png",
      personalConversation: "/images/personal-conversation.png",
      communityPanorama: "/images/community-panorama.png",
    },
  },

  // ===================
  // COMPONENTS
  // ===================
  components: {
    button: {
      height: "54px",
      paddingX: "28px",
      borderRadius: "100px",
      fontSize: "16px",
      gap: "14px",
    },

    card: {
      borderRadius: "18px",
      padding: "30px",
    },

    header: {
      height: "86px",
      paddingX: "182px",
    },

    image: {
      borderRadius: "32px",
    },
  },
} as const;

// Type exports for TypeScript support
export type Colors = typeof tokens.colors;
export type Typography = typeof tokens.typography;
export type Spacing = typeof tokens.spacing;
export type BorderRadius = typeof tokens.borderRadius;
export type Shadows = typeof tokens.shadows;
export type Breakpoints = typeof tokens.breakpoints;
export type ZIndex = typeof tokens.zIndex;
export type Animations = typeof tokens.animations;
export type Transitions = typeof tokens.transitions;
export type Backgrounds = typeof tokens.backgrounds;
export type Assets = typeof tokens.assets;
export type Components = typeof tokens.components;
export type Tokens = typeof tokens;

export default tokens;
