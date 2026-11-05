import Link from 'next/link';
import Image from 'next/image';
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

      {/* Категории — фото на фоне, чтобы было понятно без чтения */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">
          Каталог продукции
        </h2>
        <p className="text-center text-slate-600 mb-8 md:mb-10 max-w-2xl mx-auto">
          Семь категорий собственного производства — от анкерных шайб до закладных деталей по чертежам
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {navCategories.map((category) => {
            const items = products.filter((p) => p.category === category.id);
            const prices = items
              .map((p) => p.priceCash ?? p.price ?? 0)
              .filter((price) => price > 0);
            const from = prices.length > 0 ? Math.min(...prices) : null;

            return (
              <Link
                key={category.id}
                href={`/catalog/${category.id}`}
                className="group relative block aspect-[4/3] rounded-3xl overflow-hidden bg-slate-200 hover:shadow-xl transition-shadow"
              >
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/45 to-slate-900/5"
                />

                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                  <h3 className="text-white font-semibold text-xl sm:text-2xl leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-slate-200 text-sm mt-1.5">
                    {items.length > 0 ? `${items.length} ${plural(items.length)}` : 'Под заказ'}
                    {from !== null && ` · от ${from} сом`}
                  </p>
                </div>
              </Link>
            );
          })}

          {/* Восьмая карточка закрывает сетку и ловит запросы «по чертежу» */}
          <Link
            href="/contacts"
            className="group relative block aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 hover:shadow-xl transition-shadow"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.25),transparent_60%)]"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
              <h3 className="text-white font-semibold text-xl sm:text-2xl leading-tight">
                Не нашли нужное?
              </h3>
              <p className="text-slate-300 text-sm mt-1.5">
                Изготовим по вашему чертежу — пришлите эскиз в WhatsApp
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-emerald-300 text-sm font-medium">
                Обсудить заказ
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </Link>
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
              <p className="text-slate-600 text-[15px] sm:text-base">Цена формируется на производстве — без наценки посредников и перекупщиков.</p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-lg sm:text-xl mb-2">Быстрые сроки</h4>
              <p className="text-slate-600 text-[15px] sm:text-base">Стандартные позиции в наличии, изделия на заказ — от 1 до 5 дней.</p>
            </div>
          </div>

          <p className="text-[17px] sm:text-lg leading-relaxed mb-10">
            Мы обеспечиваем строительные компании, подрядчиков и частных застройщиков
            крепежом по всей территории Кыргызстана. Стандартные изделия изготавливаем
            по ГОСТ, нестандартные — по чертежам и размерам заказчика.
          </p>

          <h3 className="text-2xl sm:text-3xl mt-10 mb-5">Условия работы</h3>
          <ul className="space-y-3 text-[17px] sm:text-lg mb-12">
            <li><strong aria-hidden="true">✅</strong> Изготовление по ГОСТ и ТУ, нестандарт — по чертежу</li>
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
