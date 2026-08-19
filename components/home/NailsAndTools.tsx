import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/shop/ProductGrid";

export default function NailsAndTools() {
  const products = PRODUCTS.filter((product) => product.category === "beauty-tools");

  return (
    <section className="section-pad bg-brand-light/40">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Complete Your Kit" title="Nails & Tools" />
          <Link href="/shop?category=beauty-tools" className="text-sm font-semibold text-brand-blue hover:underline">
            Shop Tools →
          </Link>
        </div>
        <div className="mt-10">
          <ProductGrid products={products} horizontal />
        </div>
      </div>
    </section>
  );
}
