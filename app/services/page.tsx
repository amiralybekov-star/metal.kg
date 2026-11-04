import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import PhoneLink from '@/components/PhoneLink';
import { PHONES } from '@/data/contacts';
import { SITE_URL } from '@/data/site';

export const metadata: Metadata = {
  title: 'Услуги — изготовление металлоизделий и плазменная резка в Бишкеке | ИП Райымжанов',
  description:
    'Услуги завода металлоизделий в Бишкеке: изготовление анкерных болтов и шпилек, шайб АШ, ванночек для сварки, тайротов, плазменная резка и гибка металла по чертежам заказчика.',
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: 'Услуги — ИП Райымжанов, Бишкек',
    description:
      'Изготовление крепежа и металлоизделий по ГОСТ и по чертежам: анкерные болты, шайбы, ванночки, тайроты, плазменная резка.',
    url: `${SITE_URL}/services`,
  },
};

const services = [
  {
    title: 'Изготовление анкерных болтов и шпилек',
    text: 'Производим анкерные болты и фундаментные шпильки любых размеров и длин по ГОСТ и по чертежам заказчика.',
    items: [
      'Анкерные болты для фундамента',
      'Анкерные шпильки',
      'Оцинкованные и чёрные',
      'Оптовые партии от 100 шт.',
    ],
  },
  {
    title: 'Анкерные шайбы (АШ)',
    text: 'Изготовление усиленных анкерных шайб АШ-8, АШ-7, АШ-6 и других размеров.',
    items: ['Для арматуры Ø16–Ø32 мм', 'Размеры 50×50 до 90×90 мм', 'Высокая несущая способность'],
  },
  {
    title: 'Ванночки для сварки арматуры',
    text: 'Производим ванночки для сварки арматуры по новому ГОСТ. Все диаметры от d-18 до d-32 мм.',
  },
  {
    title: 'Тайроты и телескопические стойки',
    text: 'Изготовление тайротов (тяжей опалубки) и телескопических стоек для монолитного строительства.',
  },
  {
    title: 'Изготовление по чертежам',
    text: 'Закладные детали, нестандартные анкеры, металлоконструкции любой сложности.',
  },
  {
    title: 'Плазменная резка и металлообработка',
    text: 'Плазменная резка, гибка, сварка, сверление, нарезка резьбы.',
  },
];

const advantages = [
  { icon: '🏭', text: 'Собственное производство' },
  { icon: '📍', text: 'Склад и цех в Бишкеке' },
  { icon: '⚡', text: 'Быстрое изготовление' },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-20">
      {/* Заголовок страницы */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Услуги завода металлоизделий в Бишкеке
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Производство и поставка анкерных болтов, анкерных шайб, тайротов, ванночек для сварки и
          других металлоизделий в Кыргызстане
        </p>
      </div>

      {/* Карточки услуг */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
              {service.title}
            </h2>
            <p className="text-slate-600 text-[17px] sm:text-base">{service.text}</p>

            {service.items && (
              <ul className="list-disc pl-5 sm:pl-6 mt-4 space-y-2 text-[17px] sm:text-base text-slate-600">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* SEO-блок */}
      <div className="mt-16 md:mt-20 bg-slate-50 p-8 md:p-10 rounded-3xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
          Почему выбирают нас в Бишкеке?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {advantages.map((item) => (
            <div key={item.text}>
              <div className="text-4xl mb-3" aria-hidden="true">
                {item.icon}
              </div>
              <p className="font-medium text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Контакты */}
      <div className="text-center mt-16 md:mt-20">
        <p className="text-lg text-slate-600">Нужна консультация или расчёт стоимости?</p>
        <p className="mt-3 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center items-center">
          {PHONES.map((phone) => (
            <PhoneLink
              key={phone.tel}
              tel={phone.tel}
              source="services"
              className="text-2xl sm:text-3xl font-semibold text-emerald-600 hover:text-emerald-700"
            >
              {phone.display}
            </PhoneLink>
          ))}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <WhatsAppLink
            source="services"
            text="Здравствуйте! Нужна консультация по металлоизделиям."
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-2xl transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Написать в WhatsApp
          </WhatsAppLink>
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center bg-white border border-slate-300 hover:bg-slate-50 font-semibold px-8 py-4 rounded-2xl transition-colors"
          >
            Смотреть каталог
          </Link>
        </div>
      </div>
    </div>
  );
}
