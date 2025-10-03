// "use client"
import React, { useState } from 'react'

import Header from './header/Header';
import Itemaddingsection from './itemaddingsection/Itemaddingsection';
import Footer from './footer/Footer';


const Cartsection: React.FC = () => {
  
  return (
    <>
      <div className='hidden lg:block  col-span-4'>
        <div className=" bg-white  border-l-2 border-[#A5A5A5] flex flex-col text-black h-full overflow-y-auto">
          
          <Header/>
          <Itemaddingsection/>
          <Footer/>
     
        </div>
      </div>


      {/* <Cart /> */}
    </>
  )
}

export default Cartsection
