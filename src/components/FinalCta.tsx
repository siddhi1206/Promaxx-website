import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { ButtonLink } from './Button';
import { Reveal } from './Reveal';

interface FinalCtaProps {
  heading?: string;
  body?: string;
}

export function FinalCta({
  heading = 'Looking for the Right Wheel or Castor?',
  body = 'Tell us about your application and requirements. Our team can help you identify the appropriate product configuration.'
}: FinalCtaProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <Reveal>
          <div className="border-t-2 border-mustard bg-light px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
              <div>
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2.5rem]">
                  {heading}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 lg:text-lg">
                  {body}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <ButtonLink to="/products" variant="primary">
                  Explore Products
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink to="/contact" variant="onLight">
                  Get in Touch
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}