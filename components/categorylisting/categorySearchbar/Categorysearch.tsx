"use client"

import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";



interface SearchbarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    
    onSortchange:(value:string)=>void;
    sortBy: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ searchTerm, onSearchChange, onSortchange, sortBy  }) => {

    const handlereset=()=>{
        onSearchChange("")
        onSortchange("name")
    }

    return (
        <div className='border-1 border-[#A5A5A5] px-3 mx-6 mt-6 rounded'>
            <div className='py-5 flex flex-wrap xl:grid grid-cols-4  gap-8 items-center justify-between'>
                <div className='flex items-center gap-2 flex-grow col-span-1'>
                    <span className='text-[#363636] text-sm font-medium'>Name:</span>
                    <input type="text" className='border-1 border-[#A5A5A5] rounded p-1 w-[80%] text-black'
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>


                <div className='flex col-span-2'>

                    <div className='flex items-center gap-2 flex-grow '>
                        <span className='text-[#363636] text-sm font-medium whitespace-nowrap'>Sort By:</span>
                        <div className="relative w-[45%]">
                            <select
                                name=""
                                id=""
                                className='border-1 border-[#A5A5A5] rounded p-1.5 text-black w-full cursor-pointer text-sm appearance-none pr-8'
                                value={sortBy}
                                onChange={(e) => onSortchange(e.target.value)}>
                                <option value="name" className='text-sm'>Name</option>
                            </select>
                            <TiArrowSortedDown className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none text-[#A5A5A5]" />
                        </div>
                    </div>

                    <div className='flex gap-4 '>
                    <button className='border border-black px-6 py-1 rounded text-black cursor-pointer text-sm'
                    onClick={handlereset}
                    >Reset</button>
                    <button className='bg-[#994D1C] px-6 py-1 rounded text-white cursor-pointer text-sm '>Search</button>
                </div>
                </div>

                
            </div>
        </div>
    )
}

export default Searchbar
