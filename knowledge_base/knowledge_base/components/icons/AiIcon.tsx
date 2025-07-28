
import React from 'react';

const AiIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM8.5 12c.83 0 1.5-.67 1.5-1.5S9.33 9 8.5 9 7 9.67 7 10.5 7.67 12 8.5 12zm7 0c.83 0 1.5-.67 1.5-1.5S16.33 9 15.5 9 14 9.67 14 10.5 14.67 12 15.5 12zm-3.5 3c1.67 0 3.18-1.04 3.75-2.5h-7.5c.57 1.46 2.08 2.5 3.75 2.5z" />
  </svg>
);

export default AiIcon;
