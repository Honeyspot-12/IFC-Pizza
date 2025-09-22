"use client"

import React, { useState } from "react";
import { items as allitems,Item, items } from "../orderprocess/itemlistsdata/itemdata";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
import Checkvariation from "./checkvariation/Checkvariation";



const Itemlisting = () => {
  const [selectedItem,setSelectedItem]=useState<Item|null>(null)
  const [remove,setRemove]=useState(allitems)

  
  const removefromcart=(item:string)=>{
    setRemove((prev)=>prev.filter((i)=>i.name!==item))
  }



  const find=(name:string):Item|undefined=>
    allitems.find((i)=>i.name===name)

  return (
    <div className="border border-[#A5A5A5] mx-6 mt-6 rounded bg-white shadow-sm">
      {/* Header */}
      <div className="grid grid-cols-7 bg-[#994D1C] text-white px-4 py-3 rounded-t font-semibold text-sm">
        <span className="text-left">S.No.</span>
        <span className="text-left">Name</span>
        <span className="text-center">Short Code</span>
        <span className="text-center">Price (₹)</span>
        <span className="text-center">Favourite</span>
        <span className="text-center">Stock Status</span>
        <span className="text-center">Action</span>
      </div>

      {/* Item Rows */}
      <div className="text-black overflow-y-auto max-h-[calc(100vh-250px)] text-sm">
        {remove.map((item, index) => (
          <div
            key={item.name}
            className="grid grid-cols-7 px-4 py-3 items-center border-b border-[#A5A5A5] hover:bg-gray-50 transition"
          >
            {/* S.No */}
            <span className="text-left">{index + 1}.</span>

            {/* Name */}
            <span className="truncate">{item.name}</span>

            {/* Short Code */}
            <span className="text-center">{item.shortCode}</span>

            {/* Price */}
            <button className="text-center text-[#994D1C] font-medium cursor-pointer flex items-center justify-center gap-2"
            onClick={()=>{
              const found=find(item.name)
              if(found){
                setSelectedItem(found)
              }
            }}
            >
              
              check variation <IoMdArrowDropright />
            </button>

            {/* Favourite Checkbox */}
            <span className="text-center flex justify-center items-center ">
              <input type="checkbox" className="w-4 h-4 cursor-pointer appearance-none border border-[#A5A5A5] rounded-sm 
             checked:bg-[#363636] checked:border-black 
             relative
             before:content-['✓'] before:absolute before:text-white before:text-[12px] before:font-bold before:opacity-0 checked:before:opacity-100 items-center flex justify-center" />
            </span>

            {/* Stock Toggle */}
            <span className="text-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-10 h-5 bg-gray-300 peer-checked:bg-[#994D1C] rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
              </label>
            </span>

            {/* Action Buttons */}
            <span className="text-center flex justify-center gap-2">
              <button className="border border-[#363636] p-1 rounded hover:bg-gray-100 cursor-pointer">
                <BiEditAlt />
              </button>
              <button key={index} className="border border-[#363636] p-1 rounded hover:bg-gray-100 cursor-pointer "
              onClick={()=>removefromcart(item.name)}
              >
                <RiDeleteBinLine />
              </button>
              
             
            </span>
          </div>
        ))}
      </div>
      
      {selectedItem &&(
        <Checkvariation item={selectedItem}
        onClose={()=>setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default Itemlisting;





