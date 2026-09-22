import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-ink py-20 md:py-0">
      <Image
        src="/images/hero-bg.jpeg"
        alt="Chandelier and mirrored boutique interior at Fazal Zari"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Subtle bottom-to-top gradient, low opacity, only to help type contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="max-w-[600px]">
          <Image
            src="/images/divider-hero.png"
            alt=""
            width={220}
            height={40}
            className="mb-4 h-auto w-[220px]"
          />

          <p className="font-serif text-[35px] font-medium leading-[35px] text-white">
            —Fazal Zari
          </p>

          <h1 className="mt-4 font-serif text-[32px] font-medium uppercase leading-[1] text-white md:text-[48px] md:leading-[48px]">
            Heritage Luxury, Handcrafted for Royalty.
          </h1>

          <p className="mt-6 max-w-[480px] font-italic text-base italic font-normal leading-[27px] text-white md:text-[18px]">
            Crafting timeless bridal and luxury formal wear since 1999.
            Discover the pristine artistry of traditional hand-embroidery,
            bespoke silhouettes, and regal Pakistani couture tailored for
            your most unforgettable moments.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded-[3px] border-[1.6px] border-gold-light px-7 py-[15px] font-serif text-[15px] font-semibold uppercase text-white transition-all duration-300 ease-in-out hover:bg-gold-light hover:text-[#0a0a0a]"
          >
            Explore Collection
          </a>
        </div>
      </div>
    </section>
  );
}
