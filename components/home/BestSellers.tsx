import Link from "next/link";
import { getBestSellers } from "@/lib/products";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/shop/ProductGrid";

export default function BestSellers() {
  const products = getBestSellers(8);
  return (
    <section className="section-pad bg-brand-light/40">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Customer Favourites" title="Best Sellers" />
          <Link href="/shop?sort=popular" className="text-sm font-semibold text-brand-blue hover:underline">
            View All →
          </Link>
        </div>
        <div className="mt-10">
          <ProductGrid products={products} horizontal />
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/shop" className="btn-outline-dark">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
