# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static; link/icon hover color changes (not pixel-verified — apply gold hover consistent with the rest of the site).

## DOM Structure
```
<footer class="bg-[var(--ink)]">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 py-16 px-6">
    <div> <!-- col 1: About -->
      <h3> "About Fazal Zari"
      <p class="text-sm text-body-gray"> about paragraph
      <div class="flex gap-3 mt-4"> 3× circular outline icon button (Facebook, X, YouTube) — use lucide-react Facebook/Twitter/Youtube icons inside a rounded-full border border-gold/40 w-9 h-9 flex items-center justify-center
    <div> <!-- col 2: Quick Links -->
      <h3> "Quick Links"
      <ul> each item: "→ " prefix + label
    <div class="flex items-center justify-center"> <!-- col 3: centered badge -->
      <img> /images/logo.png, ~140px
    <div> <!-- col 4: Store info + newsletter, stack these two as one column -->
      <h3> "STORE INFORMATION"
      address block with map-pin / phone / mail icons (lucide) + text
      <h3 class="mt-6"> "NEWSLETTER"
      <p> short blurb
      <form class="flex mt-2"> <input placeholder="Email"> + circular gold submit button with right-arrow icon (lucide ArrowRight)
  <div class="border-t border-white/10 py-5 text-center text-xs tracking-wide">
    "COPYRIGHT FAZAL ZARI 2026. ALL RIGHT RESERVED"
```

## Computed Styles

### Column headings ("Quick Links", "STORE INFORMATION", "NEWSLETTER")
- `font-family: Cormorant`, `font-size: 21px`, `font-weight: 700`, `line-height: 21px`, `color: rgb(184,147,90)` (var(--gold-muted))

### Body text / links
- `font-family: Poppins`, `font-size: 14px`, `color: rgb(122,122,122)` (var(--body-gray)); links hover to `var(--gold)`.

### Copyright bar
- `font-family: Poppins`, `font-size: 12px`, `letter-spacing: 1px`, `text-transform: uppercase`, `color: rgb(122,122,122)`, centered, full-width top border `border-white/10`.

## Assets
- `/images/logo.png` (centered footer badge, larger than header — ~140px)

## Text Content (verbatim)
- Col 1 heading: "About Fazal Zari"
- Col 1 body: "Fazal Zari Bridal Wear is where heritage meets luxury. Each piece is a work of art, handcrafted to make your special day truly unforgettable."
- Col 2 heading: "Quick Links"; items: New Arrivals, Bridal, Formals, Jewellery, Unstitch, Ready To Deliver
- Col 4 heading: "STORE INFORMATION"; address: "BANO market, Kotwali Rd, near MCB Bank Soap Market Branch, Clock Tower, Faisalabad, Pakistan"; phone: "+92 300 9736020"; email: "INFO@FAZALZARI.COM"
- Col 4 heading 2: "NEWSLETTER"; body: "Subscribe to get updates on new collections & exclusive offers."; input placeholder "Email"
- Bottom bar: "COPYRIGHT FAZAL ZARI 2026. ALL RIGHT RESERVED"

## Responsive Behavior
- **Desktop (≥768px):** 4 columns as described.
- **Mobile (<768px):** stacks to 1 column, centered logo badge moves to its natural order (after Quick Links, before Store Information) or can stay 3rd — match source DOM order (About → Quick Links → Logo badge → Store/Newsletter).
