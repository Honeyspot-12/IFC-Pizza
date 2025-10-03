"use client"

import React, { useState } from "react";
import { items as allitems, Item, items } from "../orderprocess/itemlistsdata/itemdata";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
import Checkvariation from "./checkvariation/Checkvariation";
import Searchbar from "./listsearchbar/Searchbar";


const Itemlisting = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [remove, setRemove] = useState(allitems)
  const [searchTerm, setSearchTerm] = useState("");
  const [shortcode, setShortcode] = useState("")
  const [sortBy, setSortBy] = useState("name");

  const filteredItems = remove.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.shortCode.toLowerCase().includes(shortcode.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    } else {
      return a.shortCode.localeCompare(b.shortCode)
    }
    return 0;
  })


  const removefromcart = (item: string) => {
    setRemove((prev) => prev.filter((i) => i.name !== item))
  }



  const find = (name: string): Item | undefined =>
    allitems.find((i) => i.name === name)

  return (
    <>
      <Searchbar searchTerm={searchTerm} onSearchChange={setSearchTerm} shortcode={shortcode} onShortcode={setShortcode} onSortchange={setSortBy} sortBy={sortBy} />
      <div className="border border-[#A5A5A5] mx-6 mt-6 rounded bg-white shadow-sm max-w-full overflow-x-auto ">
        {/* Wrap header + rows inside a min-width container */}
        <div className="min-w-[900px]">
          {/* Header */}
          <div className="grid grid-cols-12 bg-[#994D1C] text-white px-4 py-3 rounded-t  text-[13px]">
            <span className="text-left ">S.No.</span>
            <span className="text-left col-span-3">Name</span>
            <span className="text-center ">Short Code</span>
            <span className="text-center col-span-4">Price (₹)</span>
            <span className="text-center pr-20 ">Favourite</span>
            <span className="text-center whitespace-nowrap pr-5">Stock Status</span>
            <span className="text-center">Action</span>
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

                {/* Short Code */}
                <span className="text-center text-[13px]">{item.shortCode}</span>

                {/* Price */}
                <button
                  className="text-center text-[#A85916] font-medium cursor-pointer flex items-center justify-center gap-2 col-span-4 pl-6"
                  onClick={() => {
                    const found = find(item.name);
                    if (found) {
                      setSelectedItem(found);
                    }
                  }}
                >
                  check variation <IoMdArrowDropright className="" />
                </button>

                {/* Favourite Checkbox */}
                <span className="text-center flex justify-center items-center pr-10">
                  <input
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer appearance-none border border-[#A5A5A5] rounded-sm 
             checked:bg-[#363636] checked:border-black 
             relative
             before:content-['✓'] before:absolute before:text-white before:text-[12px] before:font-bold before:opacity-0 checked:before:opacity-100 items-center flex justify-center"
                  />
                </span>

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

                {/* Action Buttons */}
                <span className="text-center flex justify-center gap-2 pl-8">
                  <button className="border border-[#363636] p-1 rounded hover:bg-gray-100 cursor-pointer">
                    <BiEditAlt />
                  </button>
                  <button
                    key={index}
                    className="border border-[#363636] p-1 rounded hover:bg-gray-100 cursor-pointer"
                    onClick={() => removefromcart(item.name)}
                  >
                    <RiDeleteBinLine />
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>

        {selectedItem && (
          <Checkvariation
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </>
  );
};


export default Itemlisting;
