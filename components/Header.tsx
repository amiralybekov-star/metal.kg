'use client';
import Link from 'next/link';
import { useState } from 'react';
import WhatsAppLink from './WhatsAppLink';
import WhatsAppIcon from './WhatsAppIcon';
import PhoneLink from './PhoneLink';
import { PHONES } from '@/data/contacts';

const navItems = [
  { href: '/', label: 'Главная' },
  { href: '/catalog', label: 'Каталог' },
  { href: '/services', label: 'Услуги' },
  { href: '/about', label: 'О компании' },
  { href: '/contacts', label: 'Контакты' },
];

const MAIN_PHONE = PHONES[1];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Логотип */}
        <Link href="/" aria-label="ИП Райымжанов — на главную" className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-900 rounded-2xl flex items-center justify-center text-white text-2xl md:text-3xl font-bold flex-shrink-0">
            Р
          </div>
          <div className="leading-tight">
            <div className="font-bold text-xl md:text-2xl">ИП Райымжанов</div>
            <div className="text-[10px] md:text-xs text-slate-500 -mt-0.5">
              Металлопрокат • Производство
            </div>
          </div>
        </Link>

        {/* Десктопное меню */}
        <nav
          aria-label="Основная навигация"
          className="hidden lg:flex items-center gap-8 text-sm font-medium"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-700 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Правый блок */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <WhatsAppLink
            source="header"
            className="hidden lg:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-2xl text-sm font-semibold transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp
          </WhatsAppLink>

          {/* Кнопка звонка на мобильных */}
          <PhoneLink
            tel={MAIN_PHONE.tel}
            source="header_mobile"
            ariaLabel={`Позвонить по номеру ${MAIN_PHONE.display}`}
            className="lg:hidden bg-green-500 hover:bg-green-600 text-white p-3 rounded-2xl transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
            </svg>
          </PhoneLink>

          {/* Мобильное меню */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-3 text-2xl"
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t">
          <nav
            aria-label="Мобильная навигация"
            className="flex flex-col px-6 py-6 text-lg font-medium"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-4 border-b"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-6">
              <WhatsAppLink
                source="header_mobile_menu"
                className="flex items-center justify-center gap-2 bg-green-500 text-white text-center py-4 rounded-2xl font-semibold text-lg"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Написать в WhatsApp
              </WhatsAppLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
