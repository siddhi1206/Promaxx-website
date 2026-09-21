import React from 'react';
import { ClockIcon, LayersIcon, ShieldCheckIcon, TrendingDownIcon } from 'lucide-react';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';

const features = [
{
  icon: ShieldCheckIcon,
  title: 'Durable Designs',
  body: 'Robust wheels and castors engineered for demanding industrial applications.'
},
{
  icon: ClockIcon,
  title: 'Extended Service Life',
  body: 'Carefully selected raw materials and manufacturing processes help provide dependable long-term performance.'
},
{
  icon: TrendingDownIcon,
  title: 'Reduced Overall Costs',
  body: 'Longer product life and reduced maintenance can help minimize downtime and total operating costs.'
},
{
  icon: LayersIcon,
  title: 'Extensive Product Range',
  body: 'Multiple wheel materials, sizes, load capacities, and fixed or swivel bracket configurations help customers select suitable solutions for different applications.'
}];


export function WhyPromaxx() {
  return (
    <section className="bg-light">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <Reveal>
          <SectionHeading
            title="Why Promaxx?"
            subtitle="Durable products. Reliable performance. Lower long-term costs." />
          
        </Reveal>

        <ul className="mt-12 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal as="li" key={feature.title} index={index} className="flex">
                <div className="flex h-full w-full flex-col bg-white p-6 lg:p-7">
                  <Icon className="h-7 w-7 text-mustard-dark" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold leading-snug text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{feature.body}</p>
                </div>
              </Reveal>);

          })}
        </ul>
      </div>
    </section>);

}