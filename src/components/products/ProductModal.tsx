import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import type { Product } from '../../types/product';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

function specRows(product: Product): Array<[string, string]> {
  const rows: Array<[string, string]> = [
  ['Material', product.material],
  ['Diameter', product.diameter],
  ['Load capacity', product.loadCapacity],
  ['Bracket type', product.bracketType],
  ...Object.entries(product.specifications)];

  return rows.filter(([, value]) => Boolean(value));
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!product) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product ?
      <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center">
          <motion.div
          className="absolute inset-0 bg-navy/80"
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose} />
        

          <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          initial={reduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto bg-white shadow-xl sm:max-h-[88vh]">
          
            <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close product details"
            className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center border border-ink/15 bg-white text-navy transition-colors duration-200 hover:border-navy">
            
              <XIcon className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="bg-light">
                <img
                src={product.image}
                alt={product.imageAlt}
                className="aspect-square w-full object-cover"
                width={800}
                height={800} />
              
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-mustard-dark">
                  {product.group} · {product.category}
                </p>
                <h2
                id="product-modal-title"
                className="mt-2 text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
                
                  {product.name}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink/70">
                  {product.description}
                </p>

                <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-ink/45">
                  Specifications
                </h3>
                {specRows(product).length > 0 ?
              <dl className="mt-3 divide-y divide-ink/10 border-y border-ink/10">
                    {specRows(product).map(([label, value]) =>
                <div key={label} className="flex justify-between gap-6 py-3">
                        <dt className="text-sm text-ink/55">{label}</dt>
                        <dd className="text-sm font-semibold text-navy">{value}</dd>
                      </div>
                )}
                  </dl> :

              <p className="mt-3 border-y border-ink/10 py-3 text-sm text-ink/60">
                    Detailed specifications available on request.
                  </p>
              }

                <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-ink/45">
                  Applications
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {product.applications.map((application) =>
                <li
                  key={application}
                  className="border border-ink/12 bg-light px-3 py-1.5 text-xs font-medium text-ink/70">
                  
                      {application}
                    </li>
                )}
                </ul>

                <Link
                to={`/contact?product=${encodeURIComponent(product.name)}`}
                className="mt-8 flex min-h-[52px] w-full items-center justify-center rounded-card bg-mustard px-6 text-sm font-bold uppercase tracking-wider text-navy transition-colors duration-200 hover:bg-mustard-dark">
                
                  Enquire About This Product
                </Link>
              </div>
            </div>
          </motion.div>
        </div> :
      null}
    </AnimatePresence>);

}