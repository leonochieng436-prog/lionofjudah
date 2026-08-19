import { cx } from "@/lib/utils";

interface RatingProps {
  value: number;
  count?: number;
  size?: "sm" | "md";
  className?: string;
}

export default function Rating({ value, count, size = "sm", className }: RatingProps) {
  const stars = [0, 1, 2, 3, 4];
  return (
    <div className={cx("flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5">
        {stars.map((i) => {
          const filled = value >= i + 1;
          const half = !filled && value > i && value < i + 1;
          return (
            <svg
              key={i}
              viewBox="0 0 20 20"
              className={cx(size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4", "text-brand-blue")}
              fill={filled || half ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
            </svg>
          );
        })}
      </div>
      {typeof count === "number" && (
        <span className="text-xs text-muted">
          {value.toFixed(1)} ({count})
        </span>
      )}
    </div>
  );
}
