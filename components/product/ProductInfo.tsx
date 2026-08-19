"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/types";
import { discountPercent, formatKES } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { buildProductInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import Rating from "@/components/ui/Rating";
import Badge from "@/components/ui/Badge";

export default function ProductInfo({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const router = useRouter();
  const discount = discountPercent(product.price, product.oldPrice);
  const wishlisted = isWishlisted(product.id);
  const inStock = product.stock > 0;
  const whatsappHref = buildWhatsAppUrl(buildProductInquiryMessage(product));

  function handleBuyNow() {
    addItem(product.id, qty);
    router.push("/cart");
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-1.5">
        {product.badges.map((b) => (
          <Badge key={b} type={b} />
        ))}
      </div>

      <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">{product.brand}</span>
      <h1 className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl">{product.name}</h1>

      <div className="mt-3">
        <Rating value={product.rating} count={product.reviewsCount} size="md" />
      </div>

      <div className="mt-5 flex items-baseline gap-3">
        <span className="text-2xl font-semibold text-ink">{formatKES(product.price)}</span>
        {product.oldPrice && (
          <span className="text-base text-muted line-through">{formatKES(product.oldPrice)}</span>
        )}
        {discount && <span className="text-sm font-semibold text-brand-blue">{discount}% OFF</span>}
      </div>

      <p
        className={`mt-2 text-xs font-semibold ${
          inStock ? (product.stock <= 8 ? "text-brand-blue" : "text-ink/60") : "text-red-600"
        }`}
      >
        {inStock ? (product.stock <= 8 ? `Only ${product.stock} left in stock` : "In stock") : "Out of stock"}
      </p>

      <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/70">{product.description}</p>

      <div className="mt-7 flex items-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/60">Quantity</span>
        <div className="flex items-center border border-line/30">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex h-10 w-10 items-center justify-center text-ink hover:bg-brand-light/50"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="flex h-10 w-12 items-center justify-center text-sm font-semibold">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(product.stock || 1, q + 1))}
            className="flex h-10 w-10 items-center justify-center text-ink hover:bg-brand-light/50"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            disabled={!inStock}
            onClick={() => addItem(product.id, qty)}
            className="btn-outline-dark flex-1 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ADD TO CART
          </button>
          <button
            type="button"
            disabled={!inStock}
            onClick={handleBuyNow}
            className="btn-dark flex-1 disabled:cursor-not-allowed disabled:opacity-40"
          >
            BUY NOW
          </button>
        </div>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="btn-primary w-full"
        >
          <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor">
            <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.65 4.56 1.78 6.44L4 29l7.75-1.72A11.9 11.9 0 0016.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3z" />
          </svg>
          ORDER VIA WHATSAPP
        </a>
        <button
          type="button"
          onClick={() => toggle(product.id, product.name)}
          className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-ink/70 hover:text-brand-blue"
        >
          <svg
            viewBox="0 0 20 20"
            className="h-4 w-4"
            fill={wishlisted ? "#1683FF" : "none"}
            stroke={wishlisted ? "#1683FF" : "currentColor"}
            strokeWidth="1.5"
          >
            <path d="M10 17.3l-1.1-1C4.4 12.4 2 10.2 2 7.4 2 5.2 3.7 3.5 5.9 3.5c1.3 0 2.5.6 3.1 1.6.6-1 1.8-1.6 3.1-1.6 2.2 0 3.9 1.7 3.9 3.9 0 2.8-2.4 5-6.9 8.9l-1.1 1z" />
          </svg>
          {wishlisted ? "SAVED TO WISHLIST" : "ADD TO WISHLIST"}
        </button>
      </div>
    </div>
  );
}
