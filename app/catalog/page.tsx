'use client';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Link from 'next/link';

const categories = [
  { id: 'all', name: 'Все товары' },
  { id: 'washer', name: 'Анкерные шайбы' },
  { id: 'bath', name: 'Ванночки для сварки' },
  { id: 'anchor', name: 'Анкерные болты' },
  { id: 'tie', name: 'Тайроты' },
  { id: 'mufta', name: 'Муфты для арматуры' },
  { id: 'foundation', name: 'Закладные детали' },
  { id: 'stand', name: 'Стойки телескопические' },
];

export default function CatalogPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = products.filter(p => 
    (activeCategory === 'all' || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) || 
     p.description?.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Каталог продукции</h1>
        <p className="text-xl text-slate-600">
          Анкерные шайбы • Ванночки • Тайроты • Анкерные болты • Закладные детали • Муфты для арматуры
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* ===== САЙДБАР ===== */}
        <div className="lg:w-72 flex-shrink-0">
          <div className="sticky top-8 bg-white border border-slate-200 rounded-3xl p-6">
            <h3 className="font-semibold text-lg mb-5">Категории</h3>
            
            <div className="flex flex-col gap-1">
              {categories.map(cat => (
                <Link
                  key={cat.id}
                  href={cat.id === 'all' ? '/catalog' : `/catalog/${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-3.5 rounded-2xl transition-all text-left ${
                    activeCategory === cat.id 
                      ? 'bg-blue-600 text-white font-medium' 
                      : 'hover:bg-slate-100'
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ===== ОСНОВНОЙ КОНТЕНТ ===== */}
        <div className="flex-1">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Поиск по названию..."
              className="w-full px-6 py-4 rounded-3xl border focus:outline-none focus:border-blue-600 text-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(product => (
              <ProductCard 
                key={product.id} 
                product={{
                  id: product.id,
                  name: product.name,
                  price: product.pricePerKg 
                    ? `${product.priceCash} сом/кг` 
                    : product.priceCash || product.price || 'По запросу',
                  image: product.image,
                  description: product.description || '',
                  unit: product.unit,
                  category: product.category,
                }} 
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-xl py-20 text-slate-500">Товары не найдены</p>
          )}
        </div>
      </div>

      {/* Блок с ценой на закладные детали */}
      <div className="mt-20 bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4">Закладные детали</h3>
        <p className="text-3xl font-bold text-emerald-600">
          130 сом/кг <span className="text-base font-normal text-slate-500">(наличные)</span>
        </p>
        <p className="text-xl text-slate-600 mt-2">
          Бартер — <span className="font-semibold">145 сом/кг</span>
        </p>
      </div>
    </div>
  );
}