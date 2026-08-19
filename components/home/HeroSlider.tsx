"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Slide {
  eyebrow: string;
  headline: React.ReactNode;
  subtitle: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

const SLIDES: Slide[] = [
  {
    eyebrow: "The Lion of Judah Edit",
    headline: (
      <>
        YOUR BEAUTY.
        
        <br />
        YOUR <span className="text-brand-blue">POWER.</span>
      </>
    ),
    subtitle:
      "Premium skincare, beauty, haircare and wellness essentials curated to elevate your everyday beauty routine.",
    primary: { label: "SHOP NOW", href: "/shop" },
    secondary: { label: "EXPLORE COLLECTION", href: "/shop?category=skincare" },
  },
  {
    eyebrow: "Just Landed",
    headline: <>NEW BEAUTY <span className="text-brand-blue">ESSENTIALS.</span></>,
    subtitle: "Discover the latest arrivals across skincare, makeup and haircare, restocked weekly.",
    primary: { label: "SHOP NEW ARRIVALS", href: "/shop?sort=newest" },
    secondary: { label: "VIEW ALL", href: "/shop" },
  },
  {
    eyebrow: "For A Limited Time",
    headline: <>UP TO <span className="text-brand-blue">25% OFF.</span></>,
    subtitle: "Selected best sellers across the range are on sale — while stocks last.",
    primary: { label: "SHOP THE SALE", href: "/shop?category=deals" },
    secondary: { label: "SEE DEALS", href: "/shop?category=deals" },
  },
  {
    eyebrow: "Countrywide Delivery",
    headline: <>SKINCARE <span className="text-brand-blue">DELIVERED NATIONWIDE.</span></>,
    subtitle: "Find your skincare essentials and enjoy fast, tracked delivery to every county in Kenya.",
    primary: { label: "SHOP SKINCARE", href: "/shop?category=skincare" },
    secondary: { label: "DELIVERY INFO", href: "/shipping-returns" },
  },
  {
    eyebrow: "Effortless Ordering",
    headline: <>ORDER NAILS &amp; TOOLS <span className="text-brand-blue">ON WHATSAPP.</span></>,
    subtitle: "Choose your beauty tools, confirm your details, and send your order directly on WhatsApp.",
    primary: { label: "SHOP NAILS & TOOLS", href: "/shop?category=beauty-tools" },
    secondary: { label: "HOW IT WORKS", href: "/faq" },
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[index];

  return (
    <section
      className="relative flex h-[70vh] items-center overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(5, 5, 5, 0.9) 0%, rgba(5, 5, 5, 0.72) 36%, rgba(5, 5, 5, 0.12) 78%, transparent 100%), url("/images/hero2.jpeg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container-edge relative z-10 py-20">
        <div key={index} className="max-w-xl animate-slideUp">
          <p className="eyebrow mb-5">{slide.eyebrow}</p>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            {slide.headline}
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/70">{slide.subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={slide.primary.href} className="btn-primary">
              {slide.primary.label}
            </Link>
            <Link href={slide.secondary.href} className="btn-secondary">
              {slide.secondary.label}
            </Link>
          </div>
        </div>
      </div>

      <button
        aria-label="Previous slide"
        onClick={() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/25 text-white transition-colors hover:border-brand-blue hover:text-brand-blue sm:flex"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button
        aria-label="Next slide"
        onClick={() => setIndex((i) => (i + 1) % SLIDES.length)}
        className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/25 text-white transition-colors hover:border-brand-blue hover:text-brand-blue sm:flex"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-7 bg-brand-blue" : "w-1.5 bg-white/35"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
