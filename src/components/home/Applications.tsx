import React from 'react';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { applications, images } from '../../data/site';

export function Applications() {
  return (
    <section className="bg-light">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <Reveal>
          <SectionHeading title="Built for a Wide Range of Applications" />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <Reveal>
            <img
              src={images.warehouse}
              alt="Warehouse aisle with racking and a platform trolley on industrial castors"
              loading="lazy"
              decoding="async"
              width={1200}
              height={800}
              className="aspect-[3/2] w-full border border-ink/10 object-cover lg:h-full" />
            
          </Reveal>

          <Reveal index={1}>
            <ul className="divide-y divide-ink/10 border-y border-ink/10 lg:border-t-0 lg:pt-0">
              {applications.map((application) =>
              <li
                key={application}
                className="flex items-center gap-4 py-4 lg:py-[1.15rem]">
                
                  <span className="h-2 w-2 shrink-0 bg-mustard" aria-hidden="true" />
                  <span className="text-base font-semibold text-navy lg:text-lg">
                    {application}
                  </span>
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>);

}