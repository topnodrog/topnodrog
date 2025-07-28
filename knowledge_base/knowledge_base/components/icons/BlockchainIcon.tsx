
import React from 'react';

const BlockchainIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M14 2H10V6H14V2Z M9 7H5V11H9V7Z M19 7H15V11H19V7Z M14 12H10V16H14V12Z M9 17H5V21H9V17Z M19 17H15V21H19V17Z M10 7V11H14V7H10Z M15 12V16H19V12H15Z M5 12V16H9V12H5Z M10 17V21H14V17H10Z" />
  </svg>
);

export default BlockchainIcon;
