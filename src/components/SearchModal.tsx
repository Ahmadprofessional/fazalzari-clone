"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.collectionName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-2xl transition-all duration-500 animate-in fade-in zoom-in-95">
      <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-800/80 bg-ink/50">
        <div className="flex-1 flex items-center gap-3 max-w-4xl mx-auto w-full">
          <Search className="text-gold w-5 h-5 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search collections, fabrics, or styles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-white text-base sm:text-lg placeholder:text-gray-500 font-sans"
          />
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          {query && results.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {results.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  onClick={onClose}
                  className="group"
                >
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-white font-serif text-base sm:text-lg">
                    {product.name}
                  </h3>
                  <p className="text-gold-muted text-xs sm:text-sm font-sans">
                    {product.category}
                  </p>
                </Link>
              ))}
            </div>
          )}
          {query && results.length === 0 && (
            <div className="text-center text-gray-400 mt-20 font-serif text-lg sm:text-xl">
              No results found for &quot;{query}&quot;
            </div>
          )}
          {!query && (
            <div className="text-center mt-12 sm:mt-20">
              <p className="text-gray-500 font-serif text-lg sm:text-xl italic mb-6 sm:mb-8">
                Popular Searches
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {[
                  "Bridal Wear",
                  "Luxury Formals",
                  "Laleh",
                  "Pure Silk",
                  "Zardozi",
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-4 sm:px-6 py-2 rounded-full border border-gray-800 text-gray-300 hover:border-gold hover:text-gold transition-colors font-sans text-xs sm:text-sm tracking-widest uppercase"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
