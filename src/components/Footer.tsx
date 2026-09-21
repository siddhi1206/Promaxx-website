import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { company } from '../data/site';

const pages = [
{ label: 'Home', to: '/' },
{ label: 'About', to: '/about' },
{ label: 'Products', to: '/products' },
{ label: 'Contact Us', to: '/contact' }];


export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-site px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 md:grid-cols-3 lg:gap-16">
          <div className="max-w-sm">
            <p className="text-lg font-extrabold tracking-[0.18em]">PROMAXX</p>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.34em] text-mustard">
              INDUSTRIES
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              Wheels and castors engineered for reliable industrial performance.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Pages
            </h2>
            <ul className="mt-5 space-y-3">
              {pages.map((page) =>
              <li key={page.to}>
                  <Link
                  to={page.to}
                  className="text-sm text-white/80 transition-colors duration-200 hover:text-mustard">
                  
                    {page.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Contact
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2.5 text-sm text-white/80 transition-colors duration-200 hover:text-mustard">
                  
                  <PhoneIcon className="h-4 w-4 text-mustard" aria-hidden="true" />
                  Call
                </a>
              </li>
              <li>
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-white/80 transition-colors duration-200 hover:text-mustard">
                  
                  <MessageCircleIcon className="h-4 w-4 text-mustard" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="inline-flex items-center gap-2.5 text-sm text-white/80 transition-colors duration-200 hover:text-mustard">
                  
                  <MailIcon className="h-4 w-4 text-mustard" aria-hidden="true" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-line pt-6">
          <p className="text-xs text-white/45">
            © 2026 Promaxx Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}