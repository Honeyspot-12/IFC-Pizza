"use client"

import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";

interface Ordertype{
    name:string
}


const Order : React.FC=()=> {
    const [active,setActive]=useState<string>("Dine in")

    const types: Ordertype[] = [
        {name:"Dine In"},
        {name:"Delivery"},
        {name:"Take Away"},
    ];


    return (
        <div className="bg-black w-full h-14 flex gap-3 items-center justify-between shadow-sm ">

            <div className="relative pl-2 w-3/5">
                <IoSearchSharp className="absolute left-5 top-1/2 -translate-y-1/2 text-black" size={20} />
                <input
                    type="search"
                    placeholder="Search Item"
                    className="w-full pl-10 pr-3 py-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
                />
            </div>


            <div className="flex h-14 ml-8">

                {types.map((cat)=>(
                    <button key={cat.name}
                    onClick={()=>setActive(cat.name)}
                    className={`px-15 py-2 text-white font-medium cursor-pointer ${active===cat.name 
                        ? "bg-[#B56022]"
                        : ""

                    }
                    
                    
                    `}>{cat.name}</button>
                ))}

                {/* <button className="px-15 py-2 text-white font-medium bg-[#B56022] cursor-pointer">Dine In</button>
                <button className="px-15 py-2 text-white font-medium hover:bg-[#2a2a2a] cursor-pointer ">Delivery</button>

                <button className="px-15 py-2 text-white font-medium hover:bg-[#2a2a2a] cursor-pointer">Take Away</button> */}

            </div>
        </div>





        // <div className="bg-black w-full h-14 flex gap-3 items-center shadow-sm px-4">

        //     <div className="relative w-3/5">
        //         <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        //         <input
        //             type="search"
        //             placeholder="Search Item"
        //             className="w-full pl-10 pr-3 py-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
        //         />
        //     </div>


        //     <div className="flex h-14 ml-8">
        //         <button className="px-15 py-2 text-white font-medium bg-[#B56022] cursor-pointer">Dine In</button>
        //         <button className="px-15 py-2 text-white font-medium hover:bg-[#2a2a2a] cursor-pointer ">Delivery</button>

        //         <button className="px-15 py-2 text-white font-medium hover:bg-[#2a2a2a] cursor-pointer">Take Away</button>
        //     </div>
        // </div>




    )
}

export default Order





// "use client";

// import React from "react";
// import { IoSearchSharp } from "react-icons/io5";


// const Screen3 = () => {
//     return (
//         <div className="w-full">
//             {/* 🔍 Search + Tabs Section */}
//             <div className="w-full bg-white flex items-center justify-between shadow-md px-4 py-3">
//                 {/* Search Bar */}
//                 <div className="relative w-1/2">
//                     <IoSearchSharp
//                         className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
//                         size={20}
//                     />
//                     <input
//                         type="search"
//                         placeholder="Search Item"
//                         className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B56022]"
//                     />
//                 </div>

//                 {/* Tabs */}
//                 <div className="flex">
//                     <button className="px-6 py-2 font-medium bg-[#B56022] text-white">
//                         Dine In
//                     </button>
//                     <button className="px-6 py-2 font-medium border hover:bg-gray-100">
//                         Delivery
//                     </button>
//                     <button className="px-6 py-2 font-medium border hover:bg-gray-100">
//                         Take Away
//                     </button>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Screen3;

