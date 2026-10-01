import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { BLUR_DARK, BLUR_CREAM } from "@/lib/blur";

export const metadata: Metadata = {
  title: "About Us — Our Heritage & Craftsmanship",
  description:
    "Learn about Fazal Zari's legacy of handcrafted Pakistani bridal couture. Heritage zardozi embroidery, pure silk fabrics, and bespoke silhouettes since 1999.",
  alternates: { canonical: "/about-us" },
};

const philosophy = [
  {
    icon: "/images/icon-heritage.png",
    title: "HERITAGE",
    description: "Traditional techniques passed through generations.",
  },
  {
    icon: "/images/icon-craftsmanship.png",
    title: "CRAFTSMANSHIP",
    description: "Every stitch reflects precision and passion.",
  },
  {
    icon: "/images/icon-heritage.png",
    title: "ELEGANCE",
    description: "Designed to make every bride unforgettable.",
  },
];

const whyChoose = [
  {
    image: "/images/icon-heritage.png",
    title: "PREMIUM FABRICS",
    description: "Only the finest imported and local fabrics.",
  },
  {
    image: "/images/about-hand-embroidery.png",
    title: "HAND EMBROIDERY",
    description: "Intricate detailing crafted by skilled artisans.",
  },
  {
    image: "/images/about-perfect-tailoring.png",
    title: "PERFECT TAILORING",
    description: "Made for flawless fit and comfort.",
  },
  {
    image: "/images/about-exclusive-designs.png",
    title: "EXCLUSIVE DESIGNS",
    description: "Unique collections created in limited quantities.",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center justify-center gap-4">
      <span className="relative hidden h-px w-20 bg-gold-border sm:inline-block">
        <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
      </span>
      <h2 className="font-serif-alt text-[28px] font-medium uppercase leading-[32px] text-[#0a0a0a] md:text-[32px] md:leading-[36px]">
        {children}
      </h2>
      <span className="relative hidden h-px w-20 bg-gold-border sm:inline-block">
        <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
      </span>
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        {/* 1. Page hero */}
        <section className="relative flex min-h-[45vh] sm:min-h-[55vh] w-full items-center overflow-hidden bg-ink pt-32 pb-16 sm:pt-40 sm:pb-20">
          <Image
            src="/images/about-hero-bg.jpeg"
            alt="Fazal Zari bridal craftsmanship"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL={BLUR_DARK}
          />
          {/* Light dark overlay for text contrast while keeping the royal palace and model bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-[600px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="font-sans text-xs font-medium tracking-[0.2em] text-gold uppercase">
                  About Us
                </span>
              </div>

              <h1 className="font-serif text-[24px] sm:text-[32px] md:text-[40px] font-medium uppercase leading-[1.1] text-white">
                Crafting Heritage. Designing Dreams.
              </h1>

              <p className="mt-4 sm:mt-6 max-w-[480px] font-italic text-[14px] sm:text-base italic font-normal leading-[24px] sm:leading-[27px] text-white">
                Every Fazal Zari creation is more than bridal wear. It is a
                celebration of Pakistani craftsmanship, timeless elegance,
                and unforgettable moments.
              </p>

              <Link
                href="/products"
                className="mt-6 sm:mt-8 inline-block rounded-[3px] border-[1.6px] border-gold-light px-6 sm:px-7 py-3 sm:py-[15px] font-serif text-[14px] sm:text-[15px] font-semibold uppercase text-white transition-all duration-300 ease-in-out hover:bg-gold-light hover:text-[#0a0a0a]"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Brand Story */}
        <Reveal>
          <section className="bg-cream py-16 md:py-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
              <div>
                <SectionHeading>OUR STORY</SectionHeading>
                <p className="mt-6 font-sans text-base leading-relaxed text-body-gray">
                  For over two decades, Fazal Zari has been at the forefront of
                  luxury bridal couture in Faisalabad. What started as a
                  passion for traditional zardozi embroidery has blossomed
                  into one of Pakistan&apos;s most sought-after bridal houses.
                </p>
                <p className="mt-4 font-sans text-base leading-relaxed text-body-gray">
                  Each piece is meticulously handcrafted by our master artisans,
                  blending age-old techniques with contemporary silhouettes. From
                  intricate dabka and naqshi to sparkling crystals and pearls,
                  every detail is placed with intention.
                </p>
                <p className="mt-4 font-italic text-base italic text-gold-muted">
                  &ldquo;We don&apos;t just make dresses; we create heirlooms that
                  are passed down through generations.&rdquo;
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/about-story.png"
                  alt="Fazal Zari artisan at work"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_CREAM}
                />
              </div>
            </div>
          </section>
        </Reveal>

        {/* 4. Philosophy */}
        <Reveal>
          <section className="bg-cream py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 text-center">
              <SectionHeading>OUR PHILOSOPHY</SectionHeading>
              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                {philosophy.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col items-center rounded-lg border border-gold-border/40 bg-white p-8 shadow-sm"
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="mb-4"
                    />
                    <h3 className="font-serif-alt text-xl font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-body-gray">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* 5. Why Choose Us */}
        <Reveal>
          <section className="bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <SectionHeading>WHY CHOOSE FAZAL ZARI</SectionHeading>
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {whyChoose.map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-cream">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-serif-alt text-lg font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm text-body-gray">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
