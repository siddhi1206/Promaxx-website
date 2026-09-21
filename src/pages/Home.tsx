import React, { useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { Hero } from '../components/home/Hero';
import { Metrics } from '../components/home/Metrics';
import { Introduction } from '../components/home/Introduction';
import { WhyPromaxx } from '../components/home/WhyPromaxx';
import { ProductPreview } from '../components/home/ProductPreview';
import { Applications } from '../components/home/Applications';
import { Commitment } from '../components/home/Commitment';
import { FinalCta } from '../components/FinalCta';
import { ProductModal } from '../components/products/ProductModal';
import type { Product } from '../types/product';
import { images } from '../data/site';

export function Home() {
  const [selected, setSelected] = useState<Product | null>(null);

  usePageMeta({
    title: 'Promaxx Industries | Wheels & Castors for Industrial Applications',
    description:
    'Promaxx Industries manufactures durable wheels and castors for trolleys, material handling equipment, warehouses, factories, and industrial applications.',
    path: '/',
    ogImage: images.heroCastor
  });

  return (
    <>
      <Hero />
      <Metrics />
      <Introduction />
      <WhyPromaxx />
      <ProductPreview onSelect={setSelected} />
      <Applications />
      <Commitment />
      <FinalCta />
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>);

}