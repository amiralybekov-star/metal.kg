import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ 
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'ИП Райымжанов — Анкерные болты, металлопрокат и изделия из металла в Бишкеке',
  description: 'Производство анкерных болтов, анкерных шайб, ванночек для сварки, тайротов. Плазменная резка металла в Бишкеке. Доставка по всему Кыргызстану.',
  keywords: ['анкерные болты Бишкек', 'анкерные шайбы Бишкек', 'ванночки для сварки Бишкек', 'тайроты Бишкек', 'металлопрокат Бишкек', 'плазменная резка Бишкек'],
  openGraph: {
    title: 'ИП Райымжанов — Производство металлоизделий в Кыргызстане',
    images: [{ url: '/og-image.jpg' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}