export type Category =
  | "skincare"
  | "bodycare"
  | "haircare"
  | "wellness"
  | "makeup"
  | "fragrance"
  | "beauty-tools";

export type Badge = "SALE" | "NEW" | "BEST SELLER" | "LOW STOCK";

export interface Product {
  id: string;
  slug: string;
  brand: string;
  name: string;
  category: Category;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  stock: number;
  badges: Badge[];
  image?: string;
  description: string;
  benefits: string[];
  ingredients: string;
  howToUse: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CustomerDetails {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  deliveryAddress: string;
  notes?: string;
}

export type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "PROCESSING"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"
  | "CANCELLED";

export interface OrderLineItem {
  productId: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  customer: CustomerDetails;
  items: OrderLineItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  verified: boolean;
}
