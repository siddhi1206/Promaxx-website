import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { images } from '../../data/site';

export function Introduction() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-site items-start gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:px-10 lg:py-28">
        <Reveal>
          <SectionHeading title="Engineered for Industrial Performance" />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/75 lg:text-lg">
            <p>
              Promaxx Industries specializes in manufacturing wheels and castors for a
              wide range of trolleys and material handling equipment, serving factories,
              warehouses, storage facilities, and other industrial environments.
            </p>
            <p>
              Our range includes robust castor wheels engineered for diverse applications,
              with multiple wheel materials, sizes, load capacities, and bracket
              configurations.
            </p>
            <p>
              Our team is available to help customers select the right product for their
              specific application.
            </p>
          </div>
         <div className="mt-8 flex flex-col items-start gap-4">
  <Link
    to="/products"
    className="inline-flex items-center gap-2 text-base font-semibold text-navy transition-colors duration-200 hover:text-mustard-dark"
  >
    Explore Our Products
    <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
  </Link>

  <a
    href="/Promaxx-Catalogue.pdf"
    download="Promaxx-Industries-Catalogue.pdf"
    className="inline-flex items-center justify-center border border-navy bg-navy px-5 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-mustard hover:text-navy"
  >
    Download Catalogue
  </a>
</div>
        </Reveal>

        <Reveal index={1}>
          <img
            src={images.factory}
            alt="Steel material handling trolleys on heavy-duty castors on a factory floor"
            loading="lazy"
            decoding="async"
            width={1200}
            height={800}
            className="aspect-[3/2] w-full border border-ink/10 object-cover lg:aspect-[4/5]" />
          
        </Reveal>
      </div>
    </section>);

}