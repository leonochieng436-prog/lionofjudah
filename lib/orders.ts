import { Order } from "./types";

const ORDERS_KEY = "loj_orders";
const RECENTLY_VIEWED_KEY = "loj_recently_viewed";
const PROFILE_KEY = "loj_profile";
const ADDRESSES_KEY = "loj_addresses";

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function getOrders(): Order[] {
  if (typeof window === "undefined") return [];
  return safeParse<Order[]>(window.localStorage.getItem(ORDERS_KEY), []);
}

export function saveOrder(order: Order): void {
  if (typeof window === "undefined") return;
  const orders = getOrders();
  orders.unshift(order);
  window.localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

export function findOrder(orderId: string, phone: string): Order | undefined {
  const orders = getOrders();
  const normalizedPhone = phone.replace(/\D/g, "");
  return orders.find(
    (o) =>
      o.id.toLowerCase() === orderId.toLowerCase().trim() &&
      o.customer.phone.replace(/\D/g, "").endsWith(normalizedPhone.slice(-9))
  );
}

export function getOrderById(orderId: string): Order | undefined {
  return getOrders().find((o) => o.id === orderId);
}

export function addRecentlyViewed(productId: string): void {
  if (typeof window === "undefined") return;
  const ids = safeParse<string[]>(window.localStorage.getItem(RECENTLY_VIEWED_KEY), []);
  const next = [productId, ...ids.filter((id) => id !== productId)].slice(0, 8);
  window.localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(next));
}

export function getRecentlyViewed(): string[] {
  if (typeof window === "undefined") return [];
  return safeParse<string[]>(window.localStorage.getItem(RECENTLY_VIEWED_KEY), []);
}

export interface Profile {
  fullName: string;
  phone: string;
  email: string;
}

export function getProfile(): Profile | null {
  if (typeof window === "undefined") return null;
  return safeParse<Profile | null>(window.localStorage.getItem(PROFILE_KEY), null);
}

export function saveProfile(profile: Profile): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export interface Address {
  id: string;
  label: string;
  location: string;
  deliveryAddress: string;
}

export function getAddresses(): Address[] {
  if (typeof window === "undefined") return [];
  return safeParse<Address[]>(window.localStorage.getItem(ADDRESSES_KEY), []);
}

export function saveAddress(address: Address): void {
  if (typeof window === "undefined") return;
  const addresses = getAddresses();
  window.localStorage.setItem(ADDRESSES_KEY, JSON.stringify([...addresses, address]));
}

export function removeAddress(id: string): void {
  if (typeof window === "undefined") return;
  const addresses = getAddresses().filter((a) => a.id !== id);
  window.localStorage.setItem(ADDRESSES_KEY, JSON.stringify(addresses));
}
