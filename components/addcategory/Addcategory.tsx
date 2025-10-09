"use client"

import React, { useState } from 'react'
import Header from './header/Header'
import { TiArrowSortedDown } from "react-icons/ti";
import { useRouter } from 'next/navigation';

const Addcategory = () => {
    // const [image, setImage] = useState<string | null>(null)
    // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0];
    //     if (file) {
    //         const ImageUrl = URL.createObjectURL(file)
    //         setImage(ImageUrl)
    //     }
    // }

    const [image,setImage]=useState<string | null>(null)
    const handleImageChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const file=e.target.files?.[0]
        if(file){
            const ImageUrl=URL.createObjectURL(file)
            setImage(ImageUrl)
        }
    }

   
    
    return (
        
        <div className=' bg-white w-full h-full text-sm'>
            <Header/>
            
            <div className="border border-[#A5A5A5]  shadow-sm text-[#666666] rounded-[10px] mx-9 p-6 my-9  text-[12px]">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    <div className='flex flex-col gap-2'>
                    <span className='text-[#666666] font-medium '>ADD CATEGORY IMAGE <span className='text-[#994D1C]'>*</span></span>
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#CACACA] rounded-md p-6  w-full  md:h-[193px]">


                        {image ? (
                            <img
                                src={image}
                                alt="Uploaded Preview"
                                className="w-25 h-25 object-cover rounded-md"                                
                            />

                        ) : (
                            <>
                                {/* Upload Icon */}
                                <div className="text-[#994D1C] mb-2 text-3xl">
                                    <img src="/addcategory.svg" alt="" className='w-11 h-11' />
                                </div>

                                {/* Upload Text */}
                                <label
                                    htmlFor="file-upload"
                                    className="cursor-pointer text-[#994D1C] hover:underline"
                                >
                                    <span className="text-black font-medium text-[15px]">
                                        Drop your images here,or
                                    </span>{" "}
                                    <span className="text-[#994D1C] text-[15px] font-medium">click to browse</span>
                                </label>

                                <input
                                    id="file-upload"
                                    type="file"
                                    accept="image/png, image/jpeg, image/webp"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />

                                {/* Recommended size text */}
                                <p className="text-[11px] text-[#868686] mt-2 text-center lg:whitespace-nowrap">
                                    500 x 500 (1:1) recommended. PNG, JPG and WEBP files are allowed
                                </p>
                            </>
                        )}
                    </div>
</div>

                    <div className='flex flex-col '>
                        <span className='text-[#666666] font-medium'>NAME <span className='text-[#994D1C]'>*</span></span>
                        <input type="text" className="border border-[#CACACA] rounded-sm py-2  px-2 w-full mt-1" />
                    </div>

                    <div className='flex flex-col md:pl-10'>
                        <span className='font-medium'>STATUS <span className='text-[#994D1C]'>*</span></span>
                        <div className='relative w-[60%]'>
                            <select name="status" id=""
                                className='border border-[#CACACA] rounded w-full py-2 text-[#B4B4B4] px-2 cursor-pointer appearance-none'

                            >
                                <option value="" className='cursor-pointer text-[#B4B4B4] px-2'>Select Status</option>

                            </select>
                            <TiArrowSortedDown className='absolute top-1/2 right-2 -translate-1/2 pointer-events-none text-[#B4B4B4] w-4 h-4'/>
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
    )
}

export default Addcategory;
