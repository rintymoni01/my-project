import React from 'react';
import img01 from "../../../assets/Image/12.jpg";
import img02 from "../../../assets/Image/13.jpg";
import img03 from "../../../assets/Image/14.jpg";
import { Link } from 'react-router-dom'; // ✅ সঠিক প্যাকেজ

const Collection = () => {
    return (
        <div>
            <div className='container mx-auto px-18 flex justify-between my-20'>
               
               <div className='flex flex-col w-90 bg-cover py-9 items-end px-8' style={{backgroundImage:`url(${img01})`}}>
                    <h3 className='text-end text-white text-3xl font-semibold'>
                        Women's <br /> Collection
                    </h3>
                    <Link to="/shop">
                        <button className='btn bgp shadow-none text-white'>Shop Now</button>
                    </Link>
               </div>

               <div className='flex flex-col items-end w-90 px-8 bg-cover py-9' style={{backgroundImage:`url(${img02})`}}>
                    <h3 className='text-end text-white text-3xl font-semibold'>
                        Kid's <br /> Collection
                    </h3>
                    <Link to="/shop"> 
                        <button className='btn bgp shadow-none text-white'>Shop Now</button>
                    </Link>
               </div>

               <div className='flex flex-col items-end w-90 px-8 bg-cover py-9' style={{backgroundImage:`url(${img03})`}}>
                    <h3 className='text-end text-white text-3xl font-semibold'>
                        Men's <br /> Collection
                    </h3>
                    <Link to="/shop"> 
                        <button className='btn bgp shadow-none text-white'>Shop Now</button>
                    </Link>
               </div>

            </div>
        </div>
    );
};

export default Collection;