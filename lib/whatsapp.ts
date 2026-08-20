import { CustomerDetails, OrderLineItem, Product } from "./types";
import { formatKES } from "./utils";
import { BUSINESS } from "./business";

/**
 * The business WhatsApp number, read from env so it is never hardcoded
 * throughout the application. Digits only, international format, no "+".
 * Falls back to a placeholder so the storefront still renders in demos.
 */
export function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || BUSINESS.whatsappNumber;
}

export function buildWhatsAppUrl(message: string): string {
  const number = getWhatsAppNumber();
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildCartOrderMessage(params: {
  orderId: string;
  items: OrderLineItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  customer: CustomerDetails;
}): string {
  const { orderId, items, subtotal, deliveryFee, total, customer } = params;

  const lines: string[] = [];
  lines.push("Hello Lion of Judah Beauty & Cosmetics,");
  lines.push("");
  lines.push("I would like to place an order.");
  lines.push("");
  lines.push(`ORDER ID: ${orderId}`);
  lines.push("");
  lines.push("ORDER DETAILS:");
  items.forEach((item, index) => {
    lines.push("");
    lines.push(`${index + 1}. ${item.brand} ${item.name}`);
    lines.push(`Quantity: ${item.quantity}`);
    lines.push(`Price: ${formatKES(item.price)} each`);
  });
  lines.push("");
  lines.push(`Subtotal: ${formatKES(subtotal)}`);
  lines.push(`Delivery: ${deliveryFee === 0 ? "FREE" : formatKES(deliveryFee)}`);
  lines.push(`Total: ${formatKES(total)}`);
  lines.push("");
  lines.push("CUSTOMER DETAILS:");
  lines.push("");
  lines.push(`Name: ${customer.fullName}`);
  lines.push(`Phone: ${customer.phone}`);
  if (customer.email) lines.push(`Email: ${customer.email}`);
  lines.push(`Location: ${customer.location}`);
  lines.push(`Delivery Address: ${customer.deliveryAddress}`);
  if (customer.notes) lines.push(`Notes: ${customer.notes}`);
  lines.push("");
  lines.push("Please confirm my order and delivery details.");
  lines.push("");
  lines.push("Thank you.");

  return lines.join("\n");
}

export function buildProductInquiryMessage(product: Product): string {
  const lines: string[] = [];
  lines.push("Hello Lion of Judah Beauty & Cosmetics,");
  lines.push("");
  lines.push("I am interested in:");
  lines.push("");
  lines.push(`Product: ${product.brand} ${product.name}`);
  lines.push(`Price: ${formatKES(product.price)}`);
  lines.push("Quantity: 1");
  lines.push("");
  lines.push("Please provide more information and assist me with ordering.");
  lines.push("");
  lines.push("Thank you.");
  return lines.join("\n");
}

export function buildGeneralInquiryMessage(): string {
  return "Hello Lion of Judah Beauty & Cosmetics, I'd like some help finding the right products for me.";
}
