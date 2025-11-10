import React from 'react';
import bg from "../../../assets/Image/3.jpg"; 

const Hero = () => {
  return (
    <div className='px-18 py-10 '>
      <div style={{ backgroundImage: `url(${bg})` }}
        className="container bg-cover  h-[70vh] px-18 mx-auto rounded-md" >
           <div className='flex flex-col justify-center h-full items-start'>
             <p className='th  text-2xl'>Starting at $ 20.00</p>
            <h1 className='tc text-4xl font-bold py-5'>Fashone sale for <br /> women's</h1>
            <button className='btn bg-[#5CAF90] text-white'>Shop Now</button>
        
           </div>
      </div>
    </div>
  );
};

export default Hero;