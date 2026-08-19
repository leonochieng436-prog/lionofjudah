"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CartItem, Product } from "@/lib/types";
import { getProductById } from "@/lib/products";
import { computeDelivery } from "@/lib/utils";
import { useToast } from "./ToastContext";

const STORAGE_KEY = "loj_cart";

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable, fail silently */
    }
  }, [items, hydrated]);

  const addItem = useCallback(
    (productId: string, quantity = 1) => {
      const product = getProductById(productId);
      setItems((prev) => {
        const existing = prev.find((i) => i.productId === productId);
        if (existing) {
          return prev.map((i) =>
            i.productId === productId ? { ...i, quantity: i.quantity + quantity } : i
          );
        }
        return [...prev, { productId, quantity }];
      });
      showToast(`${product ? product.name : "Item"} added to cart`);
    },
    [showToast]
  );

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) return prev.filter((i) => i.productId !== productId);
      return prev.map((i) => (i.productId === productId ? { ...i, quantity } : i));
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const isInCart = useCallback(
    (productId: string) => items.some((i) => i.productId === productId),
    [items]
  );

  const { subtotal, count } = useMemo(() => {
    let subtotal = 0;
    let count = 0;
    for (const item of items) {
      const product = getProductById(item.productId);
      if (!product) continue;
      subtotal += product.price * item.quantity;
      count += item.quantity;
    }
    return { subtotal, count };
  }, [items]);

  const deliveryFee = computeDelivery(subtotal);
  const total = subtotal + deliveryFee;

  const value: CartContextValue = {
    items,
    count,
    subtotal,
    deliveryFee,
    total,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    isInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function getProductForCartItem(item: CartItem): Product | undefined {
  return getProductById(item.productId);
}
