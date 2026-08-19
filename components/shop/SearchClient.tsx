"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/lib/products";
import ProductGrid from "./ProductGrid";

const RECENT_KEY = "loj_recent_searches";
const POPULAR = ["vitamin c serum", "shea butter", "rice water", "gua sha", "collagen gummies", "amber oud"];

function getRecent(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(RECENT_KEY) || "[]");
  } catch {
    return [];
  }
}

function pushRecent(term: string) {
  if (typeof window === "undefined" || !term.trim()) return;
  const next = [term, ...getRecent().filter((t) => t.toLowerCase() !== term.toLowerCase())].slice(0, 6);
  window.localStorage.setItem(RECENT_KEY, JSON.stringify(next));
}

export default function SearchClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    setRecent(getRecent());
  }, []);

  useEffect(() => {
    if (initialQuery.trim()) pushRecent(initialQuery);
    setRecent(getRecent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q.replace(/\s/g, "-")) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query]);

  function runSearch(term: string) {
    setQuery(term);
    router.replace(`/search?q=${encodeURIComponent(term)}`);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) runSearch(query.trim());
  }

  return (
    <div className="container-edge section-pad !pt-8">
      <p className="eyebrow mb-2">Search</p>
      <h1 className="mb-6 font-display text-3xl text-ink sm:text-4xl">Find Your Products</h1>

      <form onSubmit={handleSubmit} className="flex max-w-xl items-center gap-3 border border-line/30 px-4 py-3.5">
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-muted" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for serums, shampoo, gifts..."
          className="w-full text-sm text-ink focus:outline-none"
          autoFocus
        />
        <button type="submit" className="shrink-0 text-xs font-semibold text-brand-blue">
          SEARCH
        </button>
      </form>

      {!query.trim() && (
        <div className="mt-10 flex flex-col gap-8">
          {recent.length > 0 && (
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Recent Searches</h2>
              <div className="flex flex-wrap gap-2">
                {recent.map((term) => (
                  <button
                    key={term}
                    onClick={() => runSearch(term)}
                    className="border border-line/25 px-3.5 py-1.5 text-xs font-medium text-ink/75 hover:border-brand-blue hover:text-brand-blue"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Popular Searches</h2>
            <div className="flex flex-wrap gap-2">
              {POPULAR.map((term) => (
                <button
                  key={term}
                  onClick={() => runSearch(term)}
                  className="border border-line/25 px-3.5 py-1.5 text-xs font-medium text-ink/75 hover:border-brand-blue hover:text-brand-blue"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {query.trim() && (
        <div className="mt-10">
          <p className="mb-6 text-sm text-muted">
            {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
          </p>
          <ProductGrid products={results} />
        </div>
      )}
    </div>
  );
}
