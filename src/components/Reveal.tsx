"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds (e.g. for staggered grid reveals: 100, 200, 300...)
  variant?: "fade-up" | "scale" | "fade";
  threshold?: number;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  threshold = 0.12,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve immediately after triggering to free memory & CPU
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
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
