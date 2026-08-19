"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/lib/products";
import { Category } from "@/lib/types";
import { CATEGORY_LABELS, CATEGORY_LIST } from "@/lib/utils";
import Filters, { FilterState, PRICE_RANGES } from "./Filters";
import SortDropdown, { SortValue } from "./SortDropdown";
import ProductGrid from "./ProductGrid";

const DEFAULT_FILTERS: FilterState = {
  category: "all",
  brands: [],
  priceRange: "all",
  minRating: 0,
  inStockOnly: false,
};

function isValidCategory(value: string | null): value is Category {
  return !!value && (CATEGORY_LIST as string[]).includes(value);
}

export default function ShopClient() {
  const searchParams = useSearchParams();
  const initialCategoryParam = searchParams.get("category");
  const initialBrandParam = searchParams.get("brand");
  const initialSortParam = searchParams.get("sort") as SortValue | null;
  const dealsOnly = initialCategoryParam === "deals";

  const [filters, setFilters] = useState<FilterState>(() => ({
    ...DEFAULT_FILTERS,
    category: isValidCategory(initialCategoryParam) ? initialCategoryParam : "all",
    brands: initialBrandParam ? [initialBrandParam] : [],
  }));
  const [sort, setSort] = useState<SortValue>(initialSortParam || "featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const brandOptions = useMemo(
    () => Array.from(new Set(PRODUCTS.map((p) => p.brand))).sort(),
    []
  );

  function handleFilterChange(next: Partial<FilterState>) {
    setFilters((prev) => ({ ...prev, ...next }));
  }

  function handleReset() {
    setFilters(DEFAULT_FILTERS);
  }

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.value === filters.priceRange) || PRICE_RANGES[0];

    let list = PRODUCTS.filter((p) => {
      if (dealsOnly && !p.badges.includes("SALE")) return false;
      if (filters.category !== "all" && p.category !== filters.category) return false;
      if (filters.brands.length > 0 && !filters.brands.includes(p.brand)) return false;
      if (p.price < range.min || p.price > range.max) return false;
      if (filters.minRating > 0 && p.rating < filters.minRating) return false;
      if (filters.inStockOnly && p.stock <= 0) return false;
      return true;
    });

    switch (sort) {
      case "newest":
        list = [...list].sort((a, b) => (a.id < b.id ? 1 : -1));
        break;
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        list = [...list].sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
      case "discount": {
        const disc = (p: (typeof PRODUCTS)[number]) =>
          p.oldPrice ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
        list = [...list].sort((a, b) => disc(b) - disc(a));
        break;
      }
      default:
        break;
    }

    return list;
  }, [filters, sort, dealsOnly]);

  const heading = dealsOnly
    ? "Deals & Offers"
    : filters.category !== "all"
    ? CATEGORY_LABELS[filters.category]
    : "Shop All";

  return (
    <div className="container-edge section-pad !pt-8">
      <div className="mb-8">
        <p className="eyebrow mb-2">Shop</p>
        <h1 className="font-display text-3xl text-ink sm:text-4xl">{heading}</h1>
        <p className="mt-2 text-sm text-muted">{filtered.length} products</p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <Filters
          filters={filters}
          onChange={handleFilterChange}
          onReset={handleReset}
          brandOptions={brandOptions}
          className="hidden w-64 shrink-0 lg:flex"
        />

        <div className="flex-1">
          <div className="mb-5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 border border-line/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide lg:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 6h16M7 12h10M10 18h4" />
              </svg>
              Filter
            </button>
            <div className="ml-auto">
              <SortDropdown value={sort} onChange={setSort} />
            </div>
          </div>

          <ProductGrid products={filtered} />
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[70] flex lg:hidden">
          <div className="w-[85%] max-w-sm overflow-y-auto bg-white px-5 py-5 animate-slideUp">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-lg">Filter</span>
              <button aria-label="Close filters" onClick={() => setMobileFiltersOpen(false)} className="h-9 w-9">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <Filters
              filters={filters}
              onChange={handleFilterChange}
              onReset={handleReset}
              brandOptions={brandOptions}
            />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="btn-dark mt-6 w-full"
            >
              SHOW {filtered.length} RESULTS
            </button>
          </div>
          <button
            aria-label="Close filters overlay"
            className="flex-1 bg-black/50"
            onClick={() => setMobileFiltersOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
