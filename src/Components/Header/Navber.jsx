import React from 'react';
import { BiCategory } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";

const Navber = () => {
    return (
        <div className='border py-2 border-gray-300'>
            <div className='flex items-center justify-between container mx-auto px-4 lg:px-18'>

                {/* ===== Left: Categories (Hidden on mobile) ===== */}
                <div className='hidden lg:flex cursor-pointer text-white h-11 w-50 hover:scale-110 duration-500 transition-all rounded-md bgp items-center justify-center gap-2 px-1'>
                    <BiCategory className='text-2xl' />
                    <select name="" id="" className='text-black'>
                        <option value="">All Categories</option>
                        <option value="">Dairy & Bakery</option>
                        <option value="">Fruits & Vegetable</option>
                        <option value="">Snack & Spice</option>
                        <option value="">Juice & Drinks</option>
                    </select>
                </div>

                {/* ===== Center: Menu ===== */}
                <div className='flex flex-1 justify-center gap-2 lg:gap-4'>
                    <NavLink className={({isActive})=>isActive?'th':''} to="/">
                        <select className='h-8 w-20 sm:w-24 text-xs lg:h-9 lg:w-19'>
                            <option>Home</option>
                            <option>Grocery</option>
                            <option>Fashion</option>
                        </select>
                    </NavLink>

                    <NavLink className={({isActive})=>isActive?'th':''} to="/shop">
                        <select className='h-8 w-20 sm:w-24 text-xs lg:h-9 lg:w-19'>
                            <option>Shop</option>
                            <option>3 Column</option>
                            <option>Full Column</option>
                        </select>
                    </NavLink>

                    <NavLink className={({isActive})=>isActive?'th':''} to="/category">
                        <select className='h-8 w-20 sm:w-24 text-xs lg:h-9 lg:w-19'>
                            <option>Category</option>
                            <option>3 Column</option>
                            <option>Left Column</option>
                        </select>
                    </NavLink>

                    <NavLink className={({isActive})=>isActive?'th':''} to="/products">
                        <select className='h-8 w-20 sm:w-24 text-xs lg:h-9 lg:w-19'>
                            <option>Products</option>
                            <option>Product Page</option>
                        </select>
                    </NavLink>

                    <NavLink className={({isActive})=>isActive?'th':''} to="/blog">
                        <select className='h-8 w-20 sm:w-24 text-xs lg:h-9 lg:w-19'>
                            <option>Blog</option>
                            <option>Left Sidebar</option>
                        </select>
                    </NavLink>

                    <NavLink className={({isActive})=>isActive?'th':''} to="/offers">
                        <select className='h-8 w-20 sm:w-24 text-xs lg:h-9 lg:w-19'>
                            <option>Offers</option>
                            <option>Current Location</option>
                        </select>
                    </NavLink>
                </div>

                {/* ===== Right: Location (Hidden on mobile) ===== */}
                <div className='hidden lg:flex text-white h-11 w-50 hover:scale-110 duration-500 transition-all rounded-md bgp items-center justify-center gap-2 px-1'>
                    <CiLocationOn className='text-2xl'/>
                    <select className='text-black'>
                        <option>New York</option>
                        <option>Los Angeles</option>
                        <option>Chicago</option>
                        <option>Houston</option>
                    </select>
                </div>

            </div>
        </div>
    );
};

export default Navber;
