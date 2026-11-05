import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import WhatsAppLink from '@/components/WhatsAppLink';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import FaqList from '@/components/FaqList';
import { formatPrice, productsByCategory } from '@/data/products';
import { getCategory, navCategories } from '@/data/catalog';
import { SITE_URL } from '@/data/site';
import { breadcrumbLd, faqLd, itemListLd } from '@/lib/seo';

type CategoryParams = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return navCategories.map((category) => ({ category: category.id }));
}

export async function generateMetadata({ params }: CategoryParams): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};

  const url = `${SITE_URL}/catalog/${cat.id}`;

  const title = `${cat.seoTitle} | ИП Райымжанов`;

  return {
    title,
    description: cat.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: cat.seoDescription,
      url,
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
  const url = `${SITE_URL}/catalog/${cat.id}`;
  const hasSizes = items.some((p) => p.diameter || p.size);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: 'Главная', url: SITE_URL },
              { name: 'Каталог', url: `${SITE_URL}/catalog` },
              { name: cat.name, url },
            ])
          ),
        }}
      />
      {items.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd(items, cat)) }}
        />
      )}
      {cat.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(cat.faq)) }}
        />
      )}

      <nav aria-label="Хлебные крошки" className="text-sm text-slate-500 mb-6 flex flex-wrap gap-x-2">
        <Link href="/" className="hover:text-blue-700">
          Главная
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/catalog" className="hover:text-blue-700">
          Каталог
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-slate-700">{cat.name}</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{cat.name}</h1>
      <p className="text-lg text-slate-600 max-w-3xl mb-4">{cat.description}</p>
      <p className="inline-flex flex-wrap items-center gap-2 text-sm text-slate-600 bg-slate-100 rounded-2xl px-4 py-2 mb-10">
        <span className="font-medium text-slate-900">Типоразмеры:</span>
        {cat.range}
      </p>

      {items.length > 0 ? (
        <>
          <p className="text-sm text-slate-500 mb-6">Позиций: {items.length}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
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

      {/* Для категорий с одной позицией на заказ таблица из одной строки бесполезна:
          показываем диапазон, который реально изготавливаем */}
      {items.length === 1 && !hasSizes && (
        <section className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">Что можем изготовить</h2>
          <p className="text-slate-600 mb-4">
            Позиция изготавливается под заказ: {cat.range}. Цена зависит от размеров,
            марки стали и объёма партии — пришлите чертёж или размеры, посчитаем в течение дня.
          </p>
          <WhatsAppLink
            source={`category_${cat.id}_sizes`}
            text={`Здравствуйте! Нужны ${cat.accusative}. Подскажите цену под мои размеры.`}
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-4 rounded-2xl transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Уточнить размер и цену
          </WhatsAppLink>
        </section>
      )}

      {/* Таблица характеристик — то, что ищут запросами «АШ-8 размеры», «ванночка д32» */}
      {items.length > 1 && hasSizes && (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-4">Размеры и цены</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[560px]">
              <caption className="sr-only">
                {cat.name}: диаметры, размеры и цены за единицу
              </caption>
              <thead>
                <tr className="text-left text-slate-500 border-b border-slate-200">
                  <th scope="col" className="py-3 pr-4 font-medium">Наименование</th>
                  <th scope="col" className="py-3 pr-4 font-medium">Диаметр</th>
                  <th scope="col" className="py-3 pr-4 font-medium">Размер</th>
                  <th scope="col" className="py-3 pr-4 font-medium">Цена, сом</th>
                  <th scope="col" className="py-3 pr-4 font-medium">Бартер</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100">
                    <td className="py-3 pr-4">
                      <Link
                        href={`/catalog/${cat.id}/${item.slug}`}
                        className="text-blue-700 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-3 pr-4 text-slate-600">{item.diameter ?? '—'}</td>
                    <td className="py-3 pr-4 text-slate-600">{item.size ?? '—'}</td>
                    <td className="py-3 pr-4 text-slate-600">
                      {formatPrice(item)}
                      {item.pricePerKg ? '' : item.unit ? `/${item.unit}` : ''}
                    </td>
                    <td className="py-3 pr-4 text-slate-600">
                      {item.priceBarter ? `${item.priceBarter}` : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* SEO-текст категории */}
      {cat.intro.length > 0 && (
        <section className="mt-14 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
            {cat.name} — что это и где применяется
          </h2>
          <div className="space-y-4 text-slate-600 text-[17px] leading-relaxed">
            {cat.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {cat.faq.length > 0 && (
        <section className="mt-14 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-5">Частые вопросы</h2>
          <FaqList items={cat.faq} />
        </section>
      )}

      <div className="mt-14 flex flex-col sm:flex-row gap-4">
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

      <section className="mt-16">
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
