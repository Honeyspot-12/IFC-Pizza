

import React from 'react'
import { LuArrowLeft } from "react-icons/lu";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter()

const handleBack = () => {
    router.push('/item_listing')
}
    return (
        <div className=' flex flex-wrap justify-between border-b shadow-sm w-full py-4  pr-5'>
            <div className=''>
                <h5 className='font-bold ml-5 text-black mt-[4px] '>Add Item</h5>
            </div>
            <div className='border-1 border-[#A85916] text-[#A85916] pr-5 pl-4 py-1.5  rounded-md flex gap-2 justify-center items-center cursor-pointer '>
                <LuArrowLeft className='' />
                <button
                    onClick={handleBack}
                    className='cursor-pointer'>Back</button>
            </div>
        </div>
    )
}

export default Header
