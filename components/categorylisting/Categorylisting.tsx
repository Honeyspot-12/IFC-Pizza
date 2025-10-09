"use client"

import React, { useState } from 'react'
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import Categorysearch from "@/components/categorylisting/categorySearchbar/Categorysearch";
import Header from './header/Header';

interface category{
  name:string;
}

const Categorylisting = () => {

    const initialCategories:category[]=[
      {name:"Beverages"},
      { name: "New Pizza Lovers" },
    { name: "Premium Pizza" },
    { name: "Signature Pizza"},
    { name: "Supreme Pizza" },
    { name: "Classic Pizza" },
    { name: "Combo" },
    { name: "Burger Meals" },
    { name: "Delicious Sides" },
    { name: "Triple Treat Meal" },
    { name: "Special Pizza Magic Mania" },
    { name: "Double Pizza Magic Mania"},
    { name: "Single Pizza Magic Mania" }

    ]

     
     
    const [categories, setCategories] = useState(initialCategories);
    const [searchTerm, setSearchTerm] = useState("")
    const [sortBy, setSortBy] = useState("")
    

    const filteredItems = categories.filter(item =>
        item.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    ).sort((a, b) => {
        if (sortBy === "name") {
                return a.name.localeCompare(b.name)
            }
        //Always return a value from sort
        return 0;
    });

    const remove = (nameToRemove: string) => {
      setCategories(prev => prev.filter(item => item.name !== nameToRemove));
    }

    return (
    <>
      {/* Pass all required props to Searchbar */}
      <Header/>
      <Categorysearch searchTerm={searchTerm} onSearchChange={setSearchTerm} onSortchange={setSortBy} sortBy={sortBy} />
      <div className="border border-[#A5A5A5] mx-6 mt-6 rounded bg-white shadow-sm max-w-full overflow-x-auto ">
        {/* Wrap header + rows inside a min-width container */}
        <div className="min-w-[900px]">
          {/* Header */}
          <div className="grid grid-cols-12  bg-[#994D1C] text-white px-4 py-3 rounded-t  text-[13px]">
            <span className="text-left ">S.No.</span>
            <span className="text-left col-span-3">Name</span>
            <span className="text-center whitespace-nowrap  ">Status</span>
            
            <span className="text-center col-span-3">Created On</span>
            <span className="text-center">Modified On</span>    
             
            <span className="text-center col-span-3">Action</span>
          </div>

          {/* Item Rows */}
          <div className="text-black overflow-y-auto max-h-[calc(100vh-250px)] text-sm">
            {filteredItems.map((item, index) => (
              <div
                key={item.name}
                className="grid grid-cols-12 px-4 py-3 items-center border-b border-[#A5A5A5] hover:bg-gray-50 transition"
              >
                {/* S.No */}
                <span className="text-left pl-3">{index + 1}.</span>

                {/* Name */}
                <span className="truncate text-[13px] col-span-3">{item.name}</span>
               
                {/* Stock Toggle */}
                <span className="text-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="relative w-13 h-5 bg-[#E9E9E9] peer-checked:bg-[#994D1C] rounded-full 
                after:content-[''] after:absolute after:top-0.5 after:left-[5px] 
                after:bg-[#994D1C] peer-checked:after:bg-white 
                after:border-gray-300 after:border after:rounded-full 
                after:h-4 after:w-4 after:transition-all after:translate-x-0 
                peer-checked:after:translate-x-7">
                    </div>

                  </label>
                </span>

                {/* Created On */}
                <span className="text-center text-[13px] col-span-3">{"-"}</span>

                {/* Modified On */}
                <span className="text-center text-[13px]">{"-"}</span>

                {/* Action Buttons */}
                <span className="text-center flex justify-center gap-2 pl-8 col-span-3">
                  <button className="border border-[#363636] p-1 rounded hover:bg-gray-100 cursor-pointer">
                    <BiEditAlt />
                  </button>
                  <button
                    key={index}
                    className="border border-[#363636] p-1 rounded hover:bg-gray-100 cursor-pointer"
                    onClick={() => remove(item.name)}
                  >
                    <RiDeleteBinLine />
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>  
      </div>
    </>
    )
}

export default Categorylisting
