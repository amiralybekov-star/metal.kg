import { Phone, WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import PhoneLink from './PhoneLink';
import WhatsAppLink from './WhatsAppLink';
import { PHONES } from '@/data/contacts';

/**
 * На телефонах две кнопки всегда внизу экрана: позвонить и написать.
 * С мобильных кликают в 2 раза реже, чем с ПК (Search Console, ноябрь 2026),
 * а номер в шапке при прокрутке пропадает.
 */
export default function MobileContactBar() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white/95 backdrop-blur px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <PhoneLink
        tel={PHONES[0].tel}
        source="mobile_bar"
        ariaLabel={`Позвонить ${PHONES[0].display}`}
        className="flex items-center justify-center gap-2 rounded-2xl bg-blue-700 py-3.5 font-semibold text-white active:bg-blue-800"
      >
        <Phone className="h-5 w-5" weight="fill" aria-hidden="true" />
        Позвонить
      </PhoneLink>
      <WhatsAppLink
        source="mobile_bar"
        className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 py-3.5 font-semibold text-white active:bg-green-600"
      >
        <WhatsappLogo className="h-5 w-5" weight="fill" aria-hidden="true" />
        WhatsApp
      </WhatsAppLink>
    </div>
  );
}
