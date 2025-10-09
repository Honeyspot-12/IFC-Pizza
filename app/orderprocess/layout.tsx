"use client";
import Itemlisting from '@/components/itemlisting/Itemlisting';
import Cartsection from '@/components/orderprocess/cart section/Cartsection';
import Cart from '@/components/orderprocess/cart/Cart';
import Order from '@/components/orderprocess/Order';
import Viewcart from '@/components/orderprocess/viewcart/Viewcart';
import Sidebar from '@/components/sidebar/Sidebar';
import Topbar from '@/components/Topbar';
import { CartProvider } from '@/context/CartContext';
import React from 'react';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {


  return (
    <>
      {/* <CartProvider> */}
      <Topbar />

      <div className=''>

        <Order />
        <div className='md:grid grid-cols-12'>
        <div className="flex  bg-white flex-col md:flex-row col-span-8 ">
          <Sidebar />
          <div className="flex-1 bg-white ">
            {children}
          </div>
        </div>
        <Cartsection />
        </div>
      </div>
      <div className='lg:hidden'>

        <Viewcart />
      </div>
      {/* </CartProvider> */}
    </>

  );
};

export default Layout;





