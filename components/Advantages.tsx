export default function Advantages() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Наши преимущества</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: "🏭", title: "Собственное производство" },
            { icon: "⚡", title: "Быстрое изготовление" },
            { icon: "🇰🇬", title: "Доставка по Кыргызстану" },
            { icon: "📏", title: "Индивидуальные размеры" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl text-center card-hover">
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="font-semibold text-xl">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}