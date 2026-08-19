"use client";

import { ToastProvider } from "./ToastContext";
import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishlistContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <CartProvider>
        <WishlistProvider>{children}</WishlistProvider>
      </CartProvider>
    </ToastProvider>
  );
}
