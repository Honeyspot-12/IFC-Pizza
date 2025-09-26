// "use client"

// import React, { useState } from 'react'
// import { BiRefresh } from "react-icons/bi";
// import { FaPlus } from "react-icons/fa6";
// import { FaRegCircle } from "react-icons/fa";
// import { MdOutlineTableBar } from "react-icons/md";
// import { FaSquare } from "react-icons/fa";
// import { useRouter } from 'next/navigation';
// import MoveKOTitem from './moveKOTitem/MoveKOTitem';
// import SettleSave from './settle&save/SettleSave';



// const Tableview = () => {
//     const [gtable, setGtable] = useState(Array.from({ length: 22 }, (_, i) => i + 1))
//     const [stable, setStable] = useState(Array.from({ length: 11 }, (_, i) => i + 1))

//     const [showMoveKOTPopup, setShowMoveKOTPopup] = useState<boolean>(false)
//     const [showSettleSavePopup, setShowSettleSavePopup] = useState<boolean>(false)

//     const Router = useRouter()

//     const handleAdd = () => {
//         Router.push('/at')
//     }




//     return (
//         <div className='h-screen bg-white w-full'>
//             <div className=' flex justify-between border-b shadow-lg w-full py-4  '>
//                 <div className=''>
//                     <h5 className='font-bold ml-5 text-black mt-[4px]'>Table View</h5>
//                 </div>
//                 <div className='flex gap-4 mr-8'>
//                     <BiRefresh className='mt-[5px] text-2xl text-[#A85916] cursor-pointer' />
//                     <button className='border-1 border-[#A85916] flex  px-5 bg-[#A85916] text-white rounded-sm py-1 cursor-pointer'>Delivery</button>
//                     <button className='border-1 border-[#A85916] flex  px-5 bg-[#A85916] text-white rounded-sm py-1 cursor-pointer'>Pick Up</button>
//                     <div >
//                         <FaPlus className='absolute mt-[8px] ml-[7px] cursor-pointer' />
//                         <button className='border-1 border-[#A85916] flex  px-5 bg-[#A85916] text-white rounded-sm py-1 cursor-pointer'
//                             onClick={handleAdd}
//                         >
//                             <span className='ml-[10px]'>Add Item</span>
//                         </button>
//                     </div>
//                 </div>


//             </div>


//             <div className='flex justify-between  bg-white py-2'>
//                 <div className='flex gap-5 ml-[15px] mt-[10px]'>
//                     <div >
//                         <FaPlus className='absolute mt-[8px] ml-[7px] cursor-pointer ' />
//                         <button className='border-1 border-[#A85916] flex  px-5 bg-[#A85916] text-white rounded-sm py-1 cursor-pointer'>
//                             <span className='ml-[10px]'>Table Reservation</span>
//                         </button>
//                     </div>
//                     <div >
//                         <FaPlus className='absolute mt-[8px] ml-[7px] cursor-pointer' />
//                         <button className='border-1 border-[#A85916] flex  px-5 bg-[#A85916] text-white rounded-sm py-1 cursor-pointer'>
//                             <span className='ml-[10px]'>Contactless</span>
//                         </button>
//                     </div>
//                 </div>

//                 <div className=''>
//                     <ul className=' flex gap-6 mt-[10px] mr-[10px] text-black'>

//                         <li className='border border-gray-200 bg-gray-200 rounded-md   px-[3px] py-[3px]'>
//                             {/* <FaRegCircle className='absolute mt-[4px] ml-[7px] cursor-pointer'/> */}


//                             <span>⚪</span>

//                             <button className='text-sm ml-[7px] cursor-pointer'
//                                 // onClick={() => setShowpopup(true)}
//                                 onClick={()=>setShowMoveKOTPopup(true)}
//                             >Move KOT/Items</button>
//                             {showMoveKOTPopup && <MoveKOTitem setShowpopup={setShowMoveKOTPopup}

//                             />}
//                         </li>

