
import React from 'react';

const SecurityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 12H19V11C19 8.24 16.76 6 14 6C12.93 6 11.94 6.33 11.13 6.88L15.63 11.38C15.86 11.55 16 11.82 16 12.12V12H12ZM10 12V10C10 7.79 8.21 6 6 6C4.9 6 3.91 6.38 3.13 7L7.5 11.38C7.75 11.17 8.04 11 8.35 11H10V12Z" />
  </svg>
);

export default SecurityIcon;
