import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/content";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BLUR_CREAM } from "@/lib/blur";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  const price = formatPrice(product.price);

  return (
    <div className="group flex flex-col overflow-hidden border border-gold-border/40 bg-white">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[3/4] overflow-hidden bg-cream"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 380px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          placeholder="blur"
          blurDataURL={BLUR_CREAM}
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-5 text-center">
        <span className="font-sans text-[11px] uppercase tracking-[2px] text-gold">
          {product.category}
        </span>
        <Link
          href={`/products/${product.slug}`}
          className="font-serif-alt text-[20px] font-medium text-ink transition-colors duration-300 hover:text-gold"
        >
          {product.name}
        </Link>
        <Link href="/contact-us" className="font-sans text-base text-body-gray hover:text-gold transition-colors duration-300">
          Contact Us for Price
        </Link>
        <WhatsAppButton
          variant="inline"
          message={`Hi, I'm interested in the ${product.name}. Could you please share the price?`}
          label="Enquire on WhatsApp"
          className="mt-3 inline-flex items-center justify-center gap-2 rounded-[3px] border-[1.6px] border-gold-light px-5 py-2.5 font-serif text-[13px] font-semibold uppercase text-ink transition-all duration-300 ease-in-out hover:bg-gold-light"
        />
      </div>
    </div>
  );
}
