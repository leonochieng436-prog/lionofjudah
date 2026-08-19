import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story behind Lion of Judah Beauty & Cosmetics — a premium Kenyan beauty destination.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-ink py-20 text-center sm:py-28">
        <div className="container-edge">
          <p className="eyebrow mb-4">Our Story</p>
          <h1 className="mx-auto max-w-2xl text-balance font-display text-4xl font-semibold text-white sm:text-5xl">
            A premium Kenyan beauty destination, built on trust
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-edge grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/3] overflow-hidden">
            <PlaceholderImage tint={["#071A2F", "#1683FF"]} label="Lion of Judah studio" />
          </div>
          <div>
            <p className="eyebrow mb-4">Who We Are</p>
            <h2 className="font-display text-3xl text-ink">Beauty that feels personal</h2>
            <p className="mt-5 text-sm leading-relaxed text-ink/70">
              Lion of Judah Beauty &amp; Cosmetics was built around a simple idea — that shopping for beauty
              essentials should feel as considered as the products themselves. We curate skincare, bodycare,
              haircare, wellness, makeup and fragrance from brands we trust, and we keep the entire experience
              close to the customer, right down to how you check out.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Instead of a complicated cart-and-payment maze, every order is confirmed by a real person on
              WhatsApp — so you always know exactly what you're getting, and when it's arriving.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-dark">
        <div className="container-edge grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {[
            { title: "100% Authentic", text: "Every product is sourced and stored with care, never compromised." },
            { title: "Countrywide Delivery", text: "From Nairobi to the coast to the highlands — we deliver everywhere." },
            { title: "A Real Team", text: "Every order is confirmed by a person on WhatsApp, not a bot." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad text-center">
        <div className="container-edge">
          <h2 className="font-display text-3xl text-ink">Ready to shop?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Explore the full range and place your order in minutes, straight through WhatsApp.
          </p>
          <Link href="/shop" className="btn-dark mt-8 inline-flex">
            SHOP NOW
          </Link>
        </div>
      </section>
    </div>
  );
}
