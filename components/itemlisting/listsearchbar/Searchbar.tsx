"use client"

import React from 'react'

interface SearchbarProps {
    searchTerm: string;
    shortcode:string;
    onSearchChange: (value: string) => void;
    onShortcode: (value: string) => void;
    onSortchange:(value:string)=>void;
    sortBy: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ searchTerm, onSearchChange,shortcode , onShortcode, onSortchange, sortBy  }) => {

    const handlereset=()=>{
        onSearchChange("")
        onShortcode("")
        onSortchange("name")
    }

    return (
        <div className='border-1 border-[#A5A5A5] px-3 mx-6 mt-6 rounded'>
            <div className='py-5 flex flex-wrap xl:grid grid-cols-10  gap-8 items-center justify-between'>
                <div className='flex items-center gap-2 flex-grow col-span-3'>
                    <span className='text-[#363636] text-sm font-medium'>Name:</span>
                    <input type="text" className='border-1 border-[#A5A5A5] rounded p-1 w-[70%] text-black'
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>


                <div className='flex col-span-5'>
                <div className='flex items-center gap-2 flex-grow '>
                    <span className='text-[#363636] text-sm font-medium'>Short Code:</span>
                    <input type="text" className='border-1 border-[#A5A5A5] rounded p-1 w-[50%] text-black'
                    value={shortcode} 
                    onChange={(e)=>onShortcode(e.target.value)}
                    />
                </div>

                <div className='flex items-center gap-2 flex-grow '>
                    <span className='text-[#363636] text-sm font-medium whitespace-nowrap'>Sort By:</span>
                    <select 
                        name="" 
                        id="" 
                        className='border-1 border-[#A5A5A5] rounded p-1 text-black w-[75%] cursor-pointer text-sm  '
                        value={sortBy}
                        onChange={(e) => onSortchange(e.target.value)}>
                        <option value="name" className='text-sm'>Name</option>
                        <option value="code" className='text-sm'>Short Code</option>

                    </select>
                </div>
                </div>

                <div className='flex gap-4 pl-11'>
                    <button className='border border-black px-6 py-1 rounded text-black cursor-pointer text-sm'
                    onClick={handlereset}
                    >Reset</button>
                    <button className='bg-[#994D1C] px-6 py-1 rounded text-white cursor-pointer text-sm '>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Searchbar
