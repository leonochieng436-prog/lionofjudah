"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { PRODUCTS } from "@/lib/products";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const BRANDS = Array.from(new Set(PRODUCTS.map((product) => product.brand)));

export default function Brands() {
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
        scroller.scrollLeft += (timestamp - lastTimestamp) * 0.035;
        if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth) scroller.scrollLeft = 0;
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
    <section className="section-pad bg-brand-light/40">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Names You Can Trust" title="Brands" />
          <Link href="/shop" className="text-sm font-semibold text-brand-blue hover:underline">
            View All →
          </Link>
        </div>
        <div ref={scrollerRef} className="scrollbar-none mt-10 flex snap-x gap-3 overflow-x-auto pb-4 sm:gap-5">
          {BRANDS.map((brand) => {
            const product = PRODUCTS.find((item) => item.brand === brand)!;
            return (
              <Link
                key={brand}
                href={`/shop?brand=${encodeURIComponent(brand)}`}
                className="group relative flex aspect-[4/3] w-[72vw] shrink-0 snap-start items-end overflow-hidden border border-line/15 sm:w-[35vw] lg:w-[22vw]"
              >
                <PlaceholderImage
                  label={brand}
                  className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105"
                  image={product.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <span className="relative z-10 p-4 font-display text-lg font-semibold text-white">{brand}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
