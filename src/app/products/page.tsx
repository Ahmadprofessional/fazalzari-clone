import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products | Fazal Zari",
  description:
    "Browse handcrafted bridal and festive wear from Fazal Zari — heritage craftsmanship designed for the modern bride.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink py-10 sm:py-14 md:py-16 text-center px-5 sm:px-6">
          <h1 className="font-serif uppercase text-white text-[24px] sm:text-[28px] md:text-[32px]">
            Products
          </h1>
          <p className="mt-2 font-sans text-xs sm:text-sm text-body-gray">
            Home / Products
          </p>
        </section>

        <Reveal>
          <section className="bg-cream py-10 sm:py-14 md:py-16">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:gap-8 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
            <p className="mt-10 text-center font-italic italic text-sm text-body-gray">
              More pieces from our collection are added regularly — message
              us on WhatsApp for the full catalogue.
            </p>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
