
"use client"
import React from 'react'
import { BiRefresh   } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const Header = () => {
    const Router = useRouter()

    const handleAdd = () => {
        Router.push('/at')
    }
  return (
    <div className=' flex justify-between border-b w-full py-4 bg-white  '>
    <div className=''>
        <h5 className='text-md font-medium ml-5 text-black mt-[4px]'>Table View</h5>
    </div>

    <div className="flex  gap-3 px-1 sm:px-5 items-center justify-center sm:justify-start">
        {/* Refresh Icon */}
        <BiRefresh   className="mt-[3px] text-[#A85916] cursor-pointer w-7 h-7 " />

        {/* Delivery Button */}
        <button className="border border-[#A85916] px-3 sm:px-5 bg-[#A85916] text-white rounded-sm py-1 text-sm cursor-pointer ">
            Delivery
        </button>

        {/* Pickup Button */}
        <button className="border border-[#A85916] px-3 sm:px-5 bg-[#A85916] text-white rounded-sm py-1 text-sm cursor-pointer">
            Pick Up
        </button>

        {/* Add Item Button */}
        <div className="relative flex items-center">
            <FaPlus className="hidden sm:block absolute left-2  text-white cursor-pointer" />
            <button
                className="border border-[#A85916] md:px-5 md:pl-7 bg-[#A85916] text-white rounded-sm py-1 text-sm cursor-pointer text-right"
                onClick={handleAdd}
            >
                Add Item
            </button>
        </div>
    </div>



</div>
  )
}

export default Header
