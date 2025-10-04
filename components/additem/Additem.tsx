// "use client"

// import React, { useState } from 'react'
// import { LuArrowLeft } from "react-icons/lu";
// import { useRouter } from "next/navigation";

// const Additem = () => {
//     const router = useRouter()

//     const handleBack = () => {
//         router.push('/item_listing')
//     }

//     return (
//         <>
//             <div className=' bg-white w-full h-full'>
//                 <div className=' flex flex-wrap justify-between border-b shadow-sm w-full py-4  '>
//                     <div className=''>
//                         <h5 className='font-bold ml-5 text-black mt-[4px]'>Add Item</h5>
//                     </div>
//                     <div className='border-1 border-[#A85916] text-[#A85916] px-5 py-1 mr-10 rounded-md flex gap-2 justify-center items-center   cursor-pointer'>
//                         <LuArrowLeft className='' />
//                         <button
//                             onClick={handleBack}
//                             className='cursor-pointer'>Back</button>
//                     </div>
//                 </div>

//                 <div className='border border-[#A5A5A5]  shadow-md text-[#666666]  rounded-[10px] mx-9 p-6 my-9'>


//                     <div className="flex-wrap lg:grid grid-cols-4 gap-6 mb-6">
//                         <div className="grid">
//                             <span className="font-small">NAME *</span>
//                             <input type="text" className="border border-[#CACACA] rounded-sm py-1 px-2" />
//                         </div>
//                         <div className="grid">
//                             <span className="font-small">SHORT CODE *</span>
//                             <input type="text" className="border border-[#CACACA] rounded-sm py-1 px-2" />
//                         </div>
//                         <div className="grid">
//                             <span className="font-small">PRICE (₹) *</span>
//                             <input type="number" className="border border-[#CACACA] rounded-sm py-1 px-2" />
//                         </div>
// <div className="grid">
//     <span className="font-small">ORDER TYPE *</span>
//     <div className="flex gap-4 mt-1">
//         <label className="flex items-center gap-1">
//             <input type="radio" name="orderType" className="appearance-none w-3 h-3 border-2 border-[#CACACA] rounded-full mr-[4px] checked:bg-white  checked:border-4 checked:border-[#994D1C]" /> Delivery
//         </label>
//         <label className="flex items-center gap-1">
//             <input type="radio" name="orderType" className="appearance-none w-3 h-3 border-2 border-[#CACACA] rounded-full mr-[4px] checked:bg-white  checked:border-4 checked:border-[#994D1C]" /> Pick Up
//         </label>
//         <label className="flex items-center gap-1">
//             <input type="radio" name="orderType" className="appearance-none w-3 h-3 border-2 border-[#CACACA] rounded-full mr-[4px] checked:bg-white  checked:border-4 checked:border-[#994D1C]" /> Dine In
//         </label>
//     </div>
// </div>
//                     </div>


//                     <div className="flex-wrap lg:grid grid-cols-4 gap-6 mb-6">
//                         <div className="grid">
//                             <span className="font-small">HSN CODE</span>
//                             <input type="text" className="border border-[#CACACA] rounded-sm py-1 px-2" />
//                         </div>
//                         <div className="grid">
//                             <span className="font-small">UNIT</span>
//                             <input type="text" className="border border-[#CACACA] rounded-sm py-1 px-2" />
//                         </div>
//                         <div className="grid">
//                             <span className="font-small">CATEGORY *</span>
//                             <input type="text" className="border border-[#CACACA] rounded-sm py-1 px-2" />
//                         </div>
//                         <div className="flex items-end gap-6">
//                             <div className="grid">
//                                 <span className="font-small">IGNORE TAX</span>
//                                 <label className="flex items-center gap-1">
//                                     <input type="radio" name="ignoreTax" className="appearance-none w-3 h-3 border-2 border-[#CACACA] rounded-full mr-[4px] checked:bg-white  checked:border-4 checked:border-[#994D1C]" /> Yes
//                                 </label>
//                             </div>
//                             <div className="grid">
//                                 <span className="font-small">IGNORE DISCOUNT</span>
//                                 <label className="flex items-center gap-1">
//                                     <input type="radio" name="ignoreDiscount" className="appearance-none w-3 h-3 border-2 border-[#CACACA] rounded-full mr-[4px] checked:bg-white  checked:border-4 checked:border-[#994D1C]" /> Yes
//                                 </label>
//                             </div>
//                         </div>
//                     </div>




