export type CategoryId =
  | 'washer'
  | 'bath'
  | 'anchor'
  | 'tie'
  | 'mufta'
  | 'foundation'
  | 'stand'
  | 'other';

export type Category = {
  id: CategoryId;
  /** Название в меню и заголовке страницы */
  name: string;
  /** Название в винительном падеже для текстов («изготовление …») */
  accusative: string;
  /** Короткое описание под заголовком страницы категории (и в description) */
  description: string;
  /** Показывать ли ссылку в навигации каталога */
  inNav: boolean;
};

export const categories: Category[] = [
  {
    id: 'washer',
    name: 'Анкерные шайбы',
    accusative: 'анкерные шайбы',
    description:
      'Анкерные шайбы АШ-2…АШ-8 для арматуры Ø16–Ø32 мм, размеры 50×50 — 90×90 мм. Собственное производство в Бишкеке, опт и розница.',
    inNav: true,
  },
  {
    id: 'bath',
    name: 'Ванночки для сварки',
    accusative: 'ванночки для сварки',
    description:
      'Ванночки для сварки арматуры по новому ГОСТ для диаметров d-18 — d-32 мм. Отгрузка со склада в Бишкеке.',
    inNav: true,
  },
  {
    id: 'anchor',
    name: 'Анкерные болты',
    accusative: 'анкерные болты и шпильки',
    description:
      'Анкерные болты и фундаментные шпильки любых размеров и длин — по ГОСТ и по чертежам заказчика. Бишкек, доставка по Кыргызстану.',
    inNav: true,
  },
  {
    id: 'tie',
    name: 'Тайроты',
    accusative: 'тайроты (тяжи опалубки)',
    description:
      'Тайроты (тайроды) для опалубки различных диаметров и длин. Производство в Бишкеке, оптовые партии.',
    inNav: true,
  },
  {
    id: 'mufta',
    name: 'Муфты для арматуры',
    accusative: 'муфты для арматуры',
    description:
      'Соединительные муфты для арматуры Ø20–Ø32 мм. Собственное производство, наличие на складе в Бишкеке.',
    inNav: true,
  },
  {
    id: 'foundation',
    name: 'Закладные детали',
    accusative: 'закладные детали',
    description:
      'Закладные детали по чертежам заказчика — 130 сом/кг за наличные, 145 сом/кг по бартеру. Изготовление в Бишкеке.',
    inNav: true,
  },
  {
    id: 'stand',
    name: 'Стойки телескопические',
    accusative: 'телескопические стойки',
    description:
      'Телескопические стойки для опалубки монолитного строительства. Производство и продажа в Бишкеке.',
    inNav: true,
  },
  {
    id: 'other',
    name: 'Прочее',
    accusative: 'металлоизделия',
    description: 'Прочие металлоизделия собственного производства.',
    inNav: false,
  },
];

export const navCategories = categories.filter((c) => c.inNav);

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
