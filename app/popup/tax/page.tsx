import Appliedtax from '@/components/orderprocess/tax/Appliedtax'
import { CartProvider } from '@/context/CartContext'
import React from 'react'

const page = () => {
  return (
    <CartProvider>
    <div>
      <Appliedtax/>
    </div>
    </CartProvider>
  )
}

export default page
