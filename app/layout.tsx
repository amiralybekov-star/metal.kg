import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/data/site';
import { ADDRESS, PHONES, WHATSAPP_NUMBER } from '@/data/contacts';

// Inter, ужатый до кириллицы + латиницы (120 КБ, оси 100–900).
// Свой файл вместо next/font/google: сборка на Vercel падала на резолве
// внутреннего модуля Google-шрифтов под Turbopack, плюс нет внешнего запроса.
const inter = localFont({
  src: './fonts/inter-var.woff2',
  weight: '100 900',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
});

const TITLE = 'Металлоизделия в Бишкеке от производителя — анкерные болты и шайбы';
const DESCRIPTION =
  'Производим анкерные болты и шайбы АШ, ванночки для сварки, тайроты, муфты и закладные детали. Цены от производителя, склад в Бишкеке, доставка по Кыргызстану.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'анкерные болты Бишкек',
    'анкерные шайбы Бишкек',
    'ванночки для сварки Бишкек',
    'тайроты Бишкек',
    'металлопрокат Бишкек',
    'плазменная резка Бишкек',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ru_KG',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Металлоизделия в Бишкеке — производство и цены | ИП Райымжанов',
    description: DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ИП Райымжанов — производство металлоизделий в Бишкеке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: SITE_NAME,
      description: `${SITE_TAGLINE}. ${DESCRIPTION}`,
      url: SITE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      logo: `${SITE_URL}/logo-512.png`,
      telephone: PHONES[0].tel,
      priceRange: 'сом',
      currenciesAccepted: 'KGS',
      paymentAccepted: 'Наличные, бартер',
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.district,
        addressCountry: 'KG',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '08:00',
          closes: '18:00',
        },
      ],
      sameAs: [`https://wa.me/${WHATSAPP_NUMBER}`],
      hasMap: 'https://2gis.kg/bishkek/geo/15763234351075282',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'ru-KG',
      publisher: { '@id': `${SITE_URL}/#business` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {/* Google tag (gtag.js) — реклама Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18302346521"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18302346521');
          `}
        </Script>

        <script
          type="application/ld+json"
          // JSON-LD для поиска: карточка организации и сайта
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Header />
        <main className="pb-6">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
