import { SITE_NAME, SITE_URL } from '@/data/site';
import type { Product } from '@/data/products';
import { productAlt } from '@/data/products';
import type { Category, Faq } from '@/data/catalog';

type Crumb = { name: string; url: string };

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
    product.diameter && { '@type': 'PropertyValue', name: 'Диаметр', value: product.diameter },
    product.size && { '@type': 'PropertyValue', name: 'Размер', value: product.size },
    product.unit && { '@type': 'PropertyValue', name: 'Единица', value: product.unit },
  ].filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    name: product.name,
    description: product.description ?? `${product.name} — производство в Бишкеке`,
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
