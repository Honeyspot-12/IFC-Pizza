
"use client"

import React from 'react'
import { LuArrowLeft } from "react-icons/lu";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter()

    const handleBack = () => {
        router.push('/categorylisting')
    }
    return (
        <div className=' flex flex-wrap justify-between items-center border-b shadow-sm w-full py-2  pr-5'>
            <div className=''>
                <h5 className='font-medium ml-5 text-black  '>Add Category</h5>
            </div>
            <div className='relative'>
                <LuArrowLeft className='absolute top-1/2 left-3 -translate-1/2 text-[#A85916] pointer-events-none' />
                <button
                
                    onClick={handleBack}
                    className='cursor-pointer border-1 border-[#A85916] text-[#A85916] pr-4 pl-6 py-1.5  rounded-md '>Back</button>
            </div>

        </div>
    )
}

export default Header
