import React from 'react';
import img4 from "../../../assets/Image/about.png";
import img5 from "../../../assets/Image/about-2.png";
import img6 from "../../../assets/Image/about-3.png";
import SectionHeading from '../../../Components/Sheard/SectionHeading';

const BlogHero = () => {
    return (
        <div className='container mx-auto px-4 md:px-18 my-10'>
            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-7'>
                
                {/* Images Section */}
                <div className='flex flex-col lg:flex-row flex-1 gap-4 w-full'>
                    <img className='w-full lg:w-68 rounded-md' src={img4} alt="Main" />
                    <div className='flex flex-col gap-4 w-full lg:w-auto'>
                        <img className='w-full lg:w-68 rounded-md' src={img5} alt="Sub1" />
                        <img className='w-full lg:w-68 rounded-md' src={img6} alt="Sub2" />
                    </div>
                </div>

                {/* Text Section */}
                <div className='flex-1 w-full'>
                    <SectionHeading heading={"Who"} colorHeading={"We are?"} />
                    <h3 className='text-2xl font-semibold tp py-5'>
                        Premium Quality Multi Vendor & Multipurpose Marketplace eCommerce Tailwind CSS Template Buy Now Today
                    </h3>
                    <p className='tp'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        Lorem Ipsum has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default BlogHero;
