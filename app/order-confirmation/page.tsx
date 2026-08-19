import { Suspense } from "react";
import OrderConfirmationClient from "@/components/checkout/OrderConfirmationClient";

export const metadata = { title: "Order Confirmation" };

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div className="container-edge section-pad">Loading…</div>}>
      <OrderConfirmationClient />
    </Suspense>
  );
}
