"use client"

import React, { useState } from 'react'
import { BiRefresh } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineTableBar } from "react-icons/md";
import { FaSquare } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import MoveKOTitem from './moveKOTitem/MoveKOTitem';
import SettleSave from './settle&save/SettleSave';



const Tableview = () => {
    const [gtable, setGtable] = useState(Array.from({ length: 22 }, (_, i) => i + 1))
    const [stable, setStable] = useState(Array.from({ length: 11 }, (_, i) => i + 1))

    const [showMoveKOTPopup, setShowMoveKOTPopup] = useState<boolean>(false)
    const [showSettleSavePopup, setShowSettleSavePopup] = useState<boolean>(false)



    const Router = useRouter()

    const handleAdd = () => {
        Router.push('/at')
    }




    return (
        <div className='h-screen bg-white'>
            <div className=' flex justify-between border-b shadow-lg w-full py-4  '>
                <div className=''>
                    <h5 className='font-bold ml-5 text-black mt-[4px]'>Table View</h5>
                </div>
                <div className='flex gap-4 mr-8'>
                    <BiRefresh className='mt-[5px] text-2xl text-[#A85916] cursor-pointer' />
                    <button className='border-1 border-[#A85916] flex  px-5 bg-[#A85916] text-white rounded-sm py-1 cursor-pointer'>Delivery</button>
                    <button className='border-1 border-[#A85916] flex  px-5 bg-[#A85916] text-white rounded-sm py-1 cursor-pointer'>Pick Up</button>
                    <div >
                        <FaPlus className='absolute mt-[8px] ml-[7px] cursor-pointer' />
                        <button className='border-1 border-[#A85916] flex  px-5 bg-[#A85916] text-white rounded-sm py-1 cursor-pointer'
                            onClick={handleAdd}
                        >
                            <span className='ml-[10px]'>Add Item</span>
                        </button>
                    </div>
                </div>


            </div>

            <div className='flex justify-between  bg-white py-2'>
                <div className='flex gap-5 ml-[15px] mt-[10px]'>
                    <div >
                        <FaPlus className='absolute mt-[8px] ml-[7px] cursor-pointer ' />
                        <button className='border-1 border-[#A85916] flex  px-5 bg-[#A85916] text-white rounded-sm py-1 cursor-pointer'>
                            <span className='ml-[10px]'>Table Reservation</span>
                        </button>
                    </div>
                    <div >
                        <FaPlus className='absolute mt-[8px] ml-[7px] cursor-pointer' />
                        <button className='border-1 border-[#A85916] flex  px-5 bg-[#A85916] text-white rounded-sm py-1 cursor-pointer'>
                            <span className='ml-[10px]'>Contactless</span>
                        </button>
                    </div>
                </div>

                <div className=''>
                    <ul className=' flex gap-6 mt-[10px] mr-[10px] text-black'>
                        
                        <li className='border border-gray-200 bg-gray-200 rounded-md   px-[3px] py-[3px]'>
                            {/* <FaRegCircle className='absolute mt-[4px] ml-[7px] cursor-pointer'/> */}
                            
                           
                            <span>⚪</span>
                            
                            <button className='text-sm ml-[7px] cursor-pointer'
                                // onClick={() => setShowpopup(true)}
                                onClick={()=>setShowMoveKOTPopup(true)}
                            >Move KOT/Items</button>
                            {showMoveKOTPopup && <MoveKOTitem setShowpopup={setShowMoveKOTPopup}
                            
                            />}
                        </li>
                        
                        <li className='flex gap-2 mt-[3px]'><FaSquare className='mt-[4px] text-[#F7EFE8]' />Blank Table</li>
                        <li className='flex gap-2 mt-[3px]'><FaSquare className='mt-[4px] text-[#60B5FF]' />Running Table</li>
                        <li className='flex gap-2 mt-[3px]'><FaSquare className='mt-[4px] text-[#328E6E]' />Printed Table</li>
                        <li className='flex gap-2 mt-[3px]'><FaSquare className='mt-[4px] text-[#FFF085]' />Paid Table</li>
                        <li className='flex gap-2 mt-[3px]'><FaSquare className='mt-[4px] text-[#FEBA17]' />Running KOT Table</li>
                    </ul>
                </div>
            </div>

            <div className='flex'>
                <span className='border-3 border-[#A85916] mt-5 mb-1 ml-4'></span>
                <h3 className='text-black ml-2 mt-4 font-bold'>GROUND FLOOR</h3>
            </div>

            <div className='grid grid-cols-11 gap-4 text-black mx-4 mt-6 mb-5 ' >
                {gtable.map((num) => (


                    <button
                        key={num}
                        className='border-1 border-[#A85916] border-dashed rounded-md text-[#A85916] bg-[#F7EFE8] p-[18px] py-[28px] grid justify-center items-center cursor-pointer'
                        onClick={()=>setShowSettleSavePopup(true)}
                    >
                        <MdOutlineTableBar className='ml-5' />
                        Table {num}
                    </button>


                ))}
            </div>



            <div className='flex'>
                <span className='border-3 border-[#A85916] mt-5 mb-1 ml-4'></span>
                <h3 className='text-black ml-2 mt-4 font-bold'>SECOND FLOOR</h3>
            </div>

            <div className='grid grid-cols-11 gap-4 text-black mx-4 mt-6 mb-5 ' >
                {stable.map((num) => (
                    <button key={num} 
                        className='border-1 border-[#A85916] border-dashed rounded-md text-[#A85916] bg-[#F7EFE8] p-[18px] py-[28px] grid justify-center items-center cursor-pointer'
                        onClick={()=>setShowSettleSavePopup(true)}> 
                        <MdOutlineTableBar className='ml-5' />
                        Table {num}</button>
                ))}

            </div>

            {showSettleSavePopup && <SettleSave setshowprop={setShowSettleSavePopup} />}

        </div>
    )
}

export default Tableview
