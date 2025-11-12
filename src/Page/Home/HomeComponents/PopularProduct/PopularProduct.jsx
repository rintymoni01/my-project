import React, { useState } from 'react';
import SectionHeading from '../../../../Components/Sheard/sectionHeading';
import useData from '../../../../Hooks/useData';
import ProductsCard from '../../../../Components/Sheard/ProductsCard';
import { TbCategory } from "react-icons/tb";
import { Link } from 'react-router';

const PopularProduct = () => {
    const { categories, products } = useData();
    const [categoryId, setCategoryId] = useState();

    const handleCategoryId = (id) => {
        setCategoryId(id);
    }

    const filterProduct = categoryId ? products.filter(p => p.categoryId === categoryId) : products;

    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-18 h-auto mb-10'>
            {/* Heading + Category Filter */}
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0'>
                <SectionHeading 
                    heading={"Popular"} 
                    colorHeading={"Product"} 
                    discription={"Shop online for new arrivals and get free shipping!"} 
                />
                
                {/* Category List */}
                <div className='flex gap-4 overflow-x-auto lg:overflow-x-visible scrollbar-hide py-2'>
                    {categories.map((category) => (
                        <p 
                            key={category.id}
                            onClick={() => handleCategoryId(category.id)} 
                            className='flex-shrink-0 cursor-pointer px-4 py-2 rounded-md bg-gray-100 hover:bg-green-100 transition-all whitespace-nowrap'
                        >
                            {category.name}
                        </p>
                    ))}
                </div>
            </div>

            {/* Products Horizontal Scroll for Mobile, Grid for Large */}
            <div className='mt-6 lg:grid lg:grid-cols-5 lg:gap-4'>
                <div className='flex gap-4 overflow-x-auto lg:overflow-x-visible scrollbar-hide py-2'>
                    {filterProduct
                        .sort((a, b) => b.rating - a.rating)
                        .slice(0, 10)
                        .map(product => (
                            <div key={product.id} className='flex-shrink-0 w-48 lg:w-auto'>
                                <ProductsCard products={product} />
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* View All Button */}
            <div className='flex justify-center mt-8'>
    <Link to="/shop">
        <div className='flex justify-center items-center cursor-pointer bg-[#5CAF90] px-6 sm:px-7 py-3 sm:py-3 rounded-md w-full sm:w-48 text-white gap-3 hover:scale-105 transition-all'>
            <p className='text-center'>View all products</p>
            <TbCategory />
        </div>
    </Link>
</div>

        </div>
    );
};

export default PopularProduct;
