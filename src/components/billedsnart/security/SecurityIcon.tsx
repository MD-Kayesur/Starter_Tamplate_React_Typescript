// src/components/SecurityIcon.tsx
import React from 'react';

// You would replace this with an actual SVG icon (e.g., from Lucide, Heroicons, or Font Awesome)
 

interface SecurityIconProps {
  text: string;
  img?:string
}

const SecurityIcon: React.FC<SecurityIconProps> = ({ text,img }) => {
  return (
    <div className="flex items-center flex-col text-sm font-medium text-gray-700 whitespace-nowrap">
       <img className='' src={img} alt="" />
  <div>
    <h1 className='text-xl font-medium mt-5'>    {text}</h1>
  </div>
    </div>
  );
};

export default SecurityIcon;