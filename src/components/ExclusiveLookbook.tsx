import Image from "next/image";
import Link from "next/link";
import { BLUR_DARK } from "@/lib/blur";

export default function ExclusiveLookbook() {
  return (
    <section className="relative min-h-[360px] sm:min-h-[440px] md:min-h-[520px] w-full overflow-hidden md:aspect-[1009/420] md:min-h-0">
      <Image
        src="/images/lookbook-banner.jpeg"
        alt="Exclusive lookbook — bridal wear collage with Fazal Zari monogram"
        fill
        sizes="100vw"
        className="object-cover object-center"
        placeholder="blur"
        blurDataURL={BLUR_DARK}
      />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-md pl-5 sm:pl-6 md:pl-16 pr-4">
          <p className="font-sans text-[14px] sm:text-[16px] md:text-[19px] font-medium leading-snug text-gold-muted">
            EXCLUSIVE LOOKBOOK
          </p>

          <h2 className="font-serif text-[20px] sm:text-[26px] md:text-[36px] font-normal leading-snug text-white md:leading-tight">
            Modern Silhouettes.
            <br />
            Timeless Heritage.
          </h2>

          <p className="mt-2 sm:mt-3 max-w-[380px] font-italic text-[13px] sm:text-sm italic font-normal leading-[20px] sm:leading-[23px] text-gold-border">
            A curated edit of our most exclusive designs that celebrate
            elegance in every detail
          </p>

          <Link
            href="/products"
            className="mt-4 sm:mt-6 inline-block border-2 border-[rgba(252,184,68,0.35)] px-3 py-[3px] font-sans text-[13px] sm:text-sm font-medium text-white transition-all duration-300 ease-in-out hover:border-gold-light hover:bg-gold-light/90 hover:text-ink"
          >
            VIEW LOOKBOOK
          </Link>
        </div>
      </div>
    </section>
  );
}
