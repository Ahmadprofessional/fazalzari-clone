import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import type { QuickLink, SocialLink } from "@/types/content";
import type { SVGProps } from "react";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.6V4.35C16.3 4.31 15.28 4.22 14.1 4.22c-2.46 0-4.15 1.5-4.15 4.26V10.5H7.4v3h2.55V21h3.55Z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 3h3.6l4.2 5.6L16.6 3H20l-6.2 7.8L20.4 21h-3.6l-4.6-6.1L7 21H3.6l6.6-8.3L4 3Z" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.6a2.7 2.7 0 0 0-1.9-1.9C18 5.2 12 5.2 12 5.2s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.6 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.4 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.4ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}

const QUICK_LINKS: QuickLink[] = [
  { label: "New Arrivals", href: "/products" },
  { label: "Bridal", href: "/bridal-wear" },
  { label: "Formals", href: "/products" },
  { label: "Jewellery", href: "/products" },
  { label: "Unstitch", href: "/products" },
  { label: "Ready To Deliver", href: "/products" },
];

const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "X", href: "#", icon: "x" },
  { label: "YouTube", href: "#", icon: "youtube" },
];

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  x: XIcon,
  youtube: YoutubeIcon,
} as const;

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-4">
        {/* Col 1: About */}
        <div>
          <h3 className="font-serif text-[21px] font-bold leading-[21px] text-gold-muted">
            About Fazal Zari
          </h3>
          <p className="mt-4 font-sans text-sm text-body-gray">
            Fazal Zari Bridal Wear is where heritage meets luxury. Each piece
            is a work of art, handcrafted to make your special day truly
            unforgettable.
          </p>
          <div className="mt-4 flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-body-gray transition-colors duration-300 hover:text-gold"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3 className="font-serif text-[21px] font-bold leading-[21px] text-gold-muted">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-body-gray transition-colors duration-300 hover:text-gold"
                >
                  &rarr; {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Centered logo badge */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Fazal Zari"
            width={140}
            height={140}
            className="h-[140px] w-[140px]"
          />
        </div>

        {/* Col 4: Store info + newsletter */}
        <div>
          <h3 className="font-serif text-[21px] font-bold leading-[21px] text-gold-muted">
            STORE INFORMATION
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span className="font-sans text-sm text-body-gray">
                BANO market, Kotwali Rd, near MCB Bank Soap Market Branch,
                Clock Tower, Faisalabad, Pakistan
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-gold" />
              <a
                href="tel:+923009736020"
                className="font-sans text-sm text-body-gray transition-colors duration-300 hover:text-gold"
              >
                +92 300 9736020
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-gold" />
              <a
                href="mailto:INFO@FAZALZARI.COM"
                className="font-sans text-sm text-body-gray transition-colors duration-300 hover:text-gold"
              >
                INFO@FAZALZARI.COM
              </a>
            </li>
          </ul>

          <h3 className="mt-6 font-serif text-[21px] font-bold leading-[21px] text-gold-muted">
            NEWSLETTER
          </h3>
          <p className="mt-2 font-sans text-sm text-body-gray">
            Subscribe to get updates on new collections &amp; exclusive
            offers.
          </p>
          <form className="mt-2 flex items-center gap-2">
            <input
              type="email"
              placeholder="Email"
              className="h-11 w-full min-w-0 flex-1 border border-gold-border bg-transparent px-4 font-sans text-sm text-white placeholder:text-body-gray focus:border-gold focus:outline-none"
            />
            <button
              type="button"
              aria-label="Subscribe"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-ink transition-colors duration-300 hover:bg-gold-light"
            >
              <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center font-sans text-xs uppercase tracking-[1px] text-body-gray">
        Copyright Fazal Zari 2026. All Right Reserved
      </div>
    </footer>
  );
}
