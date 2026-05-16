import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "О нас | ИП Райымжанов — Производство металлоизделий в Бишкеке",
  description: "ИП Райымжанов — собственное производство анкерных болтов, анкерных шайб, ванночек для сварки, тайротов и закладных деталей в Бишкеке с 2009 года. Прямые поставки по выгодным ценам.",
  keywords: ["производство металлоизделий Бишкек", "анкерные болты Бишкек", "анкерные шайбы", "закладные детали", "тайроты", "ванночки для сварки", "металлоизделия Кыргызстан", "ИП Райымжанов"],
  openGraph: {
    title: "ИП Райымжанов — Производство металлоизделий в Бишкеке",
    description: "Собственное производство строительного крепежа и металлоизделий в Бишкеке с 2009 года.",
    images: [{ url: "/images/about-factory.jpg" }], // желательно добавить своё фото
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          ИП Райымжанов — Производство металлоизделий в Бишкеке
        </h1>
        <p className="text-2xl text-slate-600">
          Собственное производство с 2009 года
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Левая часть */}
        <div className="space-y-8 text-lg text-slate-600">
          <p>
            <strong>ИП Райымжанов</strong> — современное производственное предприятие в Бишкеке, 
            специализирующееся на изготовлении высококачественного строительного крепежа и металлоизделий.
          </p>

          <p>
            Мы производим: <strong>анкерные болты, анкерные шайбы, ванночки для сварки, тайроты, 
            закладные детали, муфты для арматуры</strong> и другие изделия по ГОСТ и индивидуальным чертежам.
          </p>

          <p>
            За годы работы мы стали надежным поставщиком для крупных строительных компаний, 
            подрядчиков и государственных объектов по всему Кыргызстану.
          </p>

          {/* Преимущества */}
          <div className="grid md:grid-cols-2 gap-6 pt-6">
            <div className="bg-slate-50 p-6 rounded-3xl">
              <div className="text-emerald-600 text-4xl mb-3">🏭</div>
              <h3 className="font-semibold text-xl mb-2">Собственное производство</h3>
              <p className="text-slate-600">Полный цикл от сырья до готовой продукции в Бишкеке</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl">
              <div className="text-emerald-600 text-4xl mb-3">✅</div>
              <h3 className="font-semibold text-xl mb-2">Соответствие ГОСТ</h3>
              <p className="text-slate-600">Строгий контроль качества на каждом этапе</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl">
              <div className="text-emerald-600 text-4xl mb-3">📦</div>
              <h3 className="font-semibold text-xl mb-2">Оптовые поставки</h3>
              <p className="text-slate-600">Выгодные условия для строительных компаний</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl">
              <div className="text-emerald-600 text-4xl mb-3">🚚</div>
              <h3 className="font-semibold text-xl mb-2">Самовывоз и доставка</h3>
              <p className="text-slate-600">Пн–Сб с 8:00 до 18:00</p>
            </div>
          </div>
        </div>

        {/* Правая часть — изображение */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src="/images/about-factory.jpg" 
            alt="Производство металлоизделий ИП Райымжанов в Бишкеке"
            width={700}
            height={500}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Дополнительный блок */}
      <div className="mt-20 bg-slate-50 py-12 px-10 rounded-3xl text-center">
        <p className="text-xl text-slate-700 max-w-3xl mx-auto">
          Прямое производство без посредников позволяет нам предлагать <span className="font-semibold text-emerald-600">одни из самых выгодных цен</span> 
          на рынке Кыргызстана при высоком качестве продукции.
        </p>
      </div>
    </div>
  );
}