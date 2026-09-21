import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  id?: string;
}

export function SectionHeading({
  title,
  subtitle,
  tone = 'light',
  align = 'left',
  id
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'max-w-2xl mx-auto text-center' : 'max-w-2xl'}>
      <h2
        id={id}
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight ${
        tone === 'dark' ? 'text-white' : 'text-navy'}`
        }>
        
        {title}
      </h2>
      <span
        className={`mt-5 block h-px w-16 bg-mustard ${align === 'center' ? 'mx-auto' : ''}`}
        aria-hidden="true" />
      
      {subtitle ?
      <p
        className={`mt-5 text-lg leading-relaxed ${
        tone === 'dark' ? 'text-white/70' : 'text-ink/70'}`
        }>
        
          {subtitle}
        </p> :
      null}
    </div>);

}