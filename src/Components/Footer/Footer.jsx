import React from 'react';

import { LuMapPin } from "react-icons/lu";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-18 my-10'>
            <div className='flex flex-col lg:flex-row justify-between gap-10'>
                
                {/* Logo + Description */}
                <div className='flex flex-col gap-4'>
                    <img className='h-16 w-36' src="/Rintymini.png" alt="Logo" />
                    <p className='text-gray-600 text-sm sm:text-base'>
                        Grabit is the biggest market of grocery <br />products. Get your daily needs from our <br />store.
                    </p>
                    <img className='w-40' src="/google.png" alt="Google Play" />
                </div>

                {/* Footer Columns */}
                <div className='flex flex-col sm:flex-row lg:flex-row gap-10 lg:gap-6 w-full'>
                    
                    {/* Category */}
                    <div className='flex-1 border-b lg:border-b-0 border-gray-300 pb-4 lg:pb-0'>
                        <h3 className='text-xl font-semibold pb-3'>Category</h3>
                        <div className='flex flex-col gap-2 text-gray-600'>
                            <p>Dairy & Milk</p>
                            <p>Snack & Spice</p>
                            <p>Fast Food</p>
                            <p>Juice & Drinks</p>
                            <p>Bakery</p>
                            <p>Seafood</p>
                        </div>
                    </div>

                    {/* Company */}
                    <div className='flex-1 border-b lg:border-b-0 border-gray-300 pb-4 lg:pb-0'>
                        <h3 className='text-xl font-semibold pb-3'>Company</h3>
                        <div className='flex flex-col gap-2 text-gray-600'>
                            <p>About us</p>
                            <p>Delivery</p>
                            <p>Legal Notice</p>
                            <p>Terms & conditions</p>
                            <p>Secure payment</p>
                            <p>Contact us</p>
                        </div>
                    </div>

                    {/* Account */}
                    <div className='flex-1 border-b lg:border-b-0 border-gray-300 pb-4 lg:pb-0'>
                        <h3 className='text-xl font-semibold pb-3'>Account</h3>
                        <div className='flex flex-col gap-2 text-gray-600'>
                            <p>Sign In</p>
                            <p>View Cart</p>
                            <p>Return Policy</p>
                            <p>Become a Vendor</p>
                            <p>Affiliate Program</p>
                            <p>Payments</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className='flex-1 border-b lg:border-b-0 border-gray-300 pb-4 lg:pb-0'>
                        <h3 className='text-xl font-semibold pb-3'>Contact</h3>
                        <div className='flex flex-col gap-3 text-gray-600'>
                            <div className='flex items-start gap-2'>
                                <LuMapPin className='text-2xl mt-1' />
                                <p>2548 Broaddus Maple Court, <br /> Madisonville KY 4783, USA.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoLogoWhatsapp className='text-2xl' />
                                <p>+00 9876543210</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdOutlineMail className='text-2xl'/>
                                <p>example@email.com</p>
                            </div>
                            <div className='flex items-center gap-3 text-3xl pt-2'>
                                <FaFacebookSquare />
                                <FaTwitterSquare />
                                <FaLinkedin />
                                <FaInstagramSquare />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
