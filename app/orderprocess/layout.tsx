"use client";
import Itemlisting from '@/components/itemlisting/Itemlisting';
import Cartsection from '@/components/orderprocess/cart section/Cartsection';
import Cart from '@/components/orderprocess/cart/Cart';
import Order from '@/components/orderprocess/Order';
import Viewcart from '@/components/orderprocess/viewcart/Viewcart';
import Sidebar from '@/components/sidebar/Sidebar';
import Topbar from '@/components/Topbar';
import { CartProvider } from '@/context/CartContext';
import React, { useState } from 'react';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {


  return (
    <>
    {/* <CartProvider> */}
      <Topbar />
      <Order />
      <div className=''>
        <div className="flex h-screen bg-white flex-col md:flex-row">
          <Sidebar />
          <div className="flex-1 h-screen bg-white ">
            {children}
          </div>
          <Cartsection />
        </div>
      </div>
      <div className='md:hidden'>
        
      <Viewcart/>
      </div>
      {/* </CartProvider> */}
    </>

  );
};

export default Layout;
