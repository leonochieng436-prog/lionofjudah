import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 30%, #1683FF 0%, transparent 45%)",
        }}
      />
      <div className="container-edge relative flex flex-col items-center gap-6 py-16 text-center sm:py-20">
        <p className="eyebrow">For A Limited Time</p>
        <h2 className="text-balance font-display text-3xl font-semibold text-white sm:text-5xl">
          UP TO <span className="text-brand-blue">25% OFF</span> BEAUTY ESSENTIALS
        </h2>
        <p className="max-w-md text-sm text-white/60">
          Selected best sellers across skincare, haircare and fragrance — while stocks last.
        </p>
        <Link href="/shop?category=deals" className="btn-primary mt-2">
          SHOP THE SALE
        </Link>
      </div>
    </section>
  );
}
