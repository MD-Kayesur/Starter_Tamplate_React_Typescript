// src/components/FeatureIcon.tsx
import React from 'react';

interface FeatureIconProps {
  // You might pass a specific icon component or a name to render different icons
  // For simplicity, we'll use a generic placeholder here.
  // In a real app, this would be an SVG for 'Bill Upload', 'OCR Parsing', 'Savings Dashboard'
  iconType: 'billUpload' | 'ocrParsing' | 'savingsDashboard';
}

const getIcon = (iconType: FeatureIconProps['iconType']) => {
  // These are placeholder SVGs. In a real app, you'd have specific icons.
  const baseClasses = "h-12 w-12 text-green-700"; // Darker green for the icon itself

  switch (iconType) {
    case 'billUpload':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
      );
    case 'ocrParsing':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case 'savingsDashboard':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      );
    default:
      return null;
  }
};

const FeatureIcon: React.FC<FeatureIconProps> = ({ iconType }) => {
  return <>{getIcon(iconType)}</>;
};

export default FeatureIcon;