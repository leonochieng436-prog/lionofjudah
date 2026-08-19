"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/lib/products";
import { formatKES, FREE_DELIVERY_THRESHOLD } from "@/lib/utils";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function CartPage() {
  const { items, subtotal, deliveryFee, total, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-edge section-pad flex flex-col items-center py-28 text-center">
        <svg viewBox="0 0 24 24" className="h-14 w-14 text-line" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M6 6h15l-1.5 9h-12z" />
          <path d="M6 6L5 3H2" />
          <circle cx="9.5" cy="19.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="17.5" cy="19.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
        <h1 className="mt-6 font-display text-2xl text-ink">Your cart is empty</h1>
        <p className="mt-2 max-w-xs text-sm text-muted">
          Browse the range and add a few favourites — they'll show up here.
        </p>
        <Link href="/shop" className="btn-dark mt-8">
          CONTINUE SHOPPING
        </Link>
      </div>
    );
  }

  const remainingForFreeDelivery = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);

  return (
    <div className="container-edge section-pad !pt-8">
      <h1 className="mb-8 font-display text-3xl text-ink sm:text-4xl">Your Cart</h1>

      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex-1">
          {remainingForFreeDelivery > 0 && (
            <div className="mb-6 border border-brand-blue/30 bg-brand-light/40 px-4 py-3 text-xs font-medium text-ink">
              Add <span className="font-semibold text-brand-blue">{formatKES(remainingForFreeDelivery)}</span> more to
              unlock free delivery.
            </div>
          )}

          <div className="flex flex-col divide-y divide-line/10 border-y border-line/10">
            {items.map((item) => {
              const product = getProductById(item.productId);
              if (!product) return null;
              return (
                <div key={item.productId} className="flex gap-4 py-5">
                  <Link href={`/product/${product.slug}`} className="h-24 w-24 shrink-0 overflow-hidden sm:h-28 sm:w-28">
                    <PlaceholderImage image={product.image} label={product.name} brand={product.brand} className="h-full w-full" />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                          {product.brand}
                        </span>
                        <Link href={`/product/${product.slug}`} className="mt-0.5 block text-sm font-medium text-ink hover:text-brand-blue">
                          {product.name}
                        </Link>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId)}
                        aria-label="Remove item"
                        className="h-fit shrink-0 text-muted hover:text-ink"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                          <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="flex items-center border border-line/30">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center hover:bg-brand-light/50"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="flex h-8 w-9 items-center justify-center text-xs font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center hover:bg-brand-light/50"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-ink">
                        {formatKES(product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Link href="/shop" className="mt-6 inline-block text-sm font-semibold text-brand-blue hover:underline">
            ← Continue Shopping
          </Link>
        </div>

        <div className="w-full shrink-0 lg:w-80">
          <div className="border border-line/15 p-6">
            <h2 className="font-display text-lg text-ink">Order Summary</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <div className="flex justify-between text-ink/70">
                <span>Subtotal</span>
                <span className="font-medium text-ink">{formatKES(subtotal)}</span>
              </div>
              <div className="flex justify-between text-ink/70">
                <span>Estimated Delivery</span>
                <span className="font-medium text-ink">{deliveryFee === 0 ? "FREE" : formatKES(deliveryFee)}</span>
              </div>
              <div className="my-1 h-px bg-line/15" />
              <div className="flex justify-between text-base font-semibold text-ink">
                <span>Total</span>
                <span>{formatKES(total)}</span>
              </div>
            </div>
            <Link href="/checkout" className="btn-primary mt-6 w-full">
              PROCEED TO CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
