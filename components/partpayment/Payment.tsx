"use client"
import React, { useState } from 'react'
import { HiOutlineNewspaper } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";



interface Category {
    name: string;
}



const Payment = () => {
    const [active, setActive] = useState<string>("Card")
   
    const categories: Category[] = [
        { name: "Card" },
        { name: "Other" },
        { name: "Due Payment" }
    ]

    return (
        <div>
            <div className='flex text-black  px-3 py-2'>
                <span className=' border-b border-[#C9C9C9] w-full font-medium py-3'>Part Payment</span>
            </div>

            <div className='flex justify-between px-3 pb-5 '>
                <div className='flex gap-2'>
                    <span className='text-black font-medium'>Bill No: </span>
                    <span className='text-[#A85916]'>203</span>
                </div>

                <div>
                    <span className='text-black font-medium'>Payable Amount : ₹ 256</span>
                </div>
            </div>

            <div className='border-1 border-[#C9C9C9] mx-3 pb-14'>
                <div className='bg-[#F0F0F0] flex border-b border-[#C9C9C9]'>
                    {/* <button className='text-white bg-[#A85916] py-8 px-12 border-r border-[#C9C9C9]'>Card</button>
                <button className='text-black py-8 px-12 border-r border-[#C9C9C9]'>Other</button>
                <button className='text-black py-8 px-12 border-r border-[#C9C9C9]'>Due Payment</button> */}

                    {categories.map((i) => (
                        <button
                            key={i.name}
                            onClick={() => setActive(i.name)}
                            className={`py-8 px-12 border-r border-[#C9C9C9] cursor-pointer ${active === i.name
                                ? "text-white bg-[#A85916]"
                                : "text-black"
                                }`}

                        >
                            {i.name}
                        </button>
                    ))}
                </div>

                <div className='grid p-3 gap-4 items-center'>
                    <span className='font-medium text-black'>Captured Amount:</span>

                    <div className='flex gap-2 items-center'>
                        <span className='text-[#616161]'>Enter Amount:</span>
                        <input type="number"
                            className='border-1 border-[#C9C9C9] text-black rounded p-1'
                        />
                        <button className='text-white bg-[#A85916] p-1 px-5 rounded cursor-pointer'>Save</button>
                    </div>
                </div>
            </div>


            <div className='border-1 border-[#C9C9C9] mt-5  mx-3 text-[#616161] font-medium bg-[#fff6ef]'>
                <div className='flex justify-between pt-2  border-b border-[#C9C9C9] pb-2'>
                    <div className='flex gap-2 mx-3 items-center '>
                        <HiOutlineNewspaper className='text-black w-6 h-6' />
                        <span className=''>Payment Summary</span>
                    </div>

                    <div className='mx-3'>
                        <span>₹ 236</span>
                    </div>
                </div>

                <div className='flex justify-between pt-2  border-b border-[#C9C9C9] pb-2'>
                    <div className='flex gap-2 mx-3 items-center '>
                        <button className='text-white border-1 border-[#994D1C] px-1 py-1 rounded-full bg-[#994D1C] cursor-pointer '
                            // onClick={() => removeFromCart(i.name)}
                        >
                            <RxCross2 />
                            </button>
                        <span className=''>Paid via Card</span>
                    </div>

                    <div className='mx-3'>
                        <span>₹ 136</span>
                    </div>
                </div>

                <div className='flex justify-between pt-2   pb-2'>
                    <div className='flex gap-2 mx-11 items-center '>
                        {/* <HiOutlineNewspaper className='text-black w-6 h-6'/> */}
                        
                            <span className=''>Paid via Card</span>
                    </div>

                    <div className='mx-3'>
                        <span>₹ 100</span>
                    </div>
                </div>
            </div>

            <div className='flex gap-2 justify-end text-white mt-3 mx-3'>
                <button className='border-2 border-[#363636] text-[#363636] px-2 rounded font-medium cursor-pointer'>Back To Order</button>
                <button className='bg-[#A85916] py-1 px-2 rounded cursor-pointer'>New Order</button>
                <button className='bg-[#A85916] py-1 px-3 rounded cursor-pointer'>Print</button>
                <button className='bg-[#A85916] py-1 px-3 rounded cursor-pointer'>EBill</button>
                                 
            </div>

        </div>
    )
}

export default Payment
