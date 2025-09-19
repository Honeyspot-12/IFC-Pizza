"use client"

import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";


interface table{
    name:string;
}

const MoveKOTitem = ({setShowpopup}:{setShowpopup:React.Dispatch<React.SetStateAction<boolean>>})=>{


    const [book, setBook] = useState(Array.from({ length: 17 }, (_, i) => i + 1))
    const [active,setActive]=useState<string>("Table Wise");

    const type:table[]=[
        {name:"Table Wise"},
        {name:"KOT Wise"},
        {name:"item Wise"}
    ];
    

    return (
        <div className='bg-black/50 fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-black'>
            <div className='w-[50%]  h-[53%] flex flex-col  bg-white gap-3 rounded-lg'>
                <div className='flex  items-center justify-between px-6 py-4 border-b-2 border-[#A5A5A5] '>
                    <span className='text-[#363636] font-medium' >MoveKOT/items-3</span>
                    <button
                        className='cursor-pointer'
                        onClick={()=>setShowpopup(false)}
                    >
                        <RxCross2 className='text-[#868686] font-bold' />
                    </button>
                    
                    {/* {setShowpopup} */}
                </div>

                <div className='border-1 border-[#A5A5A5]  mx-4 gap-2 pb-9'>
                    <div className='flex border-b border-[#A5A5A5] '>
                        {/* <button className='bg-[#994D1C] border-r border-[#A5A5A5] p-1 px-4 text-white  cursor-pointer'>Table Wise</button>
                        <button className='border-r border-[#A5A5A5] p-1 px-4 text-black cursor-pointer'>KOT Wise</button>
                        <button className='border-r border-[#A5A5A5] p-1 px-4 text-black cursor-pointer'>Item Wise</button> */}
                        {type.map((cat)=>(
                            <button key={cat.name} 
                            onClick={()=>setActive(cat.name)}
                            className={`border-r border-[#A5A5A5] p-1 px-4 cursor-pointer ${active===cat.name
                            ? "bg-[#994D1C] text-white"
                            : "text-black"
                            }
                            `}>
                                {cat.name}
                            </button>
                        ))}
                    </div>


                    <div className='grid px-3 py-2 gap-2'>
                        <span className='font-medium'>Other</span>
                        <div className='grid grid-cols-13 gap-3'>
                            {book.map((num) => (
                                <button key={num} className='border-1 border-dashed border-[#A5A5A5] bg-[#F2F2F2] rounded p-2 cursor-pointer'>100</button>
                            ))}

                        </div>
                    </div>
                </div>

                <div className='flex px-3 my-9 py-3 items-center justify-between  border-t-2 border-[#A5A5A5]'>
                    <div>
                    <span>Table No.</span>
                    <input type="text" placeholder=''
                        className='mx-3 border-1 p-1 rounded border-[#363636] text-[#808080] placeholder:text-[#808080]'
                    />
                    </div>
                    <div className='flex gap-3'>
                    <button className='border-1 p-1 px-2 font-medium rounded border-[#363636] cursor-pointer' 
                    onClick={()=>setShowpopup(false)}
                    >Cancel</button>
                    <button className='bg-[#994D1C] p-1 px-7 font-medium rounded text-white cursor-pointer'>Move</button>                   
                    </div>
                </div>


            </div>
        </div>
    )
};

export default MoveKOTitem;
