import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const TILES: [string, string][] = [
  ["#050505", "#1683FF"],
  ["#071A2F", "#DCEEFF"],
  ["#1683FF", "#071A2F"],
  ["#050505", "#A7B0BA"],
];

export default function SocialMedia() {
  return (
    <section className="section-pad">
      <div className="container-edge">
        <SectionHeading eyebrow="@lionofjudahbeauty" title="Follow the Lion" align="center" />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {TILES.map((tint, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <PlaceholderImage
                tint={tint}
                label="Lion of Judah lifestyle"
                className="h-full w-full transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
