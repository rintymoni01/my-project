import React from 'react';


const LatestExclusive = () => {
    return (
        <div className='pt-10 sm:pt-20 lg:pt-5 pb-10'>
            <div 
                className="container mx-auto rounded-md bg-cover px-4 sm:px-6 lg:px-18 h-60 sm:h-80 lg:h-[60vh]" 
                style={{ backgroundImage: `url(/cover.jpg)` }}
            >
                <div className='flex flex-col justify-center items-end h-full text-white gap-3 sm:gap-5 text-end'>
                    <h3 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>30% off sale</h3>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
                        Latest Exclusive <br /> Summer Collection
                    </h1>
                    <button className='bgp px-4 sm:px-5 py-2 rounded-md'>Shop now</button>
                </div>
            </div>
        </div>
    );
};

export default LatestExclusive;
