import React from 'react';
import { IoStar } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";


const ProductsCard = ({products}) => {
    return (
        <div >
            
              <div className='w-65 flex flex-col h-94 justify-center items-center border border-gray-200 rounded-md'>
                  <img className='w-65 ' src={products.image} alt="" />
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
              </div>
        </div>
    );
};

export default ProductsCard;