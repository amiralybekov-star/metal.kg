'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="ИП Райымжанов" 
            width={160} 
            height={160} 
            className="h-12 md:h-14 w-auto object-contain flex-shrink-0"
            priority
          />
          <div className="leading-tight hidden sm:block">
            <div className="text-[10px] md:text-xs text-slate-500">
              Металлопрокат • Производство
            </div>
          </div>
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-blue-700 transition-colors">Главная</Link>
          <Link href="/catalog" className="hover:text-blue-700 transition-colors">Каталог</Link>
          <Link href="/services" className="hover:text-blue-700 transition-colors">Услуги</Link>
          <Link href="/about" className="hover:text-blue-700 transition-colors">О компании</Link>
          <Link href="/contacts" className="hover:text-blue-700 transition-colors">Контакты</Link>
        </nav>

        {/* Правый блок */}
        <div className="flex items-center gap-3">
          {/* WhatsApp кнопка */}
          <a 
            href="https://wa.me/996706646264" 
            target="_blank"
            className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-2xl text-sm font-semibold transition-colors"
          >
            <span className="text-xl">💬</span>
            WhatsApp
          </a>

          {/* Кнопка звонка на мобильных */}
          <a 
            href="tel:+996706646264" 
            className="md:hidden bg-green-500 hover:bg-green-600 text-white p-3 rounded-2xl transition-colors"
          >
            📞
          </a>

          {/* Мобильное меню */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="md:hidden p-3 text-2xl"
            aria-label="Открыть меню"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-6 text-lg font-medium">
            <Link href="/" className="py-4 border-b" onClick={() => setMobileOpen(false)}>Главная</Link>
            <Link href="/catalog" className="py-4 border-b" onClick={() => setMobileOpen(false)}>Каталог</Link>
            <Link href="/services" className="py-4 border-b" onClick={() => setMobileOpen(false)}>Услуги</Link>
            <Link href="/about" className="py-4 border-b" onClick={() => setMobileOpen(false)}>О компании</Link>
            <Link href="/contacts" className="py-4 border-b" onClick={() => setMobileOpen(false)}>Контакты</Link>

            <div className="pt-6">
              <a 
                href="https://wa.me/996706646264" 
                target="_blank"
                className="block bg-green-500 text-white text-center py-4 rounded-2xl font-semibold text-lg"
                onClick={() => setMobileOpen(false)}
              >
                Написать в WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}