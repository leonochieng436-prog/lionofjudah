import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/shop/ProductGrid";

export default function Bodycare() {
  const products = PRODUCTS.filter((product) => product.category === "bodycare");

  return (
    <section className="section-pad">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Care From Head To Toe" title="Bodycare" />
          <Link href="/shop?category=bodycare" className="text-sm font-semibold text-brand-blue hover:underline">
            Shop Bodycare →
          </Link>
        </div>
        <div className="mt-10">
          <ProductGrid products={products} horizontal />
        </div>
      </div>
    </section>
  );
}
