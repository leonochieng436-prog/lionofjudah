"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Address,
  getAddresses,
  getOrders,
  getProfile,
  getRecentlyViewed,
  Profile,
  removeAddress,
  saveAddress,
  saveProfile,
} from "@/lib/orders";
import { Order } from "@/lib/types";
import { getProductById } from "@/lib/products";
import { formatKES, cx } from "@/lib/utils";
import ProductGrid from "@/components/shop/ProductGrid";

const TABS = ["Profile", "Orders", "Addresses", "Recently Viewed"] as const;
type Tab = (typeof TABS)[number];

export default function AccountPage() {
  const [tab, setTab] = useState<Tab>("Profile");
  const [profile, setProfile] = useState<Profile>({ fullName: "", phone: "", email: "" });
  const [orders, setOrders] = useState<Order[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [recentIds, setRecentIds] = useState<string[]>([]);
  const [addressForm, setAddressForm] = useState({ label: "", location: "", deliveryAddress: "" });

  useEffect(() => {
    setProfile(getProfile() || { fullName: "", phone: "", email: "" });
    setOrders(getOrders());
    setAddresses(getAddresses());
    setRecentIds(getRecentlyViewed());
  }, []);

  function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    saveProfile(profile);
  }

  function handleAddAddress(e: React.FormEvent) {
    e.preventDefault();
    if (!addressForm.location.trim() || !addressForm.deliveryAddress.trim()) return;
    const address: Address = { id: `addr_${Date.now()}`, ...addressForm };
    saveAddress(address);
    setAddresses(getAddresses());
    setAddressForm({ label: "", location: "", deliveryAddress: "" });
  }

  function handleRemoveAddress(id: string) {
    removeAddress(id);
    setAddresses(getAddresses());
  }

  const recentProducts = recentIds.map((id) => getProductById(id)).filter(Boolean) as ReturnType<typeof getProductById>[];

  return (
    <div className="container-edge section-pad !pt-8">
      <h1 className="mb-2 font-display text-3xl text-ink sm:text-4xl">My Account</h1>
      <p className="mb-8 max-w-lg text-sm text-muted">
        Your details are saved on this device so we can pre-fill checkout and show your order history.
      </p>

      <div className="flex flex-col gap-8 lg:flex-row">
        <nav className="scrollbar-none flex gap-2 overflow-x-auto lg:w-56 lg:flex-col lg:gap-1">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cx(
                "shrink-0 px-4 py-2.5 text-left text-sm font-medium transition-colors",
                tab === t ? "bg-ink text-white" : "text-ink/70 hover:bg-brand-light/40"
              )}
            >
              {t}
            </button>
          ))}
          <Link
            href="/track-order"
            className="shrink-0 px-4 py-2.5 text-left text-sm font-medium text-ink/70 hover:bg-brand-light/40"
          >
            Order Tracking
          </Link>
          <Link
            href="/wishlist"
            className="shrink-0 px-4 py-2.5 text-left text-sm font-medium text-ink/70 hover:bg-brand-light/40"
          >
            Wishlist
          </Link>
        </nav>

        <div className="flex-1">
          {tab === "Profile" && (
            <form onSubmit={handleSaveProfile} className="max-w-md">
              <div className="flex flex-col gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink/70">Full Name</span>
                  <input
                    value={profile.fullName}
                    onChange={(e) => setProfile((p) => ({ ...p, fullName: e.target.value }))}
                    className="border border-line/30 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink/70">Phone</span>
                  <input
                    value={profile.phone}
                    onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))}
                    className="border border-line/30 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink/70">Email</span>
                  <input
                    value={profile.email}
                    onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
                    className="border border-line/30 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </label>
              </div>
              <button type="submit" className="btn-dark mt-6">
                SAVE CHANGES
              </button>
            </form>
          )}

          {tab === "Orders" && (
            <div className="flex flex-col gap-4">
              {orders.length === 0 && <p className="text-sm text-muted">No orders placed on this device yet.</p>}
              {orders.map((order) => (
                <div key={order.id} className="border border-line/15 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-lg text-ink">{order.id}</span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                      {order.status.replace(/_/g, " ")}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted">
                    {new Date(order.createdAt).toLocaleDateString("en-KE", { year: "numeric", month: "short", day: "numeric" })}
                  </p>
                  <div className="mt-4 flex flex-col gap-1.5">
                    {order.items.map((item) => (
                      <div key={item.productId} className="flex justify-between text-sm text-ink/70">
                        <span>{item.name} × {item.quantity}</span>
                        <span>{formatKES(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between border-t border-line/15 pt-3 text-sm font-semibold text-ink">
                    <span>Total</span>
                    <span>{formatKES(order.total)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "Addresses" && (
            <div className="flex flex-col gap-8">
              <form onSubmit={handleAddAddress} className="max-w-md">
                <div className="flex flex-col gap-4">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink/70">Label</span>
                    <input
                      value={addressForm.label}
                      onChange={(e) => setAddressForm((f) => ({ ...f, label: e.target.value }))}
                      placeholder="Home, Office..."
                      className="border border-line/30 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink/70">Town / City</span>
                    <input
                      value={addressForm.location}
                      onChange={(e) => setAddressForm((f) => ({ ...f, location: e.target.value }))}
                      className="border border-line/30 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink/70">Address</span>
                    <input
                      value={addressForm.deliveryAddress}
                      onChange={(e) => setAddressForm((f) => ({ ...f, deliveryAddress: e.target.value }))}
                      className="border border-line/30 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                    />
                  </label>
                </div>
                <button type="submit" className="btn-dark mt-6">
                  ADD ADDRESS
                </button>
              </form>

              <div className="flex flex-col gap-3">
                {addresses.map((a) => (
                  <div key={a.id} className="flex items-center justify-between border border-line/15 p-4">
                    <div>
                      <p className="text-sm font-semibold text-ink">{a.label || "Address"}</p>
                      <p className="text-xs text-muted">{a.deliveryAddress}, {a.location}</p>
                    </div>
                    <button onClick={() => handleRemoveAddress(a.id)} className="text-xs font-medium text-muted hover:text-red-600">
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "Recently Viewed" && (
            <>
              {recentProducts.length === 0 ? (
                <p className="text-sm text-muted">Products you view will show up here.</p>
              ) : (
                <ProductGrid products={recentProducts} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
