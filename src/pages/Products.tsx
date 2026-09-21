import React, { useMemo, useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { ProductCard } from '../components/products/ProductCard';
import { ProductFilters } from '../components/products/ProductFilters';
import { ProductModal } from '../components/products/ProductModal';
import { FinalCta } from '../components/FinalCta';
import { filterProducts } from '../data/products';
import type { Product, ProductTag } from '../types/product';
import { images } from '../data/site';

export function Products() {
  const [activeFilter, setActiveFilter] = useState<ProductTag | 'All'>('All');
  const [selected, setSelected] = useState<Product | null>(null);

  usePageMeta({
    title: 'Wheels & Castors | Promaxx Industries',
    description:
    'Browse the Promaxx Industries range of industrial wheels and castors — UHMW-PE, CI and PU-CI wheels, and fixed, swivel, braked, heavy-duty and twin castors.',
    path: '/products',
    ogImage: images.castorSwivel
  });

  const visible = useMemo(() => filterProducts(activeFilter), [activeFilter]);

  return (
    <>
      <PageHero
        title="Wheels & Castors"
        subtitle="Engineered solutions for material handling and industrial applications." />
      

      <section className="bg-white">
        <div className="mx-auto max-w-site px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <ProductFilters
            active={activeFilter}
            onChange={setActiveFilter}
            resultCount={visible.length} />
          

          {visible.length > 0 ?
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((product, index) =>
            <Reveal as="li" key={product.id} index={index} className="flex">
                  <div className="w-full">
                    <ProductCard product={product} onSelect={setSelected} />
                  </div>
                </Reveal>
            )}
            </ul> :

          <p className="mt-10 border border-ink/10 bg-light p-8 text-center text-sm text-ink/65">
              No products match this filter yet. Contact us and we will help identify a
              suitable configuration.
            </p>
          }

          <p className="mt-10 border-l-2 border-mustard bg-light px-5 py-4 text-sm leading-relaxed text-ink/70">
            Detailed specifications available on request. Wheel diameters range from 50 mm
            to 300 mm, with load capacities from 250 kg to 2000 kg per wheel, in fixed and
            swivel bracket configurations.
          </p>
        </div>
      </section>

      <FinalCta
        heading="Need Help Choosing a Configuration?"
        body="Share your application, load requirement and bracket type. Our team can help you identify the appropriate wheel or castor." />
      

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>);

}