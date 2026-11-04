export const WHATSAPP_NUMBER = '996706646264';
export const WHATSAPP_NUMBER_SECOND = '996779592026';

export const PHONES = [
  { display: '+996 779 592 026', tel: '+996779592026' },
  { display: '+996 706 646 264', tel: '+996706646264' },
] as const;

export const ADDRESS = {
  street: 'Профсоюзная 2/1',
  city: 'Бишкек',
  district: 'Первомайский район',
  country: 'Кыргызстан',
};

export const WORK_HOURS = 'Пн — Сб: 08:00 — 18:00';

export const TWO_GIS_URL = 'https://2gis.kg/bishkek/geo/15763234351075282';

export const MAP_EMBED_URL =
  'https://www.google.com/maps?q=%D0%9F%D1%80%D0%BE%D1%84%D1%81%D0%BE%D1%8E%D0%B7%D0%BD%D0%B0%D1%8F+2%2F1,+%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA,+%D0%9A%D1%8B%D1%80%D0%B3%D1%8B%D0%B7%D1%81%D1%82%D0%B0%D0%BD&output=embed';

/** Ссылка на чат в WhatsApp, опционально с готовым текстом сообщения. */
export function waLink(text?: string, phone: string = WHATSAPP_NUMBER): string {
  const base = `https://wa.me/${phone}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function productInquiryLink(productName: string): string {
  return waLink(`Здравствуйте! Хочу узнать цену на: ${productName}`);
}
