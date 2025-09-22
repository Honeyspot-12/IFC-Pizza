"use client"

import Checkvariation from '@/components/itemlisting/checkvariation/Checkvariation'
import { items } from '@/components/orderprocess/itemlistsdata/itemdata'
import { CartProvider } from '@/context/CartContext';
import React, { Children } from 'react'


const page = () => {
  const itemToDisplay = items[6]; // Let's display the first item for now
  return (
    <CartProvider>
    <div>
      
      <Checkvariation item={itemToDisplay} onClose={()=>console.log("Close")}/>
        
    </div>
    </CartProvider>
       
  )
}

export default page
