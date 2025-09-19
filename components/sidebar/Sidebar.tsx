    // "use client";

    // import { useState } from "react";
    // import Maincontent from "../orderprocess/Maincontent";
    // import { useRouter } from "next/router";



    // interface Category {
    //     name: string;
    //     item: string[];
    // }

    // const Sidebar: React.FC = () => {
    //     const [activeCategory, setActiveCategory] = useState<string>("Beverage");
    //     // const router = useRouter();

    //     const categories: Category[] = [
    //     { name: "Beverage", item: ["Coke", "Pepsi", "Sprite", "Cold Coffee"] },
    //         { name: "New Pizza Lovers", item: ["Veggie Delight", "Cheese Burst", "Paneer Tandoori"] },

    //         {
    //             name: "Premium Pizza", item: ["Classic Margherita",
    //                 "Signature Paradise Pizza",
    //                 "Supreme Corn Cheese",
    //                 "Supreme Garden Fresh",
    //                 "Signature Paneer Makhani",
    //                 "Premium Tandoori Paneer",]
    //         },

    //         { name: "Signature Pizza", item: ["Paneer Maharaja Pizza", "Paneer Overload", "Cheese Feast", "Signature Peri Peri Chicken Pizza"] },
    //         { name: "Supreme Pizza", item: ["Veggie Supreme", "Non-Veg Supreme", "Paneer Veggie Supreme", "Cheese Veggie Supreme"] },
    //         { name: "Classic Pizza", item: ["Onion Pizza", "Capsicum Pizza", "Pizza Margherita", "Margherita Pizza"] },
    //         { name: "Combo", item: ["Meal for 2", "Meal for 4"] },
    //         { name: "Burger Meals", item: ["Chicken Burger", "Classic Burger", "Cheese Burger", "Veg Burger"] },
    //         { name: "Delicious Sides", item: ["Garlic Bread", "Choco Lava Cake"] },
    //     ];

    //     return (

    //         <div className="w-55 h-screen flex flex-col p-4">            
    //             <div className=" h-full   bg-[#994D1C] text-white p-2 overflow-y-auto rounded-lg ">
    //                 <ul className="space-y-1">
    //                     {categories.map((cat) => (
    //                         <li key={cat.name}>
    //                             <button
    //                                 onClick={() => (setActiveCategory(cat.name))}
    //                                 className={`w-full text-left px-4 py-2 rounded font-medium transition ${activeCategory === cat.name
    //                                     ? "bg-white text-[#8B4513] font-semibold"
    //                                     : "hover:bg-[#A0522D]"
    //                                     }`}
    //                             >
    //                                 {cat.name}
    //                             </button>
    //                         </li>
    //                     ))}
    //                 </ul>
    //             </div>

    //         </div>



    //     );
    // };

    // export default Sidebar;




    //props

//     "use client";

// import React from "react";

// interface Category {
//   name: string;
//   item: string[];
// }

// interface SidebarProps {
//   activeCategory: string;
//   setActiveCategory: (cat: string) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ activeCategory, setActiveCategory }) => {
//   const categories: Category[] = [
//     { name: "Beverage", item: ["Coke", "Pepsi", "Sprite", "Cold Coffee"] },
//     { name: "New Pizza Lovers", item: ["Veggie Delight", "Cheese Burst", "Paneer Tandoori"] },
//     {
//       name: "Premium Pizza",
//       item: [
//         "Classic Margherita",
//         "Signature Paradise Pizza",
//         "Supreme Corn Cheese",
//         "Supreme Garden Fresh",
//         "Signature Paneer Makhani",
//         "Premium Tandoori Paneer",
//       ],
//     },
//     { name: "Signature Pizza", item: ["Paneer Maharaja Pizza", "Paneer Overload", "Cheese Feast", "Signature Peri Peri Chicken Pizza"] },
//     { name: "Supreme Pizza", item: ["Veggie Supreme", "Non-Veg Supreme", "Paneer Veggie Supreme", "Cheese Veggie Supreme"] },
//     { name: "Classic Pizza", item: ["Onion Pizza", "Capsicum Pizza", "Pizza Margherita", "Margherita Pizza"] },
//     { name: "Combo", item: ["Meal for 2", "Meal for 4"] },
//     { name: "Burger Meals", item: ["Chicken Burger", "Classic Burger", "Cheese Burger", "Veg Burger"] },
//     { name: "Delicious Sides", item: ["Garlic Bread", "Choco Lava Cake"] },
//   ];

//   return (
//     <div className="w-55 h-screen flex flex-col p-4">
//       <div className="h-full bg-[#994D1C] text-white p-2 overflow-y-auto rounded-lg">
//         <ul className="space-y-1">
//           {categories.map((cat) => (
//             <li key={cat.name}>
//               <button
//                 onClick={() => setActiveCategory(cat.name)}
//                 className={`w-full text-left px-4 py-2 rounded font-medium transition ${
//                   activeCategory === cat.name
//                     ? "bg-white text-[#8B4513] font-semibold"
//                     : "hover:bg-[#A0522D]"
//                 }`}
//               >
//                 {cat.name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;






//dynamic routes

// "use client";

// import React from "react";
// import { useRouter, usePathname } from "next/navigation";

// interface Category {
//   name: string;
//   slug: string;
// }

// const Sidebar: React.FC = () => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const categories: Category[] = [
//     { name: "Beverage", slug: "beverage" },
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
//     <div className="w-55 h-screen flex flex-col p-4">
//       <div className="h-full bg-[#994D1C] text-white p-2 overflow-y-auto rounded-lg">
//         <ul className="space-y-1">
//           {categories.map((cat) => {
//             const isActive = pathname.includes(cat.slug);
//             return (
//               <li key={cat.slug}>
//                 <button
//                   onClick={() => router.push(`/orderprocess/${cat.slug}`)}
//                   className={`w-full text-left px-4 py-2 rounded font-medium transition ${
//                     isActive
//                       ? "bg-white text-[#8B4513] font-semibold"
//                       : "hover:bg-[#A0522D]"
//                   }`}
//                 >
//                   {cat.name}
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


"use client"

import React from 'react'
import { useRouter, usePathname } from "next/navigation";

interface category{
  name:string;
  slug:string;
}

const Sidebar: React.FC = () => {
  const router=useRouter()
  const pathname=usePathname()

  const categories:category[]=[
    {name:"Beverages",slug:"beverages"},
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
    <div className='w-55 h-screen flex flex-col p-4 bg-white'>
      <div className='h-full bg-[#994D1C] text-white p-2 rounded-lg '>
        <ul>
        {categories.map((cat)=>{
          const isActive=pathname.includes(cat.slug)
          return(
            
            <li key={cat.slug}>
              <button
              onClick={()=>router.push (`/orderprocess/${cat.slug}`)}
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
  )
}

export default Sidebar

