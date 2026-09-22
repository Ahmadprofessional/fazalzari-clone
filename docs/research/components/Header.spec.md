# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** header visible in top of any desktop screenshot; describe visually below (no crop saved — trust this spec, it's exhaustive).
- **Interaction model:** static (NOT sticky/fixed — scrolls away normally with the page). Includes the top announcement bar as its first child.

## DOM Structure
```
<header> (bg #0a0a0a / var(--ink))
  <div> topBar — full width, class="bg-black/60ish gray-800" thin strip
    <div> flex row, max-width container, justify-between, py-3, text-xs
      <span> "COMPLIMENTARY NATIONWIDE DELIVERY"
      <span> "HANDCRAFTED HERITAGE • DESIGNED FOR MODERN BRIDES"
      <a href="tel:+923009736020"> phone icon + "BOOK AN APPOINTMENT"
  <div> mainNav — max-width container, flex row, justify-between, items-center, py-4
    <Link href="/"> logo: circular badge, ~64px, thin gold ring border, dark fill, centered "FZ" monogram wordmark + "FAZAL ZARI" caption stacked inside the circle (use /images/logo.png — already circular with transparent bg, just render the <img> at ~64px, no extra ring needed since it's baked in)
    <nav> flex row gap-8, wraps to 2 lines on desktop (theme quirk — keep as flex-wrap so "BRIDAL WEAR" wraps under "HOME" like the source)
      <Link> HOME | ABOUT US | PRODUCTS | CHECKOUT | CONTACT US | BRIDAL WEAR
    <div> flex row gap-5, items-center
      <button> cart icon (lucide ShoppingBag) + small badge count "0"
      <button> search icon (lucide Search)
      <button> user icon (lucide User) — desktop only
  Mobile (< md): hamburger icon (lucide Menu) on far left, logo centered, cart+search icons on far right. Top bar hidden. Nav links hidden (no mobile menu interactivity required — decorative/non-functional per clone scope, but add a basic Sheet/drawer if trivial; otherwise a static hamburger icon is acceptable).
```

## Computed Styles (exact values from getComputedStyle)

### Top bar
- background: `#0a0a0a` (near-black, matches header)
- text: `font: 400 12px Poppins`, `letter-spacing: 1px`, `text-transform: uppercase`, `color: #b8b8b8` (light gray on black — sampled visually, not pixel-measured; use `text-gray-400`)
- padding: `py-2.5`
- hidden on mobile (`hidden md:flex`)

### Nav links
- `font-family: Poppins`, `font-size: 11px`, `font-weight: 500`, `letter-spacing: 3px` (`tracking-[3px]`), `text-transform: uppercase`, `line-height: 20px`
- Default color: `rgb(255,255,255)` / white
- Current page ("Home") and hover color: `var(--gold)` = `#967844`
- Transition: `transition-colors duration-300`

### Logo
- Source image `/images/logo.png` (already circular, gold ring + "FZ" + "Fazal Zari" text baked in as transparent PNG)
- Desktop size: ~64px. Mobile: ~72px, centered.

### Icons (cart/search/user)
- Color: white, ~20px, hover: gold, `transition-colors`
- Cart badge: small circular dark-teal/black badge top-right of bag icon showing count, white text ~10px (sampled from screenshot: dark teal-ish `#0f3d3d`ish circle — use `bg-black border border-gold text-white` as a faithful simplification if exact teal isn't critical)

## Assets
- `/images/logo.png`

## Text Content (verbatim)
- Top bar: "COMPLIMENTARY NATIONWIDE DELIVERY" · "HANDCRAFTED HERITAGE • DESIGNED FOR MODERN BRIDES" · "BOOK AN APPOINTMENT"
- Nav: Home, About Us, Products, Checkout, Contact Us, Bridal Wear
- Cart count: 0

## Responsive Behavior
- **Desktop (≥768px):** top bar + full row nav as described.
- **Mobile (<768px):** top bar hidden; header becomes hamburger (left) / centered logo / cart+search (right), single row, `justify-between`.
- All nav links point to `#` or `/` (mock — no real WooCommerce pages in this clone).
