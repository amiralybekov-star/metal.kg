import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import WhatsAppLink from '@/components/WhatsAppLink';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import PhoneLink from '@/components/PhoneLink';
import { ADDRESS, MAP_EMBED_URL, PHONES, TWO_GIS_URL, WHATSAPP_NUMBER, WORK_HOURS } from '@/data/contacts';
import { SITE_URL } from '@/data/site';

export const metadata: Metadata = {
  title: 'Контакты — +996 779 592 026 | ИП Райымжанов, Профсоюзная 2/1, Бишкек',
  description:
    'Контакты ИП Райымжанов: +996 779 592 026, +996 706 646 264. Адрес: Профсоюзная 2/1, Бишкек. Производство анкерных болтов, шайб и металлоизделий.',
  keywords: [
    'контакты Бишкек',
    'ИП Райымжанов',
    'анкерные болты Бишкек',
    'металлоизделия Бишкек',
    'Профсоюзная 2/1',
    'производство Бишкек',
  ],
  alternates: { canonical: `${SITE_URL}/contacts` },
  openGraph: {
    title: 'Контакты ИП Райымжанов — Металлоизделия Бишкек',
    description:
      'Звоните или пишите нам: +996 779 592 026, +996 706 646 264. Самовывоз со склада в Бишкеке.',
    url: `${SITE_URL}/contacts`,
  },
};

export default function ContactsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Контакты ИП Райымжанов
        </h1>
        <p className="text-lg sm:text-xl text-slate-600">Производство металлоизделий в Бишкеке</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Блок контактов */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Наши контакты</h2>

          <div className="space-y-8 text-lg">
            <div>
              <p className="font-medium text-slate-500 mb-3">Телефоны:</p>
              {PHONES.map((phone) => (
                <PhoneLink
                  key={phone.tel}
                  tel={phone.tel}
                  source="contacts"
                  className="block text-2xl font-semibold hover:text-blue-600 transition-colors"
                >
                  {phone.display}
                </PhoneLink>
              ))}
            </div>

            <div>
              <p className="font-medium text-slate-500 mb-3">Адрес производства и склада:</p>
              <p className="text-xl font-medium">
                {ADDRESS.street}, {ADDRESS.city}
              </p>
              <p className="text-slate-500">{ADDRESS.district}</p>
            </div>

            <div>
              <p className="font-medium text-slate-500 mb-3">Режим работы:</p>
              <p>{WORK_HOURS}</p>
            </div>

            <div className="pt-4 space-y-4">
              <WhatsAppLink
                source="contacts_page"
                phone={WHATSAPP_NUMBER}
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-center py-5 rounded-3xl text-xl font-semibold transition-colors"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Написать в WhatsApp
              </WhatsAppLink>

              <a
                href={TWO_GIS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border border-slate-300 hover:bg-slate-50 py-4 rounded-3xl font-medium"
              >
                Открыть на 2GIS →
              </a>
            </div>
          </div>
        </div>

        {/* Форма обратной связи */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Напишите нам</h2>
          <ContactForm />
        </div>
      </div>

      {/* Карта */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Как нас найти</h2>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Карта: ${ADDRESS.street}, ${ADDRESS.city}`}
            className="w-full h-[400px] sm:h-[500px]"
          ></iframe>
          <div className="absolute bottom-6 left-6 bg-white px-6 py-4 rounded-2xl shadow-lg">
            <p className="font-semibold">
              {ADDRESS.street}, {ADDRESS.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
