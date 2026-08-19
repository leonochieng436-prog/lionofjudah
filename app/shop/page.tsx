import { Suspense } from "react";
import type { Metadata } from "next";
import ShopClient from "@/components/shop/ShopClient";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse skincare, bodycare, haircare, wellness, makeup, fragrance and beauty tools — filter, sort and shop the full Lion of Judah range.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container-edge section-pad">Loading products…</div>}>
      <ShopClient />
    </Suspense>
  );
}
