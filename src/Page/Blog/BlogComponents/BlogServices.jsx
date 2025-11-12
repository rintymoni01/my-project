import React from 'react';
import SectionHeading from '../../../Components/Sheard/SectionHeading';
import Support from '../../Home/HomeComponents/Support';


const BlogServices = () => {
    return (
        <div className='my-24'>
          <div className='flex justify-center text-center mb-4'>
             <SectionHeading heading={"Our"} colorHeading={" Services"} discription={"Customer service should not be a department. It  should be the entire company."}></SectionHeading> 
          </div>
         <div className=''>
             <Support></Support>
         </div>
        </div>
    );
};

export default BlogServices;