import Link from "next/link";
import { getNewArrivals } from "@/lib/products";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/shop/ProductGrid";

export default function NewArrivals() {
  const products = getNewArrivals(8);

  return (
    <section className="section-pad">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Just Landed" title="New Arrivals" />
          <Link href="/shop?sort=newest" className="text-sm font-semibold text-brand-blue hover:underline">
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
