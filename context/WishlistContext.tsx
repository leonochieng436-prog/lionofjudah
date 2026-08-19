"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useToast } from "./ToastContext";

const STORAGE_KEY = "loj_wishlist";

interface WishlistContextValue {
  ids: string[];
  count: number;
  toggle: (productId: string, productName?: string) => void;
  remove: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setIds(JSON.parse(raw));
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
      /* storage unavailable */
    }
  }, [ids, hydrated]);

  const toggle = useCallback(
    (productId: string, productName?: string) => {
      setIds((prev) => {
        const exists = prev.includes(productId);
        if (exists) {
          showToast(`${productName || "Item"} removed from wishlist`);
          return prev.filter((id) => id !== productId);
        }
        showToast(`${productName || "Item"} added to wishlist`);
        return [...prev, productId];
      });
    },
    [showToast]
  );

  const remove = useCallback((productId: string) => {
    setIds((prev) => prev.filter((id) => id !== productId));
  }, []);

  const isWishlisted = useCallback((productId: string) => ids.includes(productId), [ids]);

  return (
    <WishlistContext.Provider value={{ ids, count: ids.length, toggle, remove, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist(): WishlistContextValue {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
