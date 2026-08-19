# Lion of Judah Beauty & Cosmetics

A customer-facing e-commerce storefront built with **Next.js 14 (App Router)** and **Tailwind CSS**, with **WhatsApp checkout** as the primary ordering flow instead of a card-payment gateway.

## Getting started

```bash
npm install
cp .env.example .env.local   # then edit .env.local
npm run dev
```

Visit `http://localhost:3000`.

## Configuring your WhatsApp number

The business WhatsApp number is never hardcoded in the app — it's read from an environment
variable so you can change it without touching code:

```
# .env.local
NEXT_PUBLIC_WHATSAPP_NUMBER=254712345678
```

Use the international format, digits only (no `+`, spaces or dashes). This number is used by:
- The floating WhatsApp button
- "Order via WhatsApp" on every product page
- The checkout page's "Order via WhatsApp" button
- The Contact page

## What's included

- **Home** — announcement bar, hero slider (5 rotating promotional slides), trust bar, shop by
  category, best sellers, promo banner, why shop with us, the beauty edit, customer reviews,
  newsletter signup, social grid
- **Shop** (`/shop`) — category, brand, price, rating and stock filters; sort by featured, newest,
  price, rating, popularity and discount; `?category=` and `?sort=` are shareable URL params;
  `?category=deals` shows everything currently on sale
- **Product details** (`/product/[slug]`) — gallery, quantity selector, Add to Cart / Buy Now /
  Order via WhatsApp, wishlist, tabbed description/benefits/ingredients/how-to-use/shipping/
  reviews, related products, Product schema (JSON-LD)
- **Cart** (`/cart`) — quantity controls, remove, free-delivery progress nudge, order summary
- **Checkout** (`/checkout`) — customer details form → generates a formatted WhatsApp message from
  the live cart and opens WhatsApp with it pre-filled
- **Order confirmation** (`/order-confirmation`) — "open WhatsApp" / "continue shopping", order
  recap
- **Order tracking** (`/track-order`) — look up an order by Order ID + phone, visual status stepper
- **Wishlist** (`/wishlist`), **Search** (`/search` — recent + popular searches, live filtering),
  **Account** (`/account` — profile, order history, addresses, recently viewed)
- **About, Contact, FAQ, Shipping & Returns**
- Floating WhatsApp button, mobile bottom navigation, responsive down to 320px
- SEO: metadata + Open Graph per page, `sitemap.ts`, `robots.ts`, Product JSON-LD

There is intentionally **no admin dashboard, inventory UI, or staff/back-office interface** —
this is a customer-facing storefront only, per the brief.

## Design system

| Token | Value |
|---|---|
| Black | `#050505` |
| White | `#FFFFFF` |
| Brand Blue | `#1683FF` |
| Brand Dark | `#071A2F` |
| Brand Light | `#DCEEFF` |
| Muted text | `#A7B0BA` |
| Border | `#253140` |

Headings use **Playfair Display**, body text uses **Inter** (both loaded via `next/font/google`,
no extra setup needed). Colors and fonts are defined once in `tailwind.config.ts` — change them
there to re-theme the whole site.

## Product photography

Every product currently renders through `components/ui/PlaceholderImage.tsx` — a gradient +
monogram placeholder in the brand palette, so the storefront runs with zero external image
dependencies. **Swap in real photography before launch:**

1. Add real images to `/public/products/`.
2. Replace `<PlaceholderImage tint={...} .../>` with `next/image` (`<Image src="/products/xyz.jpg" fill />`) in `ProductCard`, `ProductGallery`, `ShopByCategory`, `BeautyEdit` and `SocialMedia`.
3. Add each product's image path(s) to `Product` in `lib/types.ts` and `lib/products.ts`.

## Products, orders and accounts — data layer notes

This build ships with a realistic **mock catalogue** (`lib/products.ts`, 28 products across all 7
categories) and **no backend** — it's a frontend storefront you can point at a real backend next:

- **Cart & wishlist** persist in the browser via `localStorage` (per device).
- **Orders** placed at checkout are saved to `localStorage` (`lib/orders.ts`) purely so
  `/track-order` and `/account` have something to look up in a demo. This does **not** sync
  across devices and there's no way for your team to update an order's status from here — a real
  deployment needs a backend (e.g. a small API + database, Airtable, Supabase, Google Sheets) that
  the WhatsApp order message write into, and that `/track-order` and `/account` read from instead
  of `localStorage`. Happy to help wire that up next.
- **Account** has no real authentication — it's a single local profile per device, matching the
  brief's request to keep the customer area simple (not a back-office).

## Tech

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (custom design tokens, no UI kit)
- React Context for cart / wishlist / toasts — no external state library
- Zero backend dependencies — deployable as-is to Vercel, Netlify, or any Node host
