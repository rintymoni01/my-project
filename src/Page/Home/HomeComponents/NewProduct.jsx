import React from 'react';
import SectionHeading from '../../../Components/Sheard/sectionHeading';
import useData from '../../../Hooks/useData';
import ProductsCard from '../../../Components/Sheard/ProductsCard';

const NewProduct = () => {
    const { products } = useData();

    return (
        <div className='mb-10'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-18'>
                {/* Section Heading */}
                <SectionHeading 
                    discription={"Don't wait The time will never be just right"} 
                    heading={"Day Off"} 
                    colorHeading={"The Deal"} 
                />

                {/* Products Grid */}
                <div className='mt-8 lg:mt-12'>
                    {/* Mobile / SM: horizontal scroll */}
                    <div className='flex gap-4 overflow-x-auto lg:overflow-x-visible scrollbar-hide py-2'>
                        {products.slice(-5).map((p) => (
                            <div key={p.id} className='flex-shrink-0 w-48 sm:w-56 lg:w-auto'>
                                <ProductsCard products={p} />
                            </div>
                        ))}
                    </div>

                    {/* LG: grid */}
                    <div className='hidden lg:grid lg:grid-cols-5 lg:gap-4 mt-4'>
                        {products.slice(-5).map((p) => (
                            <ProductsCard key={p.id} products={p} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
