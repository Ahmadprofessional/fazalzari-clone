import Image from "next/image";
import type { CategoryCard } from "@/types/content";

const CATEGORIES: CategoryCard[] = [
  { label: "New Arrivals", image: "/images/category-new-arrivals.png", href: "#" },
  { label: "Bridal Wear", image: "/images/category-bridal.png", href: "#" },
  { label: "Formals Wear", image: "/images/category-formals.png", href: "#" },
  { label: "Ready Deliver", image: "/images/category-ready-deliver.png", href: "#" },
  { label: "Unstitched", image: null, href: "#" },
  { label: "Jewellery", image: null, href: "#" },
];

export default function ShopByCategory() {
  return (
    <section className="bg-cream w-full">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        {/* Heading with flourish dividers */}
        <div className="mb-4 flex items-center justify-center gap-4">
          <span className="relative hidden h-px w-20 bg-gold-border sm:inline-block">
            <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
          </span>
          <h2 className="font-serif-alt text-[42px] font-medium leading-[42px] text-[#0a0a0a]">
            SHOP BY CATEGORY
          </h2>
          <span className="relative hidden h-px w-20 bg-gold-border sm:inline-block">
            <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
          </span>
        </div>

        {/* Category cards */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:flex-wrap md:justify-center md:gap-x-6 md:gap-y-10">
          {CATEGORIES.map((category) => (
            <div
              key={category.label}
              className="flex w-full max-w-[320px] flex-col items-center md:w-[220px] md:max-w-none"
            >
              {category.image && (
                <Image
                  src={category.image}
                  alt={category.label}
                  width={702}
                  height={1024}
                  className="mb-4 h-auto w-full object-contain md:w-[220px]"
                />
              )}
              <h3 className="font-serif-alt text-[26px] font-medium uppercase leading-[26px] text-[rgb(20,20,20)]">
                {category.label}
              </h3>
              <Image
                src="/images/divider-category.png"
                alt=""
                width={463}
                height={137}
                aria-hidden="true"
                className="mt-3 h-auto w-[140px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
