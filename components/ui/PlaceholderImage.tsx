import Image from "next/image";
import { cx } from "@/lib/utils";

interface PlaceholderImageProps {
  image?: string;
  tint?: [string, string];
  label: string;
  brand?: string;
  className?: string;
  rounded?: boolean;
  angle?: number;
}

/**
 * Editorial placeholder artwork standing in for real product photography.
 * Swap this component out for <Image> once real photography is available —
 * see README for guidance.
 */
export default function PlaceholderImage({
  image,
  tint,
  label,
  brand,
  className,
  rounded = false,
  angle = 155,
}: PlaceholderImageProps) {
  const initials = label
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      role="img"
      aria-label={`${brand ? brand + " " : ""}${label}`}
      className={cx(
        "relative flex w-full items-center justify-center overflow-hidden",
        rounded ? "rounded-full" : "",
        className
      )}
      style={{
        background: tint
          ? `linear-gradient(${angle}deg, ${tint[0]} 0%, ${tint[1]} 100%)`
          : "#071A2F",
      }}
    >
      {image ? (
            <img
              src={image}
              alt={`${brand ? brand + " " : ""}${label}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
      ) : (
        <>
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 0%, transparent 45%), radial-gradient(circle at 85% 75%, white 0%, transparent 40%)",
            }}
          />
          <svg
            className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 opacity-[0.14] sm:h-36 sm:w-36"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 8c-9 0-14 6-16 12-5-2-12-1-15 4-3 5-1 11 3 14-4 3-6 9-3 14 3 5 10 6 15 4 2 6 7 12 16 12s14-6 16-12c5 2 12 1 15-4 3-5 1-11-3-14 4-3 6-9 3-14-3-5-10-6-15-4-2-6-7-12-16-12z"
              stroke="white"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="50" r="10" stroke="white" strokeWidth="1.5" />
          </svg>
          <span className="relative font-display text-2xl font-semibold tracking-wide text-white/90 sm:text-3xl">
            {initials || "LOJ"}
          </span>
        </>
      )}
    </div>
  );
}
