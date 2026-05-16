import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />

      {/* Большой SEO-блок — оптимизирован под мобильные устройства */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-20 overflow-hidden">
        <div className="prose prose-slate max-w-none text-slate-600 prose-headings:font-semibold">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 leading-[1.1]">
            Анкерные болты, шайбы и металлоизделия в Бишкеке — напрямую от производителя
          </h1>

          <p className="text-[17px] sm:text-lg leading-relaxed mb-10">
            <strong>ИП Райымжанов</strong> — современное производственное предприятие в Бишкеке, 
            специализирующееся на изготовлении высококачественного строительного крепежа и металлоизделий.
          </p>

          <h2 className="text-2xl sm:text-3xl mt-10 mb-5">Что мы производим</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[17px] sm:text-lg mb-12">
            <li>✓ Анкерные болты и шпильки</li>
            <li>✓ Анкерные шайбы АШ всех размеров</li>
            <li>✓ Ванночки для сварки (новый ГОСТ)</li>
            <li>✓ Тайроты (тяжелые и облегченные)</li>
            <li>✓ Закладные детали</li>
            <li>✓ Муфты для арматуры</li>
            <li>✓ Стойки телескопические для опалубки</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl mt-10 mb-5">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100">
              <h3 className="font-semibold text-lg sm:text-xl mb-2">Собственное производство</h3>
              <p className="text-slate-600 text-[15px] sm:text-base">Полный цикл изготовления в Бишкеке. Работаем с 2009 года.</p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100">
              <h3 className="font-semibold text-lg sm:text-xl mb-2">Выгодные цены</h3>
              <p className="text-slate-600 text-[15px] sm:text-base">Прямые поставки без посредников — одни из лучших цен в Кыргызстане.</p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100">
              <h3 className="font-semibold text-lg sm:text-xl mb-2">Быстрые сроки</h3>
              <p className="text-slate-600 text-[15px] sm:text-base">Стандартные позиции в наличии, изделия на заказ — от 1 до 5 дней.</p>
            </div>
          </div>

          <p className="text-[17px] sm:text-lg leading-relaxed mb-10">
            Мы обеспечиваем строительные компании, подрядчиков и частных застройщиков 
            качественным крепежом по всей территории Кыргызстана. Все изделия соответствуют 
            требованиям ГОСТ и проходят строгий контроль качества.
          </p>

          <h2 className="text-2xl sm:text-3xl mt-10 mb-5">Наши преимущества</h2>
          <ul className="space-y-3 text-[17px] sm:text-lg mb-12">
            <li><strong>✅</strong> Полное соответствие ГОСТ и ТУ</li>
            <li><strong>✅</strong> Изготовление по вашим чертежам и размерам</li>
            <li><strong>✅</strong> Оптовые поставки крупным объектам</li>
            <li><strong>✅</strong> Самовывоз со склада в Бишкеке (Профсоюзная 2/1)</li>
            <li><strong>✅</strong> Возможность бартера</li>
          </ul>

          {/* CTA блок */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 text-center mt-8">
            <p className="text-xl sm:text-2xl font-semibold leading-tight mb-3">
              Нужны анкерные болты, шайбы или закладные детали в Бишкеке?
            </p>
            <p className="text-lg sm:text-xl text-slate-600">Звоните или пишите — ответим оперативно!</p>
          </div>
        </div>
      </section>
    </>
  );
}