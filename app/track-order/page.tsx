"use client";

import { useState } from "react";
import { Order, OrderStatus } from "@/lib/types";
import { findOrder } from "@/lib/orders";
import { formatKES, cx } from "@/lib/utils";

const STEPS: OrderStatus[] = ["PENDING", "CONFIRMED", "PROCESSING", "OUT_FOR_DELIVERY", "DELIVERED"];
const STEP_LABELS: Record<OrderStatus, string> = {
  PENDING: "Order Received",
  CONFIRMED: "Order Confirmed",
  PROCESSING: "Processing",
  OUT_FOR_DELIVERY: "Out For Delivery",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
};

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState<Order | null | "not-found">(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = findOrder(orderId.trim(), phone.trim());
    setResult(found || "not-found");
  }

  const activeIndex = result && result !== "not-found" ? STEPS.indexOf(result.status) : -1;

  return (
    <div className="container-edge section-pad !pt-8">
      <div className="mx-auto max-w-lg text-center">
        <p className="eyebrow mb-2">Order Status</p>
        <h1 className="font-display text-3xl text-ink sm:text-4xl">Track Your Order</h1>
        <p className="mt-3 text-sm text-muted">
          Enter your Order ID and the phone number you used at checkout.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 text-left">
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-wide text-ink/70">Order Number</span>
            <input
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="LOJ-2026-000123"
              className="border border-line/30 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
              required
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-wide text-ink/70">Phone Number</span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0712 345 678"
              className="border border-line/30 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
              required
            />
          </label>
          <button type="submit" className="btn-dark mt-2 w-full">
            TRACK ORDER
          </button>
        </form>
      </div>

      {result === "not-found" && (
        <p className="mx-auto mt-8 max-w-lg text-center text-sm text-red-600">
          We couldn't find an order matching those details. Double-check your Order ID and phone number, or
          message us on WhatsApp for help.
        </p>
      )}

      {result && result !== "not-found" && (
        <div className="mx-auto mt-14 max-w-2xl border border-line/15 p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Order ID</p>
              <p className="font-display text-xl text-ink">{result.id}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Total</p>
              <p className="font-display text-xl text-ink">{formatKES(result.total)}</p>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between">
            {STEPS.map((step, i) => (
              <div key={step} className="flex flex-1 flex-col items-center text-center">
                <div className="flex w-full items-center">
                  <div
                    className={cx(
                      "h-0.5 flex-1",
                      i === 0 ? "opacity-0" : i <= activeIndex ? "bg-brand-blue" : "bg-line/25"
                    )}
                  />
                  <div
                    className={cx(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-[10px] font-bold",
                      i <= activeIndex
                        ? "border-brand-blue bg-brand-blue text-white"
                        : "border-line/30 text-muted"
                    )}
                  >
                    {i + 1}
                  </div>
                  <div
                    className={cx(
                      "h-0.5 flex-1",
                      i === STEPS.length - 1 ? "opacity-0" : i < activeIndex ? "bg-brand-blue" : "bg-line/25"
                    )}
                  />
                </div>
                <span className={cx("mt-2 text-[10px] font-semibold uppercase tracking-wide", i <= activeIndex ? "text-ink" : "text-muted")}>
                  {STEP_LABELS[step]}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-line/15 pt-6">
            {result.items.map((item) => (
              <div key={item.productId} className="flex justify-between text-sm">
                <span className="text-ink/70">
                  {item.brand} {item.name} × {item.quantity}
                </span>
                <span className="font-medium text-ink">{formatKES(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted">
            Delivering to {result.customer.deliveryAddress}, {result.customer.location}
          </p>
        </div>
      )}
    </div>
  );
}
