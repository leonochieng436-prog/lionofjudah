"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { cx } from "@/lib/utils";
import Rating from "@/components/ui/Rating";
import { REVIEWS } from "@/lib/products";

const TABS = ["Description", "Benefits", "Ingredients", "How To Use", "Shipping", "Reviews"] as const;
type Tab = (typeof TABS)[number];

export default function ProductTabs({ product }: { product: Product }) {
  const [tab, setTab] = useState<Tab>("Description");
  const productReviews = REVIEWS.slice(0, 3);

  return (
    <div className="mt-16 border-t border-line/15 pt-10">
      <div className="scrollbar-none flex gap-8 overflow-x-auto border-b border-line/15">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cx(
              "shrink-0 border-b-2 pb-4 text-sm font-semibold uppercase tracking-wide transition-colors",
              tab === t ? "border-brand-blue text-ink" : "border-transparent text-muted hover:text-ink"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="max-w-2xl py-8 text-sm leading-relaxed text-ink/75">
        {tab === "Description" && <p>{product.description}</p>}

        {tab === "Benefits" && (
          <ul className="flex flex-col gap-2.5">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                {b}
              </li>
            ))}
          </ul>
        )}

        {tab === "Ingredients" && <p>{product.ingredients}</p>}

        {tab === "How To Use" && <p>{product.howToUse}</p>}

        {tab === "Shipping" && (
          <div className="flex flex-col gap-3">
            <p>Free delivery on orders above KSh 5,000. Orders below qualify for a flat KSh 300 delivery fee.</p>
            <p>Nairobi delivery typically arrives within 1–2 business days. Countrywide delivery takes 2–5 business days depending on location.</p>
            <p>Every order is confirmed and tracked through WhatsApp from checkout to delivery.</p>
          </div>
        )}

        {tab === "Reviews" && (
          <div className="flex flex-col gap-6">
            {productReviews.map((r) => (
              <div key={r.id} className="border-b border-line/10 pb-6 last:border-0">
                <Rating value={r.rating} size="md" />
                <p className="mt-2 text-ink/80">&ldquo;{r.text}&rdquo;</p>
                <p className="mt-2 text-xs font-semibold text-ink">{r.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
