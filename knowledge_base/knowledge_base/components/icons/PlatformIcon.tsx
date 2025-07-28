
import React from 'react';

const PlatformIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM11 15.93V8.94L6.5 11.25V14L11 15.93ZM13 15.93L17.5 14V11.25L13 8.94V15.93ZM20.44 9L12 5.5L3.56 9L12 12.5L20.44 9Z" />
  </svg>
);

export default PlatformIcon;
