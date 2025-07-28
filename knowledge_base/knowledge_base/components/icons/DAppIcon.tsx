
import React from 'react';

const DAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2C12.88 2 14.16 2.32 15.29 2.88L12.7 5.47C12.32 5.33 11.91 5.25 11.5 5.25C8.32 5.25 5.75 7.82 5.75 11C5.75 14.18 8.32 16.75 11.5 16.75C14.68 16.75 17.25 14.18 17.25 11C17.25 10.21 17.08 9.46 16.77 8.78L18.9 6.67C20.2 7.95 21 9.61 21 11.5ZM22 4V7H19V4H22ZM19 12H22V9H19V12ZM14 2H17V5H14V2Z" />
  </svg>
);

export default DAppIcon;
