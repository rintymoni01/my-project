import React from 'react';

import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
  style={{ backgroundImage: "url('/3.jpg')" }}
  className="bg-cover bg-center w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-md flex items-center"
>
    <div className='px-4 container mx-auto sm:px-6 lg:px-18 py-5 sm:py-8 lg:py-10'>
     
        <div className='flex flex-col justify-center items-start px-4 sm:px-6 lg:px-0'>
          <p className='th text-lg sm:text-xl lg:text-2xl'>Starting at $20.00</p>
          <h1 className='tc text-2xl sm:text-3xl lg:text-4xl font-bold py-3 sm:py-4 lg:py-5'>
            Fashion sale for <br /> women's
          </h1>
          <Link to="/shop">
            <button className='btn bg-[#5CAF90] hover:scale-110 duration-500 transition-all text-white px-4 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-3'>
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
