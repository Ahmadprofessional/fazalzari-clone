# Hero Specification

## Overview
- **Target file:** `src/components/Hero.tsx`
- **Interaction model:** static.

## DOM Structure
```
<section> full-bleed background image /images/hero-bg.jpeg (chandelier/mirror boutique interior), bg-cover bg-center, min-h ~85vh (desktop) / auto with generous py on mobile
  <div> dark overlay optional (source has no extra gradient overlay beyond the photo's own natural darkness — do NOT add a black gradient, the photo is already dark enough; if type contrast is poor, use a subtle bottom-to-top gradient at low opacity only)
  <div> max-width container, content left-aligned, vertical-center, max-w ~600px
    <img> ornamental divider /images/divider-hero.png, ~220px wide, centered above label? — no, left-aligned, sits above "—Fazal Zari" label
    <p> "—Fazal Zari" — label with literal em-dash prefix
    <h1> "HERITAGE LUXURY, HANDCRAFTED FOR ROYALTY." (source text is mixed-case "Heritage Luxury, Handcrafted for Royalty." rendered uppercase via CSS text-transform)
    <p> italic paragraph: "Crafting timeless bridal and luxury formal wear since 1999. Discover the pristine artistry of traditional hand-embroidery, bespoke silhouettes, and regal Pakistani couture tailored for your most unforgettable moments."
    <a> button "EXPLORE COLLECTION"
```

## Computed Styles

### Label "—Fazal Zari"
- `font-family: Cormorant`, `font-size: 35px`, `font-weight: 500`, `line-height: 35px`, `color: white`

### Heading
- `font-family: Cormorant`, `font-size: 48px` (desktop; scale down to ~32-36px on mobile), `font-weight: 500`, `line-height: 48px` (1:1, tight), `color: white`, `text-transform: uppercase`

### Paragraph
- `font-family: Inter`, `font-style: italic`, `font-size: 18px`, `font-weight: 400`, `line-height: 27px`, `color: white`, `max-width: ~480px`

### Button "EXPLORE COLLECTION"
- transparent bg, `border: 1.6px solid #e8c686` (var(--gold-light)), `border-radius: 3px`, padding `15px 28px`
- text: `font-family: Cormorant`, `font-size: 15px`, `font-weight: 600`, `text-transform: uppercase`, `color: white`
- Hover: `background: #e8c686`, `color: #0a0a0a`, `transition: all 0.3s ease`

## Assets
- `/images/hero-bg.jpeg` (background)
- `/images/divider-hero.png` (small ornamental flourish above the label)

## Text Content (verbatim)
- "—Fazal Zari"
- "Heritage Luxury, Handcrafted for Royalty." (render uppercase via `uppercase` class)
- "Crafting timeless bridal and luxury formal wear since 1999. Discover the pristine artistry of traditional hand-embroidery, bespoke silhouettes, and regal Pakistani couture tailored for your most unforgettable moments."
- "EXPLORE COLLECTION"

## Responsive Behavior
- **Desktop (≥1024px):** content column max-w ~600px, left-aligned within a centered max-w-7xl container, generous top/bottom padding, section min-height ~85vh so the photo fills the viewport.
- **Mobile (<768px):** heading drops to ~32px, paragraph ~16px, section padding reduces, content still left-aligned per the live mobile screenshot (not centered).
