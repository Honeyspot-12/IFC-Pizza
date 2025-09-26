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
        <div className='flex justify-between px-3 border-b shadow-sm items-center py-2' >
            <div className='text-black font-medium'>
                <span>Items Listing</span>
            </div>

            <div className='flex gap-3 px-4'>
                <button className='bg-[#994D1C] px-3 py-1 rounded cursor-pointer'
                onClick={handleadd}
                >Add Item</button>
                <div className=''>
                    <button className='border-1 border-[#994D1C] px-3 py-1 rounded flex items-center gap-1 text-[#994D1C] cursor-pointer'><IoArrowBack /> Back</button>
                </div>
            </div>
        </div>
    )
}

export default Listheader
