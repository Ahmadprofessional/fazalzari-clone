"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade-up" | "scale" | "fade";
  threshold?: number;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  threshold = 0.01,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    // Safety fallback: ensure content is ALWAYS visible on mobile devices even if scroll/observer delays
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallbackTimer);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: "120px 0px 120px 0px", // Pre-loads 120px ahead of viewport for smooth mobile scrolling
      }
    );

    observer.observe(el);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [threshold]);

  const variantHiddenClass = {
    "fade-up": "silk-reveal-hidden",
    "scale": "silk-scale-hidden",
    "fade": "opacity-0",
  }[variant];

  const variantVisibleClass = {
    "fade-up": "silk-reveal-visible",
    "scale": "silk-scale-visible",
    "fade": "opacity-100 transition-opacity duration-700 ease-out",
  }[variant];

  return (
    <div
      ref={elementRef}
      style={{
        transitionDelay: delay > 0 ? `${delay}ms` : undefined,
      }}
      className={cn(
        "w-full",
        isVisible ? variantVisibleClass : variantHiddenClass,
        className
      )}
    >
      {children}
    </div>
  );
}
