export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://metal.kg';

export const SITE_NAME = 'ИП Райымжанов';

export const SITE_TAGLINE = 'Производство металлоизделий в Бишкеке';

/**
 * Дата последнего изменения контента — попадает в sitemap как lastmod.
 * Меняйте руками при правке товаров/текстов: если ставить new Date(), каждый
 * деплой сообщает поиску, что изменились все страницы сразу, и lastmod перестаёт
 * чему-либо помогать.
 */
export const CONTENT_UPDATED = '2026-11-05';
