"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/lib/products";
import { formatKES } from "@/lib/utils";
import { generateOrderId } from "@/lib/utils";
import { saveOrder } from "@/lib/orders";
import { buildCartOrderMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { CustomerDetails, Order, OrderLineItem } from "@/lib/types";

const emptyDetails: CustomerDetails = {
  fullName: "",
  phone: "",
  email: "",
  location: "",
  deliveryAddress: "",
  notes: "",
};

export default function CheckoutPage() {
  const { items, subtotal, deliveryFee, total, clearCart } = useCart();
  const [form, setForm] = useState<CustomerDetails>(emptyDetails);
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerDetails, string>>>({});
  const router = useRouter();

  if (items.length === 0) {
    return (
      <div className="container-edge section-pad flex flex-col items-center py-28 text-center">
        <h1 className="font-display text-2xl text-ink">Your cart is empty</h1>
        <p className="mt-2 text-sm text-muted">Add a few products before checking out.</p>
        <Link href="/shop" className="btn-dark mt-8">
          SHOP NOW
        </Link>
      </div>
    );
  }

  function update(field: keyof CustomerDetails, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof CustomerDetails, string>> = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required";
    if (!form.phone.trim()) next.phone = "Phone number is required";
    else if (form.phone.replace(/\D/g, "").length < 9) next.phone = "Enter a valid phone number";
    if (!form.location.trim()) next.location = "Delivery location is required";
    if (!form.deliveryAddress.trim()) next.deliveryAddress = "Delivery address is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const orderId = generateOrderId();
    const lineItems: OrderLineItem[] = items
      .map((item) => {
        const product = getProductById(item.productId);
        if (!product) return null;
        return {
          productId: product.id,
          name: product.name,
          brand: product.brand,
          quantity: item.quantity,
          price: product.price,
        };
      })
      .filter(Boolean) as OrderLineItem[];

    const now = new Date().toISOString();
    const order: Order = {
      id: orderId,
      customer: form,
      items: lineItems,
      subtotal,
      deliveryFee,
      total,
      status: "PENDING",
      createdAt: now,
      updatedAt: now,
    };

    saveOrder(order);

    const message = buildCartOrderMessage({
      orderId,
      items: lineItems,
      subtotal,
      deliveryFee,
      total,
      customer: form,
    });
    const whatsappUrl = buildWhatsAppUrl(message);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    clearCart();
    router.push(`/order-confirmation?orderId=${encodeURIComponent(orderId)}&whatsapp=${encodeURIComponent(whatsappUrl)}`);
  }

  return (
    <div className="container-edge section-pad !pt-8">
      <h1 className="mb-2 font-display text-3xl text-ink sm:text-4xl">Complete Your Order</h1>
      <p className="mb-10 max-w-md text-sm text-muted">
        Fill in your details below. We'll open WhatsApp with your order ready to send.
      </p>

      <div className="flex flex-col gap-10 lg:flex-row">
        <form onSubmit={handleSubmit} className="flex-1" noValidate>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Full Name" error={errors.fullName} className="sm:col-span-2">
              <input
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className="input"
                placeholder="Jane Wanjiru"
              />
            </Field>
            <Field label="Phone Number" error={errors.phone}>
              <input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="input"
                placeholder="0712 345 678"
                type="tel"
              />
            </Field>
            <Field label="Email (optional)">
              <input
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="input"
                placeholder="jane@email.com"
                type="email"
              />
            </Field>
            <Field label="Town / City" error={errors.location}>
              <input
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                className="input"
                placeholder="Nairobi"
              />
            </Field>
            <Field label="Delivery Address" error={errors.deliveryAddress}>
              <input
                value={form.deliveryAddress}
                onChange={(e) => update("deliveryAddress", e.target.value)}
                className="input"
                placeholder="Westlands, Waiyaki Way"
              />
            </Field>
            <Field label="Order Notes (optional)" className="sm:col-span-2">
              <textarea
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                className="input min-h-[90px] resize-none"
                placeholder="Delivery instructions, gift note, preferred delivery time..."
              />
            </Field>
          </div>

          <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
            <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor">
              <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.65 4.56 1.78 6.44L4 29l7.75-1.72A11.9 11.9 0 0016.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3z" />
            </svg>
            ORDER VIA WHATSAPP
          </button>
        </form>

        <div className="w-full shrink-0 lg:w-80">
          <div className="border border-line/15 p-6">
            <h2 className="font-display text-lg text-ink">Order Summary</h2>
            <div className="mt-5 flex flex-col gap-4">
              {items.map((item) => {
                const product = getProductById(item.productId);
                if (!product) return null;
                return (
                  <div key={item.productId} className="flex justify-between gap-3 text-sm">
                    <span className="text-ink/70">
                      {product.name} <span className="text-muted">× {item.quantity}</span>
                    </span>
                    <span className="shrink-0 font-medium text-ink">
                      {formatKES(product.price * item.quantity)}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 flex flex-col gap-3 border-t border-line/15 pt-5 text-sm">
              <div className="flex justify-between text-ink/70">
                <span>Subtotal</span>
                <span className="font-medium text-ink">{formatKES(subtotal)}</span>
              </div>
              <div className="flex justify-between text-ink/70">
                <span>Delivery</span>
                <span className="font-medium text-ink">{deliveryFee === 0 ? "FREE" : formatKES(deliveryFee)}</span>
              </div>
              <div className="my-1 h-px bg-line/15" />
              <div className="flex justify-between text-base font-semibold text-ink">
                <span>Total</span>
                <span>{formatKES(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid #25314033;
          padding: 0.75rem 0.9rem;
          font-size: 0.875rem;
          background: white;
        }
        .input:focus {
          outline: none;
          border-color: #1683ff;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className || ""}`}>
      <span className="text-xs font-semibold uppercase tracking-wide text-ink/70">{label}</span>
      {children}
      {error && <span className="text-xs font-medium text-red-600">{error}</span>}
    </label>
  );
}
