import React from "react";
import SectionHeading from "../../../Components/Sheard/SectionHeading";

import { CiMail } from "react-icons/ci";
import { IoMdGlobe } from "react-icons/io";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import {  FaLocationDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

import { FiPhoneCall } from "react-icons/fi";

const CatagoryHero = () => {

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-18">
        <div className="my-24">
          
          {/* Heading */}
          <div className="flex justify-center text-center mb-4 py-10">
            <SectionHeading
              heading={"Contact"}
              colorHeading={" With us"}
              discription={
                "Customer service should not be a department. It should be the entire company."
              }
            />
          </div>

          {/* Contact Cards */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-8 gap-6 mb-12">
            {/* Mail & Website */}
            <div className="border border-gray-200 w-full lg:w-80 py-6 px-6 flex flex-col items-center text-center">
              <div className="bg-[#4B5966] h-16 w-16 flex justify-center items-center rounded-md mb-4">
                <CiMail className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Mail & Website</h3>
              <div className="flex items-center gap-2">
                <CiMail className="text-gray-500" />
                <p className="text-gray-500 text-sm">rintymoni01@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <IoMdGlobe className="text-gray-500" />
                <p className="text-gray-500 text-sm">www.yourdomain.com</p>
              </div>
            </div>
            {/* Contact */}
            <div className="border border-gray-200 w-full lg:w-80 py-6 px-6 flex flex-col items-center text-center">
              <div className="bg-[#4B5966] h-16 w-16 flex justify-center items-center rounded-md mb-4">
                <HiMiniDevicePhoneMobile className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Contact</h3>
              <div className="flex items-center gap-2">
                <HiMiniDevicePhoneMobile className="text-gray-500" />
                <p className="text-gray-500 text-sm">+001834688332</p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <HiMiniDevicePhoneMobile className="text-gray-500" />
                <p className="text-gray-500 text-sm">+001834688332</p>
              </div>
            </div>

            {/* Address */}
            <div className="border border-gray-200 w-full lg:w-80 py-6 px-6 flex flex-col items-center text-center">
              <div className="bg-[#4B5966] h-16 w-16 flex justify-center items-center rounded-md mb-4">
                <FaLocationDot className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Address</h3>
              <p className="text-gray-500 text-sm">
                Ruami Mello Moraes Filho, 987 - Salvador - MA, 40352, Brazil.
              </p>
            </div>
          </div>


<div className="flex flex-col items-center justify-center min-h-screen container mx-auto gap-5 p-4">

  {/* Profile Image */}
  <div className="rounded-full h-48 w-48 overflow-hidden">
    <img src="/Image/immg.jpg" className="w-full h-full object-cover" alt="" />
  </div>

  {/* Wrapper */}
  <div 
    className="
      flex 
      flex-col 
      sm:flex-col 
      md:flex-row 
      lg:flex-row 
      gap-8 
      items-center
    "
  >
    {/* Left Column */}
    <div className="flex flex-col gap-5">
      <div className="w-64 h-80 overflow-hidden rounded-bl-[80px] rounded-tr-[80px]">
        <img src="/image.png" className="w-full h-full object-cover" />
      </div>

      <div className="bg-[#5CAF90] w-64 h-24 flex items-center pl-6 rounded-tr-[50px] rounded-bl-[50px]">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <FiPhoneCall className="text-2xl text-gray-400"/>
          </div>
          <div>
            <p className="text-md font-bold text-white">Online Support</p>
            <p className="text-white text-xl">+0183468****</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="flex flex-col gap-5">
      <div className="bg-[#5CAF90] w-64 h-24 flex items-center pl-6 rounded-tl-[50px] rounded-br-[50px]">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <FiPhoneCall className="text-2xl text-gray-400"/>
          </div>
          <div>
            <p className="text-md font-bold text-white">Offline Support</p>
            <p className="text-white text-xl">+0183468****</p>
          </div>
        </div>
      </div>

      <div className="w-64 h-80 overflow-hidden rounded-tl-[80px] rounded-br-[80px]">
        <img src="/about.png" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</div>


 <div className="pb-10">
            <div className="bg-[url('/cover.jpg')] md:bg-cover  h-[60vh] bg-cover bg-center w-full rounded-2xl " > 
           
                
                        <div className="flex flex-col text-end h-full justify-center pr-10">
                          <h1 className="text-3xl  font-semibold text-white mb-3">Welcome to My E-Commerce Website</h1>
                        <p className="text-sm text-black mb-6 pt-3 pb-5">
                            Discover great products, exclusive deals, and fast delivery.
                        </p>
                        
                   <div className=" items-end flex flex-col pr-10">
                     <Link to="/blog">
                        <div className="flex gap-2 w-43  py-3 justify-center rounded-full text-white hover:text-white items-center bg-gray-800 hover hover:bg-[#5CAF90]">
                     < FaArrowLeftLong />  
                        <p>View More </p>
<FaArrowRightLong />
                   </div>
                   </Link>
                       </div>
                        </div>
                      
          </div>

          </div>





          {/* Map & Form */}
          <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
            {/* Google Map */}
            <div className="w-full lg:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4851008789096!2d90.42419807526656!3d23.76573408818768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c754583dd209%3A0xdd0c5fcc7d2d3836!2sBdcalling%20IT%20Ltd.%20-%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1762843648081!5m2!1sen!2sbd"
                width="100%"
                height="400"
                className="rounded-md"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col gap-3 w-full lg:w-1/2">
              <input
                className="w-full py-2 border pl-3 border-gray-200 rounded-md"
                placeholder="Your Name.."
                type="text"
              />
              <input
                className="w-full py-2 border pl-3 border-gray-200 rounded-md"
                placeholder="Email"
                type="text"
              />
              <input
                className="w-full py-2 border pl-3 border-gray-200 rounded-md"
                placeholder="Phone"
                type="text"
              />
              <textarea
                className="w-full py-3 border pl-3 border-gray-200 rounded-md"
                placeholder="Your Message.."
              ></textarea>
              <button className="bgp btn text-gray-100 w-32 mx-auto mt-2">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatagoryHero;
