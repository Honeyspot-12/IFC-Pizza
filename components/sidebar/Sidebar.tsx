
// "use client"

// import React from 'react'
// import { useRouter, usePathname } from "next/navigation";

// interface category{
//   name:string;
//   slug:string;
// }

// const Sidebar: React.FC = () => {
//   const router=useRouter()
//   const pathname=usePathname()

//   const categories:category[]=[
//     {name:"Beverages",slug:"beverages"},
//     { name: "New Pizza Lovers", slug: "new-pizza-lovers" },
//     { name: "Premium Pizza", slug: "premium-pizza" },
//     { name: "Signature Pizza", slug: "signature-pizza" },
//     { name: "Supreme Pizza", slug: "supreme-pizza" },
//     { name: "Classic Pizza", slug: "classic-pizza" },
//     { name: "Combo", slug: "combo" },
//     { name: "Burger Meals", slug: "burger-meals" },
//     { name: "Delicious Sides", slug: "delicious-sides" },
//   ];


//   return (
//     <div className='w-55 h-screen flex flex-col p-4 bg-white'>
//       <div className='h-full bg-[#994D1C] text-white p-2 rounded-lg '>
//         <ul>
//         {categories.map((cat)=>{
//           const isActive=pathname.includes(cat.slug)
//           return(

//             <li key={cat.slug}>
//               <button
//               onClick={()=>router.push (`/orderprocess/${cat.slug}`)}
//               className={`w-full text-left px-4 py-2 rounded font-medium transition cursor-pointer ${isActive
//                 ? "text-[#994D1C] bg-white font-semibold"
//                 : "hover:bg-[#A0522D]"
//               }`}
//               >
//                 {cat.name}
//               </button>

//             </li>
//           )
//         })}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Sidebar








// "use client"

// import React from 'react'
// import { useRouter, usePathname } from "next/navigation";

// interface category{
//   name:string;
//   slug:string;
// }

// const Sidebar: React.FC = () => {
//   const router=useRouter()
//   const pathname=usePathname()

//   const categories:category[]=[
//     {name:"Beverages",slug:"beverages"},
//     { name: "New Pizza Lovers", slug: "new-pizza-lovers" },
//     { name: "Premium Pizza", slug: "premium-pizza" },
//     { name: "Signature Pizza", slug: "signature-pizza" },
//     { name: "Supreme Pizza", slug: "supreme-pizza" },
//     { name: "Classic Pizza", slug: "classic-pizza" },
//     { name: "Combo", slug: "combo" },
//     { name: "Burger Meals", slug: "burger-meals" },
//     { name: "Delicious Sides", slug: "delicious-sides" },
//   ];


//   return (
//     <div className='w-55 h-screen flex flex-col p-4 bg-white '>
//       <div className='h-full bg-[#994D1C] text-white p-2 rounded-lg hidden lg:block '>
//         <ul>
//         {categories.map((cat)=>{
//           const isActive=pathname.includes(cat.slug)
//           return(

//             <li key={cat.slug}>
//               <button
//               onClick={()=>router.push (`/orderprocess/${cat.slug}`)}
//               className={`w-full text-left px-4 py-2 rounded font-medium transition cursor-pointer ${isActive
//                 ? "text-[#994D1C] bg-white font-semibold"
//                 : "hover:bg-[#A0522D]"
//               }`}
//               >
//                 {cat.name}
//               </button>

//             </li>
//           )
//         })}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Sidebar






// "use client"

// import React from 'react'
// import { useRouter, usePathname } from "next/navigation";

// interface Category {
//   name: string;
//   slug: string;
// }

// const Sidebar: React.FC = () => {
//   const router = useRouter()
//   const pathname = usePathname()

//   const categories: Category[] = [
//     { name: "Beverages", slug: "beverages" },
//     { name: "New Pizza Lovers", slug: "new-pizza-lovers" },
//     { name: "Premium Pizza", slug: "premium-pizza" },
//     { name: "Signature Pizza", slug: "signature-pizza" },
//     { name: "Supreme Pizza", slug: "supreme-pizza" },
//     { name: "Classic Pizza", slug: "classic-pizza" },
//     { name: "Combo", slug: "combo" },
//     { name: "Burger Meals", slug: "burger-meals" },
//     { name: "Delicious Sides", slug: "delicious-sides" },
//   ];