//                         <li className='flex gap-2 mt-[3px]'><FaSquare className='mt-[4px] text-[#F7EFE8]' />Blank Table</li>
//                         <li className='flex gap-2 mt-[3px]'><FaSquare className='mt-[4px] text-[#60B5FF]' />Running Table</li>
//                         <li className='flex gap-2 mt-[3px]'><FaSquare className='mt-[4px] text-[#328E6E]' />Printed Table</li>
//                         <li className='flex gap-2 mt-[3px]'><FaSquare className='mt-[4px] text-[#FFF085]' />Paid Table</li>
//                         <li className='flex gap-2 mt-[3px]'><FaSquare className='mt-[4px] text-[#FEBA17]' />Running KOT Table</li>
//                     </ul>
//                 </div>
//             </div>



//             <div className='flex'>
//                 <span className='border-3 border-[#A85916] mt-5 mb-1 ml-4'></span>
//                 <h3 className='text-black ml-2 mt-4 font-bold'>GROUND FLOOR</h3>
//             </div>

//             <div className='grid grid-cols-11 gap-4 text-black mx-4 mt-6 mb-5 ' >
//                 {gtable.map((num) => (


//                     <button
//                         key={num}
//                         className='border-1 border-[#A85916] border-dashed rounded-md text-[#A85916] bg-[#F7EFE8] p-[18px] py-[28px] grid justify-center items-center cursor-pointer'
//                         onClick={()=>setShowSettleSavePopup(true)}
//                     >
//                         <MdOutlineTableBar className='ml-5' />
//                         Table {num}
//                     </button>


//                 ))}
//             </div>



//             <div className='flex'>
//                 <span className='border-3 border-[#A85916] mt-5 mb-1 ml-4'></span>
//                 <h3 className='text-black ml-2 mt-4 font-bold'>SECOND FLOOR</h3>
//             </div>

//             <div className='grid grid-cols-11 gap-4 text-black mx-4 mt-6 mb-5 ' >
//                 {stable.map((num) => (
//                     <button key={num} 
//                         className='border-1 border-[#A85916] border-dashed rounded-md text-[#A85916] bg-[#F7EFE8] p-[18px] py-[28px] grid justify-center items-center cursor-pointer'
//                         onClick={()=>setShowSettleSavePopup(true)}> 
//                         <MdOutlineTableBar className='ml-5' />
//                         Table {num}</button>
//                 ))}

//             </div>

//             {showSettleSavePopup && <SettleSave setshowprop={setShowSettleSavePopup} />}

//         </div>
//     )
// }

