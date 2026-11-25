import { FOUNDING_YEAR, TEAM_SIZE } from '@/data/site';
import { Factory, Ruler, Timer, Truck } from '@phosphor-icons/react/dist/ssr';

export default function Advantages() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Коротко о цехе</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            {
              Icon: Factory,
              title: `Свой цех с ${FOUNDING_YEAR} года`,
              text: `${TEAM_SIZE}, плазма и лазер. Режем и варим сами, без перекупщиков.`,
            },
            {
              Icon: Timer,
              title: "100–200 штук в день",
              text: "Столько шайб или ванночек делаем за день. Нестандарт по чертежу за 1–5 дней.",
            },
            {
              Icon: Truck,
              title: "Склад на Профсоюзной 2/1",
              text: "Забирайте сами или привезём по Бишкеку и регионам.",
            },
            {
              Icon: Ruler,
              title: "По вашему эскизу",
              text: "Хватит рисунка от руки с размерами: диаметр, длина, отверстия.",
            },
          ].map((item) => (
            <div key={item.title} className="min-w-0 bg-white p-5 sm:p-8 rounded-3xl text-center card-hover">
              <div className="mx-auto mb-4 sm:mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-800">
                <item.Icon className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-base sm:text-xl break-words">{item.title}</h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}