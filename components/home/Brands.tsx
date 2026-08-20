"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const BRANDS = [
  { name: "The Ordinary", image: "/logo/theordinarylogo.jpg" },
  { name: "Dr.Rashel", image: "/logo/rashellogo.png" },
  { name: "Garnier", image: "/logo/garnierlogo.jpg" },
  { name: "Simple", image: "/logo/simplelogo.jpg" },
  { name: "Cosrx", image: "/logo/cosrxlogo.jpg" },
  { name: "Roniki", image: "/logo/ronikilogo.avif" },
  { name: "Nivea", image: "/logo/nivealogo.jpg" },
];

export default function Brands() {
  const marqueeBrands = useMemo(() => [...BRANDS, ...BRANDS], []);

  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Names You Can Trust" title="Brands" />
          <Link href="/shop" className="text-sm font-semibold text-brand-blue hover:underline">
            View All →
          </Link>
        </div>
        <div className="mt-10 overflow-hidden" aria-label="Featured brands">
          <div className="brands-marquee flex w-max items-center gap-8 hover:[animation-play-state:paused] sm:gap-12">
            {marqueeBrands.map((brand, index) => (
              <Link
                key={`${brand.name}-${index}`}
                href={`/shop?brand=${encodeURIComponent(brand.name)}`}
                aria-label={`Shop ${brand.name}`}
                className="flex h-24 w-36 shrink-0 items-center justify-center sm:h-28 sm:w-44"
              >
                <Image
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  width={176}
                  height={112}
                  className="max-h-20 w-auto max-w-full object-contain sm:max-h-24"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
