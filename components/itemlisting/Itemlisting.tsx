// import React from 'react'
// import { items } from "../orderprocess/itemlistsdata/itemdata";
// import { BiEditAlt } from "react-icons/bi";
// import { RiDeleteBinLine } from "react-icons/ri";


// const Itemlisting = () => {
//   return (
//     <div className='border-1 border-[#A5A5A5] mx-6 mt-6 rounded bg-white'>
//       {/* Header */}
//       <div className='grid grid-cols-8 bg-[#994D1C] text-white px-5 py-2 rounded-t font-medium'>
//         <span className='col-span-1'>S.No.</span>
//         <span className='col-span-2'>Name</span>
//         <span className='col-span-1 text-center'>Short Code</span>
//         <span className='col-span-1 text-center'>Price (₹)</span>
//         <span className='col-span-1 text-center'>Favourite</span>
//         <span className='col-span-1 text-center'>Stock Status</span>
//         <span className='col-span-1 text-center'>Action</span>
//       </div>

//       {/* Item Rows */}
//       <div className='text-black overflow-y-auto max-h-[calc(100vh-250px)]'>
//         {items.map((item, index) => (
//           <div key={item.name} className='grid grid-cols-8 px-5 py-3 items-center text-sm border-b border-[#A5A5A5] text-[#363636] font-medium'>
//             <span className='col-span-1 whitespace-nowrap'>{index + 1}.</span>
//             <span className='col-span-2 whitespace-nowrap'>{item.name}</span>
//             <span className='col-span-1 text-center'>N/A</span>
//             <span className='col-span-1 text-center'>N/A</span>
//             <span className='col-span-1 text-center'>
//               <input type="checkbox" name="" id="" />
//             </span>
//             <span className='col-span-1 text-center'>In Stock</span>
//             <span className='col-span-1 text-center'>
//               <div className=' '>
//             <button className='border-1 border-[#363636] p-1 rounded cursor-pointer'><BiEditAlt/></button>
//             <button className='border-1 border-[#363636] p-1 rounded cursor-pointer'><RiDeleteBinLine/></button>
//             </div>
//             </span>
//           </div>
//         ))}
//         </div>
//     </div>
//   )
// }

// export default Itemlisting









import React from "react";
import { items } from "../orderprocess/itemlistsdata/itemdata";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

const Itemlisting = () => {
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
        {items.map((item, index) => (
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
            <span className="text-center text-[#994D1C] font-medium cursor-pointer">
              
              200
            </span>

            {/* Favourite Checkbox */}
            <span className="text-center">
              <input type="checkbox" className="w-4 h-4 cursor-pointer" />
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
              <button className="border border-[#363636] p-1 rounded hover:bg-gray-100">
                <BiEditAlt />
              </button>
              <button className="border border-[#363636] p-1 rounded hover:bg-gray-100">
                <RiDeleteBinLine />
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itemlisting;





