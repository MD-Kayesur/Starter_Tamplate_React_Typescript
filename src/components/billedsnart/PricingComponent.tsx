
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import img1 from '../../assets/Frame (5).svg';
import img2 from '../../assets/Frame (6).svg';
import img3 from '../../assets/Frame (7).svg';

type PlanType = 'monthly' | 'yearly';

interface Feature {
  text: string;
}

interface PricingPlan {
  id: number;
  icon?: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: Feature[];
  isPopular?: boolean;
  claname?: string; // optional class for transform
}

const PricingComponent: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('monthly');

  const plans: PricingPlan[] = [
    {
      id: 1,
      icon: img1,
      name: 'Basic',
      description: 'Individuals & small households who want quick bill tracking.',
       
      monthlyPrice: 8.0,
      yearlyPrice: 80.0,
      features: [
        { text: 'Upload and manage up to 10 bills/month.' },
        { text: 'OCR scanning & auto-categorization.' },
        { text: 'Savings dashboard (basic analytics).' },
        { text: 'Standard customer support (email).' },
      ],
    },
    {
      id: 2,
      icon: img2,
      claname: 'translate-y-3', // Tailwind-friendly transform
      name: 'Elite',
      description: 'Families & professionals managing multiple accounts.',
      monthlyPrice: 15.0,
      yearlyPrice: 150.0,
      isPopular: true,
      features: [
        { text: 'Upload and manage up to 50 bills/month.' },
        { text: 'Advanced OCR & AI insights (cost comparisons, alerts).' },
        { text: 'Negotiation assistant (semi-automated).' },
        { text: 'Priority support (chat + email).' },
        { text: 'Export reports (CSV/PDF for budgeting apps).' },
      ],
    },
    {
      id: 3,
      icon: img3,
       claname: 'translate-y-3',
      name: 'Premium',
      description: 'Small businesses & power users who want maximum savings.',
      monthlyPrice: 25.0,
      yearlyPrice: 250.0,
      features: [
        { text: 'Unlimited bills & accounts.' },
        { text: 'Full AI bill negotiation (hands-off savings).' },
        { text: 'Multi-user/team support (Up to 5 members).' },
        { text: 'API integrations (QuickBooks, Stripe, Plaid, etc.).' },
        { text: 'Dedicated account manager.' },
        { text: 'Premium support (24/7 chat & phone).' },
      ],
    },
  ];

  const getPrice = (plan: PricingPlan) => (selectedPlan === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice);
  const getPriceLabel = () => (selectedPlan === 'monthly' ? '/month' : '/year');

  return (
    <div className="min-h-screen max-w-[1296px] mx-auto md:py-25 py-10  px-4">
      <div className="  mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#CAEEB9] text-[#023773] px-4 py-1 rounded-full text-sm font-medium mb-4">
            Pricing Plan
          </div>
          <h1 className=" mb-4   text-2xl sm:text-4xl md:text-5xl text-[#00317B] leading-snug">
            Track More, Pay Less
          </h1>
          <p className="text-[#143059] text-base mx-auto mb-8">
            Choose a plan that fits your needs — save money every month, or <br /> maximize your savings for the whole year.
          </p>

          {/* Toggle */}
          {/* <div className="inline-flex flex-wrap  text-center md:gap-5 bg-[#FEFFF5] rounded-full p-2 shadow-sm">
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`px-8 py-2 cursor-pointer rounded-full font-medium transition-all duration-300 ${
                selectedPlan === 'monthly' ? 'bg-[#166E55] text-white' : 'text-[#143059] hover:text-gray-800'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedPlan('yearly')}
              className={`px-8 py-2 cursor-pointer rounded-full font-medium transition-all duration-300 ${
                selectedPlan === 'yearly' ? 'bg-[#166E55] text-white' : 'text-[#143059] hover:text-gray-800'
              }`}
            >
              Yearly
            </button>
            <div className="flex items-center ml-2 px-3 py-1 bg-[#E6EFD3] text-[#023773] rounded-full font-medium">
              Save ~ 17%
            </div>
          </div> */}


{/* <div className="  flex-wrap items-start justify-center text-center gap-2 sm:gap-3 md:gap-5  sm:p-3 md:p-4  w-full sm:w-auto inline-flex bg-[#FEFFF5] rounded-full p-2 shadow-sm">
    <div>
  <button
              onClick={() => setSelectedPlan('monthly')}
              className={`px-8 py-2 cursor-pointer rounded-full font-medium transition-all duration-300 ${
                selectedPlan === 'monthly' ? 'bg-[#166E55] text-white' : 'text-[#143059] hover:text-gray-800'
              }`}
            >
              Monthly
            </button>
          
             <button
              onClick={() => setSelectedPlan('yearly')}
              className={`px-8 py-2 cursor-pointer rounded-full font-medium transition-all duration-300 ${
                selectedPlan === 'yearly' ? 'bg-[#166E55] text-white' : 'text-[#143059] hover:text-gray-800'
              }`}
            >
              Yearly
            </button>
           
           </div>
            <div className="flex items-center ml-2 px-3 py-2 mt-3 md:mt-0 bg-[#E6EFD3] text-[#023773] rounded-full font-medium">
              Save ~ 17%
            </div>
</div> */}

    <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 sm:gap-3 md:gap-5 w-full md:w-[400px] mx-auto text-center bg-[#FEFFF5] rounded-full p-2 sm:p-3 md:p-4 shadow-sm          ">
 {/* <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-5 w-full  md:w-auto sm:w-auto text-center bg-[#FEFFF5] rounded-full p-2 sm:p-3 md:p-4 shadow-sm"> */}
      {/* Toggle Buttons */}
      <div className="flex items-center">
        <button
          onClick={() => setSelectedPlan("monthly")}
          className={`px-6 sm:px-8 py-2 rounded-full font-medium cursor-pointer transition-all duration-300 ${
            selectedPlan === "monthly"
              ? "bg-[#166E55] text-white shadow"
              : "text-[#143059] hover:text-gray-800"
          }`}
        >
          Monthly
        </button>

        <button
          onClick={() => setSelectedPlan("yearly")}
          className={`px-6 sm:px-8 py-2 rounded-full cursor-pointer font-medium transition-all duration-300 ${
            selectedPlan === "yearly"
              ? "bg-[#166E55] text-white shadow"
              : "text-[#143059] hover:text-gray-800"
          }`}
        >
          Yearly
        </button>
      </div>

      {/* Save Badge */}
      <div className="flex items-center px-3 py-1.5 sm:py-2 bg-[#E6EFD3] text-[#023773] rounded-full font-medium ">
        Save ~17%
      </div>
    </div>





        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col rounded-3xl p-8 transition-all duration-300
                ${plan.isPopular ? 'bg-[#092B1F] md:scale-105 ' : 'bg-[#FDFBF9]  border border-[#C3DFB5]'}
                ${plan.claname ? plan.claname : ''}`}
            >
              {/* Top Section */}
              <div>
                <div className={`${plan.isPopular ? 'bg-[#092B1F]' : 'bg-[#FDFBF9]'} mb-6 rounded-2xl`}>
                  <div className={`${plan.isPopular ? 'bg-[#B3ED97]' : 'bg-[#092B1F]'} w-12 h-12 flex items-center justify-center rounded-2xl`}>
                    <img src={plan.icon} alt={plan.name} className="w-6 h-6" />
                  </div>
                </div>

                <h2 className={`text-2xl md:text-5xl mb-6 font-normal ${plan.isPopular ? 'text-green-50' : 'text-[#092B1F]'}`}>
                  {plan.name}
                </h2>

                <p className={`text-lg mb-6 ${plan.isPopular ? 'text-green-50' : 'text-[#143059]'}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-4xl  ${plan.isPopular ? 'text-[#E8FF76]' : 'text-[#092B1F]'}`}>
                    ${getPrice(plan).toFixed(2)}
                  </span>
                  <span className={`text-sm ml-1 ${plan.isPopular ? 'text-green-50' : 'text-[#092B1F]'}`}>
                    {getPriceLabel()}
                  </span>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="mt-auto">
                <button
                  className={`w-full py-3 cursor-pointer px-6 rounded-full font-medium mb-8 transition-all duration-300 flex items-center justify-center gap-2
                    ${plan.isPopular ? 'bg-[#B3ED97]  text-[#023773]' : 'bg-[#B3ED97]  text-[#023773]'}`}
                >
                  Get Started
                  
                  <ArrowRight   size={18} />
                </button>

                <div>
                  <h3 className={` mb-4 text-lg ${plan.isPopular ? 'text-green-50' : 'text-[#092B1F]'}`}>
                    Features Included -
                  </h3>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${plan.isPopular ? 'bg-[#B3ED97]' : 'bg-[#092B1F]'}`}>
                           <Check size={14}
  color={plan.isPopular ? '#092B1F' : '#fff'} // orange if popular, gray otherwise
/>
                        </div>
                        <span className={`text-sm leading-relaxed ${plan.isPopular ? 'text-green-50' : 'text-[#143059]'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;















// import React, { useState } from 'react';
// import { Check, ArrowRight } from 'lucide-react';
// import img1 from '../../assets/Frame (5).svg';
// import img2 from '../../assets/Frame (6).svg';
// import img3 from '../../assets/Frame (7).svg';
// type PlanType = 'monthly' | 'yearly';

// interface Feature {
//   text: string;
// }

// interface PricingPlan {
//   name: string;
//   description: string;
//   monthlyPrice: number;
//   yearlyPrice: number;
//   features: Feature[];
//   isPopular?: boolean;
//   icon?:string;
//   claname?:string;
//   id: number;
// }

// const PricingComponent: React.FC = () => {
//   const [selectedPlan, setSelectedPlan] = useState<PlanType>('monthly');

//   const plans: PricingPlan[] = [
//   {
//     id: 1,
//     icon: img1,
//     name: 'Basic',
//     description: 'Individuals & small households who want quick bill tracking.',
//     monthlyPrice: 8.0,
//     yearlyPrice: 80.0,
//     features: [
//       { text: 'Upload and manage up to 10 bills/month.' },
//       { text: 'OCR scanning & auto-categorization.' },
//       { text: 'Savings dashboard (basic analytics).' },
//       { text: 'Standard customer support (email).' },
//     ],
//   },
//   {
//     id: 2,
//     icon: img2,
//     claname: "transform: translateY(12px)",
//     name: 'Elite',
//     description: 'Families & professionals managing multiple accounts.',
//     monthlyPrice: 15.0,
//     yearlyPrice: 150.0,
//     isPopular: true,
//     features: [
//       { text: 'Upload and manage up to 50 bills/month.' },
//       { text: 'Advanced OCR & AI insights (cost comparisons, alerts).' },
//       { text: 'Negotiation assistant (semi-automated).' },
//       { text: 'Priority support (chat + email).' },
//       { text: 'Export reports (CSV/PDF for budgeting apps).' },
//     ],
//   },
//   {
//     id: 3,
//     icon: img3,
//     name: 'Premium',
//     description: 'Small businesses & power users who want maximum savings.',
//     monthlyPrice: 25.0,
//     yearlyPrice: 250.0,
//     features: [
//       { text: 'Unlimited bills & accounts.' },
//       { text: 'Full AI bill negotiation (hands-off savings).' },
//       { text: 'Multi-user/team support (Up to 5 members).' },
//       { text: 'API integrations (QuickBooks, Stripe, Plaid, etc.).' },
//       { text: 'Dedicated account manager.' },
//       { text: 'Premium support (24/7 chat & phone).' },
//     ],
//   },
// ];


//   const getPrice = (plan: PricingPlan): number => {
//     return selectedPlan === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
//   };

//   const getPriceLabel = (): string => {
//     return selectedPlan === 'monthly' ? '/month' : '/Year';
//   };

//   return (
//     <div className="min-h-screen py-25 px-4">
//       <div className="  mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-block bg-[#CAEEB9] text-[#023773] px-4 py-1 rounded-full text-sm font-medium mb-4">
//             Pricing Plan
//           </div>
//           <h1 className="text-4xl md:text-5xl font-semibold text-[#00317B] mb-4">
//             Track More, Pay Less
//           </h1>
//           <p className="text-[#143059] text-base  mx-auto mb-8">
//             Choose a plan that fits your needs — save money every month, or <br /> maximize your savings for the whole year.
//           </p>

//           {/* Tab Toggle */}
//           <div className="inline-flex bg-[#FEFFF5] rounded-full p-2 shadow-sm">
//             <button
//               onClick={() => setSelectedPlan('monthly')}
//               className={`px-8 py-2 cursor-pointer  text-base rounded-full font-medium transition-all duration-300 ${
//                 selectedPlan === 'monthly'
//                   ? 'bg-[#166E55] text-white'
//                   : ' text-[#143059] hover:text-gray-800'
//               }`}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => setSelectedPlan('yearly')}
//               className={`px-8 cursor-pointer py-2 text-base rounded-full font-medium transition-all duration-300 ${
//                 selectedPlan === 'yearly'
//                   ? 'bg-green-700 text-white'
//                   : '  text-[#143059] hover:text-gray-800'
//               }`}
//             >
//               Yearly
//             </button>
//             <div className="flex  items-center ml-2 px-3 py-1 bg-[#E6EFD3] text-[#023773] rounded-full text-  font-medium">
//               Save ~ 17%
//             </div>
//           </div>
//         </div>

//         {/* Pricing Cards */}
        
//       <div className="grid md:grid-cols-3 gap-6 items-start">

//       {plans.map((plan) => (
     
     
//      <div
//   key={plan.id}
//   className={`flex flex-col rounded-3xl p-8 transition-all duration-300 h-full 
//     ${
//       plan.isPopular
//         ? 'bg-[#092B1F] transform md:scale-105 shadow-2xl'
//         : 'bg-[#FDFBF9] shadow-lg'
//     } 
//     ${plan.claname ? plan.claname : ''}  // ✅ apply translateY if defined
//   `}
// >
//   {/* Top Section */}
//   <div>
//     {/* Icon */}
//     <div
//       className={`${
//         plan.isPopular
//           ? 'bg-[#092B1F] transform md:scale-105'
//           : 'bg-[#FDFBF9]'
//       } mb-6 rounded-2xl`}
//     >
//       {/* Icon container */}
//       <div
//         className={`${
//           plan.isPopular ? 'bg-[#B3ED97]' : 'bg-[#092B1F]'
//         } rounded-2xl w-12 h-12 flex items-center justify-center`}
//       >
//         <img src={plan.icon} alt="" className="w-6 h-6" />
//       </div>
//     </div>

//     {/* Plan Name */}
//     <h2
//       className={`text-5xl mb-6 font-semibold ${
//         plan.isPopular ? 'text-green-50' : 'text-[#092B1F]'
//       }`}
//     >
//       {plan.name}
//     </h2>

//     {/* Description */}
//     <p
//       className={`text-sm mb-6 ${
//         plan.isPopular ? 'text-green-50' : 'text-[#092B1F]'
//       }`}
//     >
//       {plan.description}
//     </p>

//     {/* Price */}
//     <div className="mb-6">
//       <span
//         className={`text-4xl font-bold ${
//           plan.isPopular ? 'text-green-50' : 'text-[#092B1F]'
//         }`}
//       >
//         ${getPrice(plan).toFixed(2)}
//       </span>
//       <span
//         className={`text-sm ml-1 ${
//           plan.isPopular ? 'text-green-50' : 'text-[#092B1F]'
//         }`}
//       >
//         {getPriceLabel()}
//       </span>
//     </div>
//   </div>

//   {/* Bottom Section */}
//   <div>
//     {/* CTA Button */}
//     <button
//       className={`w-full py-3 px-6 rounded-full font-medium mb-8 transition-all duration-300 flex items-center justify-center gap-2 ${
//         plan.isPopular
//           ? 'bg-green-300 hover:bg-green-200'
//           : 'bg-green-100 hover:bg-green-200'
//       } ${plan.isPopular ? 'text-green-50' : 'text-[#092B1F]'}`}
//     >
//       Get Started
//       <ArrowRight size={18} />
//     </button>

//     {/* Features */}
//     <div>
//       <h3
//         className={`font-semibold mb-4 text-sm ${
//           plan.isPopular ? 'text-green-50' : 'text-[#092B1F]'
//         }`}
//       >
//         Features Included -
//       </h3>
//       <ul className="space-y-3">
//         {plan.features.map((feature, idx) => (
//           <li key={idx} className="flex items-start gap-3">
//             <div
//               className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${
//                 plan.isPopular ? 'bg-green-500' : 'bg-green-600'
//               }`}
//             >
//               <Check size={14} className="text-white" />
//             </div>
//             <span
//               className={`text-sm leading-relaxed ${
//                 plan.isPopular ? 'text-green-50' : 'text-[#092B1F]'
//               }`}
//             >
//               {feature.text}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// </div>



//       ))}
//     </div>


//       </div>
//     </div>
//   );
// };

// export default PricingComponent;