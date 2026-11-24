import type { Product } from '@/data/products';
import type { Category } from '@/data/catalog';
import { ADDRESS, WORK_HOURS_TEXT } from '@/data/contacts';

/**
 * Короткий текст о позиции из данных каталога. Первая фраза отвечает на
 * вопрос «сколько стоит и что это» целиком: её удобно цитировать поиску.
 */
export function productSummary(product: Product, cat: Category): string[] {
  const price = product.priceCash ?? product.price;
  const unitWord = product.pricePerKg ? 'килограмм' : product.unit === 'шт' ? 'штуку' : product.unit;
  const specs = [
    product.diameter && `под арматуру ${product.diameter.replace('d-', 'Ø')} мм`,
    product.size && `пластина ${product.size}`,
  ]
    .filter(Boolean)
    .join(', ');
  const onOrder = product.isOnOrder || product.pricePerKg;
  const street = ADDRESS.street.replace('Профсоюзная', 'Профсоюзной');

  const first = price
    ? `${product.name}${specs ? ` (${specs})` : ''} стоит у нас ${price} сом за ${unitWord}, если платить наличными${
        product.priceBarter ? `. По бартеру ${product.priceBarter} сом` : ''
      }. Делаем сами, в Бишкеке.`
    : `${product.name} делаем в Бишкеке под заказ: ${cat.range}. Цену считаем по размерам и количеству, обычно в тот же день.`;

  const second = onOrder
    ? 'На изготовление уходит от 1 до 5 дней, смотря какой объём. Пришлите чертёж или размеры в WhatsApp, и мы назовём точную цену.'
    : 'Размер стандартный, обычно лежит на складе. Можно взять от одной штуки, для объекта сделаем партию. Наличие лучше уточнить по телефону.';

  const third = `Забрать можно на ${street}, мы работаем ${WORK_HOURS_TEXT}. Доставляем по Бишкеку и Кыргызстану.`;

  return [first, second, third];
}
