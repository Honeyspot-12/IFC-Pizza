"use client"

import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { GoCircle } from "react-icons/go";


const Discount = () => {
    return (
        <>
            <div className='bg-black/50 fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-black '>
                <div className=' w-1/3  h-[53%] flex flex-col  bg-white gap-3 rounded-lg '>
                    <div className='flex  items-center justify-between px-6 py-4 border-b-2 border-[#A5A5A5] '>
                        <span className='text-[#363636] font-medium' >Applied Discount</span>
                        <button
                            className='cursor-pointer'
                        >
                            <RxCross2 className='text-[#868686] font-bold' />
                        </button>
                    </div>

                    <div className='grid gap-2'>
                        <span className='mx-3 font-medium'>Custom Discount</span>
                        <select name="All" id="" className='mx-3 border-1 p-1 rounded border-[#A5A5A5] text-[#808080]'>
                            <option value="all">All</option>
                            <option value="discount">Discount</option>

                        </select>
                        <input type="text" placeholder='Reason'
                            className='mx-3 border-1 p-1 rounded border-[#A5A5A5] text-[#808080] placeholder:text-[#808080]'
                        />
                    </div>

                    <div className='flex gap-9 px-3 justify-between items-center'>
                        <div className='flex gap-9'>
                            <div className='flex gap-2'>
                                <div className='flex items-center'>
                                    {/* <GoCircle /> */}
                                    <input type="radio" name="percentage" id=""
                                        className=''
                                    />
                                </div>
                                <span>Percentage</span>
                            </div>

                            <div className='flex gap-2'>
                                <input type="radio" name="fixed" id="" className='' />
                                <span>Fixed</span>
                            </div>
                        </div>

                        <div className='flex justify-end'>
                            <input type="text" className='w-2/3 border-1 p-1 rounded border-[#A5A5A5] text-[#808080] ' />
                        </div>
                    </div>

                    <div className='grid gap-2 px-3 border-b pb-4 border-[#A5A5A5]'>
                        <span>Coupon Code</span>
                        <div className='flex justify-between items-center pr-3'>
                            <div className='flex gap-3'>
                                <input type="number" placeholder='Enter coupon code' className='w-65 border-1 p-1 rounded border-[#A5A5A5] plceholder:text-[#808080] ' />
                                <button className='text-[#994D1C] cursor-pointer'>Clear</button>
                            </div>

                            <div>
                                <button
                                    className='bg-[#7FD068] p-2 px-4 text-white rounded cursor-pointer'
                                >Apply</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-3 justify-end px-3'>
                        <button className='border-2 p-1 px-2 font-medium rounded border-[#363636] cursor-pointer'>Cancel</button>
                        <button className='bg-[#994D1C] p-1 px-5 font-medium rounded text-white cursor-pointer'>Save</button>
                    </div>


                </div>
            </div>
        </>

    )
}

export default Discount
