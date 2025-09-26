

import Itemlisting from '@/components/itemlisting/Itemlisting'
import Listheader from '@/components/itemlisting/listheader/Listheader'
import Searchbar from '@/components/itemlisting/listsearchbar/Searchbar'
import Topbar from '@/components/Topbar'
import { CartProvider } from '@/context/CartContext'
import React from 'react'

const page = () => {

  return (
    <CartProvider>
    <div className='bg-white w-full'>
        <Topbar/>
        <Listheader/>
        {/* <Searchbar /> */}
      <Itemlisting/>
    </div>
    </CartProvider>
  )
}

export default page;
