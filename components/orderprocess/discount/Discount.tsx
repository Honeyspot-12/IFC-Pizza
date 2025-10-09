"use client"

import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";




const Discount = () => {
    return (
        <>
            <div className='bg-black/50 fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-black '>
                <div className=' h-auto pb-4 flex flex-col  bg-white gap-3 rounded-lg '>
                    <div className='flex  items-center justify-between px-4 py-4 border-b-2 border-[#A5A5A5] '>
                        <span className='text-[#363636] font-medium text-sm' >Applied Discount</span>
                        <button
                            className='cursor-pointer'
                        >
                            <RxCross2 className='text-[#868686] font-bold' />
                        </button>
                    </div>

                    <div className='grid gap-2'>
                        <div className='flex gap-2 items-center'>
                        <span className='pl-4 font-medium text-sm'>Custom Discount</span>
                        <span className='text-[#994D1C] font-medium text-[13px]'>Add more</span>
                        </div>
                        <div className="relative mx-3">
                            <select name="All" id="" className='w-full border-1 p-1 rounded border-[#A5A5A5] text-[#808080] text-sm appearance-none  pr-8'>
                                <option value="all">All</option>
                                <option value="discount">PIZZA</option>
                                <option value="discount">BEVERAGES</option>

                            </select>
                            <FaCaretDown className="absolute right-2 top-1/2 -translate-y-1/2 text-[#808080] pointer-events-none" />
                        </div>
                        <input type="text" placeholder='Reason'
                            className='mx-3 border-1 p-1 rounded border-[#A5A5A5] text-[#808080] placeholder:text-[#808080] text-sm'
                        />
                    </div>

                    <div className='flex gap-9 px-3 justify-between items-center'>
                        <div className='flex gap-9'>
                            <div className='flex gap-2 items-center'>
                                <div className='flex items-center border-1 border-black rounded-full  px-1 py-1 cursor-pointer'>
                                    {/* <GoCircle /> */}
                                    <input type="radio" name="percentage" id=""
                                        className='appearance-none  p-1.5 rounded-full checked:bg-black cursor-pointer'
                                    />
                                </div>
                                <span className='text-sm'>Percentage</span>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <div className='flex items-center border-1 border-black rounded-full  px-1 py-1 cursor-pointer'>
                                    {/* <GoCircle /> */}
                                    <input type="radio" name="percentage" id=""
                                        className='appearance-none  p-1.5 rounded-full checked:bg-black cursor-pointer'
                                    />
                                </div>
                                <span className='text-sm'>Fixed</span>
                            </div>
                        </div>

                        <div className='flex justify-end'>
                            <input type="text" className='w-2/3 border-1 p-1 rounded border-[#A5A5A5] text-[#808080] ' />
                        </div>
                    </div>

                    <div className='grid gap-2 px-4 border-b pb-4 border-[#A5A5A5] text-sm'>
                        <span>Coupon Code</span>
                        <div className='flex justify-between items-center pr-3'>
                            <div className='flex gap-3'>
                                <input type="number" placeholder='Enter coupon code' className='w-65 border-1 p-1 rounded border-[#A5A5A5] plceholder:text-[#808080] ' />
                                <button className='text-[#994D1C] cursor-pointer'>Clear</button>
                            </div>

                            <div>
                                <button
                                    className='bg-[#7FD068] p-2 px-4 text-white rounded cursor-pointer text-[12px]'
                                >Apply</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-3 justify-end px-3 text-sm'>
                        <button className='border-1 py-1.5 px-3 font-medium rounded border-[#363636] cursor-pointer cally'>Cancel</button>
                        <button className='bg-[#994D1C] py-1.5 px-5 cally rounded text-white cursor-pointer'>Save</button>
                    </div>


                </div>
            </div>
        </>

    )
}

export default Discount
