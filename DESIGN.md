---
name: Kinetic Tech-Forward
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#434934'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747a62'
  outline-variant: '#c3c9ae'
  surface-tint: '#4c6700'
  primary: '#4c6700'
  on-primary: '#ffffff'
  primary-container: '#c7ff3c'
  on-primary-container: '#567400'
  inverse-primary: '#a3d800'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#646464'
  tertiary: '#5b5f5a'
  on-tertiary: '#ffffff'
  tertiary-container: '#eaede6'
  on-tertiary-container: '#676b66'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bef531'
  primary-fixed-dim: '#a3d800'
  on-primary-fixed: '#151f00'
  on-primary-fixed-variant: '#394e00'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e0e3dd'
  tertiary-fixed-dim: '#c4c8c1'
  on-tertiary-fixed: '#191d19'
  on-tertiary-fixed-variant: '#444843'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-bold:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base-unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is defined by a high-energy, "Kinetic Tech-Forward" aesthetic that merges the raw impact of digital editorial design with the precision of a modern creative agency. The brand personality is aggressive yet disciplined, utilizing high-contrast accents to punctuate an otherwise airy and expansive light-mode environment. 

The style sits at the intersection of **Minimalism** and **High-Contrast Bold**. It leverages vast amounts of white space to allow the vibrant primary color to act as a functional signal and a brand signature. Motion is implied through asymmetric layouts, tight typographic tracking in headings, and a relentless focus on geometric clarity. It is designed for high-end tech platforms, creative portfolios, and innovative digital agencies that want to feel fast, professional, and uncompromising.

## Colors

The palette is anchored by a high-visibility primary "Volt" lime (#C7FF3C). This color should be used strategically for interactive elements, key highlights, and brand moments, rather than as a dominant surface color. 

- **Backgrounds:** Utilize pure white (#FFFFFF) for the primary canvas to maintain an airy feel. Use the tertiary off-white (#F4F7F0) for subtle sectioning and container backgrounds.
- **Typography & Details:** Use secondary black (#000000) for maximum legibility in headlines and primary UI elements. 
- **System Colors:** Success, warning, and error states should maintain high saturation to match the intensity of the primary lime, but they should remain secondary to the core brand palette.

## Typography

The typography strategy relies on a structural contrast between the technical, geometric nature of **Space Grotesk** and the clean, humanist versatility of **Montserrat**.

- **Display & Headlines:** Space Grotesk is used for all heading levels. Large display type should use tight letter spacing and heavy weights to create a sense of "kinetic" pressure.
- **Body & Prose:** Montserrat handles all long-form reading and interface text. It provides a grounded, professional counter-balance to the more expressive headings.
- **Labels & Navigation:** Space Grotesk in uppercase is the standard for small labels, buttons, and navigation items, reinforcing the technical agency feel.

## Layout & Spacing

The design system utilizes a **fixed-grid** model on desktop to maintain a structured editorial feel, transitioning to a fluid model for tablet and mobile. 

The layout follows a 12-column grid with generous 64px outer margins on desktop to enforce the "airy" brand directive. Spacing between components should follow an 8px modular scale, favoring larger gaps (step 8 or 12 on the scale) to prevent the high-contrast elements from feeling cluttered. Alignment should be strict and mathematical, emphasizing the "Tech-Forward" precision of the system.

## Elevation & Depth

This design system avoids traditional heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**. 

- **Planes:** Hierarchy is established by placing white cards on off-white backgrounds (#F4F7F0).
- **Shadows:** When depth is absolutely required, use ultra-diffused, low-opacity shadows (Opacity 4-6%) with a slight tint of the primary color to keep the shadows "clean" and avoid a muddy look.
- **Borders:** Use 1px solid borders in light gray (#E5E7EB) for card definitions. For active or focused states, transition the border to 2px solid primary lime (#C7FF3C) or solid black.

## Shapes

The shape language is primarily **Soft (Level 1)**. This subtle rounding (4px/0.25rem) takes the "edge" off the brutalist tendencies of the typography, making the interface feel modern and high-end rather than harsh.

- **Standard Elements:** Buttons, input fields, and tags use the 4px base radius.
- **Large Containers:** Cards and modals may use up to 8px (rounded-lg) for a more approachable feel.
- **Interactive States:** Use sharp corners for hover-state "reveals" or geometric overlays to maintain the kinetic energy.

## Components

- **Buttons:** The primary button is a solid fill of #C7FF3C with black text, utilizing the Space Grotesk Bold label. Secondary buttons should be "Ghost" style with a black 2px border or a solid black fill with white text.
- **Input Fields:** Use a minimalist approach with a subtle #F4F7F0 fill and a bottom-only 2px border that turns #C7FF3C on focus.
- **Cards:** Cards are white with a 1px #E5E7EB border. They should not have shadows unless they are "floating" (e.g., modals or dropdowns).
- **Chips/Tags:** Small, pill-shaped tags using the secondary black background with white Space Grotesk text, or light gray backgrounds with black text for less emphasis.
- **Progress Indicators:** Use the primary lime for all functional tracking. Linear progress bars should be thin (4px) to maintain the sophisticated agency feel.
- **Grid Lists:** Content should be separated by thin, full-width horizontal rules rather than boxed containers to enhance the "airy" feel of the system.