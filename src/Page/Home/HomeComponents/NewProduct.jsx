import React from 'react';
import SectionHeading from '../../../Components/Sheard/sectionHeading';
import useData from '../../../Hooks/useData';
import ProductsCard from '../../../Components/Sheard/ProductsCard';

const NewProduct = () => {
    const {products} = useData()

    return (
        <div>
            <div className='container mx-auto px-18 '>
                <div>
                    <SectionHeading discription={"Don't wait The time will never be just right"} heading={"Day Off  "} colorHeading={"The Deal"}></SectionHeading>
                </div>
                <div className='mt-12'>
                    <div className='flex gap-4 flex-wrap justify-center'>
                        {products.slice(-4).map(p=><ProductsCard products={p}></ProductsCard>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;