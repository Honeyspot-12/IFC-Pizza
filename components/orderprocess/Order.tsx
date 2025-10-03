"use client"

import React, { useState } from 'react'
import { useCart } from '@/context/CartContext';
import { IoSearchSharp } from "react-icons/io5";
import Cartsection from './cart section/Cartsection';


interface Ordertype {
    name: string
}


const Order: React.FC = () => {
    const [active, setActive] = useState<string>("Dine In")
    const { searchterm, setSearchterm } = useCart();

    const types: Ordertype[] = [
        { name: "Dine In" },
        { name: "Delivery" },
        { name: "Take Away" },
    ];


    return (

        <div className="bg-black lg:grid grid-cols-12  items-center justify-center lg:justify-between shadow-sm md:p-0 ">

            <div className="relative w-full col-span-8 px-2 text-md">
                <IoSearchSharp className="absolute left-5 top-1/2 -translate-y-1/2 text-[#000000]" size={20} />
                <input
                    type="search"
                    placeholder="Search Item"
                    value={searchterm}
                    onChange={(e) => setSearchterm(e.target.value)}
                    className=" w-full pl-10 pr-3 py-2 rounded bg-white text-black placeholder-[#929292] focus:outline-none"
                />
            </div>



            <div className='flex h-14 justify-end col-span-4 text-sm'>
                {types.map((cat) => (
                    <button key={cat.name}
                        onClick={() => setActive(cat.name)}
                        className={`basis-1/3 py-2 text-white font-medium cursor-pointer whitespace-nowrap  ${active === cat.name
                            ? "bg-[#B56022]"
                            : ""
                            }
                    `}>{cat.name}</button>
                ))}

                {/* <Cartsection/> */}

            </div>



        </div>
    )
}

export default Order




