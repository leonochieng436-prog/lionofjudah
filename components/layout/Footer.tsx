import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { CATEGORY_LABELS, CATEGORY_LIST } from "@/lib/utils";
import { BUSINESS } from "@/lib/business";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "TikTok", href: "https://www.tiktok.com/@lionofjudahbeautyprod?is_from_webapp=1&sender_device=pc", icon: FaTiktok },
  { label: "Facebook", href: "https://web.facebook.com/profile.php?id=61587636684396", icon: FaFacebookF },
  { label: "WhatsApp", href: "https://wa.me/254793692936", icon: FaWhatsapp },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-edge grid grid-cols-2 gap-10 py-16 sm:py-20 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-1">
          <span className="font-display text-xl font-bold">
            LION <span className="text-brand-blue">OF JUDAH</span>
          </span>
          <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-white/60">
            Premium skincare, beauty, haircare and wellness essentials — ordered directly on WhatsApp,
            delivered countrywide.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center border border-white/20 text-[10px] font-semibold text-white/70 transition-colors hover:border-brand-blue hover:text-brand-blue"
                aria-label={s.label}
              >
                <s.icon aria-hidden="true" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">Shop</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-white/75">
            {CATEGORY_LIST.map((cat) => (
              <li key={cat}>
                <Link href={`/shop?category=${cat}`} className="hover:text-brand-blue">
                  {CATEGORY_LABELS[cat]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">Customer Care</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-white/75">
            <li><Link href="/contact" className="hover:text-brand-blue">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-brand-blue">FAQ</Link></li>
            <li><Link href="/shipping-returns" className="hover:text-brand-blue">Shipping</Link></li>
            <li><Link href="/shipping-returns" className="hover:text-brand-blue">Returns</Link></li>
            <li><Link href="/track-order" className="hover:text-brand-blue">Track Order</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">About</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-white/75">
            <li><Link href="/about" className="hover:text-brand-blue">Our Story</Link></li>
            <li><Link href="/about" className="hover:text-brand-blue">About Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-brand-blue">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-brand-blue">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">Contact</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-white/75">
            <li><a href={`tel:${BUSINESS.phone}`} className="hover:text-brand-blue">{BUSINESS.phone}</a></li>
            <li><a href={`mailto:${BUSINESS.email}`} className="break-words hover:text-brand-blue">{BUSINESS.email}</a></li>
            <li>{BUSINESS.address}</li>
            <li>Mon–Sat, 9am–6pm EAT</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-edge flex flex-col items-center justify-between gap-3 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Lion of Judah Beauty &amp; Cosmetics. All rights reserved.</p>
          <p>M-Pesa · Card · Cash on Delivery where applicable</p>
        </div>
      </div>
    </footer>
  );
}
