import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <p className="text-emerald-600 font-semibold text-lg mb-2">404</p>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Страница не найдена</h1>
      <p className="text-lg text-slate-600 mb-8">
        Возможно, страница переехала. Посмотрите каталог продукции или свяжитесь с нами.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/catalog"
          className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-2xl transition-colors"
        >
          В каталог
        </Link>
        <Link
          href="/contacts"
          className="inline-flex items-center justify-center bg-white border border-slate-300 hover:bg-slate-50 font-semibold px-8 py-4 rounded-2xl transition-colors"
        >
          Контакты
        </Link>
      </div>
    </div>
  );
}
