import Link from 'next/link';
import Image from 'next/image';
import WhatsAppLink from './WhatsAppLink';
import WhatsAppIcon from './WhatsAppIcon';

// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative min-h-[460px] md:min-h-[620px] flex items-center bg-slate-900 text-white overflow-hidden">
      {/* Фон: фото продукции, сильно приглушённое — даёт глубину и не мешает тексту */}
      <Image
        src="/images/products/anker-shayba.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        quality={45}
        className="object-cover opacity-25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-800/95"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-10 md:pt-24 md:pb-16 text-center">
        <p className="text-sm sm:text-base uppercase tracking-[0.18em] text-emerald-300/90 mb-4">
          Собственное производство в Бишкеке с 2009 года
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 md:mb-6">
          Производство металлоизделий
          <br className="hidden sm:block" /> в Бишкеке
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
          Анкерные болты, шайбы, ванночки для сварки, тайроты и металлопрокат
          <br className="hidden md:block" /> напрямую от производителя
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/catalog"
            className="bg-white text-slate-900 font-semibold text-lg px-10 py-4 rounded-2xl hover:bg-slate-100 transition w-full sm:w-auto text-center"
          >
            Смотреть каталог
          </Link>

          <WhatsAppLink
            source="hero"
            className="flex items-center justify-center gap-2 border border-white/70 hover:bg-white/10 font-semibold text-lg px-10 py-4 rounded-2xl transition w-full sm:w-auto text-center"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Написать в WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
