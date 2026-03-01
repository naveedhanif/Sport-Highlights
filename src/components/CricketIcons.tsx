import React from 'react';

export const StumpsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 21V7" />
    <path d="M12 21V6" />
    <path d="M18 21V7" />
    <path d="M5 7h14" />
    <path d="M4 21h16" />
  </svg>
);

export const CatchIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="7" r="3" />
    <path d="M6 14c0 3.5 3 7 6 7s6-3.5 6-7" />
    <path d="M3 12l3 2" />
    <path d="M21 12l-3 2" />
  </svg>
);

export const RunOutIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 21V7" />
    <path d="M14 21V6" />
    <path d="M20 21V10" />
    <path d="M7 7h8" />
    <path d="M18 10h3" />
    <path d="M6 21h16" />
    <circle cx="18" cy="6" r="2" fill="currentColor" />
    <path d="M14 6l4 0" strokeDasharray="2 2" />
  </svg>
);

export const FieldingIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 20h20" strokeWidth="3" />
    <circle cx="12" cy="12" r="3" />
    <path d="M4 12h5" strokeDasharray="2 2" />
    <path d="M15 12h5" strokeDasharray="2 2" />
  </svg>
);
