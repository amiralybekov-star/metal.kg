'use client';

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-20">
      
      {/* Заголовок страницы */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Услуги завода металлоизделий в Бишкеке
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Производство и поставка анкерных болтов, анкерных шайб, тайротов, 
          ванночек для сварки и других металлоизделий в Кыргызстане
        </p>
      </div>

      {/* Карточки услуг */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-10">
        
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
            Изготовление анкерных болтов и шпилек
          </h2>
          <p className="text-slate-600 mb-6 text-[17px] sm:text-base">
            Производим анкерные болты и фундаментные шпильки любых размеров и длин по ГОСТ и по чертежам заказчика.
          </p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-[17px] sm:text-base text-slate-600">
            <li>Анкерные болты для фундамента</li>
            <li>Анкерные шпильки</li>
            <li>Оцинкованные и чёрные</li>
            <li>Оптовые партии от 100 шт.</li>
          </ul>
        </div>

        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
            Анкерные шайбы (АШ)
          </h2>
          <p className="text-slate-600 mb-6 text-[17px] sm:text-base">
            Изготовление усиленных анкерных шайб АШ-8, АШ-7, АШ-6 и других размеров.
          </p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-[17px] sm:text-base text-slate-600">
            <li>Для арматуры Ø16–Ø32 мм</li>
            <li>Размеры 50×50 до 90×90 мм</li>
            <li>Высокая несущая способность</li>
          </ul>
        </div>

        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
            Ванночки для сварки арматуры
          </h2>
          <p className="text-slate-600 text-[17px] sm:text-base">
            Производим ванночки для сварки арматуры по новому ГОСТ. 
            Все диаметры от d-18 до d-32 мм.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
            Тайроты и телескопические стойки
          </h2>
          <p className="text-slate-600 text-[17px] sm:text-base">
            Изготовление тайротов (тяжей опалубки) и телескопических стоек для монолитного строительства.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
            Изготовление по чертежам
          </h2>
          <p className="text-slate-600 text-[17px] sm:text-base">
            Закладные детали, нестандартные анкеры, металлоконструкции любой сложности.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
            Плазменная резка и металлообработка
          </h2>
          <p className="text-slate-600 text-[17px] sm:text-base">
            Плазменная резка, гибка, сварка, сверление, нарезка резьбы.
          </p>
        </div>
      </div>

      {/* SEO-блок */}
      <div className="mt-16 md:mt-20 bg-slate-50 p-8 md:p-10 rounded-3xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
          Почему выбирают нас в Бишкеке?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-3">🏭</div>
            <p className="font-medium text-lg">Собственное производство</p>
          </div>
          <div>
            <div className="text-4xl mb-3">📍</div>
            <p className="font-medium text-lg">Склад и цех в Бишкеке</p>
          </div>
          <div>
            <div className="text-4xl mb-3">⚡</div>
            <p className="font-medium text-lg">Быстрое изготовление</p>
          </div>
        </div>
      </div>

      {/* Контакты */}
      <div className="text-center mt-16 md:mt-20 text-slate-600">
        <p className="text-lg">Нужна консультация или расчёт стоимости?</p>
        <p className="text-2xl sm:text-3xl font-semibold text-emerald-600 mt-3">
          ☎ 0 779 59 20 26 / 0 706 64 62 64
        </p>
      </div>
    </div>
  );
}