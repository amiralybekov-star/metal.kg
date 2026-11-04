'use client';

import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import type { Product } from '@/data/products';

export default function CatalogClient({ products }: { products: Product[] }) {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return products;
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        (p.description?.toLowerCase().includes(query) ?? false) ||
        (p.diameter?.toLowerCase().includes(query) ?? false) ||
        (p.size?.toLowerCase().includes(query) ?? false)
    );
  }, [products, search]);

  return (
    <div>
      <div className="mb-8">
        <label htmlFor="catalog-search" className="sr-only">
          Поиск по каталогу
        </label>
        <input
          id="catalog-search"
          type="search"
          placeholder="Поиск по названию, диаметру или размеру…"
          className="w-full px-6 py-4 rounded-3xl border border-slate-200 focus:outline-none focus:border-blue-600 text-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <p className="text-sm text-slate-500 mb-4" aria-live="polite">
        {search
          ? `Найдено: ${filtered.length} из ${products.length}`
          : `Всего позиций: ${products.length}`}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-xl py-20 text-slate-500">
          По запросу «{search}» ничего не найдено
        </p>
      )}
    </div>
  );
}
