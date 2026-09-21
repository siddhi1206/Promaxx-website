import React from 'react';
import { CheckCircle2Icon, HeadsetIcon, SearchCheckIcon } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { CountUp } from '../components/CountUp';
import { FinalCta } from '../components/FinalCta';
import { images } from '../data/site';

const commitments = [
{
  icon: CheckCircle2Icon,
  title: '100% On-Time Delivery',
  body: 'High stock levels and disciplined dispatch support delivery within promised timelines.'
},
{
  icon: HeadsetIcon,
  title: 'Expert Product Selection Guidance',
  body: 'Our team works through the application, load and configuration before recommending a product.'
},
{
  icon: SearchCheckIcon,
  title: 'Rigorous Quality Monitoring',
  body: 'Monitoring and evaluation through manufacturing supports dependable product quality.'
}];


export function About() {
  usePageMeta({
    title: 'About Promaxx Industries | Wheels & Castors Manufacturer',
    description:
    'Promaxx Industries manufactures wheels and castors for trolleys and material handling equipment used in factories, warehouses and storage facilities.',
    path: '/about',
    ogImage: images.heroCastor
  });

  return (
    <>
      <PageHero
        title="About Promaxx Industries"
        subtitle="Reliable wheels and castors for demanding industrial applications." />
      

      {/* Company overview */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:gap-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-ink/75 lg:text-lg">
              <p>
                Promaxx Industries specializes in manufacturing wheels and castors for a
                wide range of trolleys and material handling equipment, serving
                applications across factories, warehouses, storage facilities, and other
                industrial environments.
              </p>
              <p>
                Our product range includes robust wheel and castor solutions designed for
                different load requirements, operating conditions, and equipment
                configurations.
              </p>
              <p>
               Detailed specifications are available through our product catalogue, and
              our team is available to provide further information and product selection
               guidance.
              </p>

              <a
              href="/Promaxx-Catalogue.pdf"
              download="Promaxx-Industries-Catalogue.pdf"
              className="inline-flex items-center justify-center border border-navy bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-mustard hover:text-navy"
              >
              Download Catalogue
            </a>
            </div>
          </Reveal>

          <Reveal index={1}>
            <img
              src={images.castorSwivel}
              alt="Promaxx heavy-duty swivel industrial castor"
              loading="lazy"
              decoding="async"
              width={1000}
              height={1000}
              className="aspect-square w-full border border-ink/10 bg-light object-cover" />
            
          </Reveal>
        </div>
      </section>

      {/* Vision */}
      <section className="relative overflow-hidden bg-navy">
        <div className="tech-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-mustard">
              Our Vision
            </p>
            <h2 className="mt-6 max-w-4xl text-[2rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Built for Performance.{' '}
              <span className="text-mustard">Focused on Value.</span>
            </h2>
          </Reveal>

          <Reveal index={1}>
            <div className="mt-10 grid gap-8 border-t border-navy-line pt-10 md:grid-cols-2 lg:gap-16">
              <p className="text-base leading-relaxed text-white/70 lg:text-lg">
                We understand that the real cost of a castor includes downtime and workflow
                disruptions. That is why we focus on durable, reliable products that help
                keep operations running smoothly.
              </p>
              <p className="text-base leading-relaxed text-white/70 lg:text-lg">
                Our commitment to quality and dependable performance has helped us build
                lasting relationships with customers.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Customer commitments */}
      <section className="bg-white">
        <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <Reveal>
            <SectionHeading title="Our Customer Commitments" />
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <Reveal as="li" key={commitment.title} index={index} className="flex">
                  <div className="flex h-full w-full flex-col border border-ink/10 p-6 lg:p-8">
                    <Icon className="h-7 w-7 text-mustard-dark" aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-bold leading-snug text-navy">
                      {commitment.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/65">
                      {commitment.body}
                    </p>
                  </div>
                </Reveal>);

            })}
          </ul>
        </div>
      </section>

      {/* Repeat customers */}
      <section className="bg-light">
        <div className="mx-auto grid max-w-site items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.6fr_1fr] lg:gap-20 lg:px-10 lg:py-28">
          <Reveal>
            <p className="text-[5.5rem] font-extrabold leading-none tracking-tight text-navy sm:text-[8rem] lg:text-[10rem]">
              <CountUp to={90} />
              <span className="text-mustard">%</span>
            </p>
          </Reveal>
          <Reveal index={1}>
            <div className="border-l-2 border-mustard pl-6 lg:pl-10">
              <p className="text-xl font-bold leading-snug text-navy lg:text-2xl">
                Approximately 90% of our business comes from repeat customers.
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink/70 lg:text-lg">
                This repeat business reflects the trust customers place in the performance,
                reliability, availability, and value of Promaxx products.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>);

}