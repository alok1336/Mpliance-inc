export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  description: string;
  price: number;
  dealerPrice: number;
  stock: number;
  isFeatured: boolean;
  isPopular: boolean;
  images: string[];
}