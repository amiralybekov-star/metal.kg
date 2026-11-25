import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import WhatsAppLink from '@/components/WhatsAppLink';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { navCategories } from '@/data/catalog';
import { products } from '@/data/products';
import FaqList from '@/components/FaqList';
import { homeFaq } from '@/data/faq';
import { categoryFromPrice } from '@/lib/prices';
import { faqLd } from '@/lib/seo';
import { CAPACITY, FOUNDING_YEAR, TEAM_SIZE } from '@/data/site';
import { ArrowRight, Check, CheckCircle } from '@phosphor-icons/react/dist/ssr';

export default function Home() {
  const faq = homeFaq({
    washer: categoryFromPrice('washer')?.price,
    bath: categoryFromPrice('bath')?.price,
    foundation: categoryFromPrice('foundation')?.price,
  });

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
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" weight="bold" aria-hidden="true" />
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
            <strong>ИП Райымжанов</strong> — небольшой цех в Бишкеке на Профсоюзной 2/1. Работаем
            с {FOUNDING_YEAR} года, в цеху {TEAM_SIZE}, металл режем плазмой и лазером. За день
            делаем {CAPACITY}.
          </p>

          <h3 className="text-2xl sm:text-3xl mt-10 mb-5">Что мы производим</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[17px] sm:text-lg mb-12">
            <li className="flex items-start gap-2.5"><Check className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-600" weight="bold" aria-hidden="true" /><span>Анкерные болты и шпильки</span></li>
            <li className="flex items-start gap-2.5"><Check className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-600" weight="bold" aria-hidden="true" /><span>Анкерные шайбы АШ всех размеров</span></li>
            <li className="flex items-start gap-2.5"><Check className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-600" weight="bold" aria-hidden="true" /><span>Ванночки для сварки (новый ГОСТ)</span></li>
            <li className="flex items-start gap-2.5"><Check className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-600" weight="bold" aria-hidden="true" /><span>Тайроты (тяжелые и облегченные)</span></li>
            <li className="flex items-start gap-2.5"><Check className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-600" weight="bold" aria-hidden="true" /><span>Закладные детали</span></li>
            <li className="flex items-start gap-2.5"><Check className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-600" weight="bold" aria-hidden="true" /><span>Муфты для арматуры</span></li>
            <li className="flex items-start gap-2.5"><Check className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-600" weight="bold" aria-hidden="true" /><span>Стойки телескопические для опалубки</span></li>
          </ul>

          <p className="text-[17px] sm:text-lg leading-relaxed mb-10">
            Берут у нас и строительные компании, которым нужна партия на объект, и частники, которым
            нужен десяток шайб на свой дом. Стандартное делаем по ГОСТ, остальное по вашему чертежу
            или эскизу.
          </p>

          <h3 className="text-2xl sm:text-3xl mt-10 mb-5">Условия работы</h3>
          <ul className="space-y-3 text-[17px] sm:text-lg mb-12">
            <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0 text-emerald-600" aria-hidden="true" /><span>По ГОСТ и ТУ, нестандарт по вашему чертежу</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0 text-emerald-600" aria-hidden="true" /><span>Поштучно для частников, партиями для объектов</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0 text-emerald-600" aria-hidden="true" /><span>Самовывоз со склада на Профсоюзной 2/1, доставка по Бишкеку и регионам</span></li>
            <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0 text-emerald-600" aria-hidden="true" /><span>Оплата наличными, есть бартер</span></li>
          </ul>

          {/* Частые вопросы: видимый текст + разметка FAQPage для поиска и ИИ-ответов */}
          <h3 className="text-2xl sm:text-3xl mt-10 mb-5">Частые вопросы</h3>
          <div className="not-prose mb-12">
            <FaqList items={faq} />
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(faq)) }}
          />

          {/* CTA блок */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 text-center mt-8 not-prose">
            <p className="text-xl sm:text-2xl font-semibold leading-tight mb-3">
              Нужны анкерные болты, шайбы или закладные детали в Бишкеке?
            </p>
            <p className="text-lg sm:text-xl text-slate-600 mb-6">Позвоните, скажем, что есть на складе сегодня.</p>
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
