import React from 'react';
import { CountUp } from '../CountUp';
import { Reveal } from '../Reveal';

const metrics = [
{ from: 50, to: 300, unit: 'mm', label: 'Wheel diameter range' },
{ from: 250, to: 2000, unit: 'kg', label: 'Load capacity per wheel' },
{ from: null, to: 90, unit: '%', label: 'Approximate repeat business' },
{ from: null, to: 100, unit: '%', label: 'On-time delivery commitment' }];


export function Metrics() {
  return (
    <section aria-label="Key figures" className="border-y border-navy-line bg-navy-soft">
      <div className="mx-auto grid max-w-site grid-cols-2 gap-x-6 gap-y-10 px-5 py-12 sm:px-8 lg:grid-cols-4 lg:gap-8 lg:px-10 lg:py-14">
        {metrics.map((metric, index) =>
        <Reveal key={metric.label} index={index}>
            <div className="border-l-2 border-mustard pl-4 lg:pl-5">
              <p className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-[2.5rem]">
                {metric.from !== null ?
              <>
                    <CountUp to={metric.from} />
                    <span className="text-white/40">–</span>
                  </> :
              null}
                <CountUp to={metric.to} />
                <span className="ml-1 text-mustard">{metric.unit}</span>
              </p>
              <p className="mt-2 text-sm leading-snug text-white/60">{metric.label}</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>);

}