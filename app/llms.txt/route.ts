import { categories } from '@/data/catalog';
import { formatPrice, productHref, productsByCategory } from '@/data/products';
import { ADDRESS, PHONES, WORK_HOURS } from '@/data/contacts';
import { CONTENT_UPDATED, FOUNDING_YEAR, SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/data/site';

// /llms.txt — краткое описание сайта для языковых моделей (https://llmstxt.org/).
// Собирается из тех же данных, что и каталог, поэтому обновлять руками не нужно.
export const dynamic = 'force-static';

export function GET() {
  const lines: string[] = [
    `# ${SITE_NAME} — ${SITE_TAGLINE}`,
    '',
    `> Собственное производство строительных металлоизделий в Бишкеке с ${FOUNDING_YEAR} года: анкерные болты и шпильки, анкерные шайбы АШ, ванночки для сварки, тайроты, муфты для арматуры, закладные детали, телескопические стойки. Цены от производителя, опт и розница, изготовление по чертежам, самовывоз и доставка по Кыргызстану.`,
    '',
    `- Адрес: ${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.country}`,
    `- Телефоны: ${PHONES.map((p) => p.display).join(', ')} (WhatsApp)`,
    `- Режим работы: ${WORK_HOURS}`,
    `- Оплата: наличные, бартер. Цены в сомах (KGS).`,
    `- Данные обновлены: ${CONTENT_UPDATED}`,
    '',
    '## Основные страницы',
    '',
    `- [Каталог продукции](${SITE_URL}/catalog): все товары с ценами`,
    `- [Услуги](${SITE_URL}/services): изготовление металлоизделий по ГОСТ и чертежам, плазменная резка`,
    `- [О компании](${SITE_URL}/about)`,
    `- [Контакты](${SITE_URL}/contacts): телефоны, адрес, карта`,
  ];

  for (const cat of categories.filter((c) => c.inNav)) {
    lines.push('', `## ${cat.name}`, '', `- [${cat.name}](${SITE_URL}/catalog/${cat.id}): ${cat.description}`);
    for (const product of productsByCategory(cat.id)) {
      const price = formatPrice(product);
      const priceText = price === 'По запросу' ? 'цена по запросу' : `${price}${/сом/.test(price) ? '' : ' сом'}`;
      lines.push(`- [${product.name}](${SITE_URL}${productHref(product)}): ${priceText}`);
    }
  }

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
