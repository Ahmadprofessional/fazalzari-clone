# Fazal Zari — Homepage Topology

Source: https://fazalzari.com/ (WordPress + Elementor + WooCommerce + Slider Revolution 7, theme built with "rometheme-for-elementor" + "header-footer-elementor" plugins)

Scope: homepage only (per clone-website skill defaults). Cart/checkout/products are WooCommerce — out of scope; only the homepage nav references them (mock links).

## Sections, top to bottom

1. **TopAnnouncementBar** — thin gray/black bar. Two centered text items ("COMPLIMENTARY NATIONWIDE DELIVERY" / "HANDCRAFTED HERITAGE • DESIGNED FOR MODERN BRIDES") + phone CTA "BOOK AN APPOINTMENT" on the right. Static, not a marquee. Hidden on mobile.
2. **Header** — black bg, in normal document flow (NOT sticky/fixed — scrolls away with the page). Left: circular logo badge ("FZ" monogram + "Fazal Zari" wordmark, gold on black, thin gold ring). Center: nav links (Home / About Us / Products / Checkout / Contact Us / Bridal Wear — wraps to 2 rows). Right: cart icon+count, search icon, account icon. Mobile: hamburger (left), centered logo, cart+search (right) — no visible nav.
3. **Hero** — full-bleed dark background photo (chandelier/mirror boutique interior), left-aligned content: small ornamental divider, "—Fazal Zari" label, big serif heading "HERITAGE LUXURY, HANDCRAFTED FOR ROYALTY.", italic paragraph, outlined "EXPLORE COLLECTION" button. Content is plain Elementor (not slider).
4. **ShopByCategory** — cream/marble background. Centered "SHOP BY CATEGORY" heading with ornamental flourish dividers on both sides. 6-card grid (New Arrivals, Bridal Wear, Formals Wear, Ready Deliver, Unstitched, Jewellery): arch-shaped (mosque-arch silhouette) photo with gold border baked into the PNG itself (no CSS clip-path/mask — source images already have the arch cutout + transparency), caption below in serif caps, small ornamental divider under caption. Desktop: flex row of 6 (wraps if needed — Unstitched/Jewellery had no image, likely a data gap on the live site, they render as caption+divider only). Mobile: stacks to 1 column, full width.
5. **ExclusiveLookbook** — built with Slider Revolution 7 but used as a static composition (not a rotating carousel — verified via DOM: slide 1 = bg + label + heading, "static slides" 2/2_2 = paragraph + button, stacked absolutely, no autoplay/dot nav found). Single full-bleed background photo `Banner-final-1.jpeg` (already contains the diagonal-cut bridal photo collage + circular FZ logo watermark baked in — not separate layered images). Absolutely-positioned text layers on top, left-aligned: "EXCLUSIVE LOOKBOOK" gold label, "Modern Silhouettes.\nTimeless Heritage." serif heading (white), italic paragraph (muted gold/tan), outlined "VIEW LOOKBOOK" button.
6. **FeatureStrip** — black bg, 4 columns separated by thin vertical dividers: Premium Quality / Custom Tailoring / Secure Payment / Nationwide Delivery. Each = centered gold line-icon, gold serif caps title, gray 2-line description.
7. **Footer** — black bg. 4 columns: (1) "About Fazal Zari" + short paragraph + 3 circular social icons (Facebook/X/YouTube). (2) "Quick Links" list (New Arrivals, Bridal, Formals, Jewellery, Unstitch, Ready To Deliver) each with a small "→" arrow prefix. (3) centered large circular FZ logo badge (same as header, bigger). (4) "STORE INFORMATION" (address, phone, email with icons) + "NEWSLETTER" (short text + email input with gold circular submit arrow button). Bottom bar: centered copyright text, full-width black, thin top border separating from the 4-column area.

## Layout / z-index notes
- Single-column scrolling page, no scroll-snap, no parallax observed.
- No sticky/fixed elements at all (header included).
- No dark/light theme toggle.
- No lazy-reveal/AOS fade-up animations detected on scroll (content is present with opacity:1 as soon as DOM exists); Elementor's `e-con` flexbox containers are used pervasively instead of a grid.

## Interaction model per section
- TopAnnouncementBar: static.
- Header: static in-flow; nav link color animates on hover (white → gold) and current page ("Home") is gold by default.
- Hero: static; button has hover (see BEHAVIORS.md).
- ShopByCategory: static grid; likely image hover zoom (assume standard Elementor image-hover scale, verify in BEHAVIORS.md).
- ExclusiveLookbook: static single composition (despite using a slider plugin).
- FeatureStrip: static.
- Footer: static; link hover color change, social icon hover fill.
