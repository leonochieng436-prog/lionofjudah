import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description: "Delivery timelines, fees and our returns policy at Lion of Judah Beauty & Cosmetics.",
};

export default function ShippingReturnsPage() {
  return (
    <div className="container-edge section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-3">Policies</p>
        <h1 className="font-display text-4xl text-ink">Shipping &amp; Returns</h1>
      </div>

      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-12 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl text-ink">Shipping</h2>
          <ul className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-ink/70">
            <li>Free delivery on all orders above KSh 5,000.</li>
            <li>A flat KSh 300 delivery fee applies to orders below KSh 5,000.</li>
            <li>Nairobi deliveries typically arrive within 1–2 business days.</li>
            <li>Countrywide deliveries take 2–5 business days depending on location.</li>
            <li>Every order is confirmed and tracked through WhatsApp, from checkout to your doorstep.</li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl text-ink">Returns</h2>
          <ul className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-ink/70">
            <li>Unopened, unused products can be returned within 7 days of delivery.</li>
            <li>Message us on WhatsApp with your Order ID to start a return or exchange.</li>
            <li>Items damaged in transit are replaced at no extra cost — just send us a photo.</li>
            <li>Refunds are processed back to your original payment method once we receive the item.</li>
            <li>For hygiene reasons, opened cosmetics and skincare cannot be returned unless faulty.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
