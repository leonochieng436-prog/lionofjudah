const ITEMS = [
  {
    title: "Authentic Products",
    subtitle: "100% Genuine & Trusted",
    icon: (
      <path d="M12 3l7 3v6c0 5-3.4 8.4-7 9-3.6-.6-7-4-7-9V6z" />
    ),
  },
  {
    title: "Secure Shopping",
    subtitle: "Safe & Reliable",
    icon: <path d="M6 10V8a6 6 0 1112 0v2M5 10h14v10H5z" />,
  },
  {
    title: "Countrywide Delivery",
    subtitle: "Fast & Reliable",
    icon: <path d="M3 16V6h11v10M14 9h4l3 3v4h-7M6.5 19a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />,
  },
  {
    title: "Easy Returns",
    subtitle: "Hassle-Free",
    icon: <path d="M4 4v6h6M20 20v-6h-6M4.5 15a8 8 0 0014.7 3M19.5 9A8 8 0 004.8 6" />,
  },
  {
    title: "WhatsApp Support",
    subtitle: "We're Here to Help",
    icon: <path d="M4 20l1.3-3.9A8 8 0 1112 20a8 8 0 01-4-.9z" />,
  },
];

export default function TrustBar() {
  return (
    <section className="mx-4 my-6 bg-brand-blue sm:mx-8 lg:mx-12">
      <div className="container-edge grid grid-cols-2 px-3 py-3 sm:grid-cols-3 sm:px-5 lg:grid-cols-5 lg:px-8">
        {ITEMS.map((item, index) => (
          <div
            key={item.title}
            className={`flex items-center gap-3 border-r border-white/30 px-3 py-4 sm:px-4 lg:px-5 ${
              index % 2 === 1 ? "max-sm:border-r-0" : ""
            } ${index % 3 === 2 ? "sm:max-lg:border-r-0" : ""} ${
              index === ITEMS.length - 1 ? "lg:border-r-0" : ""
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0 text-white" fill="none" stroke="currentColor" strokeWidth="1.4">
              {item.icon}
            </svg>
            <div>
              <p className="text-xs font-semibold text-white">{item.title}</p>
              <p className="text-[11px] text-white/75">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
