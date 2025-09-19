"use client"

import React from 'react'
import { RxCross1 } from "react-icons/rx";
import {Item, Variations } from '@/components/orderprocess/itemlistsdata/itemdata';


interface VariationPopupProps {
    item: Item;
    onClose: () => void;
}
const Checkvariation:React.FC<VariationPopupProps>= ({item, onClose}) => {
//   if (!item) {
//     return null; // Or a loading indicator
//   }

  return (
    <div className='bg-black/50  fixed  top-0 left-0 items-center justify-center h-screen w-full text-black flex flex-col shadow-2xl '>
      <div className=' w-1/4  h-1/3 flex flex-col  bg-white gap-8 rounded-lg'>
        <h3 className='flex items-center justify-between p-3 border-b border-[#A5A5A5]'>Classic Burger <span onClick={onClose} className="cursor-pointer"><RxCross1/></span></h3>

        <div className='border border-[#363636] rounded mx-4'>
        <div className=' px-3 py-2 grid grid-cols-3 bg-gray-100'>
            <span className='text-left'>S.No</span>
            <span className='text-center'>Variation Name</span>
            <span className='text-right'>Price</span>
        </div>

        
        {item.variations.map((Variations,index)=>(
            <div key={index} className='grid grid-cols-3 px-3 py-2 border-t border-gray-200'>
               <span className='text-left'>{index+1}.</span>
               <span className='text-center'>{variation.size}</span>
               <span className='text-right'>₹{variation.price}</span>
            </div>
        ))}
        
        </div>

      </div>
    </div>
  )
}

export default Checkvariation
