import SectionHeading from "@/components/ui/SectionHeading";

const ITEMS = [
  { title: "Authentic Products", text: "100% genuine beauty products, sourced and stored with care." },
  { title: "Secure Shopping", text: "A safe and reliable shopping experience from browse to delivery." },
  { title: "Countrywide Delivery", text: "We deliver across Kenya — from Nairobi to every county." },
  { title: "Easy Returns", text: "A simple, transparent returns process if something isn't right." },
  { title: "WhatsApp Support", text: "Get assistance directly from our team, before and after you order." },
];

export default function WhyShopWithUs() {
  return (
    <section className="section-pad bg-brand-dark">
      <div className="container-edge">
        <SectionHeading eyebrow="Why Shop With Us" title="Built on trust, made for you" align="center" light />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {ITEMS.map((item) => (
            <div key={item.title} className="border-t border-white/15 pt-5">
              <span className="block h-1.5 w-6 bg-brand-blue" aria-hidden />
              <h3 className="mt-4 font-display text-lg text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
