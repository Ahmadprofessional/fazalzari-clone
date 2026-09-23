# Products Page Specification

## Overview
- **Target file:** `src/app/products/page.tsx`
- **Source:** https://fazalzari.com/products/
- Reuse `Header` (`@/components/Header`), `Footer` (`@/components/Footer`), `ProductCard` (`@/components/ProductCard` — already built, takes a `product: Product` prop and renders the image/name/price/WhatsApp-enquire button, don't rebuild it), and `Reveal` (`@/components/Reveal`) for scroll-in animation on the grid. Import products from `@/data/products` (`import { products } from "@/data/products"`) — it's an array with currently ONE real product (the live store only has one product listed — this is a real content gap on the source site, not a mistake to "fix" by inventing more products).

## Structure
```
<Header />
<main>
  <section> small page-title banner, bg-ink, py-16, centered
    <h1 class="font-serif uppercase text-white text-[32px]">Products</h1>
    <p class="font-sans text-body-gray text-sm mt-2">Home / Products</p> (breadcrumb style, matches source's "HOME / BRIDLE WEAR / ..." breadcrumb pattern seen on the product detail page — keep it simple here, just "Home / Products")
  <Reveal>
    <section class="py-16 bg-cream">
      <div class="mx-auto max-w-7xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(p => <ProductCard key={p.slug} product={p} />)}
      </div>
      {/* If products.length is small (it is — just 1), add a short italic note below the grid so the page doesn't look broken/empty: */}
      <p class="mt-10 text-center font-italic italic text-sm text-body-gray">More pieces from our collection are added regularly — message us on WhatsApp for the full catalogue.</p>
    </section>
  </Reveal>
</main>
<Footer />
```

## Styling
- Match the site's cream/gold/ink palette (`bg-cream`, `bg-ink`, `text-gold`, `border-gold-border`) already defined in `globals.css` as Tailwind tokens.
- Grid gap ~32px, cards have a subtle border (`border border-gold-border/40`) per `ProductCard`'s own styling — you don't need to add extra card chrome, `ProductCard` already handles that.

## Responsive
- Desktop: 3-column grid. Tablet: 2-column. Mobile: 1-column, full width.

When done: run `npx tsc --noEmit` (from D:\01_Clients\fazalzari-clone) and fix any errors.
