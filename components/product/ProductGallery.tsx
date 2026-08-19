"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { cx } from "@/lib/utils";

const THUMBNAILS = [0, 1, 2, 3];

export default function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3 sm:flex-row-reverse sm:gap-4">
      <div className="aspect-square w-full overflow-hidden sm:flex-1">
        <PlaceholderImage
          image={product.image}
          label={product.name}
          brand={product.brand}
          className="h-full w-full"
        />
      </div>
      <div className="flex gap-2.5 sm:w-20 sm:flex-col">
        {THUMBNAILS.map((thumbnail, i) => (
          <button
            key={thumbnail}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={cx(
              "relative aspect-square w-16 shrink-0 overflow-hidden border transition-colors sm:w-full",
              active === i ? "border-brand-blue" : "border-line/20"
            )}
          >
            {product.image && (
                <img
                  src={product.image}
                alt=""
                  className="absolute inset-0 h-full w-full object-cover"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
