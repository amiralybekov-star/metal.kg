import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import WhatsAppLink from '@/components/WhatsAppLink';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import PhoneLink from '@/components/PhoneLink';
import { formatPrice, getProduct, products, productHref, productAlt } from '@/data/products';
import { getCategory, navCategories } from '@/data/catalog';
import { ADDRESS, PHONES, WORK_HOURS } from '@/data/contacts';
import { SITE_URL } from '@/data/site';
import { breadcrumbLd, productLd } from '@/lib/seo';

type Params = { params: Promise<{ category: string; slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ category: product.category, slug: product.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProduct(category, slug);
  const cat = getCategory(category);
  if (!product || !cat) return {};

  const price = formatPrice(product);
  const priceText = price === 'По запросу' ? 'цена по запросу' : `${price} сом`;
  const title = `${product.name} — ${priceText} в Бишкеке, производство`;
  const withPeriod = (value: string) => (/[.!?]$/.test(value) ? value : `${value}.`);
  const description = [
    withPeriod(product.name),
    product.description ? withPeriod(product.description) : '',
    `Цена: ${priceText}${product.unit && price !== 'По запросу' ? ` за ${product.unit}` : ''}.`,
    product.priceBarter ? `Бартер — ${product.priceBarter} сом.` : '',
    'Производство в Бишкеке, самовывоз и доставка по Кыргызстану.',
  ]
    .filter(Boolean)
    .join(' ');

  const url = `${SITE_URL}/catalog/${cat.id}/${product.slug}`;
  const ogImage = `/og/products/${product.slug}.jpg`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: productAlt(product),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { category, slug } = await params;
  const product = getProduct(category, slug);
  const cat = getCategory(category);

  if (!product || !cat || !cat.inNav) notFound();

  const siblings = products.filter((p) => p.category === cat.id && p.id !== product.id);
  const price = formatPrice(product);
  const hasPrice = price !== 'По запросу';
  const inquiry = `Здравствуйте! Интересует: ${productAlt(product)}. Подскажите цену и наличие.`;

  const crumbs = breadcrumbLd([
    { name: 'Главная', url: SITE_URL },
    { name: 'Каталог', url: `${SITE_URL}/catalog` },
    { name: cat.name, url: `${SITE_URL}/catalog/${cat.id}` },
    { name: product.name, url: `${SITE_URL}/catalog/${cat.id}/${product.slug}` },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd(product, cat)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      <nav aria-label="Хлебные крошки" className="text-sm text-slate-500 mb-6 flex flex-wrap gap-x-2">
        <Link href="/" className="hover:text-blue-700">
          Главная
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/catalog" className="hover:text-blue-700">
          Каталог
        </Link>
        <span aria-hidden="true">/</span>
        <Link href={`/catalog/${cat.id}`} className="hover:text-blue-700">
          {cat.name}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-slate-700">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100">
          <Image
            src={product.image}
            alt={productAlt(product)}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            {product.name}
          </h1>

          {product.description && (
            <p className="text-lg text-slate-600 mb-6">{product.description}</p>
          )}

          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-6">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-3xl sm:text-4xl font-bold text-emerald-600">
                {hasPrice ? `${price} сом` : 'По запросу'}
              </span>
              {hasPrice && product.unit && (
                <span className="text-slate-500">за {product.unit}</span>
              )}
            </div>

            {product.priceBarter && (
              <p className="text-slate-600 mt-2">
                Бартер — <span className="font-semibold">{product.priceBarter} сом</span>
                {product.unit ? ` за ${product.unit}` : ''}
              </p>
            )}

            <p className="text-sm text-slate-500 mt-3">
              {product.isOnOrder
                ? 'Изготавливаем под заказ — 1–5 дней в зависимости от объёма.'
                : 'Стандартная позиция: наличие на складе уточняйте в WhatsApp.'}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <WhatsAppLink
                source={`product_${cat.id}`}
                productName={product.name}
                text={inquiry}
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-4 rounded-2xl transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Запросить цену
              </WhatsAppLink>
              <PhoneLink
                tel={PHONES[0].tel}
                source={`product_${cat.id}`}
                ariaLabel={`Позвонить по номеру ${PHONES[0].display}`}
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold px-7 py-4 rounded-2xl transition-colors"
              >
                {PHONES[0].display}
              </PhoneLink>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-px bg-slate-200 rounded-3xl overflow-hidden text-sm">
            {product.diameter && (
              <>
                <dt className="bg-white px-5 py-4 text-slate-500">Диаметр</dt>
                <dd className="bg-white px-5 py-4 font-medium">{product.diameter}</dd>
              </>
            )}
            {product.size && (
              <>
                <dt className="bg-white px-5 py-4 text-slate-500">Размер</dt>
                <dd className="bg-white px-5 py-4 font-medium">{product.size}</dd>
              </>
            )}
            <dt className="bg-white px-5 py-4 text-slate-500">Единица</dt>
            <dd className="bg-white px-5 py-4 font-medium">{product.unit}</dd>
            <dt className="bg-white px-5 py-4 text-slate-500">Категория</dt>
            <dd className="bg-white px-5 py-4 font-medium">
              <Link href={`/catalog/${cat.id}`} className="text-blue-700 hover:underline">
                {cat.name}
              </Link>
            </dd>
            <dt className="bg-white px-5 py-4 text-slate-500">Производство</dt>
            <dd className="bg-white px-5 py-4 font-medium">{ADDRESS.city}</dd>
          </dl>
        </div>
      </div>

      {/* Условия заказа */}
      <section className="mt-14 grid md:grid-cols-3 gap-4">
        <div className="bg-slate-50 rounded-3xl p-6">
          <h2 className="font-semibold text-lg mb-2">Самовывоз</h2>
          <p className="text-slate-600 text-sm">
            {ADDRESS.street}, {ADDRESS.city}. {WORK_HOURS}.
          </p>
        </div>
        <div className="bg-slate-50 rounded-3xl p-6">
          <h2 className="font-semibold text-lg mb-2">Оплата</h2>
          <p className="text-slate-600 text-sm">
            Наличные и безналичный расчёт. Для строительных компаний — бартер.
          </p>
        </div>
        <div className="bg-slate-50 rounded-3xl p-6">
          <h2 className="font-semibold text-lg mb-2">Изготовление</h2>
          <p className="text-slate-600 text-sm">
            По ГОСТ и по чертежам заказчика. Нестандартные размеры — от 1 до 5 дней.
          </p>
        </div>
      </section>

      {siblings.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-2">Другие размеры и варианты</h2>
          <p className="text-slate-600 mb-6 text-sm">
            {cat.name} в наличии — сравните цены и характеристики:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[520px]">
              <thead>
                <tr className="text-left text-slate-500 border-b border-slate-200">
                  <th className="py-3 pr-4 font-medium">Наименование</th>
                  <th className="py-3 pr-4 font-medium">Диаметр</th>
                  <th className="py-3 pr-4 font-medium">Размер</th>
                  <th className="py-3 pr-4 font-medium">Цена, сом</th>
                </tr>
              </thead>
              <tbody>
                {siblings.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100">
                    <td className="py-3 pr-4">
                      <Link href={productHref(item)} className="text-blue-700 hover:underline">
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-3 pr-4 text-slate-600">{item.diameter ?? '—'}</td>
                    <td className="py-3 pr-4 text-slate-600">{item.size ?? '—'}</td>
                    <td className="py-3 pr-4 text-slate-600">
                      {formatPrice(item)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="mt-14">
        <h2 className="text-2xl font-semibold mb-4">Другие категории</h2>
        <div className="flex flex-wrap gap-3">
          {navCategories
            .filter((c) => c.id !== cat.id)
            .map((c) => (
              <Link
                key={c.id}
                href={`/catalog/${c.id}`}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-3 rounded-2xl transition-colors"
              >
                {c.name}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
