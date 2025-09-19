

import React from 'react'
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";


const Test1 = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 px-5 bg-white'>
            <div className="border-2 border-gray-200 rounded-xl p-4 text-black flex flex-col relative ">
                {/* <div className='relative'> */}
                <img src="./Pizza.jpg" alt=""
                    className='w-full object-cover rounded-md'
                    
                />
                <button className='cursor-pointer'><FaRegHeart className='absolute top-4 right-6 text-gray-500 bg-white rounded-full p-1' size={24}/></button>
                {/* </div> */}

                
                <h3 className="mt-2 font-medium flex items-center justify-center w-full ">Pizza Onion Magic</h3>
                

                <div className='flex justify-center gap-6'>
                <h3 className="mt-1 text-orange-400 font-bold">₹ 164</h3>
                <h3 className="mt-1 text-gray-400">(4.9)</h3>
                </div>

                <div className='flex justify-center mt-2'>
                    <button className='border-1 border-orange-400 p-2 px-8 rounded-3xl flex items-center gap-2 text-orange-400 cursor-pointer font-bold'>
                        <RiShoppingBag4Line className='text-orange-400 font-bold'/>
                        Add To Cart</button>
                </div>
            </div>


            <div className="border-2 border-gray-200 rounded-xl p-4 flex flex-col">
                <img src="./Pizza.jpg" alt=""
                    className='w-full h-auto object-cover rounded-md'
                />
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-4 flex flex-col">
                <img src="./Pizza.jpg" alt=""
                    className='w-full h-auto object-cover rounded-md'
                />
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-4 flex flex-col">
                <img src="./Pizza.jpg" alt=""
                    className='w-full h-auto object-cover rounded-md'
                />
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-4 flex flex-col">
                <img src="./Pizza.jpg" alt=""
                    className='w-full h-auto object-cover rounded-md'
                />
            </div>

        </div>
    )
}

export default Test1
