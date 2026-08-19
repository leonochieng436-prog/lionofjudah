"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { getProductById } from "@/lib/products";
import { Product } from "@/lib/types";
import ProductGrid from "@/components/shop/ProductGrid";

export default function WishlistPage() {
  const { ids } = useWishlist();
  const products = ids
    .map((id) => getProductById(id))
    .filter((p): p is Product => Boolean(p));

  if (products.length === 0) {
    return (
      <div className="container-edge section-pad flex flex-col items-center py-28 text-center">
        <svg viewBox="0 0 24 24" className="h-14 w-14 text-line" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 20.5l-1.4-1.3C5.4 14.7 2 11.6 2 7.9 2 4.9 4.3 2.5 7.2 2.5c1.7 0 3.4.8 4.8 2.4 1.4-1.6 3.1-2.4 4.8-2.4 2.9 0 5.2 2.4 5.2 5.4 0 3.7-3.4 6.8-8.6 11.3z" />
        </svg>
        <h1 className="mt-6 font-display text-2xl text-ink">Your wishlist is empty</h1>
        <p className="mt-2 max-w-xs text-sm text-muted">
          Tap the heart on any product to save it here for later.
        </p>
        <Link href="/shop" className="btn-dark mt-8">
          BROWSE PRODUCTS
        </Link>
      </div>
    );
  }

  return (
    <div className="container-edge section-pad !pt-8">
      <h1 className="mb-2 font-display text-3xl text-ink sm:text-4xl">Your Wishlist</h1>
      <p className="mb-8 text-sm text-muted">{products.length} saved products</p>
      <ProductGrid products={products} />
    </div>
  );
}
