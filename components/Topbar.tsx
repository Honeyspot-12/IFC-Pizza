import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";


export default function Topbar() {
  return (
    <div className="flex ">
    <div className='p-5  py-1  bg-[#F0F0F0]  flex justify-between items-center border-b border-gray-300  w-full'>

      <div className="flex gap-2">
        <RiMenu3Line className=" text-black mt-[6px] cursor-pointer" />
        <h3 className="font-bold mr-2 text-xl text-[#A85916]">IFC PIZZA</h3>

        <button className="border-1 border-[#A85916] bg-[#A85916] text-white rounded-sm px-2   text-xs cursor-pointer">New Order</button>
        <div className="flex items-center text-[#A85916]">
          <CiSearch className="absolute ml-1" />
          <input

            type="search"
            placeholder="Bill No."  
            className="border-1 border-[#A85916] pl-5 py-1 rounded-sm w-20 text-sm "
          />

        </div>
      </div>

     
    </div>
     {/* <div className="flex w-[15%] py-1 px-5 bg-[#A85916] text-white  items-center gap-3">
        <div className="border p-1 bg-white rounded-full flex items-center">
        <BsFillTelephoneFill className="text-[#A85916] " />
        </div>

        <div className="grid ">
          <span className="text-sm">Call For Support</span>
          <span className="text-sm">8590347897</span>
        </div>
      </div> */}


      <div className="hidden md:flex flex-shrink-0 items-center gap-3 bg-[#A85916] px-3 py-1 text-white md:px-5">
        <div className="border p-1 bg-white rounded-full flex items-center">
        <BsFillTelephoneFill className="text-[#A85916] " />
        </div>

        <div className="grid ">
          <span className="text-sm">Call For Support</span>
          <span className="text-sm">8590347897</span>
        </div>
      </div>
      </div>
  )
}