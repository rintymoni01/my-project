import React from 'react';
import Hero from './HomeComponents/Hero';
import HomeCategory from './HomeComponents/HomeCategory';
import PopularProduct from './HomeComponents/PopularProduct/PopularProduct';
import LatestExclusive from './HomeComponents/LatestExclusive';
import NewProduct from './HomeComponents/NewProduct';
import Collection from './HomeComponents/Collection';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <HomeCategory></HomeCategory>
           <PopularProduct></PopularProduct> 

           <LatestExclusive></LatestExclusive>
           <NewProduct></NewProduct>
           <Collection></Collection>
        </div>
    );
};

export default Home;