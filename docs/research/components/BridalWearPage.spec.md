# Bridal Wear Page Specification

## Overview
- **Target file:** `src/app/bridal-wear/page.tsx`
- **Source:** https://fazalzari.com/bridal-wear/ (a WooCommerce category page — on the live site it currently shows the exact same single product as /products/, since that product's only category is "Bridal Wear")
- This page is structurally almost identical to the Products page (`src/app/products/page.tsx` — read it for the pattern once it exists, or build in parallel following the same structure described below). Reuse `Header`, `Footer`, `ProductCard`, `Reveal`, and `import { products } from "@/data/products"`.

## Structure
```
<Header />
<main>
  <section> small page-title banner, bg-ink, py-16, centered
    <h1 class="font-serif uppercase text-white text-[32px]">Bridal Wear</h1>
    <p class="font-sans text-body-gray text-sm mt-2">Home / Bridal Wear</p>
  <Reveal>
    <section class="py-16 bg-cream">
      <div class="mx-auto max-w-7xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.filter(p => p.category === "Bridal Wear").map(p => <ProductCard key={p.slug} product={p} />)}
      </div>
      <p class="mt-10 text-center font-italic italic text-sm text-body-gray">New bridal pieces are added regularly — message us on WhatsApp to see the full collection.</p>
    </section>
  </Reveal>
</main>
<Footer />
```

## Notes
- Filter `products` by `p.category === "Bridal Wear"` (don't just reuse the full unfiltered array) — this is the one piece of logic that differs from the Products page, so the two pages aren't literally identical even though they render the same single item today.
- Same styling/responsive rules as the Products page: cream/gold/ink palette, 3/2/1 column responsive grid.

When done: run `npx tsc --noEmit` (from D:\01_Clients\fazalzari-clone) and fix any errors.
