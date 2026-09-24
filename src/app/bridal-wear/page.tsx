import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Bridal Wear — Handcrafted Lehengas, Peshwas & Gowns",
  description:
    "Browse Fazal Zari's exclusive bridal collection — crimson lehengas, champagne peshwas, blush gowns, and more. Pure silk, zardozi embroidery, made to order.",
  alternates: { canonical: "/bridal-wear" },
};

export default function BridalWearPage() {
  const bridalWearProducts = products.filter(
    (p) => p.category === "Bridal Wear"
  );

  return (
    <>
      <Header />
      <main>
        <section className="bg-ink py-10 sm:py-14 md:py-16 text-center px-5 sm:px-6">
          <h1 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] uppercase text-white">
            Bridal Wear
          </h1>
          <p className="mt-2 font-sans text-xs sm:text-sm text-body-gray">
            Home / Bridal Wear
          </p>
        </section>
        <Reveal>
          <section className="bg-cream py-10 sm:py-14 md:py-16">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:gap-8 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-3">
              {bridalWearProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
            <p className="mt-10 text-center font-italic text-sm italic text-body-gray">
              New bridal pieces are added regularly — message us on WhatsApp
              to see the full collection.
            </p>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
