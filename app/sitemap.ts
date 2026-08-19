import { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { CATEGORY_LIST } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lionofjudahbeauty.co.ke";

  const staticRoutes = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/faq",
    "/shipping-returns",
    "/track-order",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = CATEGORY_LIST.map((cat) => ({
    url: `${siteUrl}/shop?category=${cat}`,
    lastModified: new Date(),
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${siteUrl}/product/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
