import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import { BLUR_DARK } from "@/lib/blur";

export const metadata: Metadata = {
  title: "Contact Us — Book a Bridal Consultation",
  description:
    "Visit Fazal Zari at Shop # 4, 5 St. # 10, New Bano Bazar, Faisalabad or call +92 300 9736020. Schedule a personal bridal consultation today.",
  alternates: { canonical: "/contact-us" },
};

const TRUST_BADGES = [
  { icon: "/images/icon-plane.png", label: "FREE SHIPPING" },
  { icon: "/images/icon-discount.png", label: "BIG DISCOUNT" },
  { icon: "/images/icon-card.png", label: "SECURE PAYMENT" },
];

export default function ContactUsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        {/* 1. Page hero */}
        <section className="relative flex min-h-[40vh] sm:min-h-[52vh] w-full items-center overflow-hidden bg-ink pt-32 pb-16 sm:pt-40 sm:pb-20">
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
              <div className="mb-3 sm:mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="font-sans text-xs font-medium tracking-[0.2em] text-gold uppercase">
                  Contact Us
                </span>
              </div>

              <h1 className="font-serif text-[24px] sm:text-[32px] md:text-[40px] font-medium uppercase leading-[1.1] text-white">
                We&apos;d Love To Hear From You
              </h1>

              <p className="mt-4 sm:mt-6 max-w-[480px] font-italic text-[14px] sm:text-base italic font-normal leading-[24px] sm:leading-[27px] text-white">
                Whether you&apos;re looking for your dream bridal outfit,
                need styling advice, or want to schedule a personal
                consultation, our team is here to make your bridal journey
                effortless and memorable.
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

        {/* 2. Get In Touch + Send Message */}
        <Reveal>
          <section className="w-full bg-cream py-10 sm:py-14 md:py-16">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:gap-12 px-5 sm:px-6 md:grid-cols-2 md:px-10">
              {/* Left column */}
              <div>
                <span className="font-sans text-xs font-medium tracking-[0.2em] text-gold-muted uppercase">
                  Get In Touch
                </span>

                <ul className="mt-6 space-y-6">
                  <li className="flex items-start gap-4">
                    <MapPin className="mt-1 size-5 shrink-0 text-gold" />
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#0a0a0a]">
                        Visit Our Boutique
                      </h3>
                      <p className="mt-1 font-sans text-sm leading-[22px] text-body-gray">
                        Shop # 4, 5 St. # 10, New Bano Bazar, Faisalabad,
                        Pakistan
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <Phone className="mt-1 size-5 shrink-0 text-gold" />
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#0a0a0a]">
                        Call Us
                      </h3>
                      <p className="mt-1 flex flex-col font-sans text-sm leading-[22px] text-body-gray">
                        <a
                          href="tel:+923009736020"
                          className="transition-colors duration-300 hover:text-gold"
                        >
                          +92 300 9736020
                        </a>
                        <a
                          href="tel:+923216066906"
                          className="transition-colors duration-300 hover:text-gold"
                        >
                          +92 321 6066906
                        </a>
                        <a
                          href="tel:0412600463"
                          className="transition-colors duration-300 hover:text-gold"
                        >
                          041-2600463 (PTCL)
                        </a>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <Mail className="mt-1 size-5 shrink-0 text-gold" />
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#0a0a0a]">
                        Email Us
                      </h3>
                      <p className="mt-1 font-sans text-sm leading-[22px] text-body-gray">
                        <a
                          href="mailto:Info@fazalzari.com"
                          className="transition-colors duration-300 hover:text-gold"
                        >
                          Info@fazalzari.com
                        </a>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <Clock className="mt-1 size-5 shrink-0 text-gold" />
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#0a0a0a]">
                        Business Hours
                      </h3>
                      <p className="mt-1 font-sans text-sm leading-[22px] text-body-gray">
                        Monday &ndash; Saturday
                        <br />
                        11:00 AM &ndash; 9:00 PM
                      </p>
                    </div>
                  </li>
                </ul>

              </div>

              {/* Right column */}
              <div>
                <span className="font-sans text-xs font-medium tracking-[0.2em] text-gold-muted uppercase">
                  Send Us A Message
                </span>
                <div className="mt-6 border border-gold-border bg-white p-6 md:p-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* 3. Google Map embed */}
        <Reveal>
          <section className="w-full">
            <iframe
              src="https://maps.google.com/maps?q=Fazal%20Zari&t=m&z=15&output=embed&iwloc=near"
              height={300}
              loading="lazy"
              title="Fazal Zari location map"
              className="w-full grayscale-0 border-0 sm:h-[400px]"
            />
          </section>
        </Reveal>

        {/* 4. Trust badges strip */}
        <section className="w-full bg-ink py-8 sm:py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-6 md:px-10">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-3 text-center"
              >
                <Image
                  src={badge.icon}
                  alt=""
                  aria-hidden="true"
                  width={48}
                  height={48}
                  className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
                />
                <span className="font-sans text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.1em] text-white">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
