import { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCatalogFilter from "@/components/ProductCatalogFilter";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products | Fazal Zari",
  description:
    "Browse handcrafted bridal, luxury formals, party wear, and unstitched collections from Fazal Zari — heritage craftsmanship designed for the modern woman.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink py-10 sm:py-14 md:py-16 text-center px-5 sm:px-6">
          <h1 className="font-serif uppercase text-white text-[24px] sm:text-[28px] md:text-[32px]">
            Collections
          </h1>
          <p className="mt-2 font-sans text-xs sm:text-sm text-body-gray">
            Home / Collections
          </p>
        </section>

        <Reveal>
          <section className="bg-cream py-10 sm:py-14 md:py-16">
            <Suspense fallback={
              <div className="py-20 text-center font-serif text-lg text-ink">
                Loading collections...
              </div>
            }>
              <ProductCatalogFilter products={products} />
            </Suspense>
            <p className="mt-12 text-center font-italic italic text-sm text-body-gray">
              More pieces from our atelier are added regularly — message
              us on WhatsApp for bespoke inquiries and orders.
            </p>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
