import React from 'react'
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";



const Inputs = () => {
    return (
        <div className="flex-2">
            <div className="grid gap-6 mb-6">
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row gap-6 w-full">
                    <div className="grid w-full md:w-1/3">
                        <span className="font-small">NAME *</span>
                        <input
                            type="text"
                            className="border border-[#CACACA] rounded-sm py-2 px-2 w-full"
                        />
                    </div>
                    <div className="grid w-full md:w-1/3">
                        <span className="font-small">SHORT CODE *</span>
                        <input
                            type="text"
                            className="border border-[#CACACA] rounded-sm py-2 px-2 w-full"
                        />
                    </div>
                    <div className="grid w-full md:w-1/3">
                        <span className="font-small">PRICE (₹) *</span>
                        <input
                            type="number"
                            className="border border-[#CACACA] rounded-sm py-2 px-2 w-full"
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col md:flex-row gap-6 w-full">
                    <div className="grid w-full md:w-1/3">
                        <span className="font-small">HSN CODE</span>
                        <input
                            type="text"
                            className="border border-[#CACACA] rounded-sm py-2 px-2 w-full"
                        />
                    </div>
                    <div className="grid w-full md:w-1/3">
                        <span className="font-small">UNIT</span>
                        <input
                            type="text"
                            className="border border-[#CACACA] rounded-sm py-2 px-2 w-full"
                        />
                    </div>
                    <div className="grid w-full md:w-1/3">
                        <span className="font-small">CATEGORY *</span>
                        {/* <input
                                               type="text"
                                               className="border border-[#CACACA] rounded-sm py-2 px-2 w-full"
                                           /> */}
                        <div className='relative'>
                            <select name="" id=""
                                className='border border-[#CACACA] rounded-sm py-2 px-2 w-full appearance-none pr-8'
                            >

                                <option value="" className='cursor-pointer'>Select Category</option>
                                <option value="" className='cursor-pointer'>Beverages</option>
                                <option value="" className='cursor-pointer'>Pizza</option>

                            </select>
                            <IoMdArrowDropdown className='absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none' />
                        </div>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="grid w-full">
                    <span className="font-small">DESCRIPTION</span>
                    <input
                        type="text"
                        className="border border-[#CACACA] rounded-sm py-2 px-2 w-full"
                    />
                </div>
                <div className='flex justify-between flex-wrap'>

                    <div className='flex flex-col gap-3'>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="variation"
                                className="appearance-none w-4 h-4 border-2 border-[#CACACA] rounded-full checked:bg-white checked:border-5 checked:border-[#994D1C]"
                            />
                            HAS VARIATIONS?
                        </label>
                        <div className='flex gap-4 items-center flex-wrap'>
                            <div className='relative'>
                                <select className=" p-2 w-50 border border-[#CACACA] rounded cursor-pointer appearance-none"
                                >
                                    <option value="" className='cursor-pointer'>Select Variation</option>
                                    <option value="extra" className='cursor-pointer'>Small</option>
                                    <option value="other" className='cursour-pointer'>Medium</option>
                                    <option value="other" className='cursour-pointer'>Large</option>
                                </select>
                                <IoMdArrowDropdown className='absolute top-1/2 right-2 -translate-1/2 pointer-events-none' />
                            </div>
                            <input type="text" placeholder='Variation Name'
                                className='border-1 p-2 border-[#CACACA] rounded w-50'
                            />

                            <RxCross2 className='w-4 h-4 text-[#363636]' />

                            <button className="bg-[#A85916] text-white px-2 pr-4 py-2 rounded cursor-pointer whitespace-nowrap text-[13px] flex items-center gap-2">
                                <MdOutlineAddCircleOutline className='w-4 h-4' />
                                Add Variation
                            </button>
                        </div>

                    </div>

                    <div className="grid mt-6 md:mt-0">
                        <label className="flex items-center gap-2 pb-2">
                            <input
                                type="radio"
                                name="addon"
                                className="appearance-none w-4 h-4 border-2 border-[#CACACA] rounded-full checked:bg-white checked:border-5 checked:border-[#994D1C] "
                            />
                            HAS ADD ON?
                        </label>
                        <select className="p-2 w-65 border border-[#CACACA] rounded cursor-pointer">
                            <option value="" className='cursor-pointer'>Choose add on</option>
                            <option value="extra" className='cursor-pointer'>Extra Cheese</option>
                            <option value="other" className='cursour-pointer'>Other</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Inputs