//                     <div className="flex flex-wrap gap-6 mb-6">
//                         <div className="grid w-3/4">
//                             <span className="font-small">DESCRIPTION</span>
//                             <input type="text" className="border border-[#CACACA] rounded-sm py-1 px-2" />
//                         </div>
//                         <div className=" ">
//                             <span className="font-small">CHOICE *</span>
//                             <div className="flex gap-3 mt-1">
//                                 <label className="flex items-center gap-1">
//                                     <input type="radio" name="choice" className="appearance-none w-3 h-3 border-2 border-[#CACACA] rounded-full mr-[4px] checked:bg-white  checked:border-4 checked:border-[#994D1C]" /> Veg
//                                 </label>
//                                 <label className="flex items-center gap-1">
//                                     <input type="radio" name="choice" className="appearance-none w-3 h-3 border-2 border-[#CACACA] rounded-full mr-[4px] checked:bg-white  checked:border-4 checked:border-[#994D1C]" /> Non-Veg
//                                 </label>
//                                 <label className="flex items-center gap-1">
//                                     <input type="radio" name="choice" className="appearance-none w-3 h-3 border-2 border-[#CACACA] rounded-full mr-[4px] checked:bg-white  checked:border-4 checked:border-[#994D1C]" /> Egg
//                                 </label>
//                             </div>
//                         </div>
//                     </div>


//                     <div className="flex justify-between items-center  ">
//                         <label className="flex items-center gap-2 mb-14">
//                             <input type="radio" name="variation" className="appearance-none w-3 h-3 border-2 border-[#CACACA] rounded-full mr-[4px] checked:bg-white  checked:border-4 checked:border-[#994D1C]" />
//                             HAS VARIATIONS?
//                         </label>



//                         <div className="grid mb-6">
//                             <label className="flex items-center gap-2">
//                                 <input type="radio" name="addon" className="appearance-none w-3 h-3 border-2 border-[#CACACA] rounded-full mr-[4px] checked:bg-white  checked:border-4 checked:border-[#994D1C]" />
//                                 HAS ADD ON?
//                             </label>
//                             <select className="p-2  border border-[#CACACA] rounded ">
//                                 <option value="">Choose add on</option>
//                                 <option value="extra">Extra Cheese</option>
//                                 <option value="other">Other</option>
//                             </select>
//                         </div>
//                     </div>

//                 </div>

//                 <div className="flex justify-end items-center py-6 mr-20 gap-4">
//                     <button className="border border-[#A85916] text-[#A85916] px-5 py-2 rounded-md cursor-pointer">
//                         Save & Exit
//                     </button>
//                     <button className="bg-[#A85916] text-white px-5 py-2 rounded-md cursor-pointer">
//                         Save & Add Menu Items
//                     </button>
//                 </div>
//             </div>


//         </>
//     )
// }

// export default Additem









"use client"

import React, { useState } from 'react'
import { LuArrowLeft } from "react-icons/lu";
import { useRouter } from "next/navigation";

