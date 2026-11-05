import type { Metadata } from 'next';
import Link from 'next/link';
import CatalogClient from '@/components/CatalogClient';
import WhatsAppLink from '@/components/WhatsAppLink';
import { products } from '@/data/products';
import { productHref } from '@/data/products';
import { navCategories } from '@/data/catalog';
import { SITE_URL } from '@/data/site';
import { formatPrice } from '@/data/products';

export const metadata: Metadata = {
  title: 'Каталог продукции — анкерные болты, шайбы, ванночки, тайроты | ИП Райымжанов, Бишкек',
  description:
    'Каталог металлоизделий собственного производства в Бишкеке: анкерные болты и шайбы, ванночки для сварки, тайроты, муфты для арматуры, закладные детали, телескопические стойки. Цены и наличие.',
  alternates: { canonical: `${SITE_URL}/catalog` },
  openGraph: {
    title: 'Каталог металлоизделий — ИП Райымжанов, Бишкек',
    description:
      'Анкерные болты, шайбы АШ, ванночки для сварки, тайроты, муфты, закладные детали и стойки — напрямую от производителя.',
    url: `${SITE_URL}/catalog`,
  },
};

export default function CatalogPage() {
  const foundation = products.find((p) => p.category === 'foundation');

  const listLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Каталог продукции — ИП Райымжанов',
    numberOfItems: products.length,
    itemListElement: products.map((product, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: product.name,
      url: `${SITE_URL}${productHref(product)}`,
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listLd) }}
      />
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Каталог продукции</h1>
        <p className="text-lg sm:text-xl text-slate-600">
          Анкерные шайбы • Ванночки • Тайроты • Анкерные болты • Закладные детали • Муфты для
          арматуры
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* ===== САЙДБАР ===== */}
        <aside className="lg:w-72 flex-shrink-0">
          <div className="sticky top-28 bg-white border border-slate-200 rounded-3xl p-6">
            <h2 className="font-semibold text-lg mb-5">Категории</h2>

            <nav aria-label="Категории каталога" className="flex flex-col gap-1">
              <Link
                href="/catalog"
                aria-current="page"
                className="px-5 py-3.5 rounded-2xl bg-blue-600 text-white font-medium"
              >
                Все товары
              </Link>
              {navCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/catalog/${category.id}`}
                  className="px-5 py-3.5 rounded-2xl hover:bg-slate-100 transition-all"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* ===== ОСНОВНОЙ КОНТЕНТ ===== */}
        <div className="flex-1">
          <CatalogClient products={products} />
        </div>
      </div>

      {/* Блок с ценой на закладные детали */}
      <div className="mt-16 bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Закладные детали</h2>
        <p className="text-3xl font-bold text-emerald-600">
          {foundation ? formatPrice(foundation) : '130 сом/кг'}{' '}
          <span className="text-base font-normal text-slate-500">(наличные)</span>
        </p>
        <p className="text-xl text-slate-600 mt-2">
          Бартер — <span className="font-semibold">{foundation?.priceBarter ?? 145} сом/кг</span>
        </p>
        <WhatsAppLink
          source="catalog_foundation_price"
          productName="Закладные детали"
          text="Здравствуйте! Хочу узнать цену на закладные детали."
          className="inline-block mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3.5 rounded-2xl transition-colors"
        >
          Запросить расчёт
        </WhatsAppLink>
      </div>
    </div>
  );
}
