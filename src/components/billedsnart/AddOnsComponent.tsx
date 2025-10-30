import React from 'react';
 import img from "../../assets/Adobe Express - file (12) 1.png";
import { Check } from 'lucide-react';
// Define the type for an individual add-on item
interface AddOn {
  id: number;
  label: string;
  price: string;
  note?: string; // Optional note like "(business users)"
}

// Reusable component for a single add-on item
const AddOnItem: React.FC<AddOn> = ({ label, price, note }) => (
  <div className="flex items-start mb-3">
    {/* Checkmark Icon - using a placeholder or a library like 'lucide-react' */}
  <div className='bg-[#30829F] w-5 h-5 flex items-center justify-center rounded-full'>
       <Check className='text-white' size={14}/>
  </div>
    
    <p className="ml-3 text-[#143059]">
      <span className="">{label}:</span> 
      <span className="ml-1 font-medium text-[#166E55]">{price}</span>
      
        <span className="  "> {note}</span>
    
    </p>
  </div>
);

// Main Component
const AddOnsComponent: React.FC = () => {
  // Data for the add-ons
  const addOns: AddOn[] = [
    {
      id: 1,
      label: 'Extra Users',
      price: '$5/month',
      note: 'per additional user',
    },
    {
      id: 2,
      label: 'Data Backup & Archiving',
      price: '$3/month',
    },
    {
      id: 3,
      label: 'Custom Branding',
      price: '$10/month',
      note: '(business users)',
    },
  ];

  return (
    <div className='px-6 mt-10'>
      <div className="  max-w-[1296px]  md:mt-10  mx-auto  rounded-3xl overflow-hidden  border-[#166E55] border-2 ">
      
      {/* Container to mimic the green/gradient background from the image */}
      <div className="p-6 md:py-12 md:px-16  bg-[#FEFFF5] rounded-lg shadow-inner">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          
          {/* Text Content */}
          <div className="md:w-3/5 lg:w-2/3 ">
            <h2 className="  text-center md:text-start   mb-6 text-[#092B1F]   text-2xl sm:text-4xl md:text-5xl leading-snug">
              Add-Ons   (Optional for All Plans)
              
            </h2>
            
            {/* List of Add-Ons */}
            <div className="flex flex-col gap-2 mt-10">
              {addOns.map((item) => (
              <AddOnItem
  key={item.id}
  id={item.id}      // <- pass id too
  label={item.label}
  price={item.price}
  note={item.note}
/>
              ))}
            </div>
          </div>
          
          {/* Image/Illustration Placeholder */}
          <div className="w-full md:w-2/5 lg:w-1/3 mt-6 md:mt-0 flex justify-center md:justify-end">
            {/* In a real application, you'd replace this with your actual image */}
            <div className="  rounded-lg flex items-center justify-center">
               <img className='w-[276px] h-[280px]' src={img} alt="" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddOnsComponent;

// NOTE: You will need to install 'lucide-react' or a similar icon library for the Check icon, 
// OR replace <Check /> with a simple SVG or text icon (like '✔').