"use client";

import Link from "next/link";
import { Product } from "@/lib/types";
import { discountPercent, formatKES } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Rating from "@/components/ui/Rating";
import Badge from "@/components/ui/Badge";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const discount = discountPercent(product.price, product.oldPrice);
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="group relative flex flex-col border border-line/20 bg-white transition-shadow hover:shadow-card">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Link href={`/product/${product.slug}`} className="block h-full w-full">
          <PlaceholderImage
            image={product.image}
            label={product.name}
            brand={product.brand}
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <div className="absolute left-2.5 top-2.5 flex flex-col gap-1.5">
          {product.badges.slice(0, 2).map((b) => (
            <Badge key={b} type={b} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => toggle(product.id, product.name)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wishlisted}
          className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center bg-white/90 text-ink transition-colors hover:bg-white"
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
        </button>

        <button
          type="button"
          onClick={() => addItem(product.id)}
          className="absolute inset-x-2.5 bottom-2.5 translate-y-2 bg-ink py-2.5 text-center text-xs font-semibold tracking-wide text-white opacity-0 transition-all duration-200 hover:bg-brand-blue group-hover:translate-y-0 group-hover:opacity-100 sm:block hidden"
        >
          ADD TO CART
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-3.5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-muted">
          {product.brand}
        </span>
        <Link
          href={`/product/${product.slug}`}
          className="line-clamp-2 font-body text-sm font-medium text-ink hover:text-brand-blue"
        >
          {product.name}
        </Link>
        <Rating value={product.rating} count={product.reviewsCount} />
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-sm font-semibold text-ink">{formatKES(product.price)}</span>
          {product.oldPrice && (
            <span className="text-xs text-muted line-through">{formatKES(product.oldPrice)}</span>
          )}
          {discount && <span className="text-xs font-semibold text-brand-blue">{discount}% OFF</span>}
        </div>
        <button
          type="button"
          onClick={() => addItem(product.id)}
          className="mt-2 border border-ink py-2 text-xs font-semibold tracking-wide text-ink transition-colors hover:bg-ink hover:text-white sm:hidden"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
