import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'onLight' | 'quiet';

const base =
'inline-flex items-center justify-center gap-2 rounded-card px-6 py-3.5 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ease-industrial min-h-[48px]';

const variants: Record<Variant, string> = {
  primary: 'bg-mustard text-navy hover:bg-mustard-dark',
  secondary:
  'border border-white/25 text-white hover:border-mustard hover:text-mustard',
  onLight: 'border border-navy/20 text-navy hover:border-navy hover:bg-navy hover:text-white',
  quiet:
  'px-0 py-0 min-h-0 text-mustard-dark hover:text-navy normal-case tracking-normal text-base'
};
interface ButtonLinkProps {
  to: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  download?: string;
}

/** Internal navigation button (react-router) or downloadable file. */
export function ButtonLink({
  to,
  variant = 'primary',
  children,
  className = '',
  download
}: ButtonLinkProps) {
  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const response = await fetch(to);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = download || 'download';
    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(url);
  };

  if (download) {
    return (
      <a
        href={to}
        download={download}
        onClick={handleDownload}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

interface ButtonAnchorProps {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

/** External / protocol link button (tel:, mailto:, https://wa.me). */
export function ButtonAnchor({
  href,
  variant = 'primary',
  children,
  className = '',
  ariaLabel
}: ButtonAnchorProps) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${base} ${variants[variant]} ${className}`}>
      
      {children}
    </a>);

}