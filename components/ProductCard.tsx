'use client';

import Link from 'next/link';
import Image from 'next/image';

type ProductCardProps = {
  id: number;
  name: string;
  price: string | number;
  image: string;
  description: string;
  unit?: string;
  category: string;
};

export default function ProductCard({ product }: { product: ProductCardProps }) {
  return (
    <Link href={`/catalog/${product.category}`} className="block group">
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer">
        <div className="relative h-56 overflow-hidden">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-semibold text-xl mb-3 line-clamp-2">{product.name}</h3>
          <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-3">
            {product.description}
          </p>
          
          <div className="flex justify-between items-center mt-auto">
            <span className="text-emerald-600 font-semibold text-xl">
              {product.price}
              {product.unit && <span className="text-sm font-normal ml-1">/{product.unit}</span>}
            </span>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(
                  `https://wa.me/996706646264?text=${encodeURIComponent(`Здравствуйте! Хочу узнать цену на: ${product.name}`)}`,
                  '_blank'
                );
              }}
              className="bg-blue-700 text-white px-6 py-2.5 rounded-2xl text-sm font-medium hover:bg-blue-800 transition-colors"
            >
              Узнать цену
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}