import React from 'react';
import { IoStar } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from 'react-router-dom';


const ProductsCard = ({products}) => {
    return (
        <div className=' ' >
            
              <div className='w-55 flex flex-col h-96 justify-center container gap-4 items-center overflow-hidden  border border-gray-200 rounded-md'>
                  <img className='w-55 cursor-pointer  hover  hover:scale-110 duration-500 transition-all' src={products.image} alt="" />
             <Link to={`/shop/${products.id}`}>
               <div className='p-3 pl-5'>
                <p className='text-gray-400 '>{products.category}</p>
                 <h3 className='font-semibold text-gray-700'> {products.name}</h3>
                <div className='flex gap-1 text-xl text-orange-400 py-3'>
                   <IoStar />
                   <IoStar />
                   <IoStar />
                   <IoStar />
                   <IoStar />
                </div>
                <div className='flex gap-3 '>
                    <p className='th flex items-center'>{products.price}<TbCurrencyTaka /></p>
                    <p className='line-through text-gray-400 flex items-center'>{products.oldPrice}<TbCurrencyTaka /></p>
                </div>
               </div>
             </Link>
              </div>
        </div>
    );
};

export default ProductsCard;