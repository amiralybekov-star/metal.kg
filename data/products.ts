import type { CategoryId } from './catalog';

export type Product = {
  id: number;
  /** Человекочитаемый URL: /catalog/<category>/<slug> */
  slug: string;
  name: string;
  category: CategoryId;
  diameter?: string;
  size?: string;
  priceCash?: number;
  priceBarter?: number;
  unit: string;
  description?: string;
  isOnOrder?: boolean;
  pricePerKg?: boolean;
  price?: number;
  image: string;
};

export const products: Product[] = [
  // ==================== АНКЕРНЫЕ ШАЙБЫ ====================
  {
    id: 1,
    slug: "ankernaya-shayba-ash-8",
    name: "Анкерная шайба АШ-8",
    category: "washer",
    diameter: "d-32",
    size: "90×90 мм",
    priceCash: 170,
    priceBarter: 190,
    unit: "шт",
    description: "Для арматуры Ø32 мм",
    price: 170,
    image: "/images/products/anker-shayba.jpg"
  },
  {
    id: 2,
    slug: "ankernaya-shayba-ash-7",
    name: "Анкерная шайба АШ-7",
    category: "washer",
    diameter: "d-28",
    size: "80×80 мм",
    priceCash: 150,
    priceBarter: 180,
    unit: "шт",
    description: "Для арматуры Ø28 мм",
    price: 150,
    image: "/images/products/anker-shayba.jpg"
  },
  {
    id: 3,
    slug: "ankernaya-shayba-ash-6",
    name: "Анкерная шайба АШ-6",
    category: "washer",
    diameter: "d-25",
    size: "70×70 мм",
    priceCash: 100,
    priceBarter: 115,
    unit: "шт",
    description: "Для арматуры Ø25 мм",
    price: 100,
    image: "/images/products/anker-shayba.jpg"
  },
  {
    id: 4,
    slug: "ankernaya-shayba-ash-5",
    name: "Анкерная шайба АШ-5",
    category: "washer",
    diameter: "d-22",
    size: "65×65 мм",
    priceCash: 85,
    priceBarter: 110,
    unit: "шт",
    description: "Для арматуры Ø22 мм",
    price: 85,
    image: "/images/products/anker-shayba.jpg"
  },
  {
    id: 5,
    slug: "ankernaya-shayba-ash-4",
    name: "Анкерная шайба АШ-4",
    category: "washer",
    diameter: "d-20",
    size: "56×56 мм",
    priceCash: 75,
    priceBarter: 100,
    unit: "шт",
    description: "Для арматуры Ø20 мм",
    price: 75,
    image: "/images/products/anker-shayba.jpg"
  },
  {
    id: 6,
    slug: "ankernaya-shayba-ash-3",
    name: "Анкерная шайба АШ-3",
    category: "washer",
    diameter: "d-18",
    size: "50×50 мм",
    priceCash: 65,
    priceBarter: 90,
    unit: "шт",
    description: "Для арматуры Ø18 мм",
    price: 65,
    image: "/images/products/anker-shayba.jpg"
  },
  {
    id: 7,
    slug: "ankernaya-shayba-ash-2",
    name: "Анкерная шайба АШ-2",
    category: "washer",
    diameter: "d-16",
    size: "50×50 мм",
    priceCash: 65,
    priceBarter: 80,
    unit: "шт",
    description: "Для арматуры Ø16 мм",
    price: 65,
    image: "/images/products/anker-shayba.jpg"
  },

  // ==================== ВАННОЧКИ ====================
  {
    id: 8,
    slug: "vannochka-dlya-svarki-d-32",
    name: "Ванночка для сварки d-32",
    category: "bath",
    diameter: "d-32",
    priceCash: 125,
    priceBarter: 140,
    unit: "шт",
    description: "Новый ГОСТ",
    price: 125,
    image: "/images/products/vannochki.jpg"
  },
  {
    id: 9,
    slug: "vannochka-dlya-svarki-d-28",
    name: "Ванночка для сварки d-28",
    category: "bath",
    diameter: "d-28",
    priceCash: 115,
    priceBarter: 130,
    unit: "шт",
    description: "Новый ГОСТ",
    price: 115,
    image: "/images/products/vannochki.jpg"
  },
  {
    id: 10,
    slug: "vannochka-dlya-svarki-d-25",
    name: "Ванночка для сварки d-25",
    category: "bath",
    diameter: "d-25",
    priceCash: 85,
    priceBarter: 100,
    unit: "шт",
    description: "Новый ГОСТ",
    price: 85,
    image: "/images/products/vannochki.jpg"
  },
  {
    id: 11,
    slug: "vannochka-dlya-svarki-d-22",
    name: "Ванночка для сварки d-22",
    category: "bath",
    diameter: "d-22",
    priceCash: 75,
    priceBarter: 90,
    unit: "шт",
    description: "Новый ГОСТ",
    price: 75,
    image: "/images/products/vannochki.jpg"
  },
  {
    id: 12,
    slug: "vannochka-dlya-svarki-d-20",
    name: "Ванночка для сварки d-20",
    category: "bath",
    diameter: "d-20",
    priceCash: 65,
    priceBarter: 80,
    unit: "шт",
    description: "Новый ГОСТ",
    price: 65,
    image: "/images/products/vannochki.jpg"
  },
  {
    id: 13,
    slug: "vannochka-dlya-svarki-d-18",
    name: "Ванночка для сварки d-18",
    category: "bath",
    diameter: "d-18",
    priceCash: 60,
    priceBarter: 75,
    unit: "шт",
    description: "Новый ГОСТ",
    price: 60,
    image: "/images/products/vannochki.jpg"
  },

  // ==================== МУФТЫ ДЛЯ АРМАТУРЫ ====================
  {
    id: 18,
    slug: "mufta-dlya-armatury-d-20",
    name: "Муфта для арматуры Ø20",
    category: "mufta",
    diameter: "d-20",
    priceCash: 185,
    priceBarter: 210,
    unit: "шт",
    description: "Соединительная муфта для арматуры диаметром 20 мм",
    price: 185,
    image: "/images/products/mufta-armatury.jpg"
  },
  {
    id: 19,
    slug: "mufta-dlya-armatury-d-22",
    name: "Муфта для арматуры Ø22",
    category: "mufta",
    diameter: "d-22",
    priceCash: 230,
    priceBarter: 260,
    unit: "шт",
    description: "Соединительная муфта для арматуры диаметром 22 мм",
    price: 230,
    image: "/images/products/mufta-armatury.jpg"
  },
  {
    id: 20,
    slug: "mufta-dlya-armatury-d-25",
    name: "Муфта для арматуры Ø25",
    category: "mufta",
    diameter: "d-25",
    priceCash: 280,
    priceBarter: 320,
    unit: "шт",
    description: "Соединительная муфта для арматуры диаметром 25 мм",
    price: 280,
    image: "/images/products/mufta-armatury.jpg"
  },
  {
    id: 21,
    slug: "mufta-dlya-armatury-d-28",
    name: "Муфта для арматуры Ø28",
    category: "mufta",
    diameter: "d-28",
    priceCash: 340,
    priceBarter: 380,
    unit: "шт",
    description: "Соединительная муфта для арматуры диаметром 28 мм",
    price: 340,
    image: "/images/products/mufta-armatury.jpg"
  },
  {
    id: 22,
    slug: "mufta-dlya-armatury-d-32",
    name: "Муфта для арматуры Ø32",
    category: "mufta",
    diameter: "d-32",
    priceCash: 420,
    priceBarter: 470,
    unit: "шт",
    description: "Соединительная муфта для арматуры диаметром 32 мм",
    price: 420,
    image: "/images/products/mufta-armatury.jpg"
  },

  // ==================== НА ЗАКАЗ ====================
  {
    id: 14,
    slug: "ankernyy-bolt-shpilka",
    name: "Анкерный болт / Шпилька",
    category: "anchor",
    unit: "шт",
    description: "Различные размеры и длины",
    isOnOrder: true,
    price: 0,
    image: "/images/products/ankernye-shpilki.jpg"
  },
  {
    id: 15,
    slug: "tayrot",
    name: "Тайрота (Тайрод)",
    category: "tie",
    unit: "шт",
    description: "Различные диаметры и длины",
    isOnOrder: true,
    price: 0,
    image: "/images/products/tajroty.jpg"
  },
  {
    id: 16,
    slug: "stoyka-teleskopicheskaya",
    name: "Стойка телескопическая",
    category: "stand",
    unit: "шт",
    description: "Для опалубки",
    isOnOrder: true,
    price: 0,
    image: "/images/products/teleskopicheskie-stoyki.jpg"
  },
  {
    id: 17,
    slug: "zakladnye-detali",
    name: "Закладные детали",
    category: "foundation",
    unit: "кг",
    description: "130 сом/кг (наличные) | 145 сом/кг (бартер)",
    priceCash: 130,
    priceBarter: 145,
    pricePerKg: true,
    price: 130,
    image: "/images/products/zakladnye-detali.jpg"
  },
];

/** Цена для карточки: число или «По запросу». */
export function formatPrice(product: Product): string {
  if (product.pricePerKg) return `${product.priceCash} сом/кг`;
  if (product.priceCash) return `${product.priceCash}`;
  if (product.price) return `${product.price}`;
  return "По запросу";
}

export function productsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProduct(category: string, slug: string): Product | undefined {
  return products.find((p) => p.category === category && p.slug === slug);
}

export function productHref(product: Product): string {
  return `/catalog/${product.category}/${product.slug}`;
}

export function productAlt(product: Product): string {
  return [product.name, product.diameter, product.size].filter(Boolean).join(", ");
}
