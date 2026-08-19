import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/shop/ProductGrid";

export default function FeaturedProducts() {
  const products = [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 8);

  return (
    <section className="section-pad bg-brand-light/40">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Curated For You" title="Featured Products" />
          <Link href="/shop?sort=rating" className="text-sm font-semibold text-brand-blue hover:underline">
            View All →
          </Link>
        </div>
        <div className="mt-10">
          <ProductGrid products={products} horizontal />
        </div>
      </div>
    </section>
  );
}
