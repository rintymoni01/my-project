import React, { useState } from 'react';
import SectionHeading from '../../../../Components/Sheard/sectionHeading';
import useData from '../../../../Hooks/useData';
import ProductsCard from '../../../../Components/Sheard/ProductsCard';
import { TbCategory } from "react-icons/tb";
import { Link } from 'react-router';


const PopularProduct = () => {
    const {categories,products} =useData()
    const [categoryId,setCategoryId]=useState()
    const handleCategoryId =(id)=>{
        setCategoryId(id)
    }
    const filterProduct=categoryId? products.filter(p=>p.categoryId == categoryId):products
    return (
        <div className='container mx-auto px-18  h-160 '>
            <div className='flex justify-between items-center'>
                <SectionHeading heading={"Popular"} colorHeading={"Product"} discription={"Shop online for new arrivals and get free shipping!"}></SectionHeading>
                <div className='flex gap-6 '>
                    {
                        categories.map(category=>(
                            <div>
                                <p onClick={()=>handleCategoryId(category?.id)} className='cursor-pointer'>{category?.name}</p>
                            </div>
                            
                        ))
                    }
                </div>
                
            </div>
            <div>
                    <div className='flex justify-center gap-4 flex-wrap mt-12 mb-4'>
                        {filterProduct
                        .sort((a,b)=>b.rating - a.rating)
                       .slice (0,8)
                       .map(product=> <ProductsCard products={product}></ProductsCard>)}
                    </div>
                </div>
                <div className='flex justify-center mt-8 '>
                    <Link to="/shop">
                    <div className='flex justify-center items-center cursor-pointer bg-[#5CAF90] px-7  py-3 rounded-md w-68 text-white gap-3'>
                        <p>Views all products</p>
                            <TbCategory />
                    </div>
                    </Link>
                </div>
        </div>
    );
};

export default PopularProduct;