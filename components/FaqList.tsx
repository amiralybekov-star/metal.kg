import type { Faq } from '@/data/catalog';

/**
 * FAQ на <details>: работает без JS, читается поиском и не требует
 * клиентского компонента (страницы остаются серверными).
 */
export default function FaqList({ items, className }: { items: Faq[]; className?: string }) {
  if (items.length === 0) return null;

  return (
    <div className={className ?? 'space-y-3'}>
      {items.map((item) => (
        <details
          key={item.q}
          className="group bg-white border border-slate-200 rounded-2xl px-5 py-4 open:shadow-sm"
        >
          <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-medium text-slate-900">
            <span>{item.q}</span>
            <span
              aria-hidden="true"
              className="text-slate-400 transition-transform group-open:rotate-45 text-2xl leading-none"
            >
              +
            </span>
          </summary>
          <p className="text-slate-600 mt-3 leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
