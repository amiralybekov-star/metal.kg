import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import WhatsAppLink from '@/components/WhatsAppLink';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { productsByCategory } from '@/data/products';
import { getCategory, navCategories } from '@/data/catalog';
import { SITE_URL } from '@/data/site';

type CategoryParams = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return navCategories.map((category) => ({ category: category.id }));
}

export async function generateMetadata({ params }: CategoryParams): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};

  const title = `${cat.name} в Бишкеке — производство и цены | ИП Райымжанов`;

  return {
    title,
    description: cat.description,
    alternates: { canonical: `${SITE_URL}/catalog/${cat.id}` },
    openGraph: {
      title,
      description: cat.description,
      url: `${SITE_URL}/catalog/${cat.id}`,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: CategoryParams) {
  const { category } = await params;
  const cat = getCategory(category);

  // Неизвестная или скрытая категория — честная 404 вместо пустой страницы
  if (!cat || !cat.inNav) notFound();

  const items = productsByCategory(cat.id);
  const others = navCategories.filter((c) => c.id !== cat.id);

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Каталог', item: `${SITE_URL}/catalog` },
      {
        '@type': 'ListItem',
        position: 3,
        name: cat.name,
        item: `${SITE_URL}/catalog/${cat.id}`,
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <nav aria-label="Хлебные крошки" className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-blue-700">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <Link href="/catalog" className="hover:text-blue-700">
          Каталог
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">{cat.name}</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{cat.name}</h1>
      <p className="text-lg text-slate-600 max-w-3xl mb-12">{cat.description}</p>

      {items.length > 0 ? (
        <>
          <p className="text-sm text-slate-500 mb-6">Позиций: {items.length}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl">
          <p className="text-2xl text-slate-500">В этой категории пока нет товаров</p>
          <p className="text-slate-400 mt-3">
            Позвоните или напишите — изготовим {cat.accusative} по вашим размерам.
          </p>
        </div>
      )}

      <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
        <WhatsAppLink
          source={`category_${cat.id}`}
          text={`Здравствуйте! Интересуют ${cat.accusative}. Подскажите цены и наличие.`}
          className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-2xl transition-colors"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Узнать цены в WhatsApp
        </WhatsAppLink>
        <Link
          href="/contacts"
          className="inline-flex items-center justify-center bg-white border border-slate-300 hover:bg-slate-50 font-semibold px-8 py-4 rounded-2xl transition-colors"
        >
          Контакты и адрес
        </Link>
      </div>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">Другие категории</h2>
        <div className="flex flex-wrap gap-3">
          {others.map((other) => (
            <Link
              key={other.id}
              href={`/catalog/${other.id}`}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-3 rounded-2xl transition-colors"
            >
              {other.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
