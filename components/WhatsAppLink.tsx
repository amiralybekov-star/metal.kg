'use client';

import { waLink } from '@/data/contacts';
import { trackWhatsAppClick } from '@/lib/analytics';

type Props = {
  /** Откуда кликнули — попадёт в event_label аналитики */
  source: string;
  /** Готовый текст сообщения в WhatsApp */
  text?: string;
  /** Номер в формате 996XXXXXXXXX; по умолчанию основной номер компании */
  phone?: string;
  productName?: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

/**
 * Единая ссылка на WhatsApp: правильные rel/target + событие в gtag.
 */
export default function WhatsAppLink({
  source,
  text,
  phone,
  productName,
  className,
  ariaLabel,
  children,
}: Props) {
  return (
    <a
      href={waLink(text, phone)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      onClick={() => trackWhatsAppClick(source, productName)}
    >
      {children}
    </a>
  );
}
