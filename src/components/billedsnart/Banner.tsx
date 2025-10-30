 
import React from 'react';
 
// Assuming BANNER_IMAGE_2 now points to the BilledSmart hero image
import BANNER_IMAGE_2 from "../../assets/Hero Image.png"; 

const Banner: React.FC = () => {
    return (
        // Set a suitable height and remove overflow-x-hidden for simplicity if not needed
        <section id='home' className="relative md:h-screen h-[680px] text-white">
             
             {/* Background Container for the image, applying the visual appearance */}
             <div
                 className="absolute w-full h-full  inset-0  z-0 bg-cover bg-center object-cover bg-no-repeat"
                 style={{ 
                     backgroundImage: `url(${BANNER_IMAGE_2})`, // Use the BilledSmart image
                     // Optional: You might need a slight overlay if the image in the prompt is edited/darkened
                 }}
                 role="img"
                 aria-label="Woman at a desk holding cash, representing saving money with BilledSmart"
             />

             {/* Content Container */}
             <div className="relative z-20 md:pb-100 md:pt-120 flex h-full items-center justify-start mx-auto px-5 ">
                  
                 <div className=" md:flex md:px-28 justify-between gap-70  h-full  text-left">
                     
                     {/* Main Headline */}
                   <div className='flex-1 md:mt-0 mt-60'>
                         <h1 className="text-4xl font-normal sm:text-6xl md:text-7xl   leading-tight text-white">
                             Cut your bills in <br className='hidden sm:inline'/>
                             Minutes using 
                             <span className="text-[#ADFF2F] ml-2 inline-block">
                                 BilledSmart
                             </span>
                         </h1>
                     
                        </div>
                     {/* Right-aligned text block (using flex to position it) and Button */}
                     <div className="    md:justify-end ">
                        <div className=" mt-5 md:mt-0 md:max-w-sm ml-auto">
                            {/* Smaller Text Block - color set to white/light grey */}
                            <p 
                               
                                className="text-sm md:text-lg text-gray-200  bg-opacity-30 p-3 rounded" // Added a slight background for contrast
                            >
                                BilledSmart uses AI to negotiate with your providers and lower your monthly bills to save your money.
                            </p>

                            {/* Start Saving Button - using the light green color from the image */}
                            <button 
                               
                                className="px-8 py-3 mt-4 text-[#092B1F] rounded-full bg-[#DFFF76] cursor-pointer hover:bg-[#cef060] transition duration-300   text-lg  shadow-xl"
                            >
                                Start Saving
                            </button>
                        </div>
                     </div>
                 </div>
                 
             </div>
        </section>
    );
};

export default Banner;









//  import React from 'react';
// import { motion } from "framer-motion";

//  import BANNER_IMAGE_2 from "../../assets/Hero Image.png";
 
 
// const Banner: React.FC = () => {

    

//     return (
//         <section id='home' className=" overflow-x-hidden  relative h-[870px]  sm:px-6      text-white">
//              <div
//                 className="absolute w-full h-full inset-0 z-0 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${BANNER_IMAGE_2})` }}
//                 role="img"
//                 aria-label="Abstract dark background image"
//             />

            

//              <div className="relative z-20 flex h-full items-center justify-center">
//                 <div className="mx-auto flex flex-col justify-between lg:flex-row  items-center gap-8 lg:gap-16 w-full mt-15 md:mt-0 md:px-13">
//                      <motion.div 
                     
         
                     
//                      className="space-y-6 px-5 md:px-0  max-w-[900px] mt-8  text-center lg:text-left">
//                         <h1 className="  md:text-7xl  font-bold leading-tight bg-gradient-to-b from-[#ebf2f6] to-[#a5d1ee] bg-clip-text text-transparent">
//                             Empowering Innovation with Cutting-Edge Data Solutions
//                         </h1>
//                         <p className="text-base sm:text-lg md:text-xl text-gray-300  max-w-3xl mx-auto lg:mx-0">
//                             Transforming businesses through AI, analytics, and cloud technologies. Partner with Next Generation Digital Architects to unlock the full potential of your data and drive sustainable growth.
//                         </p>
//                         <button className="px-6 py-3 mt-4  text-black sm:mt-6 bg-[#DBBB5D] hover:bg-[#9e8539] transition duration-300 rounded-lg text-lg font-semibold shadow-lg">
//                             Get Started
//                         </button>
//                     </motion.div>

//                      <motion.div 
                 
//                      className="rounded-xl md:mr-40  overflow-hidden w-full h-full max-w-md lg:max-w-lg md:scale-130">
                        
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Banner;
