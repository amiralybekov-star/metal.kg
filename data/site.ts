export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://metal.kg';

export const SITE_NAME = 'ИП Райымжанов';

/** Год основания — для текстов и разметки LocalBusiness.foundingDate */
export const FOUNDING_YEAR = '2009';

/** Факты о цехе со слов владельца (ноябрь 2026) */
export const TEAM_SIZE = '6–7 человек';
export const EQUIPMENT = 'плазменная и лазерная резка';
export const CAPACITY = 'от 100 до 200 шайб или ванночек';

export const SITE_TAGLINE = 'Производство металлоизделий в Бишкеке';

/**
 * Дата последнего изменения контента — попадает в sitemap как lastmod.
 * Меняйте руками при правке товаров/текстов: если ставить new Date(), каждый
 * деплой сообщает поиску, что изменились все страницы сразу, и lastmod перестаёт
 * чему-либо помогать.
 */
export const CONTENT_UPDATED = '2026-11-05';
