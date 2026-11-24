import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/data/site';
import type { Product } from '@/data/products';
import { productAlt } from '@/data/products';
import { productSummary } from '@/lib/productText';
import type { Category, Faq } from '@/data/catalog';

type Crumb = { name: string; url: string };

const DEFAULT_OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'ИП Райымжанов — производство металлоизделий в Бишкеке',
};

/**
 * Open Graph для страницы. В Next openGraph страницы целиком заменяет
 * openGraph из layout, поэтому без этого хелпера на внутренних страницах
 * пропадали og:image, og:type и og:site_name.
 */
export function pageOpenGraph(og: {
  title: string;
  description: string;
  url: string;
  image?: { url: string; alt: string; width?: number; height?: number };
}): NonNullable<Metadata['openGraph']> {
  return {
    type: 'website',
    locale: 'ru_KG',
    siteName: SITE_NAME,
    title: og.title,
    description: og.description,
    url: og.url,
    images: [og.image ?? DEFAULT_OG_IMAGE],
  };
}

export function breadcrumbLd(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqLd(faq: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/**
 * Product + Offer. Цену отдаём только когда она известна: разметка с пустым
 * price ломает расширенные результаты в поиске.
 */
export function productLd(product: Product, category: Category) {
  const url = `${SITE_URL}/catalog/${category.id}/${product.slug}`;
  const price = product.priceCash ?? product.price ?? 0;

  const offers =
    price > 0
      ? {
          '@type': 'Offer',
          url,
          priceCurrency: 'KGS',
          price: String(price),
          availability: product.isOnOrder
            ? 'https://schema.org/PreOrder'
            : 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          seller: { '@type': 'Organization', name: SITE_NAME },
        }
      : undefined;

  const additionalProperty = [
    product.diameter && {
      '@type': 'PropertyValue',
      name: 'Диаметр арматуры',
      value: product.diameter.replace('d-', ''),
      unitText: 'мм',
    },
    product.size && { '@type': 'PropertyValue', name: 'Размер', value: product.size },
    product.unit && { '@type': 'PropertyValue', name: 'Единица', value: product.unit },
  ].filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    name: product.name,
    description: productSummary(product, category)[0],
    image: [`${SITE_URL}${product.image}`],
    url,
    sku: product.slug,
    category: category.name,
    brand: { '@type': 'Brand', name: SITE_NAME },
    additionalProperty,
    ...(offers ? { offers } : {}),
  };
}

export function itemListLd(products: Product[], category: Category) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${category.name} — ИП Райымжанов`,
    numberOfItems: products.length,
    itemListElement: products.map((product, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: productAlt(product),
      url: `${SITE_URL}/catalog/${category.id}/${product.slug}`,
    })),
  };
}
