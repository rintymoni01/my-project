import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";


const TopHeader = () => {
    return (
       <div className="hidden lg:block shadow-md">
  <div className="flex justify-between items-center container mx-auto px-6 py-2">
    <div className="flex gap-1 items-center">
      <FiPhoneCall className="text-gray-500" />
      <div className="tp">+001834688332</div>
    </div>
    <div className="flex gap-1 items-center">
      <FaWhatsapp className="text-gray-500" />
      <div className="tp">+001834688332</div>
    </div>
    <div>
      <p className="tp">World's Fastest Online Shopping Destination</p>
    </div>
    <div className="tp gap-6 flex">
      <p>Help?</p>
      <p>Track Order?</p>
      <p>English</p>
      <p>Dollar</p>
    </div>
  </div>
</div>
    );
};

export default TopHeader;