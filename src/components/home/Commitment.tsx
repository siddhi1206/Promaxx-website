import React from 'react';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';

const commitments = [
{
  title: 'On-Time Delivery',
  body: 'We are committed to maintaining high stock levels and delivering products within promised timelines.'
},
{
  title: 'Expert Product Guidance',
  body: 'We focus on understanding customer requirements and helping them select suitable wheels and castors.'
},
{
  title: 'Consistent Quality',
  body: 'We maintain rigorous monitoring and evaluation to support dependable product quality.'
}];


export function Commitment() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="tech-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-site px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <Reveal>
          <SectionHeading title="Our Commitment" tone="dark" />
        </Reveal>

        <ul className="mt-12 grid gap-8 md:grid-cols-3 lg:gap-12">
          {commitments.map((commitment, index) =>
          <Reveal as="li" key={commitment.title} index={index}>
              <div className="border-t border-navy-line pt-6">
                <p className="text-sm font-bold text-mustard">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-xl font-bold text-white">{commitment.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {commitment.body}
                </p>
              </div>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}