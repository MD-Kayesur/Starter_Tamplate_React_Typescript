
// src/components/SmartToolsSection.tsx
import React from 'react';
import FeatureCard from './FeatureCard';
import icon1 from '../../../assets/Icon.svg';
import icon2 from '../../../assets/Frame (8).svg';
import icon3 from '../../../assets/Frame (9).svg';

const SmartToolsSection: React.FC = () => {
  return (
    <div className="  px-4 pb-10  sm:px-6 lg:px-20 bg-[#FEFFF5]">
      <div className="   mx-auto text-center">
        {/* Features Tag */}
        <span className="inline-block bg-[#CAEEB9] text-[#023773] text-xs font-semibold px-4 sm:px-5 py-1 sm:py-2 rounded-full mb-4">
          Features
        </span>

        {/* Main Heading */}
        <h2 className="mb-4 text-2xl sm:text-4xl md:text-5xl text-[#00317B] leading-snug">
          Smart Tools to Cut Your Bills
        </h2>

        {/* Description */}
        <p className="  md:text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          BilledSmart makes saving effortless. From scanning your bills to negotiating with providers, everything works together to lower your costs and keep more money in your pocket.
        </p>

        {/* Feature Cards Grid */}
        <div className="flex flex-wrap max-w-[1296px] mx-auto justify-center gap-x-10 gap-y-12 mt-8 items-start">
          {/* Bill Upload Card */}
          <FeatureCard
            classname="mt-0 md:mt-0"
            iconType={icon1}
            title="Bill Upload"
            description="Snap or upload your bill, and BilledSmart instantly scans it—no forms, no hassle"
          />

          {/* OCR Parsing Card */}
          <FeatureCard
            classname="mt-0 md:mt-8 lg:mt-20"
            iconType={icon2}
            title="OCR Parsing"
            description="Our system automatically detects providers, due dates, and amounts."
            isCentral={true}
          />

          {/* Savings Dashboard Card */}
          <FeatureCard
            classname="mt-0 md:mt-16 lg:mt-40"
            iconType={icon3}
            title="Savings Dashboard"
            description="Track how much you save each month with a clear, simple dashboard."
          />
        </div>
      </div>
    </div>
  );
};

export default SmartToolsSection;












// // src/components/SmartToolsSection.tsx
// import React from 'react';
// import FeatureCard from './FeatureCard'; // Import the FeatureCard component
// import icon1 from '../../../assets/Icon.svg';
// import icon2 from '../../../assets/Frame (8).svg';
// import icon3 from '../../../assets/Frame (9).svg';
// const SmartToolsSection: React.FC = () => {
//   return (
//     // Main container with the light beige background
//     <div className=" py-16 px-4 sm:px-6 lg:px-20 ">
//       <div className="   mx-auto text-center">
//         {/* "Features" Tag */}
//         <span className="inline-block bg-[#CAEEB9] text-[#023773] text-xs font-semibold px-5 py-2 rounded-full mb-4">
//           Features
//         </span>

//         {/* Main Heading */}
//         <h2 className="text-5xl sm:text-4xl  text-[#00317B] leading-tight mb-4">
//           Smart Tools to Cut Your Bills
//         </h2>

//         {/* Description */}
//         <p className="text-base text-gray-600 max-w-2xl mx-auto mb-12">
//          BilledSmart makes saving effortless. From scanning your bills to negotiating with providers, everything works together to lower your costs and keep more money in your pocket.
//         </p>

//         {/* Feature Cards Grid */}
//       <div className="flex h-auto gap-10 mt-8 items-start">
//   {/* Bill Upload Card (Highest) */}
//   <FeatureCard
//     classname=""
//     iconType={icon1}
//     title="Bill Upload"
//     description="Snap or upload your bill, and BilledSmart instantly scans it—no forms, no hassle"
//   />

//   {/* OCR Parsing Card (Slightly Lower) */}
//   <FeatureCard
//     classname="mt-20" // Use a standard offset like mt-10
//     iconType={icon2}
//     title="OCR Parsing"
//     description="Our system automatically detects providers, due dates, and amounts."
//     isCentral={true}
//   />

//   {/* Savings Dashboard Card (Lowest) */}
//   <FeatureCard
//     classname="mt-40" // Use a larger standard offset like mt-20 to make it lower than the second card
//     iconType={icon3}
//     title="Savings Dashboard"
//     description="Track how much you save each month with a clear, simple dashboard."
//   />
// </div>
//       </div>
//     </div>
//   );
// };

// export default SmartToolsSection;