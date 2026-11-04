# metal.kg — сайт ИП Райымжанов

Сайт производителя металлоизделий в Бишкеке: анкерные болты и шпильки, анкерные шайбы АШ,
ванночки для сварки, тайроты, муфты для арматуры, закладные детали, телескопические стойки.

Прод: [metal.kg](https://metal.kg) · Хостинг: Vercel · Код: этот репозиторий (ветка `main` деплоится автоматически).

## Стек

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS 4** (через `@tailwindcss/postcss`)
- Шрифт Inter подключается через `next/font/google` (без внешних `<link>`)
- Аналитика: gtag.js + Google Ads (`AW-18302346521`)

## Запуск

```bash
npm install
npm run dev        # http://localhost:3000
```

Проверки перед пушем:

```bash
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # прод-сборка
```

## Переменные окружения

| Переменная | Назначение | По умолчанию |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Базовый URL для canonical, OG и sitemap | `https://metal.kg` |

Скопируйте `.env.example` в `.env.local` и поменяйте значение, если сайт открывается по другому домену
(например, на preview-деплое Vercel).

## Структура

```
app/
  layout.tsx              метаданные, JSON-LD, gtag, шапка/подвал
  page.tsx                главная
  catalog/page.tsx        каталог (серверная страница + клиентский поиск)
  catalog/[category]/     страницы категорий: SEO-метаданные, хлебные крошки, JSON-LD
  services/page.tsx       услуги
  about/page.tsx          о компании
  contacts/page.tsx       контакты, форма, карта
  sitemap.ts, robots.ts   генерируются на встроенных средствах Next
  not-found.tsx           404
components/
  ProductCard.tsx         карточка товара (валидная разметка, без кнопки внутри ссылки)
  CatalogClient.tsx       поиск по каталогу
  WhatsAppLink.tsx        ссылка на WhatsApp + событие в gtag
  PhoneLink.tsx           tel:-ссылка + событие в gtag
  WhatsAppIcon.tsx        иконка WhatsApp (inline SVG)
data/
  products.ts             товары
  catalog.ts              категории, названия, SEO-описания
  contacts.ts             телефоны, адрес, ссылки WhatsApp и карты
  site.ts                 домен и название сайта
lib/analytics.ts          отправка событий и конверсий в Google Ads
```

## Как править контент

- **Товар** — `data/products.ts`. `category` должен совпадать с `id` из `data/catalog.ts`,
  иначе товар не попадёт на страницу категории. `priceCash` — цена за наличные,
  `priceBarter` — по бартеру, `pricePerKg` — цена за килограмм.
- **Категория** — `data/catalog.ts`: `id`, `name`, `description` (идёт в title/description страницы).
  Страницы категорий и sitemap строятся из этого списка автоматически.
- **Телефоны, адрес** — `data/contacts.ts`. Номер WhatsApp задаётся один раз в `WHATSAPP_NUMBER`.
- **Фото** — `public/images/products/`. Сейчас у товаров одной категории общая картинка;
  для доверия и для картинок в поиске лучше заменить на реальные фото.

## Конверсии Google Ads

Клики по WhatsApp и телефонам отправляют события `whatsapp_click` / `phone_click`.
Чтобы они засчитывались как конверсии:

1. В Google Ads создайте действия-конверсии «Клик по WhatsApp» и «Звонок».
2. Возьмите метки вида `AW-18302346521/AbC-D_efGhIjKl`.
3. Вставьте их в `lib/analytics.ts` → `CONVERSION_LABELS`.

Пока метки пустые, события уходят в gtag, но конверсии в Ads не засчитываются.

## Деплой

Пуш в `main` → Vercel собирает и выкатывает автоматически. После изменения домена
перегенерируйте sitemap (он собирается на билде) и отправьте его в Google Search Console:
`https://metal.kg/sitemap.xml`.
