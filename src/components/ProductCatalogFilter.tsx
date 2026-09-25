"use client";

import { useState, useTransition } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import type { Product } from "@/types/content";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "all", label: "All Collections" },
  { id: "new-arrivals", label: "New Arrivals", matchKey: "New Arrivals" },
  { id: "unstitched", label: "Unstitched", matchKey: "Unstitched" },
  { id: "bridal-wear", label: "Bridal Wear", matchKey: "Bridal Wear" },
  { id: "luxury-formals", label: "Luxury Formals", matchKey: "Luxury Formals" },
  { id: "party-wear", label: "Party Wear", matchKey: "Party Wear" },
] as const;

interface ProductCatalogFilterProps {
  products: Product[];
}

export default function ProductCatalogFilter({ products }: ProductCatalogFilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [, startTransition] = useTransition();

  const queryCategory = searchParams.get("category");

  // Determine initial active tab based on query param
  const getInitialTab = (): string => {
    if (!queryCategory) return "all";
    const lower = queryCategory.toLowerCase();
    if (lower.includes("unstitched") || lower.includes("unstitch")) return "unstitched";
    if (lower.includes("bridal")) return "bridal-wear";
    if (lower.includes("formal")) return "luxury-formals";
    if (lower.includes("party")) return "party-wear";
    if (lower.includes("arrival")) return "new-arrivals";
    return "all";
  };

  const [activeTab, setActiveTab] = useState<string>(getInitialTab);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    startTransition(() => {
      const selected = TABS.find((t) => t.id === tabId);
      if (tabId === "all" || !selected || !("matchKey" in selected)) {
        router.replace("/products", { scroll: false });
      } else {
        router.replace(`/products?category=${encodeURIComponent(selected.matchKey)}`, {
          scroll: false,
        });
      }
    });
  };

  // Filter products based on selected tab
  const filteredProducts = products.filter((p) => {
    if (activeTab === "all") return true;
    if (activeTab === "new-arrivals") return true; // All 16 products are in New Arrivals
    if (activeTab === "unstitched") return true; // All 16 products available as Unstitched
    if (activeTab === "bridal-wear") {
      return p.category === "Bridal Wear" || p.categories?.includes("Bridal Wear");
    }
    if (activeTab === "luxury-formals") {
      return p.category === "Luxury Formals" || p.categories?.includes("Luxury Formals");
    }
    if (activeTab === "party-wear") {
      return p.category === "Party Wear" || p.categories?.includes("Party Wear");
    }
    return true;
  });

  return (
    <div className="w-full">
      {/* Category Navigation Tabs */}
      <div className="mb-8 sm:mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                "cursor-pointer px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-serif text-xs sm:text-sm uppercase tracking-[1.5px] transition-all duration-300",
                isActive
                  ? "bg-gold text-ink font-semibold shadow-md scale-105"
                  : "bg-white/80 text-ink/80 hover:bg-white hover:text-gold border border-gold-border/40 hover:border-gold"
              )}
            >
              {tab.label}
              {tab.id === "all" || tab.id === "new-arrivals" || tab.id === "unstitched" ? (
                <span className="ml-1.5 opacity-60 text-[11px]">({products.length})</span>
              ) : tab.id === "bridal-wear" ? (
                <span className="ml-1.5 opacity-60 text-[11px]">(4)</span>
              ) : tab.id === "luxury-formals" ? (
                <span className="ml-1.5 opacity-60 text-[11px]">(4)</span>
              ) : tab.id === "party-wear" ? (
                <span className="ml-1.5 opacity-60 text-[11px]">(4)</span>
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Grid of Product Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:gap-8 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-16 text-center">
          <p className="font-serif text-lg text-ink">No pieces found in this category.</p>
        </div>
      )}
    </div>
  );
}
