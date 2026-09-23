import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

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

const stats = [
  { to: 500, suffix: "+", label: "Luxury Bridal Dresses Created" },
  { to: 1000, suffix: "+", label: "Satisfied Clients" },
  { to: 6, suffix: "+", label: "Years of Craftmanship" },
  { to: 100, suffix: "%", label: "Hand Finished" },
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
        <section className="relative flex min-h-[55vh] w-full items-center overflow-hidden bg-ink">
          <Image
            src="/images/about-hero-bg.jpeg"
            alt="Fazal Zari bridal craftsmanship"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="max-w-[600px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="font-sans text-xs font-medium tracking-[0.2em] text-gold uppercase">
                  About Us
                </span>
              </div>

              <h1 className="font-serif text-[28px] font-medium uppercase leading-[1.1] text-white md:text-[40px] md:leading-[1.1]">
                Crafting Heritage. Designing Dreams.
              </h1>

              <p className="mt-6 max-w-[480px] font-italic text-base italic font-normal leading-[27px] text-white">
                Every Fazal Zari creation is more than bridal wear. It is a
                celebration of Pakistani craftsmanship, timeless elegance,
                and unforgettable moments.
              </p>

              <Link
                href="/products"
                className="mt-8 inline-block rounded-[3px] border-[1.6px] border-gold-light px-7 py-[15px] font-serif text-[15px] font-semibold uppercase text-white transition-all duration-300 ease-in-out hover:bg-gold-light hover:text-[#0a0a0a]"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </section>

        {/* 2. About Us intro */}
        <Reveal>
          <section className="w-full bg-cream/40 py-20">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
              <div className="order-1">
                <Image
                  src="/images/about-story.png"
                  alt="Fazal Zari bridal artistry"
                  width={500}
                  height={333}
                  className="h-auto w-full rounded-md object-cover"
                />
              </div>
              <div className="order-2">
                <span className="font-sans text-xs font-medium tracking-[0.2em] text-gold-muted uppercase">
                  About Us
                </span>
                <h2 className="mt-3 font-serif text-[32px] font-medium uppercase leading-[1.1] text-[#0a0a0a] md:text-[36px]">
                  Our Story
                </h2>
                <p className="mt-6 font-sans text-base font-normal leading-[27px] text-body-gray">
                  Fazal Zari was founded with a single vision: To preserve
                  the richness of traditional Pakistani bridal craftsmanship
                  while creating silhouettes for today&apos;s modern bride.
                </p>
                <p className="mt-5 font-sans text-base font-normal leading-[27px] text-body-gray">
                  Every collection reflects months of meticulous artistry
                  from selecting premium fabrics to intricate hand
                  embellishments that honor generations of skilled
                  craftsmanship.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* 3. Pull-quote banner */}
        <Reveal>
          <section className="relative flex w-full items-center overflow-hidden bg-ink py-16">
            <Image
              src="/images/about-quote-bg.jpeg"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
              <p className="font-serif text-2xl italic font-medium leading-[1.4] text-white md:text-[34px] md:leading-[1.4]">
                &ldquo;Our brides wear more than beautiful garments. They
                wear stories.&rdquo;
              </p>
            </div>
          </section>
        </Reveal>

        {/* 4. Our Philosophy */}
        <Reveal>
          <section className="w-full bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
              <SectionHeading>Our Philosophy</SectionHeading>

              <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
                {philosophy.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col items-center gap-4 text-center"
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="h-16 w-16 object-contain"
                    />
                    <h3 className="font-serif text-xl font-semibold uppercase leading-6 text-[#0a0a0a]">
                      {item.title}
                    </h3>
                    <p className="max-w-[260px] font-sans text-sm font-normal leading-[21px] text-body-gray">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* 5. Why Choose Fazal Zari */}
        <Reveal>
          <section className="w-full bg-cream/40 py-20">
            <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
              <SectionHeading>Why Choose Fazal Zari</SectionHeading>

              <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {whyChoose.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col items-center gap-4 text-center"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={533}
                      className="h-[150px] w-[220px] rounded-md object-cover"
                    />
                    <h3 className="font-serif text-xl font-semibold uppercase leading-6 text-[#0a0a0a]">
                      {item.title}
                    </h3>
                    <p className="max-w-[240px] font-sans text-sm font-normal leading-[21px] text-body-gray">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* 6. Trusted By Brides */}
        <Reveal>
          <section className="relative w-full overflow-hidden bg-ink py-20">
            <Image
              src="/images/about-trusted-by-brides.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-10"
            />
            <div className="relative z-10 mx-auto max-w-7xl px-6 text-center md:px-10">
              <span className="font-sans text-xs font-medium tracking-[0.2em] text-gold-muted uppercase">
                Trusted By Brides
              </span>
              <h2 className="mt-3 font-serif text-[32px] font-medium uppercase leading-[1.1] text-white md:text-[36px]">
                Trusted By Brides
              </h2>
              <p className="mt-4 font-italic text-base italic font-normal leading-[27px] text-white/80">
                Loved by brides across Pakistan.
              </p>

              <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center gap-2">
                    <Counter
                      to={stat.to}
                      suffix={stat.suffix}
                      className="font-serif text-[48px] font-medium leading-none text-gold"
                    />
                    <p className="font-sans text-sm font-normal leading-[21px] text-white/70">
                      {stat.label}
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
