import Link from 'next/link';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import WhatsAppLink from '@/components/WhatsAppLink';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { navCategories } from '@/data/catalog';
import { products } from '@/data/products';

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />

      {/* Категории — внутренняя перелинковка на страницы каталога */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
          Каталог продукции
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {navCategories.map((category) => {
            const count = products.filter((p) => p.category === category.id).length;
            return (
              <Link
                key={category.id}
                href={`/catalog/${category.id}`}
                className="group bg-white border border-slate-200 rounded-3xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-slate-500">
                  {count > 0 ? `${count} ${plural(count)} в наличии и под заказ` : 'Под заказ'}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Большой SEO-блок — оптимизирован под мобильные устройства */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-20 overflow-hidden">
        <div className="prose prose-slate max-w-none text-slate-600 prose-headings:font-semibold">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 leading-[1.1]">
            Анкерные болты, шайбы и металлоизделия в Бишкеке — напрямую от производителя
          </h2>

          <p className="text-[17px] sm:text-lg leading-relaxed mb-10">
            <strong>ИП Райымжанов</strong> — современное производственное предприятие в Бишкеке,
            специализирующееся на изготовлении высококачественного строительного крепежа и металлоизделий.
          </p>

          <h3 className="text-2xl sm:text-3xl mt-10 mb-5">Что мы производим</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[17px] sm:text-lg mb-12">
            <li>✓ Анкерные болты и шпильки</li>
            <li>✓ Анкерные шайбы АШ всех размеров</li>
            <li>✓ Ванночки для сварки (новый ГОСТ)</li>
            <li>✓ Тайроты (тяжелые и облегченные)</li>
            <li>✓ Закладные детали</li>
            <li>✓ Муфты для арматуры</li>
            <li>✓ Стойки телескопические для опалубки</li>
          </ul>

          <h3 className="text-2xl sm:text-3xl mt-10 mb-5">Почему выбирают нас</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-lg sm:text-xl mb-2">Собственное производство</h4>
              <p className="text-slate-600 text-[15px] sm:text-base">Полный цикл изготовления в Бишкеке. Работаем с 2009 года.</p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-lg sm:text-xl mb-2">Выгодные цены</h4>
              <p className="text-slate-600 text-[15px] sm:text-base">Прямые поставки без посредников — одни из лучших цен в Кыргызстане.</p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-lg sm:text-xl mb-2">Быстрые сроки</h4>
              <p className="text-slate-600 text-[15px] sm:text-base">Стандартные позиции в наличии, изделия на заказ — от 1 до 5 дней.</p>
            </div>
          </div>

          <p className="text-[17px] sm:text-lg leading-relaxed mb-10">
            Мы обеспечиваем строительные компании, подрядчиков и частных застройщиков
            качественным крепежом по всей территории Кыргызстана. Все изделия соответствуют
            требованиям ГОСТ и проходят строгий контроль качества.
          </p>

          <h3 className="text-2xl sm:text-3xl mt-10 mb-5">Условия работы</h3>
          <ul className="space-y-3 text-[17px] sm:text-lg mb-12">
            <li><strong aria-hidden="true">✅</strong> Полное соответствие ГОСТ и ТУ</li>
            <li><strong aria-hidden="true">✅</strong> Изготовление по вашим чертежам и размерам</li>
            <li><strong aria-hidden="true">✅</strong> Оптовые поставки крупным объектам</li>
            <li><strong aria-hidden="true">✅</strong> Самовывоз со склада в Бишкеке (Профсоюзная 2/1)</li>
            <li><strong aria-hidden="true">✅</strong> Возможность бартера</li>
          </ul>

          {/* CTA блок */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 text-center mt-8 not-prose">
            <p className="text-xl sm:text-2xl font-semibold leading-tight mb-3">
              Нужны анкерные болты, шайбы или закладные детали в Бишкеке?
            </p>
            <p className="text-lg sm:text-xl text-slate-600 mb-6">Звоните или пишите — ответим оперативно!</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <WhatsAppLink
                source="home_cta"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-2xl transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Написать в WhatsApp
              </WhatsAppLink>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-2xl transition-colors"
              >
                Контакты и адрес
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function plural(n: number): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return 'позиция';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'позиции';
  return 'позиций';
}