const Additem = () => {
    const router = useRouter()

    const handleBack = () => {
        router.push('/item_listing')
    }

    return (
        <>
            <div className=' bg-white w-full h-full text-sm'>
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


                <div className="border border-[#A5A5A5] shadow-md text-[#666666] rounded-[10px] mx-9 p-6 my-9 pb-20 text-[12px]">
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* LEFT SIDE (Inputs) */}
                        <div className="flex-2">
                            <div className="grid gap-6 mb-6">
                                {/* Row 1 */}
                                <div className="flex flex-col md:flex-row gap-6 w-full">
                                    <div className="grid w-full md:w-1/3">
                                        <span className="font-small">NAME *</span>
                                        <input
                                            type="text"
                                            className="border border-[#CACACA] rounded-sm py-1 px-2 w-full"
                                        />
                                    </div>
                                    <div className="grid w-full md:w-1/3">
                                        <span className="font-small">SHORT CODE *</span>
                                        <input
                                            type="text"
                                            className="border border-[#CACACA] rounded-sm py-1 px-2 w-full"
                                        />
                                    </div>
                                    <div className="grid w-full md:w-1/3">
                                        <span className="font-small">PRICE (₹) *</span>
                                        <input
                                            type="number"
                                            className="border border-[#CACACA] rounded-sm py-1 px-2 w-full"
                                        />
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="flex flex-col md:flex-row gap-6 w-full">
                                    <div className="grid w-full md:w-1/3">
                                        <span className="font-small">HSN CODE</span>
                                        <input
                                            type="text"
                                            className="border border-[#CACACA] rounded-sm py-1 px-2 w-full"
                                        />
                                    </div>
                                    <div className="grid w-full md:w-1/3">
                                        <span className="font-small">UNIT</span>
                                        <input
                                            type="text"
                                            className="border border-[#CACACA] rounded-sm py-1 px-2 w-full"
                                        />
                                    </div>
                                    <div className="grid w-full md:w-1/3">
                                        <span className="font-small">CATEGORY *</span>
                                        <input
                                            type="text"
                                            className="border border-[#CACACA] rounded-sm py-1 px-2 w-full"
                                        />
                                    </div>
                                </div>

                                {/* Row 3 */}
                                <div className="grid w-full">
                                    <span className="font-small">DESCRIPTION</span>
                                    <input
                                        type="text"
                                        className="border border-[#CACACA] rounded-sm py-1 px-2 w-full"
                                    />
                                </div>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="variation"
                                        className="appearance-none w-4 h-4 border-2 border-[#CACACA] rounded-full checked:bg-white checked:border-5 checked:border-[#994D1C]"
                                    />
                                    HAS VARIATIONS?
                                </label>
                            </div>
                        </div>

                        {/* RIGHT SIDE (Radio/Checkboxes) */}
                        <div className="flex-1">
                            <div className="grid gap-6 mb-6">

                                <div className="grid">
                                    <span className="font-small">ORDER TYPE *</span> 
                                    <div className="flex gap-4 mt-1">
                                        <label className="flex items-center gap-1">
                                            <input type="radio" name="orderType" className="appearance-none w-4 h-4 border-2 border-[#CACACA] rounded-full mr-[4px] checked:bg-white  checked:border-5 checked:border-[#994D1C]" /> Delivery
                                        </label>
                                        <label className="flex items-center gap-1">
                                            <input type="radio" name="orderType" className="appearance-none w-4 h-4 border-2 border-[#CACACA] rounded-full mr-[4px] checked:bg-white  checked:border-5 checked:border-[#994D1C]" /> Pick Up
                                        </label>
                                        <label className="flex items-center gap-1">
                                            <input type="radio" name="orderType" className="appearance-none w-4 h-4 border-2 border-[#CACACA] rounded-full mr-[4px] checked:bg-white  checked:border-5 checked:border-[#994D1C]" /> Dine In
                                        </label>
                                    </div>
                                </div>
                                {/* Ignore Tax & Discount */}
                                <div className="flex gap-6">
                                    <div className="grid">
                                        <span className="font-small">IGNORE TAX</span>
                                        <label className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                name="ignoreTax"
                                                className="appearance-none w-4 h-4 border-2 border-[#CACACA] rounded-full checked:bg-white checked:border-5 checked:border-[#994D1C]"
                                            />{" "}
                                            Yes
                                        </label>
                                    </div>
                                    <div className="grid">
                                        <span className="font-small">IGNORE DISCOUNT</span>
                                        <label className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                name="ignoreDiscount"
                                                className="appearance-none w-4 h-4 border-2 border-[#CACACA] rounded-full checked:bg-white checked:border-5 checked:border-[#994D1C]"
                                            />{" "}
                                            Yes
                                        </label>
                                    </div>
                                </div>

                                {/* Choice */}
                                <div>
                                    <span className="font-small">CHOICE *</span>
                                    <div className="flex gap-3 mt-1">
                                        <label className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                name="choice"
                                                className="appearance-none w-4 h-4 border-2 border-[#CACACA] rounded-full checked:bg-white checked:border-4 checked:border-[#994D1C]"
                                            />{" "}
                                            Veg
                                        </label>
                                        <label className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                name="choice"
                                                className="appearance-none w-4 h-4 border-2 border-[#CACACA] rounded-full checked:bg-white checked:border-4 checked:border-[#994D1C]"
                                            />{" "}
                                            Non-Veg
                                        </label>
                                        <label className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                name="choice"
                                                className="appearance-none w-4 h-4 border-2 border-[#CACACA] rounded-full checked:bg-white checked:border-4 checked:border-[#994D1C]"
                                            />{" "}
                                            Egg
                                        </label>
                                    </div>
                                </div>

                                {/* Variation & Add-On */}
                                <div className="flex flex-col gap-6">


                                    <div className="grid">
                                        <label className="flex items-center gap-2 pb-2">
                                            <input
                                                type="radio"
                                                name="addon"
                                                className="appearance-none w-4 h-4 border-2 border-[#CACACA] rounded-full checked:bg-white checked:border-5 checked:border-[#994D1C] "
                                            />
                                            HAS ADD ON?
                                        </label>
                                        <select className="p-2 border border-[#CACACA] rounded cursor-pointer">
                                            <option value="" className='cursor-pointer'>Choose add on</option>
                                            <option value="extra" className='cursor-pointer'>Extra Cheese</option>
                                            <option value="other" className='cursour-pointer'>Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="flex justify-center md:justify-end pb-4 px-9 gap-4">
                    <button className="bg-[#A85916] text-white px-5 py-2 rounded-md cursor-pointer whitespace-nowrap text-[13px]">
                        Save & Exit
                    </button>
                    <button className="border border-[#A85916] text-[#A85916] px-5 py-2 rounded-md cursor-pointer whitespace-nowrap
                    font-medium text-[13px] ">
                        Save & Add Menu Items
                    </button>
                </div>
            </div>


        </>
    )
}

export default Additem
