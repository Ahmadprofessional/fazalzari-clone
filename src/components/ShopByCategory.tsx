import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { BLUR_CREAM } from "@/lib/blur";

const CATEGORIES = [
  {
    label: "New Arrivals",
    image: "/images/products/champagne-embroidered-anarkali-lehenga/img-1.webp",
    href: "/products?category=New+Arrivals",
  },
  {
    label: "Bridal Wear",
    image: "/images/products/scarlet-embroidered-bridal-lehenga/img-1.webp",
    href: "/bridal-wear",
  },
  {
    label: "Luxury Formals",
    image: "/images/products/rose-gold-embroidered-maxi/img-2.webp",
    href: "/products?category=Luxury+Formals",
  },
  {
    label: "Party Wear",
    image: "/images/products/powder-blue-embroidered-kurta-set/img-2.webp",
    href: "/products?category=Party+Wear",
  },
  {
    label: "Unstitched",
    image: "/images/products/emerald-green-embroidered-kurta/img-2.webp",
    href: "/products?category=Unstitched",
  },
];

export default function ShopByCategory() {
  return (
    <section className="bg-cream w-full">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-12 sm:py-16 md:py-20 text-center">
        {/* Heading with flourish dividers */}
        <Reveal variant="fade-up">
          <div className="mb-8 sm:mb-10 flex items-center justify-center gap-3 sm:gap-4">
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
        </Reveal>

        {/* Category cards — modern rounded design with staggered cascade */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 sm:gap-5">
          {CATEGORIES.map((category, index) => (
            <Reveal
              key={category.label}
              delay={index * 80}
              variant="fade-up"
            >
              <Link
                href={category.href}
                className="group relative flex flex-col items-center"
              >
                {/* Card container */}
                <div className="relative w-full overflow-hidden rounded-[16px] sm:rounded-[20px] border border-gold-border/40 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-gold/10 group-hover:border-gold/60">
                  {/* Aspect ratio container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.label}
                      fill
                      priority
                      sizes="(min-width: 1024px) 18vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                      placeholder="blur"
                      blurDataURL={BLUR_CREAM}
                    />

                    {/* Gradient overlay — elegant bottom fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent transition-opacity duration-500 group-hover:from-black/80" />

                    {/* Subtle gold corner accents */}
                    <div className="absolute left-2.5 top-2.5 h-6 w-6 border-l-[1.5px] border-t-[1.5px] border-gold/50 rounded-tl-[4px] transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-gold/80" />
                    <div className="absolute right-2.5 top-2.5 h-6 w-6 border-r-[1.5px] border-t-[1.5px] border-gold/50 rounded-tr-[4px] transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-gold/80" />
                    <div className="absolute bottom-2.5 left-2.5 h-6 w-6 border-l-[1.5px] border-b-[1.5px] border-gold/50 rounded-bl-[4px] transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-gold/80" />
                    <div className="absolute bottom-2.5 right-2.5 h-6 w-6 border-r-[1.5px] border-b-[1.5px] border-gold/50 rounded-br-[4px] transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-gold/80" />

                    {/* Label at bottom */}
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-4 sm:pb-5">
                      <h3 className="font-serif-alt text-[13px] sm:text-[15px] lg:text-[17px] font-semibold uppercase tracking-[0.12em] text-white drop-shadow-md transition-all duration-300 group-hover:tracking-[0.18em]">
                        {category.label}
                      </h3>
                      {/* Thin gold underline that expands on hover */}
                      <span className="mt-1.5 block h-[1.5px] w-6 bg-gold/70 transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
