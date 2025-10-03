

import React from 'react'
import { Operation,operation } from './operation'




const Optable = () => {
    return (
        <>
            <div className='bg-white h-full w-screen'>
                <div className=' flex flex-col items-center sm:items-start  border-b shadow-sm w-full py-4  '>
                        <h5 className='font-medium pl-5 text-black mt-[4px] text-sm'>Operations</h5>
                        <p className='text-[#868686] text-xs pl-5'>Version: 107.0.1</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-4  justify-center items-center text-black font-medium text-[13px] p-3 pt-9">
                    {operation.map((feature,i)=>(
                        <button key={i}
                        className='w-full h-30 border-1 border-[#A5A5A5] rounded-md flex flex-col justify-center items-center shadow-md cursor-pointer p-2'
                        >
                            <img src={feature.image} alt="" className="w-12 h-12 mb-2" />
                            {feature.name}
                        </button>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Optable

