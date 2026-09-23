# About Us Page Specification

## Overview
- **Target file:** `src/app/about-us/page.tsx`
- **Source:** https://fazalzari.com/about-us/
- Reuse the existing `Header` and `Footer` components (import from `@/components/Header` and `@/components/Footer`) — do not rebuild them. Wrap each major section below in `<Reveal>` (from `@/components/Reveal`, already built — just wrap it, no need to read its source) for a scroll-triggered fade-up, same as the homepage does.

## Sections, top to bottom

### 1. Page hero
- Full-bleed background image `/images/about-hero-bg.jpeg` (diagonal black-to-cream gradient photo), similar structure to the homepage `Hero.tsx` component (look at it for the pattern: `next/image fill` + `absolute inset-0 flex items-center` content overlay) but shorter — use `min-h-[55vh]` instead of 85vh.
- Small eyebrow label with a short gold divider dash: "About Us" (font-sans, gold, tracking-wide, small)
- Big serif heading, uppercase: "Crafting Heritage. Designing Dreams." (`font-serif`, white, ~40px desktop / 28px mobile)
- Paragraph: "Every Fazal Zari creation is more than bridal wear. It is a celebration of Pakistani craftsmanship, timeless elegance, and unforgettable moments." (white, `font-italic italic`, ~16px)
- Button: "Explore Collection" — link to `/products`, same outline-gold style as the Hero button (`border-gold-light`, uppercase, hover fill gold-light)

### 2. About Us intro (two-column: image + text)
- bg white or very light `bg-cream/40`, py-20
- Left: `<Image src="/images/about-story.png" />`, rounded corners optional, object-cover, ~500x333 aspect
- Right: heading "About Us" (font-serif, gold-muted, uppercase small eyebrow) then two paragraphs:
  - "Fazal Zari was founded with a single vision: To preserve the richness of traditional Pakistani bridal craftsmanship while creating silhouettes for today's modern bride."
  - "Every collection reflects months of meticulous artistry from selecting premium fabrics to intricate hand embellishments that honor generations of skilled craftsmanship."
- Responsive: stacks to 1 column on mobile, image on top.

### 3. Pull-quote banner
- Full-width section, background image `/images/about-quote-bg.jpeg` with a dark overlay (`bg-black/60` per the live site's own overlay), centered text, py-16
- Large italic serif quote, white, centered: "Our brides wear more than beautiful garments. They wear stories."

### 4. Our Philosophy (3-column)
- Centered heading "OUR PHILOSOPHY" (font-serif-alt, uppercase, ~32px, with small gold flourish dividers either side like ShopByCategory's heading — reuse that same simple line+dot pattern, don't overbuild)
- 3 columns, each: icon image (~64px) + bold title + 2-line description, centered text
  1. icon `/images/icon-heritage.png` — "HERITAGE" — "Traditional techniques passed through generations."
  2. icon `/images/icon-craftsmanship.png` — "CRAFTSMANSHIP" — "Every stitch reflects precision and passion."
  3. icon `/images/icon-heritage.png` (reused — this is a real gap on the live site, not a mistake) — "ELEGANCE" — "Designed to make every bride unforgettable."
- Responsive: stacks to 1 column on mobile.

### 5. Why Choose Fazal Zari (4-column)
- Centered heading "Why Choose Fazal Zari" with the same flourish-divider pattern
- 4 columns, each: image (~800x533 photo, not a small icon — render at like 220px wide, `object-cover rounded`) + bold title + 2-line description
  1. `/images/icon-heritage.png` (reused again — real gap on source) — "PREMIUM FABRICS" — "Only the finest imported and local fabrics."
  2. `/images/about-hand-embroidery.png` — "HAND EMBROIDERY" — "Intricate detailing crafted by skilled artisans."
  3. `/images/about-perfect-tailoring.png` — "PERFECT TAILORING" — "Made for flawless fit and comfort."
  4. `/images/about-exclusive-designs.png` — "EXCLUSIVE DESIGNS" — "Unique collections created in limited quantities."
- Responsive: 2 columns tablet, 1 column mobile.

### 6. Trusted By Brides (stats counter strip)
- bg-ink (dark), centered heading "TRUSTED BY BRIDES" (gold-muted) + subtitle "Loved by brides across Pakistan."
- Background image `/images/about-trusted-by-brides.png` may be used subtly behind/beside the stats (low opacity or as a side image) — use your judgement, don't force it if it clutters; the stats themselves are the priority.
- 4-column stat row, each using the `Counter` component (`@/components/Counter`, already built — import and use `<Counter to={500} suffix="+" />` etc., don't rebuild it):
  1. `<Counter to={500} suffix="+" />` — "Luxury Bridal Dresses Created"
  2. `<Counter to={1000} suffix="+" />` — "Satisfied Clients"
  3. `<Counter to={6} suffix="+" />` — "Years of Craftmanship"
  4. `<Counter to={100} suffix="%" />` — "Hand Finished"
- Large gold serif numerals (~48px), white/gray label below each.
- Responsive: 2x2 grid tablet, 1 column mobile.

## Text content
All copy is given verbatim inline above — use it exactly, do not paraphrase.

## Fonts/colors
Use the same design tokens as the rest of the site: `font-serif` (Cormorant) for headings, `font-serif-alt` (Cormorant Garamond) also acceptable for section headings, `font-sans` (Poppins) for body/labels, `font-italic italic` (Inter) for quotes/taglines. Colors: `bg-ink`, `bg-cream`, `text-gold`, `text-gold-muted`, `text-body-gray`.

When done: run `npx tsc --noEmit` (from D:\01_Clients\fazalzari-clone) and fix any errors.
