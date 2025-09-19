"use client"

import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdClose } from "react-icons/md";
// import { useCart } from '@/context/CartContext';


interface tax {
  name: string;
  per: number;
  amt: number;
}


const Appliedtax: React.FC = () => {
  // const { removeFromCart } = useCart();
  const taxes: tax[] = [
    { name: "820@SGST", per: 2.5, amt: 25 },
    { name: "820@CGST", per: 2.5, amt: 25 },

  ];


  return (
    <section className='bg-black/50 fixed top-0 left-0 items-center  justify-center h-screen w-full text-black flex flex-col shadow-md'>
      <div className=' w-1/4  h-1/3 flex flex-col  bg-white gap-8 rounded-lg '>
        <div className='flex  items-center justify-between px-6 py-4 border-b-2 border-[#A5A5A5] '>
          <span className='text-[#363636] font-medium' >Applied Tax</span>
          <button
            className='cursor-pointer'
          >
            <RxCross2 className='text-[#868686] font-bold' />
          </button>
        </div>

        <div className='border-1 rounded  mx-7 mt-2  '>
          <div className='flex   items-center justify-between pt-3 pb-3  px-15 text-white bg-[#303030]'>
            <span>TAX</span>
            <span>AMOUNT</span>
          </div>




          {taxes.map((t) => (
            <div key={t.name} className="grid grid-cols-3 items-center  px-4 py-2">
              <div  className="flex items-center gap-2">
                <button 
                // onClick={()=>remove(t.name)}
                className="border-1 border-[#D9D9D9] py-3 px-1  h-4  flex items-center justify-center rounded-full bg-[#D9D9D9] cursor-pointer">
                  <MdClose className="text-[#303030]" size={16} />
                </button>
                <span className="font-medium">{t.name}</span>
              </div>
              <div className="text-center font-medium">{t.per}</div>
              <div className="text-center font-medium">{t.amt}</div>
            </div>
          ))}


          {/* <div className="grid grid-cols-3 items-center border-b px-4 py-2">
            <div className="flex items-center gap-2">
              <button className="border-1 border-[#D9D9D9] py-3 px-1  h-4  flex items-center justify-center rounded-full bg-[#D9D9D9] cursor-pointer">
                <MdClose className="text-[#303030]" size={16} />
              </button>
              <span className="font-medium">820@SGST</span>
            </div>
            <div className="text-center font-medium">2.5%</div>
            <div className="text-center font-medium">20.5</div>
          </div> */}


        </div>

      </div>
    </section>
  )
}

export default Appliedtax
