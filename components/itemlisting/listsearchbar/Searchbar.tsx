"use client"

import React from 'react'
import { items } from '@/components/orderprocess/itemlistsdata/itemdata'

const Searchbar = () => {
    
    return (
        <div className='border-1 border-[#A5A5A5] px-3 mx-6 mt-6 rounded'>
            <div className='py-5 flex gap-8 items-center justify-between'>
                <div className='flex items-center gap-2 flex-grow'>
                    <span className='text-[#363636] text-sm font-medium'>Name:</span>
                    <input type="text" className='border-1 border-[#A5A5A5] rounded p-1 w-[70%] text-black' 
                    
                    />
                </div>

                <div className='flex items-center gap-2 flex-grow'>
                    <span className='text-[#363636] text-sm font-medium'>Short Code:</span>
                    <input type="text" className='border-1 border-[#A5A5A5] rounded p-1 w-[50%] text-black' />
                </div>

                <div className='flex items-center gap-2 flex-grow'>
                    <span className='text-[#363636] text-sm font-medium'>Sort By:</span>
                    <select name="Name" id="" className='border-1 border-[#A5A5A5] rounded p-1 text-black w-[50%]'>
                        <option value="name">Name</option>
                        <option value="code">Short Code</option>
                    </select>
                </div>

                <div className='flex gap-4'>
                    <button className='border border-black px-6 py-1 rounded text-black'>Reset</button>
                    <button className='bg-[#994D1C] px-6 py-1 rounded text-white'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Searchbar
