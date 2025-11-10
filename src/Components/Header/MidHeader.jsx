import React from 'react';
import { RiUserLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";




const MidHeader = () => {
    return (
        <div className='flex items-center container mx-auto justify-between py-1 px-18'>
            <div>
                <img className='h-19 w-45' src="src/assets/Image/Rintymini.png" alt="" />
            </div>
           <div>
            <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
           </div>

           <div>
               <div className='flex  items-center gap-8'>
                 <div className='flex items-center gap-2'>
                    <RiUserLine  className='text-3xl text-gray-500'/>
                    <div>
                        <p className='tx'>Account</p>
                        <p className='tp'>Login</p>
                    </div>
                     </div>
                      <div className='flex items-center gap-2'>
                    <FaRegHeart  className='text-3xl text-gray-500'/>
                    <div>
                        <p className='tx'>Wishlist</p>
                        <p className='tp'>3-items</p>
                    </div>
                     </div>
                      <div className='flex items-center gap-2'>
                    <IoBagOutline  className='text-3xl text-gray-500'/>
                    <div>
                        <p className='tx'>Cart</p>
                        <p className='tp'>3-items</p>
                    </div>
               </div>
               
                
                </div>
           </div>
        </div>
    );
};

export default MidHeader;