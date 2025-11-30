import React from 'react';
import useData from '../../Hooks/useData';
import { Link, useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import Support from '../../Page/Home/HomeComponents/Support';
import SectionHeading from './SectionHeading';

const SingleProductPage = () => {
    const {id} =useParams()
    const {products}=useData()
    
    const findProducts = products.find(p => p.id == id);

    return (
        <div className='items-center  container mx-auto px-4 lg:px-18'>
            <div className="p-5">
  <div className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    gap-8
  ">
    {products.slice(0, 3).map((product) => (
      <div
        className="border border-gray-200 shadow-md pb-2 rounded-2xl"
        key={product.id}
      >
        <img className="rounded-2xl w-full" src={product.image} alt="" />

        <div className="px-3">
          <p className="text-gray-700 text-xl font-semibold pb-2 pt-3">
            {product.name}
          </p>

          <p className="font-semibold text-gray-800">{product.category}</p>

          <div className="flex gap-2 items-center pt-2">
            <p className="font-semibold">${product.price}</p>
            <p className="text-gray-500">
              $
              <span className="line-through text-gray-500">
                {product.oldPrice}
              </span>
            </p>
          </div>

          <div className="flex justify-between items-center pt-2">
            <div className="text-orange-300 flex">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>

            <Link to="/shop">
              <div className="bg-[#0fa16c] w-24 py-2 text-center rounded-md">
                <button className="text-white">Buy Now</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

            <div className="p-5">
  <div 
    className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      gap-8
    "
  >
    {products.slice(7, 10).map((product) => (
      <div 
        key={product.id}
        className="border border-gray-200 shadow-md pb-2 rounded-2xl"
      >
        <img className="rounded-2xl w-full" src={product.image} alt="" />

        <div className="px-3">
          <p className="text-gray-700 text-xl font-semibold pb-2 pt-3">
            {product.name}
          </p>

          <p className="font-semibold text-gray-800">
            {product.category}
          </p>

          <div className="flex gap-2 items-center pt-2">
            <p className="font-semibold">${product.price}</p>
            <p className="text-gray-500">
              $
              <span className="line-through text-gray-500">
                {product.oldPrice}
              </span>
            </p>
          </div>

          <div className="flex justify-between items-center pt-2">
            <div className="text-orange-300 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <Link to="/blog">
              <div className="bg-[#0fa16c] w-24 py-2 text-center rounded-md">
                <button className="text-white">Buy Now</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

           <div className='my-24'>
          <div className='flex justify-center text-center mb-4'>
             <SectionHeading heading={"Our"} colorHeading={" Services"} discription={"Customer service should not be a department. It  should be the entire company."}></SectionHeading> 
          </div>
         <div className=''>
             <Support></Support>
         </div>
        </div>
        </div>
    );
};

export default SingleProductPage;