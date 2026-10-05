import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MailIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { ButtonAnchor } from '../components/Button';
import { company, images } from '../data/site';

const methods = [
{
  icon: PhoneIcon,
  title: 'Call Us',
  body: 'Speak directly with our team about your requirement.',
  action: 'Call Now',
  href: company.phoneHref,
  value: company.phone
},
{
  icon: MessageCircleIcon,
  title: 'WhatsApp',
  body: 'Send us your requirement directly on WhatsApp.',
  action: 'Chat on WhatsApp',
  href: company.whatsappHref,
  value: company.whatsapp
},
{
  icon: MailIcon,
  title: 'Email Us',
  body: 'Send your product requirement or enquiry by email.',
  action: 'Email Us',
  href: company.emailHref,
  value: company.email
}];


export function Contact() {
  const [searchParams] = useSearchParams();
  const product = searchParams.get('product');

  usePageMeta({
    title: 'Contact Promaxx Industries | Wheels & Castors',
    description:
    'Contact Promaxx Industries by phone, WhatsApp or email for industrial wheels and castors, load capacities and bracket configurations.',
    path: '/contact',
    ogImage: images.heroCastor
  });

  return (
    <>
      <PageHero
        title="Let's Talk About Your Requirement"
        subtitle="Whether you need a specific wheel, castor, load capacity, or configuration, our team is available to help you find the right solution." />
      

      <section className="bg-white">
        <div className="mx-auto max-w-site px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          {product ?
          <Reveal>
              <p className="mb-10 border-l-2 border-mustard bg-light px-5 py-4 text-sm text-ink/75">
                <span className="font-bold text-navy">Product: {product}</span>
                <span className="mt-1 block">
                  Mention this product when you call, message or email us.
                </span>
              </p>
            </Reveal> :
          null}

          <ul className="grid gap-6 lg:grid-cols-3">
            {methods.map((method, index) => {
              const Icon = method.icon;
              const isPrimary = index === 0;
              return (
                <Reveal as="li" key={method.title} index={index} className="flex">
                  <div
                    className={`flex h-full w-full flex-col p-7 lg:p-8 ${
                    isPrimary ?
                    'border-t-2 border-mustard bg-navy' :
                    'border border-ink/10 bg-white'}`
                    }>
                    
                    <Icon
                      className={`h-8 w-8 ${isPrimary ? 'text-mustard' : 'text-mustard-dark'}`}
                      aria-hidden="true" />
                    
                    <h2
                      className={`mt-6 text-2xl font-extrabold ${
                      isPrimary ? 'text-white' : 'text-navy'}`
                      }>
                      
                      {method.title}
                    </h2>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                      isPrimary ? 'text-white/70' : 'text-ink/65'}`
                      }>
                      
                      {method.body}
                    </p>
                    <p
                      className={`mt-5 break-words text-sm font-semibold ${
                      isPrimary ? 'text-white/90' : 'text-navy'}`
                      }>
                      
                      {method.value}
                    </p>
                    <div className="mt-auto pt-8">
                      <ButtonAnchor
                        href={method.href}
                        variant={isPrimary ? 'primary' : 'onLight'}
                        className="w-full"
                        ariaLabel={`${method.action} — Promaxx Industries`}>
                        
                        {method.action}
                      </ButtonAnchor>
                    </div>
                  </div>
                </Reveal>);

            })}
          </ul>
        </div>
      </section>

      <section className="bg-light">
        <div className="mx-auto max-w-site px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy lg:text-3xl">
              Company Information
            </h2>
            <dl className="mt-8 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
              
              <div className="bg-white p-6">
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-ink/45">
                  Phone
                </dt>
                <dd className="mt-3 text-sm font-semibold text-navy">{company.phone}</dd>
              </div>
              <div className="bg-white p-6">
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-ink/45">
                  Email
                </dt>
                <dd className="mt-3 break-words text-sm font-semibold text-navy">
                  {company.email}
                </dd>
              </div>
              <div className="bg-white p-6">
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-ink/45">
                  Business Hours
                </dt>
                <dd className="mt-3 text-sm font-semibold text-navy">{company.hours}</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-ink/50">
              
              <code className="font-semibold text-ink/70"></code>.
            </p>
          </Reveal>
        </div>
      </section>
    </>);

}