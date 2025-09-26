"use client"

import Cart from '@/components/orderprocess/cart/Cart'
import Viewcart from '@/components/orderprocess/viewcart/Viewcart'
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

