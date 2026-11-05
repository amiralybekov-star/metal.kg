import type { MetadataRoute } from 'next';
import { navCategories } from '@/data/catalog';
import { products } from '@/data/products';
import { CONTENT_UPDATED, SITE_URL } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_UPDATED);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/catalog`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/services`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/contacts`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = navCategories.map((category) => ({
    url: `${SITE_URL}/catalog/${category.id}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Страницы товаров — источник длинного хвоста («шайба АШ-8 размеры»,
  // «ванночка d32 цена»).
  const productRoutes: MetadataRoute.Sitemap = products
    .filter((product) => navCategories.some((c) => c.id === product.category))
    .map((product) => ({
      url: `${SITE_URL}/catalog/${product.category}/${product.slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
