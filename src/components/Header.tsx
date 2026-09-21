import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';

const navItems = [
{ label: 'Home', to: '/' },
{ label: 'About', to: '/about' },
{ label: 'Products', to: '/products' },
{ label: 'Contact Us', to: '/contact' }];


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu on route change
  useEffect(() => setOpen(false), [location.pathname]);

  // Lock body scroll + Escape to close while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-industrial ${
      scrolled || open ?
      'bg-navy/95 backdrop-blur-sm border-b border-navy-line' :
      'bg-transparent border-b border-transparent'}`
      }>
      
      <div className="mx-auto flex h-[72px] max-w-site items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) =>
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
            `relative text-sm font-semibold tracking-wide transition-colors duration-200 ${
            isActive ? 'text-mustard' : 'text-white/80 hover:text-white'}`

            }>
            
              {({ isActive }) =>
            <>
                  {item.label}
                  <span
                aria-hidden="true"
                className={`absolute -bottom-2 left-0 h-0.5 w-full bg-mustard transition-transform duration-200 ease-industrial ${
                isActive ? 'scale-x-100' : 'scale-x-0'} origin-left`
                } />
              
                </>
            }
            </NavLink>
          )}
          <Link
            to="/contact"
            className="rounded-card bg-mustard px-5 py-3 text-xs font-bold uppercase tracking-wider text-navy transition-colors duration-200 hover:bg-mustard-dark">
            
            Get in Touch
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-colors duration-200 hover:border-mustard hover:text-mustard lg:hidden">
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ?
        <motion.div
          id="mobile-menu"
          ref={panelRef}
          initial={reduceMotion ? undefined : { opacity: 0, y: -12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="border-t border-navy-line bg-navy lg:hidden">
          
            <nav aria-label="Mobile" className="mx-auto max-w-site px-5 py-4 sm:px-8">
              <ul className="divide-y divide-navy-line">
                {navItems.map((item) =>
              <li key={item.to}>
                    <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                  `flex min-h-[56px] items-center text-lg font-semibold ${
                  isActive ? 'text-mustard' : 'text-white'}`

                  }>
                  
                      {item.label}
                    </NavLink>
                  </li>
              )}
              </ul>
              <Link
              to="/contact"
              className="mt-5 flex min-h-[52px] items-center justify-center rounded-card bg-mustard text-sm font-bold uppercase tracking-wider text-navy">
              
                Get in Touch
              </Link>
            </nav>
          </motion.div> :
        null}
      </AnimatePresence>
    </header>);

}