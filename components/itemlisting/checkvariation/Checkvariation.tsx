
"use client"
import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { Item, Variations } from '@/components/orderprocess/itemlistsdata/itemdata';

interface size {
    item: Item;
    onClose: () => void;
}

const Checkvariation: React.FC<size> = ({ item, onClose }) => {
    return (
        <div className='bg-black/50  fixed  top-0 left-0  items-center justify-center h-screen w-full text-black flex flex-col shadow-2xl '>
            <div className='   h-auto flex flex-col  bg-white gap-4 rounded-lg pb-3 w-full md:w-2/7'>
                <h3 className='flex items-center justify-between p-3  border-b border-[#A5A5A5] cursor-pointer font-medium text-[13px] text-[#363636]' onClick={onClose}>{item.name} <span><RxCross1 /></span></h3>

                <div className='border border-[#A5A5A5] rounded mx-3 '>
                    <div className=' px-4 py-2 grid grid-cols-3 bg-[#363636] text-white text-[13px] font-medium'>
                        <span className='text-left px-8'>S.No</span>
                        <span className='text-center'>Variation Name</span>
                        <span className='text-right px-8'>Price</span>
                    </div>


                    {item.variations.map((variation, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-3 text-[13px] border-t border-[#A5A5A5] "
                        >
                            <span className="px-15 py-2 border-r border-[#A5A5A5]">{index + 1}.</span>
                            <span className="px-10 py-2 border-r border-[#A5A5A5]">{variation.size}</span>
                            <span className="pl-15 py-2 ">{variation.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Checkvariation
