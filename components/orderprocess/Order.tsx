"use client"

import React, { useState } from 'react'
import { useCart } from '@/context/CartContext';
import { IoSearchSharp } from "react-icons/io5";


interface Ordertype{
    name:string
}


const Order : React.FC=()=> {
    const [active,setActive]=useState<string>("Dine In")
    const { searchterm, setSearchterm } = useCart();

    const types: Ordertype[] = [
        {name:"Dine In"},
        {name:"Delivery"},
        {name:"Take Away"},
    ];


    return (
        <div className="bg-black w-full grid  lg:flex  gap-3 items-center justify-center lg:justify-between shadow-sm md:p-0 ">

            <div className="relative w-full p-2">
                <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                    type="search"
                    placeholder="Search Item"
                    value={searchterm}
                    onChange={(e)=>setSearchterm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
                />
            </div>


            <div className="flex h-14 w-full justify-end">

                {types.map((cat)=>(
                    <button key={cat.name}
                    onClick={()=>setActive(cat.name)}
                    className={`px-9 py-2 text-white font-medium cursor-pointer whitespace-nowrap ${active===cat.name 
                        ? "bg-[#B56022]"
                        : ""

                    }
                    `}>{cat.name}</button>
                ))}

            </div>
        </div>
    )
}

export default Order
