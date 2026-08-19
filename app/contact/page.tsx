import type { Metadata } from "next";
import { buildGeneralInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Lion of Judah Beauty & Cosmetics team.",
};

export default function ContactPage() {
  const whatsappUrl = buildWhatsAppUrl(buildGeneralInquiryMessage());

  return (
    <div className="container-edge section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-3">Get In Touch</p>
        <h1 className="font-display text-4xl text-ink">We're Here to Help</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Questions about a product, an order, or delivery? Reach us directly on WhatsApp for the fastest
          response, or use the details below.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="border border-line/15 p-6 text-center">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">Phone / WhatsApp</h3>
          <p className="mt-2 font-display text-lg text-ink">+254 700 000 000</p>
        </div>
        <div className="border border-line/15 p-6 text-center">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">Email</h3>
          <p className="mt-2 font-display text-lg text-ink">hello@lionofjudahbeauty.co.ke</p>
        </div>
        <div className="border border-line/15 p-6 text-center">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">Hours</h3>
          <p className="mt-2 font-display text-lg text-ink">Mon–Sat, 9am–6pm EAT</p>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-md text-center">
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary w-full">
          <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor">
            <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.65 4.56 1.78 6.44L4 29l7.75-1.72A11.9 11.9 0 0016.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3z" />
          </svg>
          MESSAGE US ON WHATSAPP
        </a>
        <p className="mt-4 text-xs text-muted">Nairobi, Kenya</p>
      </div>
    </div>
  );
}
