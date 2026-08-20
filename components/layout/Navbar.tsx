"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const PRODUCT_GROUPS = [
  {
    label: "Skincare",
    href: "/shop?category=skincare",
    links: ["Cleansers", "Toners", "Serums", "Moisturizers", "Sunscreen", "Face Masks", "Eye Care"],
  },
  {
    label: "Bodycare",
    href: "/shop?category=bodycare",
    links: ["Body Lotions", "Body Oils", "Body Scrubs", "Body Butters", "Deodorants"],
  },
  {
    label: "Shower & Bath",
    href: "/shop?category=bodycare",
    links: ["Shower Gels", "Bath Soaps", "Bath Scrubs", "Body Wash"],
  },
  {
    label: "Haircare",
    href: "/shop?category=haircare",
    links: ["Shampoos", "Conditioners", "Hair Oils", "Hair Treatments"],
  },
  {
    label: "Wellness",
    href: "/shop?category=wellness",
    links: ["Vitamins", "Gummies", "Collagen", "Beauty Supplements"],
  },
  {
    label: "Beauty Essentials",
    href: "/shop?category=makeup",
    links: ["Lip Care", "Makeup", "Beauty Tools", "Accessories"],
  },
];

const subcategoryHref = (href: string, label: string) => `${href}&q=${encodeURIComponent(label)}`;

const FEATURED_CATEGORY_GROUPS = [
  PRODUCT_GROUPS[0],
  PRODUCT_GROUPS[1],
  PRODUCT_GROUPS[3],
  { label: "Makeup", href: "/shop?category=makeup", links: ["Lip Care", "Makeup", "Beauty Tools", "Accessories"] },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { count: cartCount } = useCart();
  const { count: wishlistCount } = useWishlist();
  const router = useRouter();

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery("");
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white text-black">
      <div className="container-edge flex h-16 items-center justify-between sm:h-20">
        <button
          className="flex h-9 w-9 items-center justify-center lg:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>

        <Link href="/" className="flex flex-col items-center leading-none lg:items-start">
          <span className="font-display text-lg font-bold tracking-wide sm:text-xl">
            LION <span className="text-brand-blue">OF JUDAH</span>
          </span>
          <span className="hidden text-[9px] font-medium tracking-[0.35em] text-gray/50 lg:block">
            BEAUTY &amp; COSMETICS
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="text-[13px] font-semibold tracking-wide text-black/85 transition-colors hover:text-brand-blue">
            HOME
          </Link>
          <Link href="/shop" className="text-[13px] font-semibold tracking-wide text-black/85 transition-colors hover:text-brand-blue">
            SHOP
          </Link>
          {FEATURED_CATEGORY_GROUPS.map((group) => (
            <div key={group.label} className="group relative py-6">
              <Link
                href={group.href}
                className="flex items-center gap-1.5 text-[13px] font-semibold tracking-wide text-black/85 transition-colors hover:text-brand-blue"
              >
                {group.label.toUpperCase()}
                <svg viewBox="0 0 12 12" className="h-3 w-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-2 border border-line/15 bg-white p-5 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <Link href={group.href} className="font-display text-base font-semibold text-ink hover:text-brand-blue">
                  Shop All {group.label}
                </Link>
                <ul className="mt-4 space-y-2.5 border-t border-line/15 pt-4">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link href={subcategoryHref(group.href, link)} className="text-xs text-ink/65 transition-colors hover:text-brand-blue">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <Link href="/shop?category=deals" className="text-[13px] font-semibold tracking-wide text-black/85 transition-colors hover:text-brand-blue">
            DEALS
          </Link>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((s) => !s)}
            className="flex h-9 w-9 items-center justify-center hover:text-brand-blue"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </button>
          <Link
            href="/account"
            aria-label="Account"
            className="hidden h-9 w-9 items-center justify-center hover:text-brand-blue sm:flex"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
            </svg>
          </Link>
          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="relative flex h-9 w-9 items-center justify-center hover:text-brand-blue"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 20.5l-1.4-1.3C5.4 14.7 2 11.6 2 7.9 2 4.9 4.3 2.5 7.2 2.5c1.7 0 3.4.8 4.8 2.4 1.4-1.6 3.1-2.4 4.8-2.4 2.9 0 5.2 2.4 5.2 5.4 0 3.7-3.4 6.8-8.6 11.3z" />
            </svg>
            {wishlistCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-brand-blue px-1 text-[9px] font-bold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative flex h-9 w-9 items-center justify-center hover:text-brand-blue"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6h15l-1.5 9h-12z" />
              <path d="M6 6L5 3H2" />
              <circle cx="9.5" cy="19.5" r="1.2" fill="currentColor" stroke="none" />
              <circle cx="17.5" cy="19.5" r="1.2" fill="currentColor" stroke="none" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-brand-blue px-1 text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-white/10 bg-ink">
          <form onSubmit={submitSearch} className="container-edge flex items-center gap-3 py-3">
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for serums, shampoo, gifts..."
              className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
            />
            <button type="submit" className="text-xs font-semibold text-brand-blue">
              SEARCH
            </button>
          </form>
        </div>
      )}

      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex lg:hidden">
          <div className="w-[85%] max-w-sm overflow-y-auto bg-ink px-6 py-5 text-white animate-slideUp">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-lg font-bold">
                LION <span className="text-brand-blue">OF JUDAH</span>
              </span>
              <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="h-9 w-9">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-5">
              <Link href="/" onClick={() => setMenuOpen(false)} className="text-sm font-semibold tracking-wide">
                HOME
              </Link>
              <Link href="/shop" onClick={() => setMenuOpen(false)} className="text-sm font-semibold tracking-wide text-brand-blue">
                SHOP
              </Link>
              <div className="my-2 h-px bg-white/10" />
              <Link href="/account" onClick={() => setMenuOpen(false)} className="text-sm text-white/75">
                Account
              </Link>
              <Link href="/track-order" onClick={() => setMenuOpen(false)} className="text-sm text-white/75">
                Track Order
              </Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="text-sm text-white/75">
                About Us
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-sm text-white/75">
                Contact
              </Link>
              <Link href="/faq" onClick={() => setMenuOpen(false)} className="text-sm text-white/75">
                FAQ
              </Link>
            </nav>
          </div>
          <button
            aria-label="Close menu overlay"
            className="flex-1 bg-black/60"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
}