//   return (
//     <div className="hidden lg:block w-56 h-screen flex-shrink-0 p-4 bg-white">
//       <div className="h-full bg-[#994D1C] text-white p-2 rounded-lg overflow-y-auto">
//         <ul>
//           {categories.map((cat) => {
//             const isActive = pathname.includes(cat.slug)
//             return (
//               <li key={cat.slug}>
//                 <button
//                   onClick={() => router.push(`/orderprocess/${cat.slug}`)}
//                   className={`w-full text-left px-4 py-2 rounded font-medium transition cursor-pointer ${
//                     isActive
//                       ? "text-[#994D1C] bg-white font-semibold"
//                       : "hover:bg-[#A0522D]"
//                   }`}
//                 >
//                   {cat.name}
//                 </button>
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Sidebar










"use client"

import React, { useState } from 'react'
import { useRouter, usePathname,useSearchParams  } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";



interface Category {
  name: string;
  slug: string;
}

const Sidebar: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isopen, setIsopen] = useState<Boolean>(false)

   const searchParams = useSearchParams();
  const tableNumber = searchParams.get('table');

  const categories: Category[] = [
    { name: "Beverages", slug: "beverages" },
    { name: "New Pizza Lovers", slug: "new-pizza-lovers" },
    { name: "Premium Pizza", slug: "premium-pizza" },
    { name: "Signature Pizza", slug: "signature-pizza" },
    { name: "Supreme Pizza", slug: "supreme-pizza" },
    { name: "Classic Pizza", slug: "classic-pizza" },
    { name: "Combo", slug: "combo" },
    { name: "Burger Meals", slug: "burger-meals" },
    { name: "Delicious Sides", slug: "delicious-sides" },
  ];

  return (
    <>
      {/* Desktop Sidebar (left) */}
      <div className="hidden md:block w-56 h-screen flex-shrink-0 p-4 bg-white">

        <div className="h-full bg-[#994D1C] text-white p-2 rounded-lg overflow-y-auto">
          <ul>
            {categories.map((cat) => {
              const isActive = pathname.includes(cat.slug)
              return (
                <li key={cat.slug}>
                  <button
                    // onClick={() => router.push(`/orderprocess/${cat.slug}`)}
                    onClick={() => {
                    const newUrl = `/orderprocess/${cat.slug}`;
                    const urlWithTable = tableNumber ? `${newUrl}?table=${tableNumber}` : newUrl;
                    router.push(urlWithTable);
                  }}
                    className={`w-full text-left px-4 py-2 rounded font-medium transition cursor-pointer ${isActive
                      ? "text-[#994D1C] bg-white font-semibold"
                      : "hover:bg-[#A0522D]"
                      }`}
                  >
                    {cat.name}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Menu Button */}
      <div className="md:hidden flex items-center justify-center bg-[#994D1C] text-white p-2">
        <button onClick={() => setIsopen(true)}>
          <IoMenu size={28} />
        </button>
        <span className="ml-2 font-semibold">Menu</span>
      </div>



      

      {/* Mobile Sidebar Overlay */}
      {isopen && (
        <div className="fixed inset-0 z-50 bg-black/50 bg-opacity-50 md:hidden">
          <div className="absolute left-0 top-0 w-64 h-screen bg-[#994D1C] text-white p-4 shadow-lg transform transition-transform">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Categories</h2>
              <button onClick={() => setIsopen(false)}>
                <IoClose size={28} />
              </button>
            </div>
            <ul>
              {categories.map((cat) => {
                const isActive = pathname.includes(cat.slug)
                return (
                  <li key={cat.slug}>
                    <button
                      onClick={() => {
                        router.push(`/orderprocess/${cat.slug}`)
                        setIsopen(false) // close after selecting
                      }}
                      className={`w-full text-left px-4 py-2 rounded font-medium transition cursor-pointer ${isActive
                        ? "text-[#994D1C] bg-white font-semibold"
                        : "hover:bg-[#A0522D]"
                        }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar
