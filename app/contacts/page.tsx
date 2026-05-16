import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Контакты | ИП Райымжанов — Производство металлоизделий в Бишкеке",
  description: "Контакты ИП Райымжанов: +996 779 592 026, +996 706 646 264. Адрес: Профсоюзная 2/1, Бишкек. Производство анкерных болтов, шайб и металлоизделий.",
  keywords: ["контакты Бишкек", "ИП Райымжанов", "анкерные болты Бишкек", "металлоизделия Бишкек", "Профсоюзная 2/1", "производство Бишкек"],
  openGraph: {
    title: "Контакты ИП Райымжанов — Металлоизделия Бишкек",
    description: "Звоните или пишите нам: +996 779 592 026, +996 706 646 264. Самовывоз со склада в Бишкеке.",
    images: [{ url: "/images/map.jpg" }],
  },
};

export default function ContactsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Контакты ИП Райымжанов</h1>
        <p className="text-xl text-slate-600">Производство металлоизделий в Бишкеке</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Блок контактов */}
        <div>
          <div className="bg-white p-10 rounded-3xl shadow-sm">
            <h2 className="text-3xl font-semibold mb-8">Наши контакты</h2>
            
            <div className="space-y-8 text-lg">
              <div>
                <p className="font-medium text-slate-500 mb-3">Телефоны:</p>
                <a href="tel:+996779592026" className="block text-2xl font-semibold hover:text-blue-600 transition-colors">
                  +996 779 592 026
                </a>
                <a href="tel:+996706646264" className="block text-2xl font-semibold hover:text-blue-600 transition-colors">
                  +996 706 646 264
                </a>
              </div>

              <div>
                <p className="font-medium text-slate-500 mb-3">Адрес производства и склада:</p>
                <p className="text-xl font-medium">Профсоюзная 2/1, Бишкек</p>
                <p className="text-slate-500">Первомайский район</p>
              </div>

              <div>
                <p className="font-medium text-slate-500 mb-3">Режим работы:</p>
                <p>Пн — Сб: 08:00 — 18:00</p>
              </div>

              <div className="pt-4 space-y-4">
                <a 
                  href="https://wa.me/996779592026" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-green-500 hover:bg-green-600 text-white text-center py-5 rounded-3xl text-xl font-semibold transition-colors"
                >
                  Написать в WhatsApp
                </a>

                <a 
                  href="https://2gis.kg/bishkek/geo/15763234351075282" 
                  target="_blank"
                  className="block text-center border border-slate-300 hover:bg-slate-50 py-4 rounded-3xl font-medium"
                >
                  Открыть на 2GIS →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Форма обратной связи */}
        <div className="bg-white p-10 rounded-3xl shadow-sm">
          <h2 className="text-3xl font-semibold mb-6">Напишите нам</h2>
          <form className="space-y-6">
            <input type="text" placeholder="Ваше имя" className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-blue-600" required />
            <input type="tel" placeholder="Телефон" className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-blue-600" required />
            <textarea placeholder="Ваше сообщение (можно указать, какие изделия интересуют)" rows={5} className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-blue-600" required></textarea>
            
            <button 
              type="submit" 
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-5 rounded-3xl font-semibold text-lg transition-colors"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </div>

      {/* Карта */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-center">Как нас найти</h3>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src="/images/map.jpg" 
            alt="Карта расположения ИП Райымжанов — Профсоюзная 2/1, Бишкек"
            width={1200}
            height={500}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-white px-6 py-4 rounded-2xl shadow-lg">
            <p className="font-semibold">Профсоюзная 2/1, Бишкек</p>
          </div>
        </div>
      </div>
    </div>
  );
}