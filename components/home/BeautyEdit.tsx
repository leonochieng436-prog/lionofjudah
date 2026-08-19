import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const EDITS = [
  {
    title: "Skincare Routines",
    text: "Build a routine that works for you — from first cleanse to final serum.",
    href: "/shop?category=skincare",
    tint: ["#071A2F", "#1683FF"] as [string, string],
  },
  {
    title: "Bodycare Essentials",
    text: "Feel confident in your skin, from your morning shower to your night routine.",
    href: "/shop?category=bodycare",
    tint: ["#050505", "#DCEEFF"] as [string, string],
  },
  {
    title: "Wellness & Self-Care",
    text: "Beauty starts from within — teas, gummies and rituals for the everyday.",
    href: "/shop?category=wellness",
    tint: ["#071A2F", "#050505"] as [string, string],
  },
];

export default function BeautyEdit() {
  return (
    <section className="section-pad">
      <div className="container-edge">
        <SectionHeading eyebrow="Journal" title="The Beauty Edit" />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {EDITS.map((edit) => (
            <Link key={edit.title} href={edit.href} className="group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <PlaceholderImage
                  tint={edit.tint}
                  label={edit.title}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">{edit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{edit.text}</p>
              <span className="mt-3 text-sm font-semibold text-brand-blue">
                EXPLORE THE BEAUTY EDIT →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
