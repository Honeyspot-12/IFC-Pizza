"use client"
import { useCart } from '@/context/CartContext';
import React, { useState } from 'react'
import { HiOutlineNewspaper } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";



interface Category {
    name: string;
    icon:string;
}



const Payment = () => {
    const [active, setActive] = useState<string>("Card")
    
    const categories: Category[] = [
        { name: "Card",icon:"/card.svg" },
        { name: "Other",icon:"/other.svg" },
        { name: "Due Payment",icon:"/duepayment.svg" }
    ]

    const { total } = useCart(); 


    return (
        <div className='bg-white pb-6'>
            <div className='flex text-black  px-3 py-2'>
                <span className=' border-b border-[#C9C9C9] w-full font-medium text-sm  py-3 '>Part Payment</span>
            </div>

            <div className='flex justify-between px-3 pb-5 '>
                <div className='flex gap-2'>
                    <span className='text-black font-medium text-sm'>Bill No: </span>
                    <span className='text-[#A85916] text-sm font-medium'>203</span>
                </div>

                <div>
                    <span className='text-black font-medium text-sm'>Payable Amount : ₹ {total}</span>
                </div>
            </div>

            <div className='border-1 border-[#C9C9C9] mx-3 '>
                <div className='bg-[#F0F0F0] flex flex-wrap border-b border-[#C9C9C9] font-[500]'>


                    {categories.map((i) => (
                        <button
                            key={i.name}
                            onClick={() => setActive(i.name)}
                            className={`py-5 md:py-5 px-12 w-full md:w-auto  border-b md:border-b-0 md:border-r border-[#C9C9C9] cursor-pointer text-sm ${active === i.name
                                ? "text-white bg-[#A85916] "
                                : "text-black bg-[#F0F0F0]]"
                                }
                                
                                `}

                        >
                            <div className='flex flex-col items-center gap-1'>
                                <img src={i.icon} alt={i.name} className="w-10 h-10 " />
                                
                                {i.name}
                                </div>
                        </button>
                    ))}
                </div>

                <div className='grid p-3 gap-4 items-center '>
                    <span className='font-medium text-sm text-black flex justify-center sm:justify-start'>Captured Amount:</span>

                    <div className='flex gap-2 items-center justify-center sm:justify-start'>
                        <span className='text-[#616161] text-sm'>Enter Amount:</span>
                        <input type="number"
                            className='border-1 border-[#C9C9C9] text-black rounded p-1'
                        />
                        <button className='text-white bg-[#A85916]  py-1.5 px-4 sm:px-5 rounded cursor-pointer text-sm'>Save</button>
                    </div>
                </div>
            </div>


            <div className='border-1 border-[#C9C9C9] mt-5  mx-3 text-[#616161] font-medium bg-[#fff6ef] text-sm'>
                <div className='flex justify-between pt-2  border-b border-[#C9C9C9] pb-2'>
                    <div className='flex gap-2 mx-3 items-center '>
                        <HiOutlineNewspaper className='text-black w-6 h-6 ' />
                        <span className='text-sm'>Payment Summary</span>
                    </div>

                    <div className='mx-3'>
                        <span className=''>₹ {total}</span>
                    </div>
                </div>

                <div className='flex justify-between pt-2  pb-2 text-sm'>
                    <div className='flex gap-2 mx-3 items-center '>
                        <button className='text-white border-1 border-[#994D1C] px-1 py-1 rounded-full bg-[#994D1C] cursor-pointer '
                        // onClick={() => removeFromCart(i.name)}
                        >
                            <RxCross2 className='w-3 h-3'/>
                        </button>
                        <span className='text-sm font-medium'>Paid via Card</span>
                    </div>

                    <div className='mx-3'>
                        <span>₹ {total}</span>
                    </div>
                </div>

                {/* <div className='flex justify-between pt-2   pb-2'>
                    <div className='flex gap-2 mx-11 items-center '>

                        <span className=''>Paid via Card</span>
                    </div>

                    <div className='mx-3'>
                        <span>₹ 100</span>
                    </div>
                </div> */}
            </div>

            <div className='flex gap-2 justify-center sm:justify-end text-white mt-3 mx-3 '>
                <button className='border-2 border-[#363636] text-[#363636] px-2 rounded font-medium cursor-pointer  text-sm'>Back To Order</button>
                <button className='bg-[#A85916] py-2 px-3 rounded cursor-pointer text-sm'>New Order</button>
                <button className='bg-[#A85916] py-2 px-5 rounded cursor-pointer  text-sm'>Print</button>
                <button className='bg-[#A85916] py-2 px-4 rounded cursor-pointer  text-sm'>EBill</button>

            </div>

        </div>
    )
}

export default Payment
