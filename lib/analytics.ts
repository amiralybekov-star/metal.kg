export const GA_ADS_ID = 'AW-18302346521';

/**
 * Метки конверсий из Google Ads: «Цели» → «Конверсии» → действие-конверсия →
 * «Настроить тег». Формат метки: AW-18302346521/AbC-D_efGhIjKl.
 *
 * Пока метка пустая, событие всё равно уходит в gtag (его видно в отчётах по
 * событиям), но конверсия в Google Ads не засчитывается — вставьте метку,
 * как только создадите действие-конверсию «Клик по WhatsApp» / «Звонок».
 */
export const CONVERSION_LABELS = {
  whatsapp: '',
  phone: '',
} as const;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

function trackConversion(label: string, params: Record<string, unknown> = {}): void {
  if (!label) return;
  trackEvent('conversion', { send_to: `${GA_ADS_ID}/${label}`, ...params });
}

export function trackWhatsAppClick(source: string, productName?: string): void {
  const label = productName ? `${source}: ${productName}` : source;
  trackEvent('whatsapp_click', { event_category: 'contact', event_label: label });
  trackConversion(CONVERSION_LABELS.whatsapp, { event_label: label });
}

export function trackPhoneClick(source: string): void {
  trackEvent('phone_click', { event_category: 'contact', event_label: source });
  trackConversion(CONVERSION_LABELS.phone, { event_label: source });
}
