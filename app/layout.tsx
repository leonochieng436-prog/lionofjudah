import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/context/Providers";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Lion of Judah Beauty & Cosmetics";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lionofjudahbeauty.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Premium Beauty Shop Kenya`,
    template: `%s | ${siteName}`,
  },
  description:
    "Premium skincare, bodycare, haircare, wellness, makeup and fragrance — 100% authentic, delivered countrywide across Kenya. Order directly on WhatsApp.",
  keywords: [
    "Lion of Judah Beauty",
    "Beauty Shop Kenya",
    "Skincare Kenya",
    "Cosmetics Kenya",
    "Beauty Products Kenya",
    "Skincare Products Nairobi",
    "Authentic Beauty Products Kenya",
    "Online Beauty Shop Kenya",
  ],
  openGraph: {
    title: `${siteName} | Premium Beauty Shop Kenya`,
    description:
      "Premium skincare, bodycare, haircare, wellness, makeup and fragrance — 100% authentic, delivered countrywide across Kenya.",
    siteName,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable} data-scroll-behavior="smooth">
      <body className="pb-14 sm:pb-0">
        <Providers>
          <AnnouncementBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <MobileBottomNav />
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
