import React, { useState } from 'react';
 import img from "../../assets/CTA.png";
const WaitlistBanner: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for joining! We'll contact you at ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="  pt-16 pb-16 bg-[#FDFBF9]  px-4 flex items-center justify-center">
      <div className=" max-w-[1296px] mx-auto w-full">
        {/* Main Banner */}
    <div
      className="relative rounded-3xl p-4 md:p-12 overflow-hidden md:py-30 py-10  bg-gradient-to-br from-green-800 to-green-900"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >          
          <div className="relative z-10 text-center">
            <h2 className="  text-[#DFFF76] mb-4 text-2xl sm:text-4xl md:text-5xl  leading-snug">
              Be the First to Save Smarter
            </h2>
            <p className="text-[#FAF7F2] mt-6 mb-8 text-base md:text-base">
              Join our exclusive waitlist and get early access to BilledSmart. Start
              <br className="hidden md:block" />
              cutting your bills before anyone else.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 mt-16 justify-center items-center max-w-2xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your mail address"
                className="w-full md:flex-1 px-6 py-3 bg-[#F4F9E7] rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300"
                required
              />
              <button
                type="submit"
                className="w-full cursor-pointer md:w-auto px-8 py-3 bg-[#B3ED97] text-green-900 font-semibold rounded-2xl hover:bg-green-200 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Join Waitlist
              </button>
            </form>

            <p className="text-[#FDFBF9] text-sm mt-6">
              No Spam, Cancel Subscription Anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistBanner;