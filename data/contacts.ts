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
  postalCode: '720080',
};

export const WORK_HOURS = 'Пн — Сб: 08:00 — 18:00';
/** То же, для связного текста */
export const WORK_HOURS_TEXT = 'с понедельника по субботу, с 8:00 до 18:00';

/**
 * Карты ищут фирму по названию и адресу так, как она записана в Google Картах
 * («ИП Райымжанов, 2/1 Профсоюзная, Бишкек 720080»). Поиск только по
 * «Профсоюзная 2/1» открывал соседний дом 110/2.
 */
const MAP_QUERY = 'ИП Райымжанов, 2/1 Профсоюзная, Бишкек 720080';

/** Карточка фирмы в Google Картах (официальный формат ссылки Maps URLs) */
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;

/** Ссылка на чат в WhatsApp, опционально с готовым текстом сообщения. */
export function waLink(text?: string, phone: string = WHATSAPP_NUMBER): string {
  const base = `https://wa.me/${phone}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function productInquiryLink(productName: string): string {
  return waLink(`Здравствуйте! Хочу узнать цену на: ${productName}`);
}
