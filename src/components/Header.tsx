"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
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
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // When near the top of the page
      if (currentScrollY <= 60) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);

        // Scrolling DOWN -> smoothly hide navbar
        if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
          if (!mobileOpen) {
            setIsVisible(false);
          }
        }
        // Scrolling UP -> smoothly show navbar
        else if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  return (
    <header
      suppressHydrationWarning
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none",
        isScrolled
          ? "bg-ink/95 backdrop-blur-md shadow-xl shadow-black/30 border-b border-gold-border/20"
          : "bg-ink border-b border-transparent"
      )}
    >
      {/* Top announcement bar (collapses on scroll for a sleek compact header) */}
      <div
        className={cn(
          "hidden md:flex border-b border-gray-800/80 transition-all duration-300 overflow-hidden",
          isScrolled ? "max-h-0 py-0 opacity-0 border-transparent" : "max-h-12 py-2.5 opacity-100"
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 text-xs">
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
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 transition-all duration-300",
          isScrolled ? "py-2.5 sm:py-3" : "py-3.5 sm:py-4"
        )}
      >
        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="text-white transition-colors duration-300 hover:text-gold md:hidden p-1"
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
            className={cn(
              "transition-all duration-300 object-contain",
              isScrolled ? "h-12 w-12 sm:h-14 sm:w-14" : "h-14 w-14 sm:h-16 sm:w-16 md:h-[68px] md:w-[68px]"
            )}
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
                "relative font-sans text-[11px] font-medium uppercase leading-5 tracking-[3px] transition-colors duration-300 hover:text-gold py-1",
                pathname === link.href ? "text-gold" : "text-white"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-gold transition-all duration-300" />
              )}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <WhatsAppButton
            variant="inline"
            label=""
            className="text-white transition-colors duration-300 hover:text-[#25D366]"
          />
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav className="flex flex-col items-center gap-4 border-t border-gray-800 bg-ink px-6 py-6 md:hidden">
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
