import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

const RadioChecks = () => {
    const [image,setImage]=useState<string|null>(null)

    const handleImageChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const file=e.target.files?.[0]
        if(file){
            const ImageUrl=URL.createObjectURL(file)
            setImage(ImageUrl)
        }
    }
  return (
    <div className="flex-1">
                            <div className="grid gap-6 mb-6">

                                <div className="grid gap-2">
                                    <span className="font-small">ORDER TYPE *</span>
                                    <div className="flex gap-10 mt-1">
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
                                    <div className="grid gap-3">
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
                                    <div className="flex gap-10 mt-3">
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

                                    <div className='pt-5'>
                                        <span className='font-medium'>PRODUCT IMAGE</span>
                                        <div className='mt-3 flex gap-2 items-center'>
                                            <input
                                                type='file'
                                                accept='image/*'
                                                onChange={handleImageChange}
                                                id='upload'
                                                className='hidden'
                                            />
                                            <label
                                                htmlFor='upload'
                                                className='border-1 py-1 px-2 font-medium text-[#000000] rounded bg-[#E8E8E8] cursor-pointer'
                                            >
                                                Choose File
                                            </label>
                                            <input type="text" placeholder='File Name Here' className='placeholer:text-[#666666]  w-25' />
                                            <div className=' rounded-full p-1 bg-[#EDEDED] cursor-pointer'>
                                                <RxCross2 className='text-black' />
                                            </div>

                                        </div>

                                        {/* Image Preview */}
                                        {image && (
                                            <div className='mt-4'>
                                                <img
                                                    src={image}
                                                    alt='Selected Preview'
                                                    className='w-50 h-35 object-cover p-0.5 border border-gray-300 rounded-md'
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>


                        </div>
  )
}

export default RadioChecks
