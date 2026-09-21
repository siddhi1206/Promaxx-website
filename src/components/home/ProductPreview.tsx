import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { ProductCard } from '../products/ProductCard';
import { products } from '../../data/products';
import type { Product } from '../../types/product';

interface ProductPreviewProps {
  onSelect: (product: Product) => void;
}

const previewIds = [
'uhmw-pe-wheel',
'ci-wheel',
'pu-ci-wheel',
'swivel-castor',
'wheel-brake-castor',
'twin-castor'];


export function ProductPreview({ onSelect }: ProductPreviewProps) {
  const preview = previewIds.
  map((id) => products.find((product) => product.id === id)).
  filter((product): product is Product => Boolean(product));

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              title="Our Product Range"
              subtitle="Solutions for diverse material handling and industrial applications." />
            
          </Reveal>
          <Reveal index={1}>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-base font-semibold text-navy transition-colors duration-200 hover:text-mustard-dark">
              
              View All Products
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((product, index) =>
          <Reveal as="li" key={product.id} index={index} className="flex">
              <div className="w-full">
                <ProductCard product={product} onSelect={onSelect} />
              </div>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}