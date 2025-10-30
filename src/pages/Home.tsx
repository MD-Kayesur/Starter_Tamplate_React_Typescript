
import CommonWrapper from "@/common/CommonWrapper";
import AddOnsComponent from "@/components/billedsnart/AddOnsComponent";
import Banner from "@/components/billedsnart/Banner";
import FAQAccordion from "@/components/billedsnart/FAQAccordion";
import SmartToolsSection from "@/components/billedsnart/Feature/SmartToolsSection";
import PricingComponent from "@/components/billedsnart/PricingComponent";
import SecuritySavingsBanner from "@/components/billedsnart/security/SecuritySavingsBanner";
import TestimonialsMarquee from "@/components/billedsnart/TestimonialsMarquee";
import WaitlistBanner from "@/components/billedsnart/WaitlistBanner";

const Home = () => {
  return (
    <CommonWrapper className="bg-[#FEFFF5] overflow-x-hidden">
      
      {/* Home / Banner */}
      <div id="home" className="overflow-hidden">
        <Banner />
      </div>

      {/* Security / Savings Section */}
      <div id="Features">
        <CommonWrapper className=" ">
          <SecuritySavingsBanner />
        </CommonWrapper>
      </div>


      {/* Smart Tools */}
      <div id=" ">
         <CommonWrapper className=" ">
        <SmartToolsSection />
        </CommonWrapper>
      </div>

      {/* Pricing Section */}
      <div id="Pricing">
        <CommonWrapper className="bg-gradient-to-br  from-[#E8F8D3] pb-25 via-[#ECFAE3] to-[#DEF17E] ">
          <PricingComponent />
          <AddOnsComponent />
        </CommonWrapper>
      </div>

      {/* Testimonials */}
          <div id="Reviews">
        <CommonWrapper className="max-w-[1296px] ">
          <TestimonialsMarquee />
        </CommonWrapper>
      </div>

      {/* FAQ */}
      <div id="FAQ">
        <FAQAccordion />
      </div>

      {/* Join Waitlist */}
      <div id="JoinWaitlist">
  <CommonWrapper className="">      <WaitlistBanner />
  
  </CommonWrapper>
      </div>

    </CommonWrapper>
  );
};

export default Home;










// import CommonWrapper from "@/common/CommonWrapper";
// import AddOnsComponent from "@/components/billedsnart/AddOnsComponent";

// import Banner from "@/components/billedsnart/Banner";
// import FAQAccordion from "@/components/billedsnart/FAQAccordion";
// import SmartToolsSection from "@/components/billedsnart/Feature/SmartToolsSection";
// import PricingComponent from "@/components/billedsnart/PricingComponent";
// import SecuritySavingsBanner from "@/components/billedsnart/security/SecuritySavingsBanner";
// import TestimonialsMarquee from "@/components/billedsnart/TestimonialsMarquee";
// import WaitlistBanner from "@/components/billedsnart/WaitlistBanner";


// const Home = () => {


//   return (
//     <>

//       <CommonWrapper className="  bg-[#FEFFF5] overflow-x-hidden">

//         <div className="       overflow-hidden  ">
//           <Banner />
//         </div>

//         <div>
//           <CommonWrapper className="px-50"> 
//             <SecuritySavingsBanner />
//             </CommonWrapper>

//         </div>  
//             <div>
//                 <SmartToolsSection />
//             </div>

//       <div>
//           <CommonWrapper className="    bg-gradient-to-br from-[#E8F8D3] pb-25 via-[#ECFAE3] to-[#DEF17E]">
//           <PricingComponent />
//           <AddOnsComponent />
//         </CommonWrapper>
//       </div>
//      <div>
//          <CommonWrapper className=" "><TestimonialsMarquee /></CommonWrapper>
//      </div>

//         <div id="FAQ">
//           <FAQAccordion />
//         </div>
//         <WaitlistBanner />
//         <div className=" relative">



//         </div>


//       </CommonWrapper>










//     </>
//   );
// };

// export default Home;
