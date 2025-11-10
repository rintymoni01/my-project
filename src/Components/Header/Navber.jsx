import React from 'react';
 import { BiCategory } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";

const Navber = () => {
    return (
 <div className='border py-2 border-gray-300'>
           <div className='flex items-center justify-between container mx-auto px-18 '>
            <div className='flex  text-white h-11 w-50 rounded-md bgp items-center justify-center gap-2 px-1' >
               
            <BiCategory className='text-2xl '/>
             <div className='justify-center'>
                <select name="" id="">
                    <option value="" className='text-black '>All Categories</option>
                    <option value="" className='text-black'>Dairy & Bakery</option>
                    <option value="" className='text-black'>Fruits & Vegetable</option>
                    <option value="" className='text-black'>Snack & Spice</option>
                    <option value="" className='text-black'>Juice & Drinks</option>

                </select>
                
             </div>
            </div>
                 <div className='tx flex gap-4 '>
            
        <NavLink className={({isActive})=>isActive?`th` :``} to="/">
        <select name="" id="" className='items-center h-9 w-19'>
            <option value="" className='text-xs'>Home</option>
            <option value="" className='text-xs'>grocery</option>
            <option value="" className='text-xs'>Fashion</option>
            <option value="" className='text-xs'>Fashion 2</option>
        </select>
        </NavLink>
        <NavLink className={({isActive})=>isActive?`th` :``} to="/shop">
        <select name="" id="" className='items-center h-9 w-19'>
            <option value="" className='tp'>Shop Now</option>
            <option value="" className='tp'> 3 Column</option>
            
            <option value="" className='tp'>FullColumn</option>
        </select>
         </NavLink>
        <NavLink className={({isActive})=>isActive?`th` :``} to="/category">
        <select name="" id="" className='items-center h-9 w-19'>
            <option value="" className='tp'>Category</option>
            <option value="" className='tp'> 3 Column</option>
            <option value="" className='tp'>Left Column</option>
            <option value="" className='tp'>Right Column</option>
            <option value="" className='tp'>Right 5 Column</option>
            <option value="" className='tp'>FullColumn</option>
        </select></NavLink>
        <NavLink className={({isActive})=>isActive?`th` :``} to="/products">
        
        <select name="" id="" className='items-center h-9 w-19'>
            <option value="" className='tp'>Products</option>
            <option value="" className='tp'>Product page</option>
            <option value="" className='tp'>Product According</option>
            
            <option value="" className='tp'>Full Column</option>
        </select>
        </NavLink>
        <NavLink className={({isActive})=>isActive?`th` :``} to="/blog">
        <select name="" id="" className='items-center h-9 w-19'>
            <option value="" className='tp'>Blog</option>
            <option value="" className='tp'>Left sidebar</option>
            <option value="" className='tp'>right Sidebar</option>
    
            <option value="" className='tp'>Full With </option>
        </select>
        </NavLink>
        
        <NavLink className={({isActive})=>isActive?`th` :``} to="/offers">
          <select name="" id="" className='items-center h-9 w-19'>
                    <option value="" className='text-black'> Offers</option>
                    <option value="" className='text-black'>current Location</option>
                    <option value="" className='text-black'>Los Angeles</option>
                    <option value="" className='text-black'>Chicago</option>
                    

                </select>
       </NavLink>
      </div>
      <div>
         <div className='flex  text-white h-11 w-50 rounded-md bgp items-center justify-center ' >
               
            <CiLocationOn className='text-2xl'/>
             <div className='justify-center'>
                <select name="" id="" className='items-center '>
                    <option value="" className='text-black'>New York</option>
                    <option value="" className='text-black'>current Location</option>
                    <option value="" className='text-black'>Los Angeles</option>
                    <option value="" className='text-black'>Chicago</option>
                    <option value="" className='text-black'>Houston</option>
                     <option value="" className='text-black'>Phoenix</option>
                      <option value="" className='text-black'>San Diego</option>

                </select>
                
             </div>
            </div>
      </div>
    </div> 
 </div>
     
    );
};

export default Navber;