"use client"

import Cartsection from '@/components/orderprocess/cart section/Cartsection'
import Cart from '@/components/orderprocess/cart/Cart'
import Viewcart from '@/components/orderprocess/viewcart/Viewcart'
import Sidebar from '@/components/sidebar/Sidebar'
import { CartProvider } from '@/context/CartContext'
import React from 'react'

const page = () => {
  return (
    
    <div>
      
      <Cart/>
    </div>
    
    
  )
}

export default page

