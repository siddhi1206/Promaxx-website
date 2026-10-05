import React from 'react';
import { Link } from 'react-router-dom';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Promaxx Industries — home"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center border border-mustard"
        aria-hidden="true"
      >
        <img
          src="/logo1.png"
          alt=""
          className="h-7 w-7 object-contain"
        />
      </span>

      <span className="leading-none">
        <span className="block text-base font-extrabold tracking-[0.18em] text-white sm:text-lg">
          PROMAXX
        </span>

        <span className="mt-1 block text-[10px] font-semibold tracking-[0.34em] text-mustard">
          INDUSTRIES
        </span>
      </span>
    </Link>
  );
}