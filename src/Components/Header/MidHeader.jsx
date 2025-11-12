import React from 'react';
import { RiUserLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

const MidHeader = () => {
  return (
    <div className='flex items-center justify-between container mx-auto py-2 px-4 lg:px-18'>

      {/* ===== Left: Logo ===== */}
      <div>
        <img 
          className='h-10 w-auto sm:h-12 md:h-14' 
          src="src/assets/Image/Rintymini.png" 
          alt="Logo" 
        />
      </div>

      {/* ===== Middle/Right: Search Bar ===== */}
      <div className='gap-4 flex'>
        <div className='flex-1 flex justify-end '>
        <label
          className="
            flex items-center gap-2 border border-gray-300 rounded-full px-3 py-3
            w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px]
            transition-all duration-300
          "
        >
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
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
          <input 
            type="search" 
            required 
            placeholder="Search"
            className="outline-none flex-1 bg-transparent text-sm"
          />
        </label>
      </div>

      {/* ===== Right: Icons (Desktop only) ===== */}
      <div className='hidden lg:flex items-center gap-8'>
        {/* Account */}
        <div className='flex items-center gap-2'>
          <RiUserLine className='text-3xl text-gray-500'/>
          <div>
            <p className='tx'>Account</p>
            <p className='tp'>Login</p>
          </div>
        </div>

        {/* Wishlist */}
        <div className='flex items-center gap-2'>
          <FaRegHeart className='text-3xl text-gray-500'/>
          <div>
            <p className='tx'>Wishlist</p>
            <p className='tp'>3-items</p>
          </div>
        </div>

        {/* Cart */}
        <div className='flex items-center gap-2'>
          <IoBagOutline className='text-3xl text-gray-500'/>
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
