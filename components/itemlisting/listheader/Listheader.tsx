"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import { IoArrowBack } from "react-icons/io5";


const Listheader = () => {
    const router=useRouter()

    const handleadd=()=>{
        router.push('at')
    }
    return (
        <div className='flex justify-between px-3 pl-6 border-b shadow-xs items-center py-2' >
            <div className='text-black font-medium text-sm'>
                <span>Items Listing</span>
            </div>

            <div className='flex gap-3 px-4 text-sm'>
                <button className='bg-[#994D1C] px-4 py-1.5 rounded cursor-pointer'
                onClick={handleadd}
                >Add Item</button>
                <div className=''>
                    <button className='border-1 border-[#994D1C] px-4 py-1.5 rounded flex items-center gap-1 text-[#994D1C] cursor-pointer'><IoArrowBack /> Back</button>
                </div>
            </div>
        </div>
    )
}

export default Listheader
