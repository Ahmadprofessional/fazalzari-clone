import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

// Top featured products featuring real models with jewelry
const FEATURED_SLUGS = [
  "scarlet-embroidered-bridal-lehenga",
  "red-embroidered-lehenga",
  "plum-embroidered-kurta-lehenga",
  "champagne-embroidered-anarkali-lehenga",
  "dusty-rose-embroidered-pishwas-lehenga",
  "magenta-embroidered-anarkali-lehenga",
];

export default function FeaturedProducts() {
  const featured = FEATURED_SLUGS.map((slug) =>
    products.find((p) => p.slug === slug)
  ).filter((p): p is (typeof products)[number] => p !== undefined);

  return (
    <section className="bg-cream w-full py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Section Header */}
        <Reveal variant="fade-up">
          <div className="mb-8 sm:mb-12 text-center">
            <div className="mb-3 flex items-center justify-center gap-3 sm:gap-4">
              <span className="relative hidden h-px w-20 bg-gold-border sm:inline-block">
                <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
              </span>
              <p className="font-serif text-xs sm:text-sm uppercase tracking-[3px] text-gold">
                Masterpiece Collection
              </p>
              <span className="relative hidden h-px w-20 bg-gold-border sm:inline-block">
                <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
              </span>
            </div>

            <h2 className="font-serif-alt text-[26px] sm:text-[34px] md:text-[42px] font-medium leading-tight text-[#0a0a0a]">
              FEATURED CREATIONS
            </h2>

            <p className="mx-auto mt-3 max-w-2xl font-italic text-sm sm:text-base italic text-body-gray">
              Handcrafted with pure raw silk, traditional zardozi embellishments, and regal silhouettes tailored for your most cherished celebrations.
            </p>
          </div>
        </Reveal>

        {/* Product Grid with Staggered Cascade */}
        <div className="grid grid-cols-1 gap-5 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product, idx) => (
            <Reveal
              key={product.slug}
              delay={(idx % 3) * 120}
              variant="fade-up"
            >
              <ProductCard product={product} priority={idx < 3} />
            </Reveal>
          ))}
        </div>

        {/* View All Button */}
        <Reveal delay={200} variant="fade-up">
          <div className="mt-10 sm:mt-14 text-center">
            <Link
              href="/products"
              className="inline-block rounded-[3px] border-[1.6px] border-gold px-7 sm:px-9 py-3 sm:py-3.5 font-serif text-[13px] sm:text-[14px] font-semibold uppercase tracking-[2px] text-ink transition-all duration-300 hover:bg-gold hover:text-white hover:scale-105"
            >
              Explore All Creations
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
