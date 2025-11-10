import React from 'react';
import cover from "../../../assets/Image/cover.jpg";
const LatestExclusive = () => {
    return (
        <div className='pt-90 pb-10'>
            <div className="h-[60vh] bg-cover px-18 container  mx-auto  rounded-md " style={{ backgroundImage: `url(${cover})` }}>
                 <div className='text-white justify-center flex gap-5  h-full flex-col text-end items-end '>
                <h3 className='text-4xl font-semibold'>30% off sale</h3>
                <h1 className='text-5xl font-bold'>Latest Exclusive
                  <br />  Summer Collection</h1>
                    <button className='bgp px-5 py-2 rounded-md'>Shop now</button>
            </div>

            </div>
           
        </div>
    );
};

export default LatestExclusive;