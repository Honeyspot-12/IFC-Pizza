import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";

export default function Topbar() {
  return (
    <section className='p-5 px-4 py-1  bg-[#F0F0F0]  flex justify-between items-center border-b border-gray-300  '>

      <div className="flex  gap-2">
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

      <div className="   flex  py-1 px-5 bg-[#A85916] text-white  ">

        <HiOutlinePhone className="mt-2 mr-4 " />

        <div className="grid ">
          <span className="text-sm">Call For Support</span>
          <span className="text-sm">8590347897</span>
        </div>
      </div>

      {/* <div>
        <h1 className='text-xl font-semibold'>IFC PIZZA</h1>
      </div>    

      <div className='flex items-center gap-4'>
        <ul className='flex gap-4 text-2xl font-bold'>
          <li className='cursor-pointer bg-gray-100 p-2 rounded'><MdOutlineDarkMode /></li>
          <li className='cursor-pointer bg-gray-100 p-2 rounded'><CiBellOn /></li>
        </ul>
        <div >
          <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button" className="btn p-4 bg-white border-none text-left">
              <img
                src='https://avatars.githubusercontent.com/u/102810276?v=4'
                alt='User Avatar'
                className='w-10 h-10 rounded-full mr-3 cursor-pointer'
              />
              <div>
                <h2 className='text-sm font-bold'>John Doe</h2>
                <p className='text-xs text-gray-500'>AutoBots123@gmail.com</p>
              </div> ⬇️</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>

        </div>
      </div> */}

    </section>
  )
}