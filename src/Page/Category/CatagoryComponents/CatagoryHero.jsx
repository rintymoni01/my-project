import React from 'react';
import SectionHeading from '../../../Components/Sheard/SectionHeading';

import { CiMail } from "react-icons/ci";
import { IoMdGlobe } from "react-icons/io";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";

const CatagoryHero = () => {
    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-18'>
            <div className='my-24'>

                {/* Heading */}
                <div className='flex justify-center text-center mb-4 py-10'>
                    <SectionHeading
                        heading={"Contact"}
                        colorHeading={" With us"}
                        discription={"Customer service should not be a department. It should be the entire company."}
                    />
                </div>

                {/* Contact Cards */}
                <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-8 gap-6 mb-12'>
                    {/* Mail & Website */}
                    <div className='border border-gray-200 w-full lg:w-80 py-6 px-6 flex flex-col items-center text-center'>
                        <div className='bg-[#4B5966] h-16 w-16 flex justify-center items-center rounded-md mb-4'>
                            <CiMail className='text-3xl text-white' />
                        </div>
                        <h3 className='text-2xl font-semibold mb-2'>Mail & Website</h3>
                        <div className='flex items-center gap-2'>
                            <CiMail className='text-gray-500' />
                            <p className='text-gray-500 text-sm'>rintymoni01@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-2 mt-1'>
                            <IoMdGlobe className='text-gray-500' />
                            <p className='text-gray-500 text-sm'>www.yourdomain.com</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className='border border-gray-200 w-full lg:w-80 py-6 px-6 flex flex-col items-center text-center'>
                        <div className='bg-[#4B5966] h-16 w-16 flex justify-center items-center rounded-md mb-4'>
                            <HiMiniDevicePhoneMobile className='text-3xl text-white' />
                        </div>
                        <h3 className='text-2xl font-semibold mb-2'>Contact</h3>
                        <div className='flex items-center gap-2'>
                            <HiMiniDevicePhoneMobile className='text-gray-500' />
                            <p className='text-gray-500 text-sm'>+001834688332</p>
                        </div>
                        <div className='flex items-center gap-2 mt-1'>
                            <HiMiniDevicePhoneMobile className='text-gray-500' />
                            <p className='text-gray-500 text-sm'>+001834688332</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className='border border-gray-200 w-full lg:w-80 py-6 px-6 flex flex-col items-center text-center'>
                        <div className='bg-[#4B5966] h-16 w-16 flex justify-center items-center rounded-md mb-4'>
                            <FaLocationDot className='text-3xl text-white' />
                        </div>
                        <h3 className='text-2xl font-semibold mb-2'>Address</h3>
                        <p className='text-gray-500 text-sm'>Ruami Mello Moraes Filho, 987 - Salvador - MA, 40352, Brazil.</p>
                    </div>
                </div>

                {/* Map & Form */}
                <div className='flex flex-col lg:flex-row justify-center items-start gap-8'>
                    {/* Google Map */}
                    <div className='w-full lg:w-1/2'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4851008789096!2d90.42419807526656!3d23.76573408818768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c754583dd209%3A0xdd0c5fcc7d2d3836!2sBdcalling%20IT%20Ltd.%20-%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1762843648081!5m2!1sen!2sbd"
                            width="100%"
                            height="400"
                            className='rounded-md'
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Contact Form */}
                    <div className='flex flex-col gap-3 w-full lg:w-1/2'>
                        <input className='w-full py-2 border pl-3 border-gray-200 rounded-md' placeholder='Your Name..' type="text" />
                        <input className='w-full py-2 border pl-3 border-gray-200 rounded-md' placeholder='Email' type="text" />
                        <input className='w-full py-2 border pl-3 border-gray-200 rounded-md' placeholder='Phone' type="text" />
                        <textarea className='w-full py-3 border pl-3 border-gray-200 rounded-md' placeholder='Your Message..'></textarea>
                        <button className='bgp btn text-gray-100 w-32 mx-auto mt-2'>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CatagoryHero;
