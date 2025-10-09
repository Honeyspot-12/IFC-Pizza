import React, { FC, useState } from 'react'
import { useCart } from "@/context/CartContext";
import { IoMdWine } from "react-icons/io";
import { MdTableBar } from "react-icons/md";

import { IoPersonOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { LuNotebookPen } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbRectangleFilled, TbReload } from "react-icons/tb";
import { useRouter, useSearchParams } from 'next/navigation';
import Specialnote from '../../specialnote/Specialnote';

const Itemaddingsection = () => {
    const {cart,removeFromCart,decrease,increase}=useCart()
    const [showspecialnote,setShowspecialnote]=useState<boolean>(false)
    const [selectedItem,setSelectedItem]=useState<{name:string; size:string; }|null>(null)
    
  return (
    <>
      <div className='grid grid-cols-10 justify-between pl-3  bg-white py-3 text-[#868686] text-sm '>
            <div className='col-span-3'>
              <span className=''>ITEMS</span>
            </div>
            <div className='col-span-4'>
              <span>CHECK ITEMS</span>
            </div>
            <div className='col-span-3 flex gap-15 '>
              <span className=''>QTY.</span>
              <span className=''>PRICE</span>
            </div>
          </div>



          <div className=" flex-1 overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center mt-6">No items added</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between  border-b border-[#A5A5A5]  font-medium px-2"
                >
                  {/* <div className='flex col-span-8 items-center justify-center gap-3'> */}
                    <button className='text-white border-1 border-[#994D1C] px-1 py-1 rounded-full bg-[#994D1C] cursor-pointer '
                      onClick={() => removeFromCart(item.id)}
                    >
                      <RxCross2 />
                    </button>

                  <div className='flex-1  px-2'>
                    <button className='cursor-pointer text-sm underline'
                      onClick={() => {
                        setSelectedItem(item);
                        setShowspecialnote(true)

                      }}
                    >{item.name} ({item.size})</button>
                    {showspecialnote && selectedItem && (
                      <Specialnote setshowspecial={setShowspecialnote}
                        item={selectedItem}
                      />
                    )}
                    </div>


                  {/* </div> */}


                  <div className='flex gap-2 items-center justify-center '>
                    <button
                      onClick={() => decrease(item.id, 1)}
                      className="px-2 bg-[#f8f8f8]  border-1 border-[#A5A5A5] cursor-pointer "
                    >
                      -
                    </button>
                    
                    <span className='px-2 py-0.5 bg-[#f8f8f8] border-1 border-[#A5A5A5] text-sm'>{item.qty}</span>
                    <button
                      onClick={() => increase(item.id, 1)}
                      className="px-2 bg-[#f8f8f8] border-1 border-[#A5A5A5]  cursor-pointer"
                    >
                      +
                    </button>
                    </div>

                    <div className='w-1/6 text-right flex flex-col '>
                    <span className="">{(item.price * item.qty).toFixed(2)}</span>
                    <span className="text-sm text-[#868686]">{(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  

                </div>
              ))
            )}
          </div>
    </>
  )
}

export default Itemaddingsection
