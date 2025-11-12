import React from 'react';
import img01 from "../../../assets/Image/12.jpg";
import img02 from "../../../assets/Image/13.jpg";
import img03 from "../../../assets/Image/14.jpg";
import { Link } from 'react-router-dom';

const Collection = () => {
    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-18 my-20'>
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-4'>
                
                {/* Women's Collection */}
                <div 
                    className='flex flex-col w-full lg:w-1/3 bg-cover py-9 px-8 items-end rounded-md'
                    style={{ backgroundImage: `url(${img01})` }}
                >
                    <h3 className='text-end text-white text-3xl font-semibold mb-4'>
                        Women's <br /> Collection
                    </h3>
                    <Link to="/shop">
                        <button className='btn bgp shadow-none text-white'>Shop Now</button>
                    </Link>
                </div>

                {/* Kid's Collection */}
                <div 
                    className='flex flex-col w-full lg:w-1/3 bg-cover py-9 px-8 items-end rounded-md'
                    style={{ backgroundImage: `url(${img02})` }}
                >
                    <h3 className='text-end text-white text-3xl font-semibold mb-4'>
                        Kid's <br /> Collection
                    </h3>
                    <Link to="/shop"> 
                        <button className='btn bgp shadow-none text-white'>Shop Now</button>
                    </Link>
                </div>

                {/* Men's Collection */}
                <div 
                    className='flex flex-col w-full lg:w-1/3 bg-cover py-9 px-8 items-end rounded-md'
                    style={{ backgroundImage: `url(${img03})` }}
                >
                    <h3 className='text-end text-white text-3xl font-semibold mb-4'>
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
