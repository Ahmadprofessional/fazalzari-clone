import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/content";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BLUR_CREAM } from "@/lib/blur";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

// Decorative Corner Filigree (Heritage Zardozi Motif)
function CornerOrnament({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const positionClasses = {
    tl: "top-2.5 left-2.5 border-l-[1.5px] border-t-[1.5px] rounded-tl-[2px]",
    tr: "top-2.5 right-2.5 border-r-[1.5px] border-t-[1.5px] rounded-tr-[2px]",
    bl: "bottom-2.5 left-2.5 border-l-[1.5px] border-b-[1.5px] rounded-bl-[2px]",
    br: "bottom-2.5 right-2.5 border-r-[1.5px] border-b-[1.5px] rounded-br-[2px]",
  }[position];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 size-4 sm:size-5 border-gold/40 transition-all duration-500 group-hover:size-6 group-hover:border-gold ${positionClasses}`}
    >
      <span
        className={`absolute size-1 rounded-full bg-gold/70 transition-opacity duration-300 group-hover:opacity-100 ${
          position === "tl"
            ? "-left-[2px] -top-[2px]"
            : position === "tr"
            ? "-right-[2px] -top-[2px]"
            : position === "bl"
            ? "-bottom-[2px] -left-[2px]"
            : "-bottom-[2px] -right-[2px]"
        }`}
      />
    </div>
  );
}

export default function ProductCard({
  product,
  priority = false,
}: ProductCardProps) {
  const productUrl = `https://fazalzari-clone.vercel.app/products/${product.slug}`;
  const whatsappMsg = `Hi, I'm interested in the ${product.name} from the ${product.collectionName} collection (SKU: ${product.articleId}). Could you please share the price and custom order details?\n\n${productUrl}`;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[8px] border border-gold-border/60 bg-gradient-to-b from-[#fdfbf7] via-[#faf6ee] to-[#f5eee2] shadow-[0_4px_20px_rgba(150,120,68,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_16px_36px_rgba(150,120,68,0.18)]">
      {/* Decorative Heritage Corner Filigree */}
      <CornerOrnament position="tl" />
      <CornerOrnament position="tr" />

      {/* Image Frame with soft bottom fade */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[3/4] w-full overflow-hidden bg-cream"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 380px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
          placeholder="blur"
          blurDataURL={BLUR_CREAM}
        />
        {/* Seamless bottom gradient that dissolves the photo seamlessly into the card's ivory header */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7]/40 to-transparent transition-opacity duration-500" />
      </Link>

      {/* Info Panel */}
      <div className="relative flex flex-1 flex-col justify-between p-5 pt-3 sm:p-6 sm:pt-4 text-center">
        {/* Collection Name with gold hairline flourishes */}
        <div className="flex items-center justify-center gap-2">
          <span className="h-px flex-1 max-w-[24px] bg-gradient-to-r from-transparent to-gold" />
          <span className="font-sans text-[10.5px] font-semibold uppercase tracking-[2.5px] text-gold">
            {product.collectionName}
          </span>
          <span className="h-px flex-1 max-w-[24px] bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Title */}
        <div className="my-2.5">
          <Link
            href={`/products/${product.slug}`}
            className="font-serif-alt text-[20px] sm:text-[22px] font-medium leading-[1.3] text-ink transition-colors duration-300 hover:text-gold"
          >
            {product.name}
          </Link>
        </div>

        {/* Price Line */}
        <div className="mb-4 flex flex-wrap items-center justify-center text-xs text-body-gray">
          <Link
            href="/contact-us"
            className="font-serif text-[13.5px] font-medium tracking-wide text-gold transition-colors duration-200 hover:text-ink hover:underline"
          >
            Price on Request
          </Link>
        </div>

        {/* Refined WhatsApp Button */}
        <div className="mt-auto pt-1">
          <WhatsAppButton
            variant="inline"
            message={whatsappMsg}
            label="Enquire on WhatsApp"
            className="inline-flex w-full items-center justify-center gap-2 rounded-[3px] border-[1.4px] border-gold bg-white/70 px-4 py-2.5 font-serif text-[12.5px] font-semibold uppercase tracking-[1.4px] text-ink shadow-sm transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
