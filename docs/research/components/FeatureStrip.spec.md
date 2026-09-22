# FeatureStrip Specification

## Overview
- **Target file:** `src/components/FeatureStrip.tsx`
- **Interaction model:** static.

## DOM Structure
```
<section class="bg-[var(--ink)] py-16">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
    4× <div class="flex flex-col items-center text-center px-8 py-6 gap-3">
      <img> icon, ~64px (use the downloaded PNG icon directly, they're already gold line-art on transparent bg)
      <h3> title, e.g. "PREMIUM QUALITY"
      <p> 2-line description
```

## Computed Styles

### Title
- `font-family: Cormorant`, `font-size: 24px`, `font-weight: 500`, `line-height: 24px`, `color: rgb(184,147,90)` (var(--gold-muted)), `text-transform: uppercase`

### Description
- `font-family: Poppins`, `font-size: 14px`, `font-weight: 400`, `line-height: 21px`, `color: rgb(122,122,122)` (var(--body-gray)), `text-align: center`

## Assets
- `/images/icon-premium-quality.png`
- `/images/icon-custom-tailoring.png`
- `/images/icon-secure-payment.png`
- `/images/icon-nationwide-delivery.png`

## Text Content (verbatim, item: title / description)
1. PREMIUM QUALITY / "Finest Fabrics & Impeccable Craftsmanship"
2. CUSTOM TAILORING / "Perfect Fit. Your Style. Our Expertise."
3. SECURE PAYMENT / "100% Safe & Reliable Checkout"
4. NATIONWIDE DELIVERY / "Bringing Luxury To Your Doorstep"

## Responsive Behavior
- **Desktop (≥768px):** 4 equal columns in a row, thin vertical divider lines (`border-white/15`) between them.
- **Mobile (<768px):** stacks to 1 column, dividers become horizontal (`divide-y`) between stacked items.
