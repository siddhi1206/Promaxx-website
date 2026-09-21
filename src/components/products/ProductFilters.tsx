import React from 'react';
import type { ProductTag } from '../../types/product';
import { productFilters } from '../../data/products';

interface ProductFiltersProps {
  active: ProductTag | 'All';
  onChange: (tag: ProductTag | 'All') => void;
  resultCount: number;
}

export function ProductFilters({ active, onChange, resultCount }: ProductFiltersProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div
        role="group"
        aria-label="Filter products by type"
        className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        
        {productFilters.map((tag) => {
          const isActive = tag === active;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onChange(tag)}
              aria-pressed={isActive}
              className={`shrink-0 snap-start rounded-card border px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ease-industrial ${
              isActive ?
              'border-navy bg-navy text-white' :
              'border-ink/15 bg-white text-ink/70 hover:border-navy hover:text-navy'}`
              }>
              
              {tag}
            </button>);

        })}
      </div>

      <p aria-live="polite" className="text-sm text-ink/55">
        {resultCount} {resultCount === 1 ? 'product' : 'products'}
      </p>
    </div>);

}