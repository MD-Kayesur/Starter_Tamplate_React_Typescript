
import React from 'react';
import Marquee from 'react-fast-marquee';
import imgPlaceholder1 from '../../assets/avaiter/Client Image (1).png';
import imgPlaceholder2 from '../../assets/avaiter/Client Image (2).png';
import imgPlaceholder3 from '../../assets/avaiter/Client Image (3).png';
import imgPlaceholder4 from '../../assets/avaiter/Client Image (4).png';
import imgPlaceholder5 from '../../assets/avaiter/Client Image (5).png';
import imgPlaceholder6 from '../../assets/avaiter/Client Image.png';
import { IoIosStar } from "react-icons/io";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  avatar: string | undefined;
  bgColor: 'light' | 'dark';
}

const TestimonialsMarquee: React.FC = () => {
  const topTestimonials: Testimonial[] = [
    {
      text: "I've tried calling providers myself, but it's always a hassle. With BilledSmart, the savings just show up. It's simple and stress-free.",
      name: "James Parker",
      role: "Operations Lead at Beamco",
      avatar: imgPlaceholder1,
      bgColor: 'light',
    },
    {
      text: "I triple-checked my internet bill and within a week, BilledSmart had negotiated a lower rate. I'm saving $25 a month without lifting a finger.",
      name: "David Kim",
      role: "CEO at Spectrum",
      avatar: imgPlaceholder2,
      bgColor: 'dark',
    },
    {
      text: "With BilledSmart, I feel confident that my team is tracking every expense correctly and securely. I'm saving $15 in a month without lifting a finger.",
      name: "Daniel Carter",
      role: "CFO at NextWave Technologies",
      avatar: imgPlaceholder3,
      bgColor: 'light',
    },
  ];

  const bottomTestimonials: Testimonial[] = [
    {
      text: "I was skeptical at first, but after seeing my first savings update, I was hooked. It really feels like having a personal money assistant.",
      name: "Priya Singh",
      role: "Nurse at Evercare Hospital",
      avatar: imgPlaceholder4,
      bgColor: 'dark',
    },
    {
      text: "BilledSmart has completely changed how we manage our monthly expenses. The automation saves me hours every week.",
      name: "Maya Patel",
      role: "Finance Manager at BrightPath Ltd.",
      avatar: imgPlaceholder5,
      bgColor: 'light',
    },
    {
      text: "The dashboard makes it so easy to see how much I've saved. It feels amazing to watch the numbers grow month by month.",
      name: "James Lee",
      role: "Owner at Lee's Printing Services",
      avatar: imgPlaceholder6,
      bgColor: 'dark',
    },
  ];

  const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div
      className={`flex-shrink-0 w-100 rounded-3xl p-8 mx-3 ${
        testimonial.bgColor === 'dark'
          ? 'bg-[#092B1F] text-[#EEF6DE]'
          : 'bg-[#EEF6DE] text-[#143059]'
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="text-base leading-relaxed mb-6">{testimonial.text}</p>
        </div>
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold overflow-hidden ${
              testimonial.bgColor === 'dark'
                ? 'bg-slate-600 text-white'
                : 'bg-green-200 text-green-800'
            }`}
          >
            <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-semibold text-sm">{testimonial.name}</p>
            <p
              className={`text-xs ${
                testimonial.bgColor === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FEFFF5] py-16 px-4 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="  mb-4          text-2xl sm:text-4xl md:text-5xl text-[#00317B] leading-snug">
          What Our Valuable
          <br />
          Customers Are Saying
        </h1>
        <p className="text-[#143059] mb-6">
          Real stories from people who cut their bills and <br /> boosted
          
          their savings with BilledSmart.
        </p>

        <div className="flex items-center justify-center gap-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <IoIosStar key={i} className="w-10 h-10 fill-teal-900 text-teal-700" />
          ))}
        </div>
        <p className="text-[#023773] text-xl">Trusted by Over 2500+ Users</p>
      </div>

      {/* Top Marquee (Right to Left) */}
      <Marquee
        speed={40}
        pauseOnHover
        gradient={false}
        direction="right"
        className="mb-8"
      >
        {topTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`top-${index}`} testimonial={testimonial} />
        ))}
      </Marquee>

      {/* Bottom Marquee (Left to Right) */}
      <Marquee
        speed={40}
        pauseOnHover
        gradient={false}
        direction="left"
      >
        {bottomTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`bottom-${index}`} testimonial={testimonial} />
        ))}
      </Marquee>
    </div>
  );
};

export default TestimonialsMarquee;
















// import React from 'react';
//  import imgPlaceholder1 from '../../assets/avaiter/Client Image (1).png';
// import imgPlaceholder2 from '../../assets/avaiter/Client Image (2).png';
// import imgPlaceholder3 from '../../assets/avaiter/Client Image (3).png';
// import imgPlaceholder4 from '../../assets/avaiter/Client Image (4).png';
// import imgPlaceholder5 from '../../assets/avaiter/Client Image (5).png';
// import imgPlaceholder6  from '../../assets/avaiter/Client Image.png';
//  import { IoIosStar } from "react-icons/io";

// interface Testimonial {
//   text: string;
//   name: string;
//   role: string;
//   avatar: string|undefined;
//   bgColor: 'light' | 'dark';
// }

// const TestimonialsMarquee: React.FC = () => {
//   const topTestimonials: Testimonial[] = [
//     {
//       text: "I've tried calling providers myself, but it's always a hassle. With BilledSmart, the savings just show up. It's simple and stress-free.",
//       name: "James Parker",
//       role: "Operations Lead at Beamco",
//       avatar: imgPlaceholder1,
//       bgColor: 'light',
//     },
//     {
//       text: "I triple-checked my internet bill and within a week, BilledSmart had negotiated a lower rate. I'm saving $25 a month without lifting a finger.",
//       name: "David Kim",
//       role: "CEO at Spectrum",
//       avatar: imgPlaceholder2,
//       bgColor: 'dark',
//     },
//     {
//       text: "With BilledSmart, I feel confident that my team is tracking every expense correctly and securely. I'm saving $15 in a month without lifting a finger.",
//       name: "Daniel Carter",
//       role: "CFO at NextWave Technologies",
//       avatar: imgPlaceholder3,
//       bgColor: 'light',
//     },
//   ];

//   const bottomTestimonials: Testimonial[] = [
//     {
//       text: "I was skeptical at first, but after seeing my first savings update, I was hooked. It really feels like having a personal money assistant.",
//       name: "Priya Singh",
//       role: "Nurse at Evercare Hospital",
//       avatar: imgPlaceholder4,
//       bgColor: 'dark',
//     },
//     {
//       text: "BilledSmart has completely changed how we manage our monthly expenses. The automation saves me hours every week.",
//       name: "Maya Patel",
//       role: "Finance Manager at BrightPath Ltd.",
//       avatar: imgPlaceholder5,
//       bgColor: 'light',
//     },
//     {
//       text: "The dashboard makes it so easy to see how much I've saved. It feels amazing to watch the numbers grow month by month.",
//       name: "James Lee",
//       role: "Owner at Lee's Printing Services",
//       avatar: imgPlaceholder6,
//       bgColor: 'dark',
//     },
//   ];

//   const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
//     <div
//       className={`flex-shrink-0 w-100 rounded-3xl p-8 mx-3  ${
//         testimonial.bgColor === 'dark'
//           ? 'bg-[#092B1F] text-[#EEF6DE]'
//           : 'bg-[#EEF6DE] text-[#143059]'
//       }`}
//     >
// <div className='flex flex-col justify-between h-full'>
//   <div>
//         <p className="text-base leading-relaxed mb-6">{testimonial.text}</p>
// </div> 
//      <div className="flex  items-center  gap-3 ">
//         <div
//           className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
//             testimonial.bgColor === 'dark'
//               ? 'bg-slate-600 text-white'
//               : 'bg-green-200 text-green-800'
//           }`}
//         >
//           {/* {testimonial.avatar} */}
//           <img src={testimonial.avatar} alt="uuu" />
//         </div>
//         <div>
//           <p className="font-semibold text-sm">{testimonial.name}</p>
//           <p
//             className={`text-xs ${
//               testimonial.bgColor === 'dark' ? 'text-gray-300' : 'text-gray-600'
//             }`}
//           >
//             {testimonial.role}
//           </p>
//         </div>
//       </div>
// </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen    bg-[#FEFFF5] py-16 px-4 overflow-hidden">
//       <div className="  mx-auto mb-16">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl  text-[#00317B] mb-4">
//             What Our Valuable
//             <br />
//             Customers Are Saying
//           </h1>
//           <p className="text-[#143059] mb-6">
//             Real stories from people who cut their bills and boosted
//             <br />
//             their savings with BilledSmart.
//           </p>

//           {/* Star Rating */}
//           <div className="flex items-center justify-center gap-2 mb-2">
//             {[...Array(5)].map((_, i) => (
//               <IoIosStar key={i} className="w-10 h-10 fill-teal-900 text-teal-700" />
//             ))}
//           </div>
//           <p className="text-[#023773]  text-xl">Trusted by Over 2500+ Users</p>
//         </div>
//       </div>

//       {/* Top Marquee - Right to Left */}
//       <div className="relative mb-6 overflow-hidden">
//         <div className="flex animate-marquee-rtl">
//           {/* First set */}
//           {topTestimonials.map((testimonial, index) => (
//             <TestimonialCard key={`top-1-${index}`} testimonial={testimonial} />
//           ))}
//           {/* Duplicate set for seamless loop */}
//           {topTestimonials.map((testimonial, index) => (
//             <TestimonialCard key={`top-2-${index}`} testimonial={testimonial} />
//           ))}
//           {/* Third set for extra seamlessness */}
//           {topTestimonials.map((testimonial, index) => (
//             <TestimonialCard key={`top-3-${index}`} testimonial={testimonial} />
//           ))}
//         </div>
//       </div>

//       {/* Bottom Marquee - Left to Right */}
//       <div className="relative overflow-hidden">
//         <div className="flex animate-marquee-ltr">
//           {/* First set */}
//           {bottomTestimonials.map((testimonial, index) => (
//             <TestimonialCard key={`bottom-1-${index}`} testimonial={testimonial} />
//           ))}
//           {/* Duplicate set for seamless loop */}
//           {bottomTestimonials.map((testimonial, index) => (
//             <TestimonialCard key={`bottom-2-${index}`} testimonial={testimonial} />
//           ))}
//           {/* Third set for extra seamlessness */}
//           {bottomTestimonials.map((testimonial, index) => (
//             <TestimonialCard key={`bottom-3-${index}`} testimonial={testimonial} />
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes marquee-rtl {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-33.333%);
//           }
//         }

//         @keyframes marquee-ltr {
//           0% {
//             transform: translateX(-33.333%);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }

//         .animate-marquee-rtl {
//           animation: marquee-rtl 30s linear infinite;
//         }

//         .animate-marquee-ltr {
//           animation: marquee-ltr 30s linear infinite;
//         }

//         .animate-marquee-rtl:hover,
//         .animate-marquee-ltr:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TestimonialsMarquee;