import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
// Assuming the path to your image asset is correct
import img from "../../assets/FAQ Image.png";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC = () => {
  // Set the initial open item to index 1 ("How does BilledSmart work?"), as seen in the image.
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const faqs: FAQItem[] = [
    {
      question: "Is my personal data and billing information really secure?",
      answer: "Yes, your data is protected with bank-level encryption. We use industry-standard security protocols to ensure all your personal and billing information remains confidential and secure."
    },
    {
      question: "How does BilledSmart work?",
      answer: "BilledSmart uses AI technology to analyze your bills, negotiate with providers on your behalf, and track the savings in a simple dashboard. You upload your bill once — we handle the rest."
    },
    {
      question: "What types of bills are supported?",
      answer: "We support a wide range of bills including internet, cable, mobile phone, utilities, insurance, and subscription services. Our platform continuously adds support for new bill types."
    },
    {
      question: "What happens if no savings are found?",
      answer: "If we can't find any savings opportunities, you won't be charged. We only succeed when you save money. Our team will continue monitoring your bills for future opportunities."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no penalties or hidden fees. Your account will remain active until the end of your current billing period."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Updated background to a pale, uniform green/off-white for a closer match.
    <div className="min-h-screen  bg-[#F4F9E7]  py-25 px-4">
        
      <div className=" max-w-[1296px] mx-auto">
         {/* Header */}
            <div className="mb-8 flex flex-col items-center text-center">
              {/* FAQ Tag */}
              <div className="inline-block text-[#023773] px-4 py-1 rounded-full text-sm font-medium mb-4" 
                   // Custom color style applied to match the light green background of the tag
                   style={{ backgroundColor: '#CAEEB9' }}>
                FAQ
              </div>
              
              {/* Title */}
              <h1 className="mb-3   text-2xl sm:text-4xl md:text-5xl text-[#00317B] leading-snug  ">
                Got Questions?
                <br />
                We've Got Answers.
              </h1>
              
              {/* Subtitle */}
              <p className="text-[#143059] leading-relaxed">
                Everything you need to know before <br />
getting started with BilledSmart.
              </p>
            </div>
        <div className=" mt-15 grid md:grid-cols-2     items-center">
          
          {/* Left Column - FAQ */}
          <div className=''>
           

            {/* Accordion */}
            <div className="flex   flex-col gap-5">
         {faqs.map((faq, index) => (
  <div
    key={index}
    className={`rounded-2xl  shadow-sm transition-all duration-300
      ${openIndex === index 
        ? 'bg-[#092B1F] text-[#B3ED97] shadow-lg' 
        : 'bg-[#E6EFD3] text-[#153C76] hover:bg-[#D7EBC6] hover:shadow-md'}
    `}
  >
    <button
      onClick={() => toggleAccordion(index)}
      className="w-full px-6 py-5 flex items-center cursor-pointer justify-between text-left"
    >
      <span className="text-xl pr-4  ">{faq.question}</span>
      <div className="flex-shrink-0">
        {openIndex === index ? (
          <X className="w-5 h-5" />
        ) : (
          <Plus className="w-5 h-5 text-green-700" />
        )}
      </div>
    </button>

    <div
      className={`overflow-hidden transition-[max-height,opacity,padding] duration-400 ease-in-out ${
        openIndex === index ? 'max-h-96 opacity-100 py-5' : 'max-h-0 opacity-0 py-0'
      }`}
    >
      <div className={`px-6 text-base leading-relaxed ${openIndex === index ? 'text-[#F4F9E7]' : 'text-gray-800'}`}>
        {faq.answer}
      </div>
    </div>
  </div>
))}


            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden    md:flex justify-center">
            {/* The image in the design has a sharp, cropped top edge. We will use a rounded container with shadow. */}
            <div className="rounded-3xl overflow-hidden   sticky top-8">
              <img
                src={img}
                alt="Person using mobile app"
                // Adjusted object-fit and height to better reflect the aspect ratio in the image
                className="w-[482px] h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;









// import React, { useState } from 'react';
// import { Plus, X } from 'lucide-react';
// import img from "../../assets/FAQ Image.png";
// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const FAQAccordion: React.FC = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(1);

//   const faqs: FAQItem[] = [
//     {
//       question: "Is my personal data and billing information really secure?",
//       answer: "Yes, your data is protected with bank-level encryption. We use industry-standard security protocols to ensure all your personal and billing information remains confidential and secure."
//     },
//     {
//       question: "How does BilledSmart work?",
//       answer: "BilledSmart uses AI technology to analyze your bills, negotiate with providers on your behalf, and track the savings in a simple dashboard. You upload your bill once — we handle the rest."
//     },
//     {
//       question: "What types of bills are supported?",
//       answer: "We support a wide range of bills including internet, cable, mobile phone, utilities, insurance, and subscription services. Our platform continuously adds support for new bill types."
//     },
//     {
//       question: "What happens if no savings are found?",
//       answer: "If we can't find any savings opportunities, you won't be charged. We only succeed when you save money. Our team will continue monitoring your bills for future opportunities."
//     },
//     {
//       question: "Can I cancel my subscription anytime?",
//       answer: "Yes, you can cancel your subscription at any time with no penalties or hidden fees. Your account will remain active until the end of your current billing period."
//     }
//   ];

//   const toggleAccordion = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-50 py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-8 items-start">
//           {/* Left Column - FAQ */}
//           <div>
//             {/* Header */}
//             <div className="mb-8">
//               <div className="inline-block bg-green-200 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
//                 FAQ
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
//                 Got Questions?
//                 <br />
//                 We've Got Answers.
//               </h1>
//               <p className="text-gray-600">
//                 Everything you need to know before
//                 <br />
//                 getting started with BilledSmart.
//               </p>
//             </div>

//             {/* Accordion */}
//             <div className="space-y-3">
//               {faqs.map((faq, index) => (
//                 <div
//                   key={index}
//                   className={`rounded-2xl transition-all duration-300 ${
//                     openIndex === index
//                       ? 'bg-slate-800 text-white'
//                       : 'bg-green-50 text-gray-800'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleAccordion(index)}
//                     className="w-full px-6 py-5 flex items-center justify-between text-left"
//                   >
//                     <span className="font-medium text-sm pr-4">
//                       {faq.question}
//                     </span>
//                     <div className="flex-shrink-0">
//                       {openIndex === index ? (
//                         <X className="w-5 h-5" />
//                       ) : (
//                         <Plus className="w-5 h-5 text-gray-600" />
//                       )}
//                     </div>
//                   </button>
                  
//                   <div
//                     className={`overflow-hidden transition-all duration-300 ${
//                       openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
//                     }`}
//                   >
//                     <div className="px-6 pb-5 text-sm leading-relaxed text-gray-200">
//                       {faq.answer}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column - Image */}
//           <div className="hidden md:block">
//             <div className="rounded-3xl overflow-hidden shadow-2xl sticky top-8">
//               <img
//                 src={img}
//                 alt="Person using mobile app"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQAccordion;