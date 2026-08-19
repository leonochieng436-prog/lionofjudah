"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Order } from "@/lib/types";
import { getOrderById } from "@/lib/orders";
import { formatKES } from "@/lib/utils";

export default function OrderConfirmationClient() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "";
  const whatsappUrl = searchParams.get("whatsapp") || "";
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (orderId) setOrder(getOrderById(orderId) || null);
  }, [orderId]);

  if (!orderId) {
    return (
      <div className="container-edge section-pad flex flex-col items-center py-28 text-center">
        <h1 className="font-display text-2xl text-ink">No order found</h1>
        <p className="mt-2 text-sm text-muted">Start a new order from the shop.</p>
        <Link href="/shop" className="btn-dark mt-8">
          SHOP NOW
        </Link>
      </div>
    );
  }

  return (
    <div className="container-edge section-pad flex flex-col items-center !pt-14 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10">
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="mt-6 font-display text-3xl text-ink sm:text-4xl">Your Order Request Is Ready</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
        We've prepared your order details for WhatsApp. Send the message to complete your order.
      </p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink/60">
        Order ID: <span className="text-brand-blue">{orderId}</span>
      </p>

      <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary w-full">
          <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor">
            <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.65 4.56 1.78 6.44L4 29l7.75-1.72A11.9 11.9 0 0016.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3z" />
          </svg>
          OPEN WHATSAPP
        </a>
        <Link href="/shop" className="btn-outline-dark w-full">
          CONTINUE SHOPPING
        </Link>
      </div>

      {order && (
        <div className="mt-14 w-full max-w-md border border-line/15 p-6 text-left">
          <h2 className="font-display text-lg text-ink">Order Summary</h2>
          <div className="mt-4 flex flex-col gap-3">
            {order.items.map((item) => (
              <div key={item.productId} className="flex justify-between text-sm">
                <span className="text-ink/70">
                  {item.brand} {item.name} <span className="text-muted">× {item.quantity}</span>
                </span>
                <span className="font-medium text-ink">{formatKES(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2 border-t border-line/15 pt-4 text-sm">
            <div className="flex justify-between text-ink/70">
              <span>Subtotal</span>
              <span>{formatKES(order.subtotal)}</span>
            </div>
            <div className="flex justify-between text-ink/70">
              <span>Delivery</span>
              <span>{order.deliveryFee === 0 ? "FREE" : formatKES(order.deliveryFee)}</span>
            </div>
            <div className="flex justify-between text-base font-semibold text-ink">
              <span>Total</span>
              <span>{formatKES(order.total)}</span>
            </div>
          </div>
        </div>
      )}

      <p className="mt-8 max-w-sm text-xs leading-relaxed text-muted">
        You can check on this order anytime using{" "}
        <Link href="/track-order" className="text-brand-blue hover:underline">
          Track Order
        </Link>{" "}
        with your Order ID and phone number.
      </p>
    </div>
  );
}
