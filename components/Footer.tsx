import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center text-blue-900 text-3xl font-bold">Р</div>
              <div className="text-white font-bold text-xl">ИП Райымжанов</div>
            </div>
            <p className="text-sm">Производство металлоизделий в Бишкеке с 2009 года.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Продукция</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/catalog" className="hover:text-white">Анкерные болты</Link></li>
              <li><Link href="/catalog" className="hover:text-white">Анкерные шайбы</Link></li>
              <li><Link href="/catalog" className="hover:text-white">Ванночки для сварки</Link></li>
              <li><Link href="/catalog" className="hover:text-white">Тайроты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+996706646264" className="hover:text-white">+996 706 646 264</a><br />
              <a href="tel:+996779592026" className="hover:text-white">+996 779 592 026</a><br />
              <div>Профсоюзная 2/1, Бишкек</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Мы в мессенджерах</h4>
            <a href="https://wa.me/996706646264" target="_blank" className="text-4xl hover:text-green-500 transition-colors">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="text-center text-xs pt-12 border-t border-slate-800 mt-12">
          © 2026 ИП Райымжанов. Все права защищены.
        </div>
      </div>
    </footer>
  );
}