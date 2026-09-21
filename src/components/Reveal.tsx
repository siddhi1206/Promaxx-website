import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  /** Stagger index — adds 60ms per step, capped so the last item never feels late. */
  index?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
}

/**
 * Scroll reveal: fade + short upward movement. Motion is skipped entirely
 * when the visitor prefers reduced motion — content is never animation-dependent.
 */
export function Reveal({ children, index = 0, className, as = 'div' }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index, 5) * 0.06,
        ease: [0.23, 1, 0.32, 1]
      }}>
      
      {children}
    </MotionTag>);

}