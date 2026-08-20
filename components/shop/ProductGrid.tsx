"use client";

import { useEffect, useRef } from "react";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, horizontal = false }: { products: Product[]; horizontal?: boolean }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-xl text-ink">No products match those filters</p>
        <p className="mt-2 max-w-xs text-sm text-muted">
          Try widening your filters or clearing your search to see more of the range.
        </p>
      </div>
    );
  }

  if (horizontal) {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const scroller = scrollerRef.current;
      if (!scroller || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      let animationFrame: number;
      let paused = false;
      let lastTimestamp = 0;

      const animate = (timestamp: number) => {
        if (!lastTimestamp) lastTimestamp = timestamp;
        if (!paused) {
          const elapsed = timestamp - lastTimestamp;
          scroller.scrollLeft += elapsed * 0.035;
          if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth) {
            scroller.scrollLeft = 0;
          }
        }
        lastTimestamp = timestamp;
        animationFrame = requestAnimationFrame(animate);
      };

      const pause = () => {
        paused = true;
      };
      const resume = () => {
        paused = false;
        lastTimestamp = 0;
      };

      scroller.addEventListener("mouseenter", pause);
      scroller.addEventListener("mouseleave", resume);
      scroller.addEventListener("focusin", pause);
      scroller.addEventListener("focusout", resume);
      animationFrame = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrame);
        scroller.removeEventListener("mouseenter", pause);
        scroller.removeEventListener("mouseleave", resume);
        scroller.removeEventListener("focusin", pause);
        scroller.removeEventListener("focusout", resume);
      };
    }, []);

    return (
      <div
        ref={scrollerRef}
        className="scrollbar-none -mx-1 flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 pb-4 sm:mx-0 sm:gap-5 sm:px-0"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[62vw] shrink-0 snap-start sm:w-[34vw] lg:w-[calc((100%-3.75rem)/4)]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
