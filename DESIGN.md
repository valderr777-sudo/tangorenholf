---
name: Tangoren Holf
version: alpha
description: Art consulting firm website. Inspired by CL Studio's restrained, immersive home screen while maintaining Tangoren Holf branding.
colors:
  primary: "#FFFFFF"
  secondary: "#1A1A1A"
  accent: "#C8392B"
  neutral: "#F2F2F2"
  heroText: "#FFFFFF"
  overlay: "rgba(0,0,0,0.28)"
typography:
  nav:
    fontFamily: Century Gothic
    fontSize: 0.75rem
    fontWeight: 400
    letterSpacing: 0.25em
  h1:
    fontFamily: Century Gothic
    fontSize: 3rem
    fontWeight: 300
    letterSpacing: 0.15em
  h2:
    fontFamily: Century Gothic
    fontSize: 1.5rem
    fontWeight: 400
    letterSpacing: 0.2em
  body-md:
    fontFamily: Century Gothic
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.8
  label-caps:
    fontFamily: Century Gothic
    fontSize: 0.7rem
    fontWeight: 400
    letterSpacing: 0.3em
rounded:
  sm: 0px
  md: 0px
  lg: 0px
spacing:
  sm: 8px
  md: 24px
  lg: 64px
  xl: 120px
components:
  header:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    height: "90px"
  header-home:
    backgroundColor: "transparent"
    textColor: "{colors.heroText}"
    height: "90px"
  nav-link:
    textColor: "{colors.secondary}"
    typography: "{typography.nav}"
  logo:
    textColor: "{colors.secondary}"
  hero:
    backgroundColor: "image"
    textColor: "{colors.heroText}"
  hero-overlay:
    backgroundColor: "{colors.overlay}"
  gallery-item:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    padding: "12px 32px"
  contact-input:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    height: "90px"
  footer-home:
    backgroundColor: "transparent"
    textColor: "{colors.heroText}"
    height: "90px"
---

## Overview

Tangoren Holf is a premier art consulting firm. The redesign borrows CL Studio's immersive, editorial home screen — full-screen photography, sparse typography with wide letter-spacing, transparent navigation chrome, and zero decorative clutter. Everything serves the artwork.

The site must feel like walking into a high-end gallery: quiet, confident, image-first. Interior pages use white backgrounds with restrained dark typography. The home page is image-led and fills exactly one viewport.

## Colors

- **Primary (#FFFFFF):** White. Used for standard page backgrounds, interior page header/footer backgrounds, and content surfaces.
- **Secondary (#1A1A1A):** Near-black. Used for standard page text, nav links, and logo text on white backgrounds.
- **Accent (#C8392B):** Tangoren Holf signature red. Used sparingly — logo mark only, never for UI elements.
- **Neutral (#F2F2F2):** Light neutral for gallery placeholders, hover states, and subtle content surfaces.
- **Hero Text (#FFFFFF):** White text and logo treatment over home hero imagery.
- **Overlay (rgba 0,0,0,0.28):** Applied over hero images so white text remains legible.

## Typography

Century Gothic throughout — elegant, editorial, gallery-grade. All navigation in uppercase with wide letter-spacing (0.25em+), consistent with CL Studio's approach. No bold weights except where absolutely needed. Let whitespace and scale create hierarchy.

## Layout

Full-width CL Studio-style layout on desktop: a fixed top navigation bar spans the full viewport. The logo sits at the left of the top bar on desktop, navigation spans the right side, and page content remains full-width. Do not use a split-screen layout, fixed left panel, or separate scrollable right panel.

On the home page, the header and footer are transparent overlays so the slideshow images remain visible underneath them. Both header and footer are exactly 90px tall. The full home page must be exactly 100vh, including the header and footer. The hero/slideshow occupies the full viewport behind both overlays.

On mobile: full-screen stacked layout. The top bar remains fixed and transparent over the home hero. Navigation collapses into a minimal hamburger menu. Logo centered. CL Studio mobile menu behavior to be replicated precisely.

- Home: exactly 100vh total page height, with a full-screen image slideshow behind transparent 90px header and transparent 90px footer. Placeholder images are acceptable until final artwork is available. Slides change every 5 seconds.
- Collections / The Wall: masonry or grid gallery, images open full-screen lightbox with caption below
- About / Client Services: text on white background, generous line-height, wide margins
- Contact: minimal form, bottom-border inputs only (no box borders), on white background

## Elevation & Depth

No box shadows. Depth is created through full-bleed photography and dark overlays only.

## Shapes

Zero border-radius on all elements. Sharp edges throughout — consistent with gallery/editorial aesthetic.

## Components

- **Header:** Fixed, full-width, 90px tall. On home it is transparent over hero images with a thin white bottom rule. On interior pages it sits on white with dark text and a subtle dark bottom rule. Navigation links uppercase, letter-spaced.
- **Hero Slideshow:** Home page only. Full viewport behind transparent header/footer, crossfade transitions every 5 seconds, Tangoren Holf logo centered over imagery.
- **Gallery Grid:** Equal-sized tiles, no gaps or minimal 1-2px gaps. Click opens lightbox with description.
- **Contact Form:** Input fields with bottom border only on white background. Submit as text link, not a button.
- **Footer:** 90px tall, minimal copyright centered. On home it is transparent over hero images with a thin white top rule. On interior pages it sits on white with dark text and a subtle dark top rule.

## Do's and Don'ts

**Do:**
- Keep all whitespace generous — let content breathe
- Use photography as the primary design element
- Maintain uppercase spaced typography for all labels and navigation
- Ensure logo outline version overlays cleanly on all hero images
- Always use font-family: 'Century Gothic', 'AppleGothic', sans-serif; for cross-platform compatibility
- Keep the home page exactly 100vh, including header and footer

**Don't:**
- Add scroll height to the home page
- Make the home header or footer opaque
- Add decorative borders, dividers, or shadows
- Use the accent red (#C8392B) outside of the logo mark
- Use any font other than 'Century Gothic', 'AppleGothic', sans-serif
