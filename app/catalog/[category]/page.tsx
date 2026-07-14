import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

const categoryNames: Record<string, string> = {
  washer: "Анкерные шайбы",
  bath: "Ванночки для сварки",
  anchor: "Анкерные болты",
  tie: "Тайроты",
  mufta: "Муфты для арматуры",
  foundation: "Закладные детали",
  stand: "Стойки телескопические",
};

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  
  const filteredProducts = products.filter(p => p.category === category);
  const title = categoryNames[category] || "Категория";

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <Link 
        href="/catalog" 
        className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-10 text-lg"
      >
        ← Вернуться в каталог
      </Link>

      <h1 className="text-4xl font-bold mb-12">{title}</h1>

      {filteredProducts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={{
                id: product.id,
                name: product.name,
                price: product.pricePerKg 
                  ? `${product.priceCash} сом/кг` 
                  : product.priceCash || product.price || 'По запросу',
                image: product.image,
                description: product.description || '',
                unit: product.unit,
                category: product.category,
              }} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl text-slate-500">В этой категории пока нет товаров</p>
          <p className="text-slate-400 mt-4">Категория: <strong>{category}</strong></p>
        </div>
      )}
    </div>
  );
}