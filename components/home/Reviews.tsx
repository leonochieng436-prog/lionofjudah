"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { REVIEWS } from "@/lib/products";
import SectionHeading from "@/components/ui/SectionHeading";
import Rating from "@/components/ui/Rating";

export default function Reviews() {
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
    <section className="section-pad bg-brand-light/40">
      <div className="container-edge">
        <SectionHeading eyebrow="Testimonials" title="Loved by Beauty Lovers" align="center" />
        <div ref={scrollerRef} className="scrollbar-none mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="flex w-[82vw] shrink-0 snap-start flex-col gap-3 border border-line/15 bg-white p-6 sm:w-[48vw] lg:w-[31%]"
            >
              <Rating value={review.rating} size="md" />
              <p className="text-sm leading-relaxed text-ink/80">&ldquo;{review.text}&rdquo;</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-ink">{review.name}</span>
                {review.verified && (
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-brand-blue">
                    Verified Purchase
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/shop" className="text-sm font-semibold text-brand-blue hover:underline">
            View All Reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}
