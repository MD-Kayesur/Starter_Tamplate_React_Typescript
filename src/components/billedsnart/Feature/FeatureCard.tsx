
// src/components/FeatureCard.tsx (Corrected)
import React from 'react';

interface FeatureCardProps {
  iconType: string | any;
  title: string;
  description: string;
  isCentral?: boolean;
  classname?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconType, title, description, classname = '' }) => {
  return (
    <div
      className={`
         bg-[#F4F9E7]
        rounded-lg p-6 flex flex-col items-center text-center
        relative overflow-hidden 
        group
        ${classname}
      `}
    >
      {/* --- Card Content --- */}
      <div className="mb-4">
        <img src={iconType} alt={`Icon for ${title}`} className="w-12 h-12" />
      </div>
      <h3 className="text-2xl font- text-[#003E83] mb-2   sm:text-4xl  leading-snug">{title}</h3>
      <p className="text-base text-gray-600 max-w-xs">{description}</p>
      
      {/* --- Corner Border Elements (Requires CSS from a separate file) --- */}
      <div className="corner-border corner-tl" />
      <div className="corner-border corner-tr" />
      <div className="corner-border corner-bl" />
      <div className="corner-border corner-br" />
      
      {/* The style block that caused the error is GONE */}
    </div>
  );
};

export default FeatureCard;













// // src/components/FeatureCard.tsx
// import React from 'react';

// interface FeatureCardProps {
//   iconType: string | any; // Assuming iconType is the image source path
//   title: string;
//   description: string;
//   isCentral?: boolean; // Not used in this version but kept from original
//   classname?: string;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({ iconType, title, description, classname = '' }) => {
//   return (
//     <div
//       className={`
//         bg-[#F4F9E7]
//         rounded-lg p-6 flex flex-col items-center text-center
//         relative overflow-hidden // Essential for positioning the corners
//         group // Essential for triggering the corner styles on hover
//         ${classname}
//       `}
//       // The original style and event handlers are removed
//       // as they are replaced by the new CSS corner effect
//     >
//       {/* --- Card Content --- */}
//       <div className="mb-4">
//         <img src={iconType} alt={`Icon for ${title}`} className="w-12 h-12" />
//       </div>
//       <h3 className="text-2xl font-semibold text-[#003E83] mb-2">{title}</h3>
//       <p className="text-base text-gray-600 max-w-xs">{description}</p>
      
//       {/* --- Corner Border Elements (Visible on Group Hover) --- */}
//       <div className="corner-border corner-tl" />
//       <div className="corner-border corner-tr" />
//       <div className="corner-border corner-bl" />
//       <div className="corner-border corner-br" />

//       {/* --- CSS for the Corner Effect --- */}
//       {/* In a Next.js/styled-components setup, use <style jsx> or a CSS module */}
//       {/* If using a global CSS file, move this CSS content there */}
//       <style jsx global>{`
//         /* Shared Styles for all corners */
//         .corner-border {
//           content: '';
//           position: absolute;
//           width: 20px; /* Length of the border piece */
//           height: 20px; /* Length of the border piece */
//           border-color: #22c55e; /* Green color from your original */
//           border-style: solid;
//           border-width: 0; /* Start with no border visible */
//           transition: border-width 0.3s ease; /* Smooth animation */
//           z-index: 10;
//           pointer-events: none;
//         }

//         /* Positioning the Corners */
//         .corner-tl { top: 0; left: 0; }
//         .corner-tr { top: 0; right: 0; }
//         .corner-bl { bottom: 0; left: 0; }
//         .corner-br { bottom: 0; right: 0; }

//         /* HOVER STATES: Applies border thickness (4px) when the parent 'group' is hovered */
//         .group:hover .corner-tl {
//           border-top-width: 4px;
//           border-left-width: 4px;
//         }

//         .group:hover .corner-tr {
//           border-top-width: 4px;
//           border-right-width: 4px;
//         }

//         .group:hover .corner-bl {
//           border-bottom-width: 4px;
//           border-left-width: 4px;
//         }

//         .group:hover .corner-br {
//           border-bottom-width: 4px;
//           border-right-width: 4px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default FeatureCard;













// // src/components/FeatureCard.tsx
// import React from 'react';
 

// interface FeatureCardProps {
//   iconType: String|any; // Adjusted to accept string paths for images
//   title: string;
//   description: string;
//   isCentral?: boolean; 
//   classname?:string// To apply a different border style for the middle card if needed
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({ iconType, title, description,classname= false }) => {
//   return (
//   <div
//   className={`
//     bg-[#F4F9E7]
//     border border-green-200
//     hover:border-green-400 hover:border-dashed hover:border-2
//     rounded-lg p-6 flex flex-col items-center text-center
//     ${classname}
//   `}
//   style={{
//   ['--dash-color' as any]: '#22c55e',
// }}
//   onMouseEnter={e => {
//     e.currentTarget.style.borderImage =
//       'repeating-linear-gradient(to right, var(--dash-color) 0, var(--dash-color) 20px, transparent 20px, transparent 40px) 1';
//   }}
//   onMouseLeave={e => {
//     e.currentTarget.style.borderImage = 'none';
//   }}
// >
//       <div className="mb-4">
//         <img src={iconType} alt="" />
//       </div>
//       <h3 className="text-2xl font-semibold text-[#003E83] mb-2">{title}</h3>
//       <p className="text-base text-gray-600 max-w-xs">{description}</p>
//     </div>
//   );
// };

// export default FeatureCard;