// export default Tableview






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
        <div className='h-full bg-white w-full'>
            <div className=' flex justify-between border-b shadow-lg w-full py-4 bg-white  '>
                <div className=''>
                    <h5 className='font-bold ml-5 text-black mt-[4px]'>Table View</h5>
                </div>

                {/* <div className='flex gap-4 px-5 items-center ' >
                    <BiRefresh className='mt-[5px]  text-[#A85916] cursor-pointer' />
                    <button className='border-1 border-[#A85916] flex  px-2 md:px-5 bg-[#A85916] text-white rounded-sm  md:py-1 cursor-pointer'>Delivery</button>
                    <button className='border-1 border-[#A85916] flex  px-5 bg-[#A85916] text-white rounded-sm py-1 cursor-pointer'>Pick Up</button>
                    <div className='flex items-center'>
                        <FaPlus className='absolute ml-2 cursor-pointer' />
                        <button className='border-1 border-[#A85916] flex  px-5 bg-[#A85916] text-white rounded-sm py-1 cursor-pointer'
                            onClick={handleAdd}
                        >
                            <span className='ml-[10px]'>Add Item</span>
                        </button>
                    </div>
                </div> */}

                <div className="flex  gap-3 px-1 sm:px-5 items-center justify-center sm:justify-start">
                    {/* Refresh Icon */}
                    <BiRefresh className="mt-[3px] text-[#A85916] cursor-pointer" />

                    {/* Delivery Button */}
                    <button className="border border-[#A85916] px-3 sm:px-5 bg-[#A85916] text-white rounded-sm py-1 text-sm sm:text-base cursor-pointer">
                        Delivery
                    </button>

                    {/* Pickup Button */}
                    <button className="border border-[#A85916] px-3 sm:px-5 bg-[#A85916] text-white rounded-sm py-1 text-sm sm:text-base cursor-pointer">
                        Pick Up
                    </button>

                    {/* Add Item Button */}
                    <div className="relative flex items-center">
                        <FaPlus className="hidden sm:block absolute left-2 text-white cursor-pointer" />
                        <button
                            className="border border-[#A85916] md:px-7 bg-[#A85916] text-white rounded-sm py-1 text-sm sm:text-base cursor-pointer"
                            onClick={handleAdd}
                        >
                            Add Item
                        </button>
                    </div>
                </div>



            </div>


            <div className="flex flex-col md:flex-row justify-between items-center bg-white py-3 px-4 gap-3 md:gap-0">
                {/* Left Buttons */}
                <div className="xl:flex gap-3 grid grid-cols-2 md:grid-cols-1 justify-center md:justify-start items-center">
                    <div className="relative">
                        <FaPlus className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-white" />
                        <button className="border border-[#A85916] flex items-center pl-7 pr-4 py-2 bg-[#A85916] text-white rounded-sm cursor-pointer text-sm md:text-base">
                            Table Reservation
                        </button>
                    </div>


                    <div className="relative">
                        <FaPlus className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-white" />
                        <button className="border border-[#A85916] flex items-center pl-7 pr-4 py-2 bg-[#A85916] text-white rounded-sm cursor-pointer text-sm md:text-base">
                            Contactless
                        </button>
                    </div>
                </div>

                {/* Right Info */}
                <div className="w-full md:w-auto">
                    <ul className="xl:flex  grid grid-cols-3 justify-center md:justify-end gap-3 mt-2 md:mt-0 text-black  text-[10px] md:text-base">
                        <li className="flex items-center gap-2 border border-gray-200 bg-gray-200 rounded-md px-1 py-1">
                            <span className='border-1 border-white bg-white rounded-full p-2 '></span>
                            <button
                                className="cursor-pointer"
                                onClick={() => setShowMoveKOTPopup(true)}
                            >
                                Move KOT/Items
                            </button>
                            {showMoveKOTPopup && (
                                <MoveKOTitem setShowpopup={setShowMoveKOTPopup} />
                            )}
                        </li>
                        <li className="flex items-center gap-2 ">
                            <FaSquare className="text-[#F7EFE8]" /> Blank Table
                        </li>
                        <li className="flex items-center gap-2 ">
                            <FaSquare className="text-[#60B5FF]" /> Running Table
                        </li>
                        <li className="flex items-center gap-2">
                            <FaSquare className="text-[#328E6E]" /> Printed Table
                        </li>
                        <li className="flex items-center gap-2">
                            <FaSquare className="text-[#FFF085]" /> Paid Table
                        </li>
                        <li className="flex items-center gap-2">
                            <FaSquare className="text-[#FEBA17]" /> Running KOT Table
                        </li>
                    </ul>
                </div>
            </div>




            <div className='flex'>
                <span className='border-3 border-[#A85916] mt-5 mb-1 ml-4'></span>
                <h3 className='text-black ml-2 mt-4 font-bold'>GROUND FLOOR</h3>
            </div>

            <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-11 gap-4 text-black mx-4 mt-6 mb-5 ' >
                {gtable.map((num) => (
                    
                    <button
                        key={num}
                        className='border-1 border-[#A85916] border-dashed rounded-md text-[#A85916] bg-[#F7EFE8] p-[18px] py-[28px] grid justify-center items-center cursor-pointer'
                        onClick={() => setShowSettleSavePopup(true)}
                    >
                        <MdOutlineTableBar className='ml-5'/>
                        Table {num}
                    </button>
                    
                    


                ))}
            </div>



            <div className='flex'>
                <span className='border-3 border-[#A85916] mt-5 mb-1 ml-4'></span>
                <h3 className='text-black ml-2 mt-4 font-bold'>SECOND FLOOR</h3>
            </div>

            <div className='grid grid-cols-3  md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-11 gap-4 text-black mx-4 mt-6 mb-5 ' >
                {stable.map((num) => (
                    <button key={num}
                        className='border-1 border-[#A85916] border-dashed rounded-md text-[#A85916] bg-[#F7EFE8] p-[18px] py-[28px] grid justify-center items-center cursor-pointer'
                        onClick={() => setShowSettleSavePopup(true)}>
                        <MdOutlineTableBar className='ml-5' />
                        Table {num}</button>
                ))}

            </div>

            {showSettleSavePopup && <SettleSave setshowprop={setShowSettleSavePopup} />}

        </div>
    )
}

export default Tableview

