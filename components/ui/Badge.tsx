import { Badge as BadgeType } from "@/lib/types";
import { cx } from "@/lib/utils";

const STYLES: Record<BadgeType, string> = {
  SALE: "bg-brand-blue text-white",
  NEW: "bg-ink text-white",
  "BEST SELLER": "bg-brand-dark text-white",
  "LOW STOCK": "bg-white text-ink border border-ink/70",
};

export default function Badge({ type }: { type: BadgeType }) {
  return (
    <span
      className={cx(
        "inline-flex items-center px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase",
        STYLES[type]
      )}
    >
      {type}
    </span>
  );
}
