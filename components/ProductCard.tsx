import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/data/products';
import { formatPrice, productAlt, productHref } from '@/data/products';
import WhatsAppLink from './WhatsAppLink';

export default function ProductCard({ product }: { product: Product }) {
  const price = formatPrice(product);
  const href = productHref(product);
  const showUnit = Boolean(product.unit) && price !== 'По запросу';

  return (
    <article className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={productAlt(product)}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.isOnOrder && (
          <span className="absolute top-4 left-4 bg-white/90 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full">
            На заказ
          </span>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-semibold text-xl mb-2 line-clamp-2">
          {/* Ссылка «растянута» на всю карточку через after: вся карточка
              кликабельна, но HTML валиден — кнопка не лежит внутри <a>. */}
          <Link
            href={href}
            className="hover:text-blue-700 transition-colors after:absolute after:inset-0 after:content-['']"
          >
            {product.name}
          </Link>
        </h3>

        {(product.diameter || product.size) && (
          <div className="flex flex-wrap gap-2 mb-3 text-xs text-slate-500">
            {product.diameter && (
              <span className="bg-slate-100 px-2.5 py-1 rounded-full">{product.diameter}</span>
            )}
            {product.size && (
              <span className="bg-slate-100 px-2.5 py-1 rounded-full">{product.size}</span>
            )}
          </div>
        )}

        <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-3">
          {product.description ?? ''}
        </p>

        <div className="flex justify-between items-center gap-3 mt-auto">
          <span className="text-emerald-600 font-semibold text-xl">
            {price}
            {showUnit && <span className="text-sm font-normal ml-1">/{product.unit}</span>}
          </span>

          <WhatsAppLink
            source="product_card"
            productName={product.name}
            text={`Здравствуйте! Хочу узнать цену на: ${product.name}`}
            ariaLabel={`Узнать цену на ${product.name} в WhatsApp`}
            className="relative z-10 bg-blue-700 text-white px-6 py-2.5 rounded-2xl text-sm font-medium hover:bg-blue-800 transition-colors"
          >
            Узнать цену
          </WhatsAppLink>
        </div>
      </div>
    </article>
  );
}
