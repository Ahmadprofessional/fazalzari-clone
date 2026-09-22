# Fazal Zari — Behaviors

## Global
- No sticky/fixed header. No scroll-snap. No parallax. No AOS/fade-up reveal animations found on this page (elements are opacity:1 in the DOM immediately — Elementor's newer "atomic" flexbox builder, not the classic animated-entrance widgets).
- No smooth-scroll library (no `.lenis`/`.locomotive-scroll` class, native scrolling).
- Mobile header swaps to hamburger + centered logo + cart/search; top announcement bar is hidden on mobile.

## Header nav links
- Trigger: hover / current page.
- Default: `color: rgb(255,255,255)`, `text-transform: uppercase`, `letter-spacing: 3px`, `font: 500 11px Poppins`.
- Hover / active ("Home" on homepage): `color: rgb(150,120,68)` (gold).
- Transition: standard color transition (~0.3s ease, not separately measured — use `transition: color 0.3s ease`).

## Buttons ("EXPLORE COLLECTION", "VIEW LOOKBOOK")
- Style: transparent bg, `border: 1.6px solid rgb(232,198,134)`, white uppercase text, serif (Cormorant) 15px/600, `border-radius: 3px`, padding 15px.
- Hover (standard Elementor button pattern — bg fills with border color, text stays legible): apply `background: rgb(232,198,134)`, `color: #000`, `transition: all 0.3s ease`. (Not captured pixel-exact live; use this as the faithful default treatment for an outline gold button.)

## ShopByCategory image cards
- No link wrapper, no hover transform/opacity rule matched in stylesheets — treat as static (no hover effect). Arch shape + gold border is baked into the source PNG (transparent background), not CSS clip-path/mask.
- "Unstitched" and "Jewellery" cards on the live site currently render with NO photo (just caption + divider) — a content gap on the live site itself, not a bug to fix; replicate as-is (icon/placeholder not required, just omit image for those two OR reuse a neutral placeholder — recommend leaving image slot empty like the live site for fidelity).

## ExclusiveLookbook (Slider Revolution)
- Interaction model: **static composition**, not a carousel. Verified: only one non-static `sr7-slide` (id `...-1`, holds bg + label + heading) plus two `sr7-staticslide` layers (`...-2` with paragraph+button, `...-2_2` empty) that sit stacked on top with `pointer-events:none/auto` — this is a common trick to combine multiple "layers" as one flat design in Slider Revolution, not a timed rotation. No arrows/dots found. Do not build a carousel here.
- Background: single JPEG `Banner-final-1.jpeg`, rendered via canvas in the live site but safe to use as a plain `background-image`/`<img>` — the canvas is just Revolution Slider's renderer, the source asset is flat.
- Text layers: absolutely positioned (left-aligned) over the image at roughly 19–36px font sizes; reproduce as a simple absolutely-positioned content block over the background image rather than pixel-matching each layer's literal `left/top`, since those px values are relative to the slider's internal 1009×420 design canvas and will not translate directly to a responsive rebuild.

## Feature strip icons
- 4 items, vertical divider lines between them (desktop only — stacks on mobile, dividers become horizontal or drop, not verified pixel-exact; use standard responsive stacking).
- Icon: gold line-art SVG/PNG, ~60-70px.
- Title: Cormorant, uppercase, 24px, gold `rgb(184,147,90)`.
- Description: 2 lines, gray body text.

## Footer
- Quick Links items prefixed with a "→" arrow; hover likely brightens to gold/white (standard link hover, not pixel-verified — apply gold hover to match nav pattern).
- Newsletter: email input (dark, subtle border) + circular gold submit button with a right-arrow icon.
- Social icons: circular outline, icon centered; hover fill likely gold (standard pattern, not pixel-verified).

## Responsive breakpoints (observed via 1440 / 375 screenshots only — no 768 tablet check)
- ShopByCategory grid: row of 6 (desktop) → single column, full width (mobile). Breakpoint not pinpointed; use Tailwind `md:` (768px) as the switch.
- Header: full nav row (desktop) → hamburger (mobile), same `md:` breakpoint assumption.
- Footer: 4 columns (desktop) → stacked (mobile), same assumption.
