"use client"

import Cart from '@/components/orderprocess/cart/Cart'
import { CartProvider } from '@/context/CartContext'
import React from 'react'

const page = () => {
  return (
    <CartProvider>
    <div>
      <Cart/>
    </div>
    </CartProvider>
   
  )
}

export default page

