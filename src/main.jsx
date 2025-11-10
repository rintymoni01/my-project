
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './Layout/Root';
import Home from './Page/Home/Home';
import Contact from './Page/Contact/Contact';

import Category from './Page/Category/Category';
import Products from './Page/Products/Products';
import Blog from './Page/Blog/Blog';
import Others from './Page/Others/Others';
import ShopNow from './Page/Shop/ShopNow';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
       
      {
        index:true,
    element: <Home></Home>,
      },
   
       {
  path: "/shop",
  element: <ShopNow></ShopNow>,
},


       {
         path: "/contact",
    element: <Contact></Contact>,
      },
       {
         path: "/category",
    element: <Category></Category>,
      },
       {
         path: "/products",
    element: <Products></Products>,
      },
      {
         path: "/blog",
    element: <Blog></Blog>,
      },
       {
         path: "/others",
    element:<Others></Others> ,
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);

