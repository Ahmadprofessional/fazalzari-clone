import Image from "next/image";

export default function ExclusiveLookbook() {
  return (
    <section className="relative min-h-[520px] w-full overflow-hidden md:aspect-[1009/420] md:min-h-0">
      <Image
        src="/images/lookbook-banner.jpeg"
        alt="Exclusive lookbook — bridal wear collage with Fazal Zari monogram"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-md pl-6 md:pl-16">
          <p className="font-sans text-[19px] font-medium leading-[32px] text-gold-muted">
            EXCLUSIVE LOOKBOOK
          </p>

          <h2 className="font-serif text-[26px] font-normal leading-snug text-white md:text-[36px] md:leading-tight">
            Modern Silhouettes.
            <br />
            Timeless Heritage.
          </h2>

          <p className="mt-3 max-w-[380px] font-italic text-sm italic font-normal leading-[23px] text-gold-border">
            A curated edit of our most exclusive designs that celebrate
            elegance in every detail
          </p>

          <a
            href="#"
            className="mt-6 inline-block border-2 border-[rgba(252,184,68,0.35)] px-3 py-[3px] font-sans text-sm font-medium text-white transition-all duration-300 ease-in-out hover:border-gold-light hover:bg-gold-light/90 hover:text-ink"
          >
            VIEW LOOKBOOK
          </a>
        </div>
      </div>
    </section>
  );
}
