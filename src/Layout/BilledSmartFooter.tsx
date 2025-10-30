
import React from "react";
import Logo from "../assets/Logo2.svg";
import { Link as ScrollLink } from "react-scroll"; // ✅ Import from react-scroll

interface QuickLink {
  name: string;
  to: string; // ✅ Renamed href → to for react-scroll
}

interface BilledSmartFooterProps {
  quickLinks: QuickLink[];
}

const BilledSmartFooter: React.FC<BilledSmartFooterProps> = ({ quickLinks }) => {
  return (
    <footer className="bg-[#123126] rounded-t-3xl  px-8 pt-20  pb-8 md:p-12">
      <div className="max-w-[1296px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-start space-y-8 md:space-y-0">
          {/* Left Section */}
          <div className="flex-1 max-w-lg">
            <div className="flex items-center space-x-2 mb-6">
              <img src={Logo} alt="BilledSmart Logo" />
            </div>
            <p className="md:text-3xl mt-16  text-[#D2D9CA] leading-relaxed">
              <span className="italic">BilledSmart</span> is the smarter way to cut costs and keep more money in your pocket.
            </p>
          </div>

          {/* Right Section: Quick Links */}
          <div className="flex-shrink-0 md:pl-12">
            <h3 className="text-lg font-semibold text-[#B3ED97] mb-4 opacity-80">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={link.to === "FAQ" ? -100 : 0} // optional scroll offset
                    className="text-[#D2D9CA] opacity-90 hover:opacity-100 transition duration-300 cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 pt-8 border-t border-[#39554C] border-opacity-10 text-center">
          <p className="text-[#F4F9E7] md:text-xl opacity-60">
            © 2025 BilledSmart, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BilledSmartFooter;









// import React from 'react';
// import Logo from '../assets/Logo2.svg'; // Placeholder for the logo image
// // Define the structure for a Quick Link
// interface QuickLink {
//   name: string;
//   href: string;
// }

// // Define the props for the Footer component (optional, but good practice)
// interface BilledSmartFooterProps {
//   quickLinks: QuickLink[];
// }

// const BilledSmartFooter: React.FC<BilledSmartFooterProps> = ({ quickLinks }) => {
//   return (
//     // Outer container with dark background, rounded top corners, and padding
//     <footer className="bg-[#123126]  rounded-t-3xl p-8 md:p-12  ">
//       <div className=" max-w-[1296px] mx-auto">
//         <div className="flex flex-col md:flex-row    justify-between md:items-start space-y-8 md:space-y-0">
          
//           {/* Left Section: Logo and Slogan */}
//           <div className="flex-1 max-w-lg">
//             <div className="flex items-center space-x-2 mb-6">
//               {/* Using a placeholder for the Logo - replace with an actual SVG/Image component */}
//                <img src={Logo} alt="sdffd" />
//              </div>
//            <p className="text-3xl mt-16 font-medium text-[#D2D9CA] leading-relaxed">
//   <span className="italic">BilledSmart</span> is the smarter way to cut costs and keep more money in your pocket.
// </p>
//           </div>

//           {/* Right Section: Quick Links */}
//           <div className="flex-shrink-0 md:pl-12">
//             <h3 className="text-lg font-semibold text-[#B3ED97] mb-4 opacity-80">Quick Links</h3>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.name}> 
//                   <a 
//                     href={link.href} 
//                     className="text-[#D2D9CA] opacity-90 hover:opacity-100 transition duration-300"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Separator line and Copyright */}
//         <div className="mt-16 pt-8 border-t border-[#39554C] border-opacity-10 text-center">
//           <p className=" text-[#F4F9E7] text-xl opacity-60">
//             © 2025 BilledSmart, All Rights Reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default BilledSmartFooter;

// Example Usage in another component:
/*
const ExampleComponent: React.FC = () => {
  const links: QuickLink[] = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-end">
      {/ * Main page content goes here * /}
      <BilledSmartFooter quickLinks={links} />
    </div>
  );
};
*/