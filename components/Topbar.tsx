// "use client"

// import React from "react";
// import { CgMenuRightAlt  } from "react-icons/cg";
// import { IoSearchSharp   } from "react-icons/io5";
// import { HiOutlinePhone } from "react-icons/hi";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { useRouter } from "next/navigation";
// import { Anton} from "next/font/google";

// const anton = Anton({
//   weight:'400',
//   style:"normal",
  
// });


// export default function Topbar() {
//   const Router=useRouter()
//   return (
//     <div className="flex ">
//     <div className='p-5  py-1  bg-[#F0F0F0]  flex justify-between items-center border-b border-gray-300  w-full'>

//       <div className="flex gap-2 items-center ">
//         <CgMenuRightAlt  className=" text-black w-8 h-8 cursor-pointer" />
//         <button className={`font-bold mr-2 text-[25px] text-[#994D1C] cursor-pointer ${anton.className} `}
//         onClick={()=>Router.push('/post_table')}
//         >IFC Pizza</button>
        

//         <button className="border-1 border-[#A85916] bg-[#994D1C]  text-white rounded-sm px-3 py-1.5  text-xs cursor-pointer">New Order</button>
//         <div className="flex items-center text-[#A85916]">
//           <IoSearchSharp   className="absolute ml-1" />
//           <input

//             type="search"
//             placeholder="Bill No."  
//             className="border-1 border-[#A85916] placeholder-[#994D1C] pl-5 py-1 rounded-sm w-20 text-sm font-medium"
//           />

//         </div>
//       </div>

     
//     </div>

//       <div className="hidden md:flex flex-shrink-0 items-center gap-3 bg-[#994D1C] px-3 py-1 text-white md:px-5">
//         <div className="border p-1 bg-white rounded-full flex items-center">
//         <BsFillTelephoneFill className="text-[#A85916] " />
//         </div>

//         <div className="grid ">
//           <span className="text-[13px]  ">Call For Support</span>
//           <span className="text-[13px] ">8590347897</span>
//         </div>
//       </div>
//       </div>
//   )
// }





"use client"

import React from "react";
import { CgMenuRightAlt  } from "react-icons/cg";
import { IoSearchSharp   } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { Anton} from "next/font/google";

const anton = Anton({
  weight:'400',
  style:"normal",
  
});


export default function Topbar() {
  const Router=useRouter()
  return (
    <div className="flex ">
    <div className='p-5  py-1  bg-[#F0F0F0]  flex justify-between items-center border-b border-gray-300  w-full'>

      <div className="flex gap-2 items-center ">
        <CgMenuRightAlt  className=" text-black w-8 h-8 cursor-pointer" />
        <button className={`font-bold mr-2 text-[25px] text-[#994D1C] cursor-pointer ${anton.className} `}
        onClick={()=>Router.push('/post_table')}
        >IFC Pizza</button>
        

        <button className="border-1 border-[#994D1C] bg-[#A85916]  text-white rounded-sm px-3 py-1.5  text-xs cursor-pointer">New Order</button>
        <div className="flex items-center text-[#994D1C]">
          <IoSearchSharp   className="absolute ml-1" />
          <input

            type="search"
            placeholder="Bill No."  
            className="border-1 border-[#994D1C] placeholder-[#994D1C] pl-5 py-1 rounded-sm w-20 text-sm font-medium"
          />

        </div>
      </div>

     
    </div>

      <div className="hidden md:flex flex-shrink-0 items-center gap-3 bg-[#A85916] px-3 py-1 text-white md:px-5">
        <div className="border p-1 bg-white rounded-full flex items-center">
        <BsFillTelephoneFill className="text-[#994D1C] " />
        </div>

        <div className="grid ">
          <span className="text-[13px]  ">Call For Support</span>
          <span className="text-[13px] ">8590347897</span>
        </div>
      </div>
      </div>
  )
}
