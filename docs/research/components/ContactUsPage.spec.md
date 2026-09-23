# Contact Us Page Specification

## Overview
- **Target file:** `src/app/contact-us/page.tsx`
- **Source:** https://fazalzari.com/contact-us/
- Reuse `Header`, `Footer`, `Reveal`. This page needs a small interactive form, so either make the page itself (or just the form part) a `"use client"` component — your call, simplest is fine.
- There is NO real backend/email service in this project (explicit decision — no cart/checkout backend either, WhatsApp is the contact channel). The contact form's "Send" button should NOT attempt to POST anywhere. Instead: on submit, build a WhatsApp deep link from the filled-in fields (name, phone, message) and open it in a new tab, e.g. `https://wa.me/923009736020?text=<url-encoded message combining the name/phone/message fields>` — reuse the phone number constant pattern already used in `@/components/WhatsAppButton` (that file hardcodes `"923009736020"` — you can inline the same number here, or better, just render `<WhatsAppButton variant="inline" />` type button next to/instead of a raw fetch call). Keep it simple: `e.preventDefault()`, build the message string, `window.open(waLink, "_blank")`.

## Sections, top to bottom

### 1. Page hero
- Similar structure to `AboutUsPage`'s hero pattern (full-bleed bg image, dark overlay, `min-h-[50vh]`) — for the background here it's fine to reuse `/images/about-hero-bg.jpeg` again (the same diagonal gradient photo appears to be a general "inner page" hero background on the source site, reused across About/Contact) since a distinct Contact-specific hero photo wasn't captured separately.
- Small eyebrow "Contact Us"
- Big serif heading, uppercase: "We'd Love To Hear From You" (font-serif, white)
- Paragraph: "Whether you're looking for your dream bridal outfit, need styling advice, or want to schedule a personal consultation, our team is here to make your bridal journey effortless and memorable." (italic, white)
- Button "Explore Collection" → link to `/products`, same outline-gold style as elsewhere.

### 2. Get In Touch + Send Message (two columns)
bg-cream, py-16, two-column layout (stacks to 1 column on mobile, info block first then form):

**Left column — "GET IN TOUCH"** (heading, gold-muted, uppercase, font-serif):
- "Visit Our Boutique" (bold small heading) — "BANO Market, Kotwali Road, Near MCB Bank Sop Market Branch, Clock Tower, Faisalabad, Pakistan" (use a lucide `MapPin` icon)
- "Call Us" — two numbers, each its own `tel:` link: "+92 300 9736020" and "+92 320 7635020" (lucide `Phone` icon)
- "Email Us" — "Info@fazalzari.com" as a `mailto:` link (lucide `Mail` icon)
- "Business Hours" — "Monday – Saturday" / "10:00 AM – 8:00 PM" (lucide `Clock` icon)
- "FOLLOW US" — reuse the same 3 circular social icon buttons pattern as `Footer.tsx` (Facebook/X/YouTube) — you can inline simple `<a>` tags with the same small inline SVGs used there, or just link out with generic icons; keep it visually consistent (circular border, gold hover), don't overbuild.

**Right column — "SEND US A MESSAGE"** (heading, gold-muted, uppercase, font-serif), a card/panel with a form (`"use client"`):
- Two-up row: Name / Last Name text inputs
- Email input, Phone input
- Message textarea
- Submit button "Send" (styled like the site's other gold-outline buttons) — wired to open WhatsApp as described above in Overview, not a real POST.
- Inputs: white/cream background, thin `border-gold-border`, focus ring gold, consistent with the Footer newsletter input style already in `Footer.tsx` (look at that file's `<input>` classes for the exact pattern to match, e.g. `border border-gold-border bg-transparent px-4 font-sans text-sm ... focus:border-gold focus:outline-none`).

### 3. Google Map embed
- Full-width `<iframe>` embed, `src="https://maps.google.com/maps?q=Fazal%20Zari&t=m&z=15&output=embed&iwloc=near"`, height ~400px, `loading="lazy"`, `className="w-full grayscale-0 border-0"`.

### 4. Trust badges strip
- bg-ink, py-10, 3-column row (stacks to 1 column mobile), each: icon image (~48px) + short bold label, centered
  1. `/images/icon-plane.png` — "FREE SHIPPING"
  2. `/images/icon-discount.png` — "BIG DISCOUNT"
  3. `/images/icon-card.png` — "SECURE PAYMENT" (note: this label is about payment SECURITY messaging carried over from the source for visual fidelity — it does NOT imply this clone processes real payments; there is no checkout in this project)

## Text content
All copy given verbatim above — use exactly, don't paraphrase.

## Fonts/colors
Same tokens as rest of site: `font-serif`, `font-serif-alt`, `font-sans`, `font-italic italic`, `bg-ink`, `bg-cream`, `text-gold`, `text-gold-muted`, `text-body-gray`, `border-gold-border`.

When done: run `npx tsc --noEmit` (from D:\01_Clients\fazalzari-clone) and fix any errors.
