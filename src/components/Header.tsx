"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Search, User, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import WhatsAppButton from "@/components/WhatsAppButton";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Bridal Wear", href: "/bridal-wear" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-ink w-full">
      {/* Top announcement bar */}
      <div className="hidden md:flex border-b border-gray-800">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-2.5 text-xs">
          <span className="font-sans tracking-[1px] uppercase text-gray-400">
            Complimentary Nationwide Delivery
          </span>
          <span className="font-sans tracking-[1px] uppercase text-gray-400">
            Handcrafted Heritage &bull; Designed For Modern Brides
          </span>
          <a
            href="tel:+923009736020"
            className="flex items-center gap-2 font-sans tracking-[1px] uppercase text-gray-400 transition-colors duration-300 hover:text-gold"
          >
            <Phone className="size-3.5" />
            Book An Appointment
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="text-white transition-colors duration-300 hover:text-gold md:hidden"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="mx-auto shrink-0 md:mx-0"
          aria-label="Fazal Zari — Home"
        >
          <Image
            src="/images/logo.png"
            alt="Fazal Zari"
            width={72}
            height={72}
            className="h-[72px] w-[72px] md:h-16 md:w-16"
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "font-sans text-[11px] font-medium uppercase leading-5 tracking-[3px] transition-colors duration-300 hover:text-gold",
                pathname === link.href ? "text-gold" : "text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            className="text-white transition-colors duration-300 hover:text-gold"
          >
            <Search className="size-5" />
          </button>
          <WhatsAppButton
            variant="inline"
            label=""
            className="text-white transition-colors duration-300 hover:text-[#25D366]"
          />
          <button
            type="button"
            aria-label="Account"
            className="hidden text-white transition-colors duration-300 hover:text-gold md:block"
          >
            <User className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav className="flex flex-col items-center gap-4 border-t border-gray-800 px-6 py-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "font-sans text-[11px] font-medium uppercase leading-5 tracking-[3px] transition-colors duration-300 hover:text-gold",
                pathname === link.href ? "text-gold" : "text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
