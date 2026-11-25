import { Metadata } from 'next';
import { CAPACITY, FOUNDING_YEAR, SITE_URL, TEAM_SIZE } from '@/data/site';
import { pageOpenGraph } from '@/lib/seo';
import { Factory, Package, SealCheck, Truck } from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = {
  title: "О компании ИП Райымжанов — металлоизделия с 2009 года",
  description: "Цех ИП Райымжанов в Бишкеке с 2009 года: 6–7 человек, плазменная и лазерная резка, 100–200 шайб или ванночек в день. Анкерные болты, шайбы, ванночки, тайроты, закладные.",
  keywords: ["производство металлоизделий Бишкек", "анкерные болты Бишкек", "анкерные шайбы", "закладные детали", "тайроты", "ванночки для сварки", "металлоизделия Кыргызстан", "ИП Райымжанов"],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: pageOpenGraph({
    title: "ИП Райымжанов — Производство металлоизделий в Бишкеке",
    description: "Собственное производство строительного крепежа и металлоизделий в Бишкеке с 2009 года.",
    url: `${SITE_URL}/about`,
  }),
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          ИП Райымжанов — металлоизделия для стройки в Бишкеке
        </h1>
        <p className="text-2xl text-slate-600">Свой цех на Профсоюзной 2/1 с {FOUNDING_YEAR} года</p>
      </div>

      <div className="space-y-8 text-lg text-slate-600 max-w-4xl mx-auto">
        <p>
          Мы делаем то, без чего не залить фундамент и не собрать монолитный каркас:
          <strong> анкерные болты и шпильки, анкерные шайбы, ванночки для сварки, тайроты, муфты
          для арматуры, закладные детали</strong> и телескопические стойки.
        </p>

        <p>
          Цех небольшой, в нём {TEAM_SIZE}. Металл режем на плазме и лазере, дальше гнём, сверлим,
          нарезаем резьбу и варим сами. За день выходит {CAPACITY}, поэтому ходовые размеры обычно
          лежат на складе, а нестандарт по чертежу делаем за 1–5 дней.
        </p>

        <p>
          Стандартные изделия делаем по ГОСТ, остальное по чертежу или эскизу заказчика, хоть от
          одной штуки. Покупают у нас строительные компании и подрядчики, которым нужна партия на
          объект, и частники, которые строят свой дом. Продаём напрямую из цеха, без перекупщиков.
        </p>

        <div className="grid md:grid-cols-2 gap-6 pt-6">
          <div className="bg-slate-50 p-6 rounded-3xl">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-700"><Factory className="w-7 h-7" aria-hidden="true" /></div>
            <h3 className="font-semibold text-xl mb-2">Плазма и лазер</h3>
            <p className="text-slate-600">Режем лист сами, поэтому можем сделать пластину или шайбу любого размера.</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-700"><SealCheck className="w-7 h-7" aria-hidden="true" /></div>
            <h3 className="font-semibold text-xl mb-2">По ГОСТ и по чертежу</h3>
            <p className="text-slate-600">Шайбы АШ-2…АШ-8 и ванночки d-18…d-32 по ГОСТ, остальное по вашим размерам.</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-700"><Package className="w-7 h-7" aria-hidden="true" /></div>
            <h3 className="font-semibold text-xl mb-2">100–200 штук в день</h3>
            <p className="text-slate-600">Столько шайб или ванночек успеваем сделать за смену. Партию на объект соберём быстро.</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-700"><Truck className="w-7 h-7" aria-hidden="true" /></div>
            <h3 className="font-semibold text-xl mb-2">Самовывоз и доставка</h3>
            <p className="text-slate-600">Склад на Профсоюзной 2/1, работаем Пн–Сб с 8:00 до 18:00. Возим по Бишкеку и регионам.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
