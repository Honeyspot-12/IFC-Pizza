"use client";
import Cartsection from '@/components/orderprocess/cart section/Cartsection';
import Order from '@/components/orderprocess/Order';
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
    <CartProvider>
      <Topbar/>
      <Order/>
      <div className=' '>
        
    <main className="flex h-screen">
      
      <Sidebar/>
      <div className="flex-1 h-screen bg-white">
        {children}
        
      </div>
      <Cartsection/>
    </main>
    
    </div>
    </CartProvider>

  );
};

export default Layout;
