// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative min-h-[460px] md:min-h-[620px] flex items-center bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-10 md:pt-24 md:pb-16 text-center relative z-10">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 md:mb-6">
          Производство металлоизделий<br className="hidden sm:block" /> в Бишкеке
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
          Анкерные болты, шайбы, ванночки сварки, тайроты и металлопрокат<br className="hidden md:block" />
          напрямую от производителя
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/catalog" 
            className="bg-white text-slate-900 font-semibold text-lg px-10 py-4 rounded-2xl hover:bg-slate-100 transition w-full sm:w-auto text-center"
          >
            Смотреть каталог
          </a>
          
          <a 
            href="https://wa.me/996706646264" 
            target="_blank"
            className="border border-white/70 hover:bg-white/10 font-semibold text-lg px-10 py-4 rounded-2xl transition w-full sm:w-auto text-center"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}