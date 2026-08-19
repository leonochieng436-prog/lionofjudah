"use client";

import { useEffect } from "react";
import { addRecentlyViewed } from "@/lib/orders";

export default function ViewTracker({ productId }: { productId: string }) {
  useEffect(() => {
    addRecentlyViewed(productId);
  }, [productId]);

  return null;
}
