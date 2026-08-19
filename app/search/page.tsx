import { Suspense } from "react";
import SearchClient from "@/components/shop/SearchClient";

export const metadata = { title: "Search" };

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container-edge section-pad">Loading…</div>}>
      <SearchClient />
    </Suspense>
  );
}
