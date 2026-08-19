"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWishlist } from "@/context/WishlistContext";
import { cx } from "@/lib/utils";

const ITEMS = [
  {
    href: "/",
    label: "Home",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={active ? 2 : 1.5}>
        <path d="M4 11.5L12 4l8 7.5" />
        <path d="M6 10v9h12v-9" />
      </svg>
    ),
  },
  {
    href: "/shop",
    label: "Shop",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={active ? 2 : 1.5}>
        <path d="M6 6h15l-1.5 9h-12z" />
        <path d="M6 6L5 3H2" />
      </svg>
    ),
  },
  {
    href: "/search",
    label: "Search",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={active ? 2 : 1.5}>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
  },
  {
    href: "/wishlist",
    label: "Wishlist",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={active ? 2 : 1.5}>
        <path d="M12 20.5l-1.4-1.3C5.4 14.7 2 11.6 2 7.9 2 4.9 4.3 2.5 7.2 2.5c1.7 0 3.4.8 4.8 2.4 1.4-1.6 3.1-2.4 4.8-2.4 2.9 0 5.2 2.4 5.2 5.4 0 3.7-3.4 6.8-8.6 11.3z" />
      </svg>
    ),
  },
  {
    href: "/account",
    label: "Account",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={active ? 2 : 1.5}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
      </svg>
    ),
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { count } = useWishlist();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line/15 bg-white/95 backdrop-blur sm:hidden">
      {ITEMS.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cx(
              "relative flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] font-medium",
              active ? "text-brand-blue" : "text-ink/60"
            )}
          >
            {item.icon(active)}
            {item.label}
            {item.href === "/wishlist" && count > 0 && (
              <span className="absolute right-[22%] top-1 flex h-3.5 min-w-[14px] items-center justify-center rounded-full bg-brand-blue px-1 text-[8px] font-bold text-white">
                {count}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
