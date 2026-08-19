import Link from "next/link";
import { CATEGORY_LABELS, CATEGORY_LIST } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";

const CATEGORY_IMAGES: Record<string, string> = {
  skincare: "/images/skincare1.jpg",
  bodycare: "/images/bodycare1.jpg",
  haircare: "/images/haircare1.jpg",
  wellness: "/images/wellness1.jpg",
  makeup: "/images/makeup1.jpg",
  fragrance: "/images/hero2.jpeg",
  beautytools: "/images/hero1.jpeg",
};

export default function ShopByCategory() {
  return (
    <section className="section-pad">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-2 sm:gap-4">
          <SectionHeading eyebrow="Discover" title="Shop by Category" />
          <Link href="/shop" className="text-sm font-semibold text-brand-blue hover:underline">
            View All Categories →
          </Link>
        </div>

        <div className="scrollbar-none mt-5 flex snap-x gap-1 overflow-x-auto pb-4 sm:gap-5">
          {CATEGORY_LIST.map((cat) => (
            <Link
              key={cat}
              href={`/shop?category=${cat}`}
              className="group relative flex h-48 w-36 shrink-0 snap-start items-end overflow-hidden border border-line/15 bg-cover bg-center sm:h-56 sm:w-50 lg:h-64 lg:w-0 lg:flex-1"
              style={{ backgroundImage: `url("${CATEGORY_IMAGES[cat]}")` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-colors group-hover:from-black/80" />
              <div className="relative z-10 flex w-full items-center justify-between p-4">
                <span className="font-display text-base font-semibold text-white sm:text-lg">
                  {CATEGORY_LABELS[cat]}
                </span>
                
              </div>
            </Link>
          ))}
          <Link
            href="/shop?category=deals"
            className="group relative flex h-48 w-36 shrink-0 snap-start items-end overflow-hidden border border-line/15 bg-cover bg-center sm:h-56 sm:w-40 lg:h-64 lg:w-0 lg:flex-1"
            style={{ backgroundImage: 'url("/images/hero2.jpeg")' }}
          >
            <div className="relative z-10 flex w-full items-center justify-between p-4">
              <span className="font-display text-base font-semibold text-white sm:text-lg">Deals &amp; Offers</span>
              
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
