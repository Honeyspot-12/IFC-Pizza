
"use client"
import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { Item, Variations } from '@/components/orderprocess/itemlistsdata/itemdata';

interface size {
    item: Item;
    onClose:()=>void
}

const Checkvariation: React.FC<size> = ({ item , onClose}) => {
    return (
        <div className='bg-black/50  fixed  top-0 left-0 items-center justify-center h-screen w-full text-black flex flex-col shadow-2xl '>
            <div className=' w-1/4  h-auto flex flex-col  bg-white gap-4 rounded-lg pb-3 '>
                <h3 className='flex items-center justify-between p-3 mt-3 border-b border-[#A5A5A5] cursor-pointer' onClick={onClose}>{item.name} <span><RxCross1 /></span></h3>

                <div className='border border-[#363636] rounded mx-3'>
                    <div className=' px-3 py-2 grid grid-cols-3 bg-[#363636] text-white'>
                        <span className='text-left'>S.No</span>
                        <span className='text-center'>Variation Name</span>
                        <span className='text-right'>Price</span>
                    </div>


                    {item.variations.map((variation, index) => (
                        <div key={index} className='flex items-center justify-between px-3 py-2 border-t '>
                            <span className=''>{index+1}</span>
                            <span className=''>{variation.size}</span>
                            <span className=''>{variation.price}</span>
                        </div>
                    ))}

                </div> 
            </div>
        </div>
    )
}

export default Checkvariation
