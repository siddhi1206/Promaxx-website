import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  const reduceMotion = useReducedMotion();
  const animate = (delay: number) =>
  reduceMotion ?
  {} :
  {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.23, 1, 0.32, 1] as const }
  };

  return (
    <section className="relative overflow-hidden bg-navy pt-[72px]">
      <div className="tech-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-site px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <motion.h1
          {...animate(0.05)}
          className="max-w-3xl text-[2.25rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
          
          {title}
        </motion.h1>
        <motion.p
          {...animate(0.15)}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          
          {subtitle}
        </motion.p>
        <motion.span
          {...animate(0.25)}
          className="mt-8 block h-px w-24 bg-mustard"
          aria-hidden="true" />
        
      </div>
    </section>);

}