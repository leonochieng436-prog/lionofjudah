import { Category } from "./types";

export function formatKES(amount: number): string {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}

export function discountPercent(price: number, oldPrice?: number): number | null {
  if (!oldPrice || oldPrice <= price) return null;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

export const CATEGORY_LABELS: Record<Category, string> = {
  skincare: "Skincare",
  bodycare: "Bodycare",
  haircare: "Haircare",
  wellness: "Wellness",
  makeup: "Makeup",
  fragrance: "Fragrance",
  "beauty-tools": "Beauty Tools",
};

export const CATEGORY_LIST: Category[] = [
  "skincare",
  "bodycare",
  "haircare",
  "wellness",
  "makeup",
  "fragrance",
  "beauty-tools",
];

export function generateOrderId(): string {
  const year = new Date().getFullYear();
  const rand = Math.floor(100000 + Math.random() * 900000);
  return `LOJ-${year}-${rand}`;
}

export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const FREE_DELIVERY_THRESHOLD = 5000;
const STANDARD_DELIVERY_FEE = 300;

export function computeDelivery(subtotal: number): number {
  if (subtotal === 0) return 0;
  return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : STANDARD_DELIVERY_FEE;
}

export { FREE_DELIVERY_THRESHOLD };
