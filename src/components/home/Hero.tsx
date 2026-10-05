import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { ButtonLink } from '../Button';
import { images } from '../../data/site';

export function Hero() {
  const reduceMotion = useReducedMotion();
  const ease = [0.23, 1, 0.32, 1] as const;

  const rise = (delay: number) =>
  reduceMotion ?
  {} :
  {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease }
  };

  return (
    <section className="relative overflow-hidden bg-navy pt-[72px]">
      <div className="tech-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute right-0 top-0 hidden h-full w-px bg-navy-line lg:block"
        style={{ left: '58%' }}
        aria-hidden="true" />
      

      <div className="relative mx-auto grid max-w-site items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10 lg:py-24">
        <div>
          <motion.h1
            {...rise(0.05)}
            className="text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[4.25rem]">
            
            Built for Performance.
            <span className="mt-2 block text-mustard">Focused on Value.</span>
          </motion.h1>

          <motion.p
            {...rise(0.15)}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            
            Reliable wheels and castors engineered for trolleys, material handling
            equipment, warehouses, factories, storage facilities, and demanding
            industrial applications.
          </motion.p>

        <motion.div {...rise(0.25)} className="mt-9 flex flex-wrap gap-3">
  <ButtonLink to="/products" variant="primary">
    Explore Products
    <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
  </ButtonLink>

  <ButtonLink
    to="/Promaxx-Catalogue.pdf"
    variant="secondary"
    download="Promaxx-Industries-Catalogue.pdf"
  >
    Download Catalogue
  </ButtonLink>
</motion.div>
        </div>

        <motion.div
          {...reduceMotion ?
          {} :
          {
            initial: { opacity: 0, y: 30, scale: 0.97 },
            animate: { opacity: 1, y: 0, scale: 1 },
            transition: { duration: 0.7, delay: 0.2, ease }
          }}
          className="relative">
          
          <div className="relative border border-navy-line bg-navy-soft">
            <img
              src={images.heroCastor}
              alt="Promaxx heavy-duty industrial swivel castor"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover" />
            
            <span
              className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-mustard"
              aria-hidden="true" />
            
            <span
              className="absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2 border-mustard"
              aria-hidden="true" />
            
          </div>

          <ul className="mt-3 grid grid-cols-2 gap-3">
            <li className="border border-navy-line bg-navy-soft px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                Wheel Ø
              </p>
              <p className="mt-1 text-sm font-bold text-mustard">50–300 mm</p>
            </li>
            <li className="border border-navy-line bg-navy-soft px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                Load / wheel
              </p>
              <p className="mt-1 text-sm font-bold text-mustard">250–2000 kg</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>);

}