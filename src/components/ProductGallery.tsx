"use client";

import { useState, useEffect, useCallback, useRef, type TouchEvent, type MouseEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { BLUR_GOLD } from "@/lib/blur";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const VIEW_TITLES = [
  { roman: "I", label: "Front Silhouette", detail: "Full Ensemble" },
  { roman: "II", label: "Regal Back Train", detail: "Drape & Choli" },
  { roman: "III", label: "Zardozi & Kattdana", detail: "Artisan Handwork" },
  { roman: "IV", label: "Border & Daaman", detail: "Scalloped Finish" },
];

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Drag / Swipe Tracking
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef<number | null>(null);

  const total = images.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard Navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") setLightboxOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe Handlers (Mobile)
  function handleTouchStart(e: TouchEvent) {
    dragStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  }

  function handleTouchMove(e: TouchEvent) {
    if (dragStartX.current === null) return;
    setDragOffset(e.touches[0].clientX - dragStartX.current);
  }

  function handleTouchEnd() {
    if (dragOffset > 40) prevSlide();
    else if (dragOffset < -40) nextSlide();
    dragStartX.current = null;
    setDragOffset(0);
    setIsDragging(false);
  }

  // Mouse Drag Handlers (Desktop)
  function handleMouseDown(e: MouseEvent) {
    dragStartX.current = e.clientX;
    setIsDragging(true);
  }

  function handleMouseMove(e: MouseEvent) {
    if (!isDragging || dragStartX.current === null) return;
    setDragOffset(e.clientX - dragStartX.current);
  }

  function handleMouseUp() {
    if (!isDragging) return;
    if (dragOffset > 40) prevSlide();
    else if (dragOffset < -40) nextSlide();
    dragStartX.current = null;
    setDragOffset(0);
    setIsDragging(false);
  }

  // Helper to calculate circular card offset relative to active card (-1, 0, 1, etc.)
  function getCardOffset(index: number) {
    let diff = (index - activeIndex + total) % total;
    if (diff > total / 2) diff -= total;
    return diff;
  }

  return (
    <>
      <div className="flex flex-col gap-6 select-none">
        {/* 3D Depth Card Stage (Dribbble / Coverflow Fashion Stack) */}
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative h-[400px] sm:h-[540px] md:h-[580px] w-full flex items-center justify-center overflow-hidden rounded-[4px] bg-[#080808] border border-gold-border/20 shadow-2xl [perspective:1400px]"
        >
          {/* Subtle Ambient Antique Gold Underglow (No Cheesy Purple) */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(184,147,90,0.14),transparent_80%)]" />

          {/* Architectural Corner Crosshairs */}
          <span className="pointer-events-none absolute left-3 top-3 z-30 font-mono text-[10px] text-gold-light/30">+</span>
          <span className="pointer-events-none absolute right-3 top-3 z-30 font-mono text-[10px] text-gold-light/30">+</span>
          <span className="pointer-events-none absolute bottom-3 left-3 z-30 font-mono text-[10px] text-gold-light/30">+</span>
          <span className="pointer-events-none absolute bottom-3 right-3 z-30 font-mono text-[10px] text-gold-light/30">+</span>

          {/* Top HUD: Atelier Brand Pill */}
          <div className="pointer-events-none absolute left-4 sm:left-6 top-4 z-40 flex items-center gap-2 rounded-full border border-gold/40 bg-black/70 px-3.5 py-1 backdrop-blur-md">
            <Sparkles className="size-3 text-gold animate-pulse" />
            <span className="font-serif text-[11px] uppercase tracking-[2.5px] text-gold-light">
              Fazal Zari Atelier
            </span>
          </div>

          {/* Top Right: Fullscreen Lightbox Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(true);
            }}
            aria-label="Enlarge view"
            className="absolute right-4 sm:right-6 top-4 z-40 flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink shadow-md"
          >
            <Maximize2 className="size-4" />
          </button>

          {/* 3D Layered Cards Fan / Stack */}
          <div className="relative h-[82%] w-[72%] sm:w-[62%] [transform-style:preserve-3d]">
            {images.map((img, idx) => {
              const offset = getCardOffset(idx);
              const isActive = offset === 0;
              const isPrev = offset === -1;
              const isNext = offset === 1;

              // Compute 3D Card Positioning
              let transformStyle = "";
              let opacity = 0;
              let zIndex = 0;
              let isClickable = false;

              if (isActive) {
                // Front and center, elevated with subtle shadow
                const dragPx = isDragging ? dragOffset : 0;
                transformStyle = `translateX(${dragPx}px) translateZ(0px) scale(1) rotateY(0deg)`;
                opacity = 1;
                zIndex = 30;
              } else if (isPrev) {
                // Stepped back on the left, scaled down, rotated in Y
                transformStyle = `translateX(-50%) translateZ(-90px) scale(0.84) rotateY(14deg)`;
                opacity = 0.55;
                zIndex = 20;
                isClickable = true;
              } else if (isNext) {
                // Stepped back on the right, scaled down, rotated in Y
                transformStyle = `translateX(50%) translateZ(-90px) scale(0.84) rotateY(-14deg)`;
                opacity = 0.55;
                zIndex = 20;
                isClickable = true;
              } else {
                // Tucked in the deep background
                transformStyle = `translateX(0) translateZ(-160px) scale(0.7) rotateY(0deg)`;
                opacity = 0;
                zIndex = 10;
              }

              return (
                <div
                  key={`${img}-${idx}`}
                  onClick={() => {
                    if (isPrev) prevSlide();
                    if (isNext) nextSlide();
                  }}
                  className={cn(
                    "absolute inset-0 rounded-[3px] overflow-hidden border shadow-2xl will-change-transform select-none",
                    isDragging && isActive
                      ? "transition-none"
                      : "transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isActive
                      ? "border-gold/80 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(184,147,90,0.2)] cursor-grab active:cursor-grabbing"
                      : "border-white/10 hover:border-gold-light/60 hover:opacity-85 cursor-pointer"
                  )}
                  style={{
                    transform: transformStyle,
                    opacity,
                    zIndex,
                  }}
                >
                  <Image
                    src={img}
                    alt={`${name} - View ${idx + 1}`}
                    fill
                    priority={idx === 0}
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="object-cover object-center pointer-events-none"
                    placeholder="blur"
                    blurDataURL={BLUR_GOLD}
                  />

                  {/* Dark Vignette Overlay for Non-Active Cards */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-black/45 transition-opacity duration-300 hover:bg-black/20" />
                  )}

                  {/* Roman Numeral Stamp on Top Left */}
                  <div className="absolute top-3 left-3 size-6 flex items-center justify-center rounded-full bg-black/70 font-serif text-[11px] text-gold-light border border-gold/30 backdrop-blur-md">
                    {VIEW_TITLES[idx]?.roman || idx + 1}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Navigation Chevrons */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous view"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 flex size-11 items-center justify-center rounded-full border border-gold-light/40 bg-black/70 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-gold hover:bg-gold hover:text-ink shadow-2xl"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next view"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 flex size-11 items-center justify-center rounded-full border border-gold-light/40 bg-black/70 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-gold hover:bg-gold hover:text-ink shadow-2xl"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Bottom HUD: Perspective Details & Roman Indicator */}
          <div className="pointer-events-none absolute bottom-4 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6 z-40 flex items-end justify-between">
            <div className="max-w-[70%]">
              <span className="font-mono text-[10px] tracking-[2px] uppercase text-gold-muted">
                LOOK {VIEW_TITLES[activeIndex]?.roman} &bull; {VIEW_TITLES[activeIndex]?.detail}
              </span>
              <p className="font-serif text-sm sm:text-base font-normal tracking-wide text-white drop-shadow-md">
                {VIEW_TITLES[activeIndex]?.label}
              </p>
            </div>

            {/* Slide Index Badge */}
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/75 px-3 py-1 font-mono text-[11px] tracking-[2px] text-white backdrop-blur-md">
              <span className="text-gold font-bold">0{activeIndex + 1}</span>
              <span className="text-white/30">/</span>
              <span className="text-white/60">0{total}</span>
            </div>
          </div>
        </div>

        {/* 4-Card Filmstrip Selector Below */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
          {images.map((img, idx) => {
            const isSelected = idx === activeIndex;
            const meta = VIEW_TITLES[idx];
            return (
              <button
                key={`thumb-${img}-${idx}`}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "group relative aspect-[3/4] w-full overflow-hidden rounded-[2px] border transition-all duration-400 focus:outline-none",
                  isSelected
                    ? "border-gold shadow-[0_4px_20px_rgba(184,147,90,0.3)] ring-1 ring-gold -translate-y-1"
                    : "border-gold-border/30 opacity-60 hover:opacity-100 hover:border-gold-light/60 hover:-translate-y-0.5"
                )}
                aria-label={`Select ${meta?.label || `view ${idx + 1}`}`}
              >
                <Image
                  src={img}
                  alt={`${name} thumbnail ${idx + 1}`}
                  fill
                  sizes="(min-width: 768px) 120px, 80px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  placeholder="blur"
                  blurDataURL={BLUR_GOLD}
                />

                {/* Roman Numeral Tag */}
                <div className="absolute top-1.5 left-1.5 z-10 size-4 flex items-center justify-center rounded-full bg-black/70 font-serif text-[9px] text-gold-light border border-white/10">
                  {meta?.roman || idx + 1}
                </div>

                {/* Perspective Tag */}
                <div
                  className={cn(
                    "absolute bottom-0 inset-x-0 py-1 px-1 text-center font-sans text-[9px] tracking-wider uppercase backdrop-blur-md transition-colors duration-300",
                    isSelected
                      ? "bg-gold text-ink font-bold"
                      : "bg-black/75 text-white/70 group-hover:text-gold-light"
                  )}
                >
                  {meta?.label.split(" ")[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Haute-Couture Lightbox */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 p-6 backdrop-blur-2xl"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Header Bar */}
          <div
            className="flex w-full max-w-6xl items-center justify-between border-b border-white/10 pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="font-serif text-xl tracking-wider text-white">
                {name}
              </p>
              <p className="font-mono text-xs uppercase tracking-[2px] text-gold-light">
                {VIEW_TITLES[activeIndex]?.label} &bull; LOOK 0{activeIndex + 1} OF 0{total}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close"
              className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-gold hover:bg-gold hover:text-ink shadow-lg"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Large View */}
          <div
            className="relative flex h-[72vh] w-full max-w-5xl items-center justify-center py-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous"
              className="absolute left-2 z-10 flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white transition-all hover:border-gold hover:bg-gold hover:text-ink shadow-xl"
            >
              <ChevronLeft className="size-6" />
            </button>

            <div className="relative h-full w-full">
              <Image
                src={images[activeIndex]}
                alt={`${name} - Fullscreen View`}
                fill
                sizes="95vw"
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next"
              className="absolute right-2 z-10 flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white transition-all hover:border-gold hover:bg-gold hover:text-ink shadow-xl"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>

          {/* Bottom Filmstrip */}
          <div
            className="flex items-center gap-3 border-t border-white/10 pt-4"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, idx) => (
              <button
                key={`modal-${img}-${idx}`}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "relative h-16 w-12 overflow-hidden rounded-[2px] border transition-all duration-300",
                  idx === activeIndex
                    ? "border-gold ring-2 ring-gold/70 scale-105 shadow-lg"
                    : "border-white/20 opacity-50 hover:opacity-100"
                )}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
