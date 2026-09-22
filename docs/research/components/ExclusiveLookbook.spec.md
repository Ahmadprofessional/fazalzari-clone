# ExclusiveLookbook Specification

## Overview
- **Target file:** `src/components/ExclusiveLookbook.tsx`
- **Interaction model:** static single composition. IMPORTANT: source uses Slider Revolution 7 but it is NOT a carousel — verified via DOM inspection (only one live slide holding bg+label+heading, two "staticslide" layers stacked permanently on top holding paragraph+button, no arrows/dots/autoplay found). Build this as one plain static section, NOT a slider/carousel component. Do not add carousel libraries or navigation dots.

## DOM Structure
```
<section class="relative overflow-hidden"> full-bleed background image /images/lookbook-banner.jpeg (this single JPEG already contains the diagonal-cut bridal photo collage AND the circular FZ logo watermark baked in — do not try to recreate the diagonal collage or the badge separately, just render this one image as the section background), min-h ~420px desktop scaling proportionally, aspect-ratio-based height on mobile (image aspect ≈ 1009:420 ≈ 2.4:1 — use `aspect-[1009/420]` on desktop, allow it to grow taller on mobile so text doesn't overflow, e.g. min-h-[520px] on mobile with bg-cover)
  <div class="absolute inset-0 flex items-center"> content wrapper
    <div class="max-w-md pl-8 md:pl-16"> left-aligned text block
      <p> "EXCLUSIVE LOOKBOOK" — small gold label
      <h2> "Modern Silhouettes.\nTimeless Heritage." — serif heading, white, two lines (keep the literal line break)
      <p> italic paragraph, muted gold-tan: "A curated edit of our most exclusive designs that celebrate elegance in every detail"
      <a> outlined button "VIEW LOOKBOOK"
```

## Computed Styles (from Slider Revolution's internal layer styles — treat as a design reference, not literal px positioning, since the source uses an internal 1009×420 canvas)

### "EXCLUSIVE LOOKBOOK" label
- `font-family: Manrope` (fall back to Poppins if Manrope isn't already loaded — do not add a new font import just for this one label; use `font-sans` / Poppins medium instead to keep the font budget small), `font-size: 19px`, `font-weight: 500`, `line-height: 32px`, `color: rgb(184,138,52)` (a gold variant — close to var(--gold-muted))

### Heading "Modern Silhouettes. Timeless Heritage."
- `font-family: Cormorant`, `font-size: 36px` (desktop; ~26-28px mobile), `font-weight: 400`, `line-height: 50px` (generous — roughly 1.35× font-size, use `leading-tight` to `leading-snug` in practice), `color: white`

### Paragraph
- `font-family: Inter italic`, `font-size: 14px`, `font-weight: 400`, `font-style: italic`, `line-height: 23px`, `color: rgb(209,190,167)` (var(--gold-border))

### Button "VIEW LOOKBOOK"
- `font-family: Manrope`/Poppins, `font-size: 14px`, `font-weight: 500`, `color: white`, `border: 2px solid rgba(252,184,68,0.35)`, padding `3px 12px` (small, pill-ish but `border-radius: 0` in source — keep square corners), background transparent
- Hover: fill with the gold border color at low opacity or solid `var(--gold)`, `transition: all 0.3s ease` (not pixel-verified — apply the same outline→fill pattern as the Hero button for consistency)

## Assets
- `/images/lookbook-banner.jpeg` (full section background)

## Text Content (verbatim)
- "EXCLUSIVE LOOKBOOK"
- "Modern Silhouettes.\nTimeless Heritage."
- "A curated edit of our most exclusive designs that celebrate elegance in every detail"
- "VIEW LOOKBOOK"

## Responsive Behavior
- **Desktop (≥1024px):** `aspect-[1009/420]` full-bleed section, text block ~40% from left edge, vertically centered.
- **Mobile (<768px):** section grows taller (image via `bg-cover bg-center` so it doesn't distort), heading shrinks to ~26px, keep left padding ~24px so text doesn't crowd the edge.
