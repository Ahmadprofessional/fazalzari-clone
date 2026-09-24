import Image from "next/image";
import Link from "next/link";
import type { CategoryCard } from "@/types/content";
import { BLUR_CREAM } from "@/lib/blur";

const CATEGORIES: CategoryCard[] = [
  { label: "New Arrivals", image: "/images/category-new-arrivals.png", href: "/products" },
  { label: "Bridal Wear", image: "/images/category-bridal.png", href: "/bridal-wear" },
  { label: "Formals Wear", image: "/images/category-formals.png", href: "/products" },
  { label: "Ready Deliver", image: "/images/category-ready-deliver.png", href: "/products" },
];

export default function ShopByCategory() {
  return (
    <section className="bg-cream w-full">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-12 sm:py-16 md:py-20 text-center">
        {/* Heading with flourish dividers */}
        <div className="mb-4 flex items-center justify-center gap-3 sm:gap-4">
          <span className="relative hidden h-px w-20 bg-gold-border sm:inline-block">
            <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
          </span>
          <h2 className="font-serif-alt text-[26px] sm:text-[34px] md:text-[42px] font-medium leading-tight text-[#0a0a0a]">
            SHOP BY CATEGORY
          </h2>
          <span className="relative hidden h-px w-20 bg-gold-border sm:inline-block">
            <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
          </span>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:flex md:flex-wrap md:justify-center md:gap-x-6 md:gap-y-10">
          {CATEGORIES.map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className="group flex w-full flex-col items-center transition-transform duration-300 hover:-translate-y-1 md:w-[220px]"
            >
              {category.image && (
                <div className="overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.label}
                    width={702}
                    height={1024}
                    sizes="(min-width: 768px) 220px, 45vw"
                    className="mb-3 sm:mb-4 h-auto w-full object-contain transition-transform duration-500 group-hover:scale-105 md:w-[220px]"
                    placeholder="blur"
                    blurDataURL={BLUR_CREAM}
                  />
                </div>
              )}
              <h3 className="font-serif-alt text-[16px] sm:text-[20px] md:text-[26px] font-medium uppercase leading-tight text-[rgb(20,20,20)] transition-colors duration-300 group-hover:text-gold">
                {category.label}
              </h3>
              <Image
                src="/images/divider-category.png"
                alt=""
                width={463}
                height={137}
                aria-hidden="true"
                className="mt-2 sm:mt-3 h-auto w-[100px] sm:w-[120px] md:w-[140px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
