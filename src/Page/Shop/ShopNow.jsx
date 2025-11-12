import React, { useState } from 'react';
import useData from '../../Hooks/useData';
import ProductsCard from '../../Components/Sheard/ProductsCard';

const ShopNow = () => {
    const { products, categories } = useData();
    const [id, setId] = useState();
    const [width, setWidth] = useState();

    const handleClick = (id) => {
        setId(id);
    };
    const handleClickWith = (w) => {
        setWidth(w);
    };

    const filterData = products.filter(p => {
        const matchCategory = id ? p.categryId === id : true;
        const matchWidth = width ? p.width === width : true;
        return matchCategory && matchWidth;
    });

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-18 mt-10">
            <div className="flex flex-col lg:flex-row gap-6">
                
                {/* Sidebar Filters */}
                <div className="lg:col-span-3 w-full lg:w-1/4 flex flex-col gap-6">
                    <div className="border border-gray-200 p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                        <p className="font-semibold border-b sm:border-b-0 border-gray-200 pb-2 sm:pb-0">Category</p>
                        <div className="flex flex-wrap gap-2">
                            {categories.map(category => (
                                <div key={category.id} className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    <p
                                        className="cursor-pointer"
                                        onClick={() => handleClick(category.id)}
                                    >
                                        {category.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border border-gray-200 p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                        <p className="font-semibold border-b sm:border-b-0 border-gray-200 pb-2 sm:pb-0">Width</p>
                        <div className="flex flex-wrap gap-2">
                            {[...new Set(products.map(p => p.width))].map((w, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    <p
                                        onClick={() => handleClickWith(w)}
                                        className="cursor-pointer"
                                    >
                                        {w}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="lg:col-span-9 w-full">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filterData.map(product => (
                            <ProductsCard key={product.id} products={product} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShopNow;
