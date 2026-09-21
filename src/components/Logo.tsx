import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Wordmark placeholder. When the official Promaxx logo asset is supplied,
 * swap the markup below for an <img src="/images/logo/promaxx-logo.svg" />
 * and keep its natural aspect ratio (do not stretch).
 */
export function Logo({ className = '' }: {className?: string;}) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Promaxx Industries — home">
      
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center border border-mustard"
        aria-hidden="true">
        
        <span className="h-4 w-4 rounded-full border-[3px] border-mustard" />
      </span>
      <span className="leading-none">
        <span className="block text-base font-extrabold tracking-[0.18em] text-white sm:text-lg">
          PROMAXX
        </span>
        <span className="mt-1 block text-[10px] font-semibold tracking-[0.34em] text-mustard">
          INDUSTRIES
        </span>
      </span>
    </Link>);

}