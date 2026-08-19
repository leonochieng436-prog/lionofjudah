"use client";

import { Category } from "@/lib/types";
import { CATEGORY_LABELS, CATEGORY_LIST, cx } from "@/lib/utils";

export interface FilterState {
  category: Category | "all";
  brands: string[];
  priceRange: string;
  minRating: number;
  inStockOnly: boolean;
}

export const PRICE_RANGES: { value: string; label: string; min: number; max: number }[] = [
  { value: "all", label: "Any price", min: 0, max: Infinity },
  { value: "under-1500", label: "Under KSh 1,500", min: 0, max: 1500 },
  { value: "1500-2500", label: "KSh 1,500 – 2,500", min: 1500, max: 2500 },
  { value: "2500-4000", label: "KSh 2,500 – 4,000", min: 2500, max: 4000 },
  { value: "above-4000", label: "Above KSh 4,000", min: 4000, max: Infinity },
];

interface FiltersProps {
  filters: FilterState;
  onChange: (next: Partial<FilterState>) => void;
  onReset: () => void;
  brandOptions: string[];
  className?: string;
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-line/15 py-5 first:pt-0">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink">{title}</h3>
      {children}
    </div>
  );
}

export default function Filters({ filters, onChange, onReset, brandOptions, className }: FiltersProps) {
  return (
    <div className={cx("flex flex-col", className)}>
      <div className="mb-2 flex items-center justify-between">
        <h2 className="font-display text-lg text-ink">Filter</h2>
        <button type="button" onClick={onReset} className="text-xs font-medium text-brand-blue hover:underline">
          Clear all
        </button>
      </div>

      <FilterSection title="Category">
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm text-ink/80">
            <input
              type="radio"
              name="category"
              checked={filters.category === "all"}
              onChange={() => onChange({ category: "all" })}
              className="accent-brand-blue"
            />
            All Categories
          </label>
          {CATEGORY_LIST.map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-sm text-ink/80">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat}
                onChange={() => onChange({ category: cat })}
                className="accent-brand-blue"
              />
              {CATEGORY_LABELS[cat]}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Brand">
        <div className="flex max-h-40 flex-col gap-2 overflow-y-auto pr-1">
          {brandOptions.map((brand) => (
            <label key={brand} className="flex items-center gap-2 text-sm text-ink/80">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() =>
                  onChange({
                    brands: filters.brands.includes(brand)
                      ? filters.brands.filter((b) => b !== brand)
                      : [...filters.brands, brand],
                  })
                }
                className="accent-brand-blue"
              />
              {brand}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Price">
        <div className="flex flex-col gap-2">
          {PRICE_RANGES.map((range) => (
            <label key={range.value} className="flex items-center gap-2 text-sm text-ink/80">
              <input
                type="radio"
                name="price"
                checked={filters.priceRange === range.value}
                onChange={() => onChange({ priceRange: range.value })}
                className="accent-brand-blue"
              />
              {range.label}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Rating">
        <div className="flex flex-col gap-2">
          {[0, 4, 4.5].map((r) => (
            <label key={r} className="flex items-center gap-2 text-sm text-ink/80">
              <input
                type="radio"
                name="rating"
                checked={filters.minRating === r}
                onChange={() => onChange({ minRating: r })}
                className="accent-brand-blue"
              />
              {r === 0 ? "Any rating" : `${r}+ stars`}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Availability">
        <label className="flex items-center gap-2 text-sm text-ink/80">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={() => onChange({ inStockOnly: !filters.inStockOnly })}
            className="accent-brand-blue"
          />
          In stock only
        </label>
      </FilterSection>
    </div>
  );
}
