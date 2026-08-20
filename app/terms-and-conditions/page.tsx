import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing purchases and use of the Lion of Judah Beauty & Cosmetics website.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="container-edge section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-3">Store Policies</p>
        <h1 className="font-display text-4xl text-ink">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-muted">Last updated: 20 August 2026</p>
      </div>

      <article className="prose prose-sm mx-auto mt-14 max-w-3xl text-ink/70">
        <p>These terms apply to your use of the Lion of Judah Beauty &amp; Cosmetics website and to orders placed through our online and WhatsApp ordering service. By placing an order, you agree to them.</p>
        <h2>Products and orders</h2>
        <p>Product descriptions, prices and availability may change without notice. An order is accepted only when our team confirms the products, total and delivery details with you. We may cancel or correct an order where a product or price is unavailable or displayed in error.</p>
        <h2>Payment and delivery</h2>
        <p>Payment options and any delivery charge are confirmed before fulfilment. Delivery times are estimates and may vary by location, weather, public holidays or events outside our control. You are responsible for providing accurate contact and delivery information.</p>
        <h2>Returns and refunds</h2>
        <p>Unopened and unused products may be returned within 7 days of delivery. Opened cosmetics and skincare products cannot generally be returned for hygiene reasons unless they are faulty or damaged. Items damaged in transit should be reported promptly with photographs. Approved refunds are made through the original or an agreed payment method after assessment.</p>
        <h2>Consumer protection</h2>
        <p>Nothing in these terms limits rights that cannot lawfully be excluded under Kenya&apos;s Consumer Protection Act, 2012 or other applicable law. We aim to provide genuine products and accurate information, and will work with you to resolve complaints fairly.</p>
        <h2>Website use and intellectual property</h2>
        <p>Use the website lawfully and do not interfere with its operation, attempt unauthorised access or misuse another person&apos;s information. Our brand, text, images and other content belong to us or our licensors and may not be reused without permission.</p>
        <h2>Liability and governing law</h2>
        <p>To the extent permitted by law, we are not responsible for indirect loss caused by events beyond our reasonable control. These terms are governed by the laws of Kenya, and disputes are subject to the courts of Kenya.</p>
        <h2>Contact</h2>
        <p>Questions or complaints can be sent to <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or WhatsApp <a href={`https://wa.me/${BUSINESS.whatsappNumber}`}>{BUSINESS.phone}</a>. Our premises are at {BUSINESS.address}.</p>
        <p>These terms are general business information prepared with reference to Kenyan consumer and data-protection requirements, not legal advice.</p>
      </article>
    </div>
  );
}