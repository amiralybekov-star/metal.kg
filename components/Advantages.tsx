export default function Advantages() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Наши преимущества</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            { icon: "🏭", title: "Собственное производство" },
            { icon: "⚡", title: "Быстрое изготовление" },
            { icon: "🇰🇬", title: "Доставка по Кыргызстану" },
            { icon: "📏", title: "Индивидуальные размеры" },
          ].map((item, i) => (
            <div key={i} className="min-w-0 bg-white p-5 sm:p-8 rounded-3xl text-center card-hover">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6" aria-hidden="true">{item.icon}</div>
              <h3 className="font-semibold text-base sm:text-xl break-words">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}