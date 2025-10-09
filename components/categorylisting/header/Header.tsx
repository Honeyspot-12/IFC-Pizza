"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { IoArrowBack } from "react-icons/io5";


const Header = () => {
    const router=useRouter()
    // const [name,setName]=useState("")

    const handleadd=()=>{
        router.push('/addcategory')
    }
    return (
        <div className='flex justify-between px-3 pl-6 border-b shadow-xs items-center py-2' >
            <div className='text-black font-medium text-sm'>
                <span>Category List</span>
            </div>

            <div className='flex gap-3 px-4 text-sm'>
                <button className='bg-[#994D1C] px-4 py-1.5 rounded cursor-pointer'
                onClick={handleadd}
                >Add Category</button>
                <div className=''>
                    <button className='border-1 border-[#994D1C] px-4 py-1.5 rounded flex items-center gap-1 text-[#994D1C] cursor-pointer'><IoArrowBack /> Back</button>
                </div>
            </div>
        </div>
    )
}

export default Header
