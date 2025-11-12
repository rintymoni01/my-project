import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LiaHeadsetSolid } from "react-icons/lia";

const Support = () => {
    const features = [
        {
            "id": 1,
            "icon": <CiDeliveryTruck className='th text-5xl mx-auto' />,
            "title": "Free Shipping",
            "subtitle": "Free shipping on all US orders or orders above $200"
        },
        {
            "id": 2,
            "icon": <FaHandHoldingHeart className='th text-5xl mx-auto' />,
            "title": "24X7 Support",
            "subtitle": "Contact us 24 hours a day, 7 days a week"
        },
        {
            "id": 3,
            "icon": <IoCartOutline className='th text-5xl mx-auto' />,
            "title": "30 Days Return",
            "subtitle": "Simply return it within 30 days for an exchange"
        },
        {
            "id": 4,
            "icon": <LiaHeadsetSolid className='th text-5xl mx-auto' />,
            "title": "Payment Secure",
            "subtitle": "Contact us 24 hours a day, 7 days a week"
        }
    ];

    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-18 my-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {features.map(f => (
                    <div key={f.id} className='border border-gray-200 text-center text-gray-600 rounded-md px-4 py-6 hover:shadow-lg transition-shadow'>
                        <div className='mb-4'>{f.icon}</div>
                        <p className='font-semibold mb-2'>{f.title}</p>
                        <p className='text-sm'>{f.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Support;
