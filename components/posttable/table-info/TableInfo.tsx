
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { FaSquare } from 'react-icons/fa'
import MoveKOTitem from '../moveKOTitem/MoveKOTitem'

const TableInfo = () => {
    const [showMoveKOTPopup, setShowMoveKOTPopup] = useState<boolean>(false)

  return (
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
  )
}

export default TableInfo
