
// src/components/SecuritySavingsBanner.tsx
import React from 'react';
import SecurityIcon from './SecurityIcon';
import sslIcon1 from '../../../assets/Frame (1).svg';
import sslIcon2 from '../../../assets/Frame (2).svg';
import sslIcon3 from '../../../assets/Frame (3).svg';
import sslIcon4 from '../../../assets/Frame (4).svg';
import sslIcon5 from '../../../assets/Frame.svg';
import Marquee from 'react-fast-marquee';

const SecuritySavingsBanner: React.FC = () => {
  const securityFeatures: { text: string; img: string }[] = [
    { text: 'SSL Secured', img: sslIcon5 },
    { text: 'Encrypted Data', img: sslIcon1 },
    { text: 'GDPR Compliant', img: sslIcon2 },
    { text: 'Secure Payment', img: sslIcon3 },
    { text: 'Reliable Cloud', img: sslIcon4 },
  ];

  return (
    <div className="py-12 sm:py-16 px-2 lg:px-12 bg-[#FEFFF5]">
      <div className="max-w-[1296px] mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-[#00317B] leading-snug">
          Secure, Trusted, and Proven <br className="" />  to  Save You Money
        </h1>

        {/* Savings Claim */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-[#143059] font-medium">
          On average, users save <span className="text-2xl">$250/year</span> <br className='md:hidden block' />  with BilledSmart
        </p>

<div className="mt-10 md:mt-14 md:hidden">
          <Marquee
            speed={40}
            pauseOnHover
            gradient={false}
            className="flex gap-x-10 sm:gap-x-40 md:gap-x-20"
          >
            {securityFeatures.map((feature, index) => (
              <div key={index} className="mx-6">
                <SecurityIcon text={feature.text} img={feature.img} />
              </div>
            ))}
          </Marquee>
        </div>
        {/* Security Features Marquee */}
           <div className="mt-8 sm:mt-12 pt-6 sm:pt-8">
           <div className="md:flex flex-wrap justify-center gap-x-10 sm:gap-x-6 md:gap-x-25 gap-y-8 hidden">
           {securityFeatures.map((feature, index) => (
              <SecurityIcon 
                key={index} 
                text={feature.text} 
                img={feature.img} 
              />
            ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySavingsBanner;













// // src/components/SecuritySavingsBanner.tsx
// import React from 'react';
// import SecurityIcon from './SecurityIcon';
// import sslIcon1 from '../../../assets/Frame (1).svg';
// import sslIcon2 from '../../../assets/Frame (2).svg';
// import sslIcon3 from '../../../assets/Frame (3).svg';
// import sslIcon4 from '../../../assets/Frame (4).svg';
// import sslIcon5 from '../../../assets/Frame.svg';
// import Marquee from 'react-fast-marquee';

// const SecuritySavingsBanner: React.FC = () => {
//   const securityFeatures: { text: string; img: string }[] = [
//     { text: 'SSL Secured', img: sslIcon5 },
//     { text: 'Encrypted Data', img: sslIcon1 },
//     { text: 'GDPR Compliant', img: sslIcon2 }, 
//     { text: 'Secure Payment', img: sslIcon3 },
//     { text: 'Reliable Cloud', img: sslIcon4 },
//   ];

//   return (
//     <div className="py-12  sm:py-16 px-4 sm:px-6 lg:px-12 bg-[#F9F7F3]">
//       <div className=" max-w-[1296px] mx-auto text-center">
//         {/* Main Heading */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl  text-[#00317B] leading-snug">
//           Secure, Trusted, and Proven <br className="hidden sm:inline" />
//           to Save You Money
//         </h1>

//         {/* Savings Claim */}
//         <p className="mt-4 text-base sm:text-lg md:text-xl text-[#143059] font-medium">
//           On average, users save <span className="font-semibold">$250/year</span> with BilledSmart
//         </p>

//         {/* Security Features Section */}
//         <div className="mt-8 sm:mt-12 pt-6 sm:pt-8">
//           <div className="flex flex-wrap justify-center gap-x-10 sm:gap-x-6 md:gap-x-25 gap-y-8">
//                 <Marquee
//         speed={40}
//         pauseOnHover
//         gradient={false}
//         direction="right"
//         className="mb-8"
//       >
//             {securityFeatures.map((feature, index) => (
//               <SecurityIcon 
//                 key={index} 
//                 text={feature.text} 
//                 img={feature.img} 
//               />
//             ))}
//             </Marquee>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecuritySavingsBanner;










// // src/components/SecuritySavingsBanner.tsx
// import React from 'react';
// import SecurityIcon from './SecurityIcon'; // Import the icon component
// import sslIcon1 from '../../../assets/Frame (1).svg';
// import sslIcon2 from '../../../assets/Frame (2).svg';
// import sslIcon3 from '../../../assets/Frame (3).svg';
// import sslIcon4 from '../../../assets/Frame (4).svg';
// import sslIcon5 from '../../../assets/Frame.svg';
// const SecuritySavingsBanner: React.FC = () => {
//   // Array of security features to map over
// const securityFeatures: { text: string; img: string }[] = [
//   { text: 'SSL Secured', img: sslIcon5   },
//   { text: 'Encrypted Data', img: sslIcon1   },
//   { text: 'GDPR Compliant', img: sslIcon2 }, 
//   { text: 'Secure Payment', img:sslIcon3  },
//   { text: 'Reliable Cloud', img: sslIcon4 },
// ];

//   return (
//     // The main container with the light beige background color
//     <div className=" py-25  px-4 sm:px-6 lg:px-8">
//       <div className="  mx-auto text-center">
//         {/* Main Heading */}
//         <h1 className="text-5xl sm:text-5xl font- text-[#00317B] leading-tight">
//           Secure, Trusted, and Proven <br className="hidden sm:inline" />
//           to Save You Money
//         </h1>

//         {/* Savings Claim */}
//         <p className="mt-4 text-base text-[#143059] font-medium">
// On average, users save <span className='font-semibold'>$250/year</span> with BilledSmart        </p>

//         {/* --- Security Features Section --- */}
//         <div className="mt-12 pt-8 ">
//           <div className="flex flex-wrap justify-center gap-x-25 gap-y-4">
//             {securityFeatures.map((feature) => (
//               <SecurityIcon key={"id"} text={feature.text} img={feature.img} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecuritySavingsBanner;