# ShopByCategory Specification

## Overview
- **Target file:** `src/components/ShopByCategory.tsx`
- **Interaction model:** static (no hover transform/link on the cards — verified via stylesheet scan, no matching `:hover` rule and no `<a>` wrapper on the live site).

## DOM Structure
```
<section> bg /images/hero-bg... NO — bg is a light cream/marble texture, NOT downloaded as a discrete asset (it's a CSS/very-subtle background on the live site, not a distinct image we captured). Use solid `bg-[var(--cream)]` (#f7efe2) — faithful enough; do not fabricate a marble image.
  <div> max-width container, py-20, text-center
    <div> flex row items-center justify-center gap-4 mb-4 (heading + flourish dividers each side)
      <span> small ornamental line-dot-line flourish (CSS: thin gold horizontal line with a small gear/flower glyph mid-line — approximate with a simple `<span>` gold horizontal line ~80px + a small dot; do not fabricate a missing asset, this is a minor decorative rule)
      <h2> "SHOP BY CATEGORY"
      <span> mirrored flourish
    <div> grid: 6 cards, desktop `flex flex-row flex-wrap justify-center gap-x-6`, mobile `flex flex-col items-center gap-10`
      each card:
        <img> arch-shaped photo (already has gold border + arch cutout baked into the PNG's transparency) — object-contain, ~220px wide desktop / full-width (max ~320px) mobile. For "Unstitched" and "Jewellery" cards, the live site currently shows NO photo — render the card WITHOUT an image (just caption + divider), matching the live gap exactly.
        <h3> caption, e.g. "NEW ARRIVALS"
        <img> small ornamental divider /images/divider-category.png, ~140px wide, centered under caption
```

## Computed Styles

### Section heading "SHOP BY CATEGORY"
- `font-family: Cormorant Garamond`, `font-size: 42px`, `font-weight: 500`, `line-height: 42px`, `color: #0a0a0a` (near-black), `text-align: center`

### Card caption (e.g. "New Arrivals")
- `font-family: Cormorant Garamond`, `font-size: 26px`, `font-weight: 500`, `line-height: 26px`, `color: rgb(20,20,20)`, `text-transform: uppercase`

## Assets
- `/images/category-new-arrivals.png` → "New Arrivals"
- `/images/category-bridal.png` → "Bridal Wear"
- `/images/category-formals.png` → "Formals Wear"
- `/images/category-ready-deliver.png` → "Ready Deliver"
- (no image) → "Unstitched"
- (no image) → "Jewellery"
- `/images/divider-category.png` — small flourish under every caption (used 6×, once per card)

## Text Content (verbatim)
Card captions in order: New Arrivals, Bridal Wear, Formals Wear, Ready Deliver, Unstitched, Jewellery.

## Responsive Behavior
- **Desktop (≥1024px):** single row of 6 cards, roughly equal width, `gap-x` ~24px, arch images ~220-260px wide × ~320-380px tall (aspect ratio from source ≈ 0.69:1, e.g. 702×1024).
- **Mobile (<768px):** stacks to a single column, one card per row, image scales up to fill most of the container width while keeping its aspect ratio (per live mobile screenshot — cards are large and full-bleed-ish, not tiny thumbnails).
