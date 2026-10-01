import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import type { QuickLink } from "@/types/content";

const QUICK_LINKS: QuickLink[] = [
  { label: "New Arrivals", href: "/products?category=New+Arrivals" },
  { label: "Bridal Wear", href: "/bridal-wear" },
  { label: "Luxury Formals", href: "/products?category=Luxury+Formals" },
  { label: "Party Wear", href: "/products?category=Party+Wear" },
  { label: "Unstitched", href: "/products?category=Unstitched" },
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:gap-10 px-5 sm:px-6 py-10 sm:py-14 md:py-16 sm:grid-cols-2 md:grid-cols-4">
        {/* Col 1: About */}
        <div>
          <h3 className="font-serif text-[18px] sm:text-[21px] font-bold leading-tight text-gold-muted">
            About Fazal Zari
          </h3>
          <p className="mt-3 sm:mt-4 font-sans text-sm text-body-gray leading-relaxed">
            Fazal Zari Bridal Wear is where heritage meets luxury. Each piece
            is a work of art, handcrafted to make your special day truly
            unforgettable.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3 className="font-serif text-[18px] sm:text-[21px] font-bold leading-tight text-gold-muted">
            Quick Links
          </h3>
          <ul className="mt-3 sm:mt-4 space-y-2">
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
        <div className="flex items-center justify-center order-first sm:order-none md:order-none py-2 sm:py-0">
          <Image
            src="/images/logo.png"
            alt="Fazal Zari"
            width={140}
            height={140}
            className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] md:h-[140px] md:w-[140px]"
          />
        </div>

        {/* Col 4: Store info */}
        <div>
          <h3 className="font-serif text-[18px] sm:text-[21px] font-bold leading-tight text-gold-muted">
            STORE INFORMATION
          </h3>
          <ul className="mt-3 sm:mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span className="font-sans text-sm text-body-gray">
                Shop # 4, 5 St. # 10, New Bano Bazar, Faisalabad, Pakistan
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="size-4 shrink-0 text-gold mt-0.5" />
              <div className="flex flex-col font-sans text-sm text-body-gray">
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
              </div>
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
            <li className="flex items-center gap-3">
              <InstagramIcon className="size-4 shrink-0 text-gold" />
              <a
                href="https://www.instagram.com/fazal_zari?stkn=MTJmcjNwNmY5eWdkdQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-body-gray transition-colors duration-300 hover:text-gold"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 sm:py-5 text-center font-sans text-[11px] sm:text-xs uppercase tracking-[1px] text-body-gray px-5 sm:px-6">
        Copyright Fazal Zari 2026. All Right Reserved
      </div>
    </footer>
  );
}
