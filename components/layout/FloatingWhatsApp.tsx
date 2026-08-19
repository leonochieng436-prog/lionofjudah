"use client";

import { buildGeneralInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const href = buildWhatsAppUrl(buildGeneralInquiryMessage());

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us"
      className="group fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-glow transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
        <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.65 4.56 1.78 6.44L4 29l7.75-1.72A11.9 11.9 0 0016.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3zm6.98 16.86c-.3.85-1.5 1.56-2.46 1.76-.65.13-1.5.24-4.36-.94-3.66-1.5-6.02-5.2-6.2-5.44-.18-.24-1.48-1.97-1.48-3.76 0-1.79.94-2.66 1.27-3.03.33-.36.72-.45.97-.45.24 0 .48 0 .69.01.22.01.52-.08.81.62.3.72 1.03 2.5 1.12 2.68.09.18.15.4.03.64-.12.24-.18.4-.36.62-.18.21-.38.47-.55.63-.18.18-.37.37-.16.73.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.85-.21 1.7z" />
      </svg>
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded bg-ink px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 hidden sm:block">
        Chat with us
      </span>
    </a>
  );
}
