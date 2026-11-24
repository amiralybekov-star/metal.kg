import { productsByCategory, type Product } from '@/data/products';

export function cashPrice(product: Product): number {
  return product.priceCash ?? product.price ?? 0;
}

/** Минимальная цена в категории (наличные) или null, если цены нет. */
export function categoryFromPrice(categoryId: string): { price: number; unit: string } | null {
  const priced = productsByCategory(categoryId).filter((p) => cashPrice(p) > 0);
  if (priced.length === 0) return null;
  const cheapest = priced.reduce((a, b) => (cashPrice(a) <= cashPrice(b) ? a : b));
  return { price: cashPrice(cheapest), unit: cheapest.pricePerKg ? 'кг' : cheapest.unit };
}

export function plural(n: number, forms: [string, string, string]): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return forms[1];
  return forms[2];
}
