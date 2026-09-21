import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col border border-ink/10 bg-white transition-colors duration-200 ease-industrial hover:border-mustard">
      <button
        type="button"
        onClick={() => onSelect(product)}
        className="flex h-full flex-col text-left"
        aria-label={`View details for ${product.name}`}>
        
        <div className="overflow-hidden bg-light">
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            decoding="async"
            width={640}
            height={640}
            className="aspect-square w-full object-cover transition-transform duration-500 ease-industrial group-hover:scale-[1.04]" />
          
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-mustard-dark">
            {product.category}
          </p>
          <h3 className="mt-2 text-lg font-bold leading-snug text-navy">{product.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">{product.description}</p>

          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-navy transition-colors duration-200 group-hover:text-mustard-dark">
            View Details
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </button>
    </article>);

}