"use client";

import { useState } from "react";
import { cx } from "@/lib/utils";

const FAQS: { q: string; a: string }[] = [
  {
    q: "How do I place an order?",
    a: "Browse the shop, add products to your cart, and head to checkout. Fill in your details and tap 'Order via WhatsApp' — this opens WhatsApp with your full order ready to send. Just hit send and our team confirms it from there.",
  },
  {
    q: "Do I need to pay online?",
    a: "No online payment is required to place an order. Once you send your order on WhatsApp, our team confirms your items, total and delivery details, and arranges payment via M-Pesa, card, or cash on delivery where applicable.",
  },
  {
    q: "How much is delivery?",
    a: "Delivery is free on orders above KSh 5,000. Orders below that qualify for a flat KSh 300 delivery fee. We deliver countrywide across Kenya.",
  },
  {
    q: "How long does delivery take?",
    a: "Nairobi orders typically arrive within 1–2 business days. Countrywide delivery takes 2–5 business days depending on your location.",
  },
  {
    q: "Are your products authentic?",
    a: "Yes — every product we stock is 100% genuine and sourced with care. We stand behind everything in the shop.",
  },
  {
    q: "Can I return or exchange a product?",
    a: "Yes, see our Shipping & Returns page for the full policy. Message us on WhatsApp with your Order ID to start a return.",
  },
  {
    q: "How do I track my order?",
    a: "Use the Track Order page with your Order ID and the phone number you used at checkout to see the current status.",
  },
  {
    q: "Can I talk to someone before ordering?",
    a: "Of course — tap the WhatsApp button anywhere on the site, or visit our Contact page, and our team will help you find the right products.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="container-edge section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-3">Support</p>
        <h1 className="font-display text-4xl text-ink">Frequently Asked Questions</h1>
      </div>

      <div className="mx-auto mt-14 max-w-2xl divide-y divide-line/15 border-y border-line/15">
        {FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base text-ink sm:text-lg">{faq.q}</span>
                <span
                  className={cx(
                    "flex h-7 w-7 shrink-0 items-center justify-center border border-line/30 text-ink transition-transform",
                    isOpen && "rotate-45 border-brand-blue text-brand-blue"
                  )}
                >
                  +
                </span>
              </button>
              {isOpen && <p className="pb-5 text-sm leading-relaxed text-ink/70">{faq.a}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
