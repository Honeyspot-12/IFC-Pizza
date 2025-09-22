
// "use client"

// import React from 'react'
// import { useParams } from 'next/navigation'
// import { useCart } from "@/context/CartContext";



// const categories:Record<string,string[]>={
//      "beverages": ["Coke", "Pepsi", "Sprite", "Cold Coffee"],
//   "new-pizza-lovers": ["Veggie Delight", "Cheese Burst", "Paneer Tandoori"],
//   "premium-pizza": [
//     "Classic Margherita",
//     "Signature Paradise Pizza",
//     "Supreme Corn Cheese",
//     "Supreme Garden Fresh",
//     "Signature Paneer Makhani",
//     "Premium Tandoori Paneer",
//   ],
//   "signature-pizza": ["Paneer Maharaja Pizza", "Paneer Overload", "Cheese Feast", "Signature Peri Peri Chicken Pizza"],
//   "supreme-pizza": ["Veggie Supreme", "Non-Veg Supreme", "Paneer Veggie Supreme", "Cheese Veggie Supreme"],
//   "classic-pizza": ["Onion Pizza", "Capsicum Pizza", "Pizza Margherita", "Margherita Pizza"],
//   'combo': ["Meal for 2", "Meal for 4"],
//   "burger-meals": ["Chicken Burger", "Classic Burger", "Cheese Burger", "Veg Burger"],
//   "delicious-sides": ["Garlic Bread", "Choco Lava Cake"],
// };

// const Maincontent:React.FC = () => {
//   const params=useParams();
//   const category=params.category as string;

//   const items=categories[category] || [];

//   const {addtocart}=useCart()


//   return (
//     <div className='flex-1 p-4 h-screen bg-white'>
//       <div className='grid grid-cols-4  gap-4'>
//         {items.map((item)=>(
//           <button
//             key={item}
//             onClick={()=>{
//               // console.log("Adding item",items)
//               addtocart(item)}}
//             className="relative border border-[#8B4513] rounded-lg p-4 py-8 text-center font-medium text-[#8B4513] shadow-sm hover:shadow-md cursor-pointer overflow-hidden"
//           >
//             <div className="absolute top-0 right-0 w-6 h-6 bg-[#8B4513] rounded-bl-lg"></div>
//             {item}
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Maincontent




"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";

import { items as allitems, Item } from "@/components/orderprocess/itemlistsdata/itemdata";
import Variation_popup from "@/components/orderprocess/variationpopup/Variation_popup";

const categories: Record<string, string[]> = {
  beverages: ["Coke", "Pepsi", "Sprite", "Cold Coffee"],
  "new-pizza-lovers": ["Veggie Delight", "Cheese Burst", "Paneer Tandoori"],
  "premium-pizza": [
    "Classic Margherita",
    "Signature Paradise Pizza",
    "Supreme Corn Cheese",
    "Supreme Garden Fresh",
    "Signature Paneer Makhani",
    "Premium Tandoori Paneer",
  ],
  "signature-pizza": [
    "Paneer Maharaja Pizza",
    "Paneer Overload",
    "Cheese Feast",
    "Signature Peri Peri Chicken Pizza",
  ],
  "supreme-pizza": [
    "Veggie Supreme",
    "Non-Veg Supreme",
    "Paneer Veggie Supreme",
    "Cheese Veggie Supreme",
  ],
  "classic-pizza": [
    "Onion Pizza",
    "Capsicum Pizza",
    "Pizza Margherita",
    "Margherita Pizza",
  ],
  combo: ["Meal for 2", "Meal for 4"],
  "burger-meals": ["Chicken Burger", "Classic Burger", "Cheese Burger", "Veg Burger"],
  "delicious-sides": ["Garlic Bread", "Choco Lava Cake"],
};

const Maincontent: React.FC = () => {
  const params = useParams();
  const category = params.category as string;

  const items = categories[category] || [];

  // const { addtocart } = useCart();

  // popup ke liye state
  // const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const[selectedItem,setSelectedItem]=useState<Item |null>(null)
  

   // ek helper to find Item from itemdata
  //  const findItem=(name:string):Item|undefined=>
  //   allitems.find((i)=>i.name===name)

  const findItem=(name:string):Item|undefined=>
    allitems.find((i)=>i.name===name)  

  return (
    <div className="flex-1 p-4 h-screen bg-white">
      <div className="grid grid-cols-4 xs:flex-wrap gap-4">
        {items.map((itemName) => (
          <button
            key={itemName}
            // onClick={() => {
            //   const found = findItem(itemName);
            //   if (found) {
            //     setSelectedItem(found); // popup open
            //   }
            // }}
            onClick={()=>{
              const found=findItem(itemName)
              if(found){
                setSelectedItem(found)
              }
            }}
            
            
            
            className="relative border border-[#8B4513] rounded-lg p-4 py-8 text-center font-medium text-[#8B4513] shadow-sm hover:shadow-md cursor-pointer overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-6 h-6 bg-[#8B4513] rounded-bl-lg"></div>
            {itemName}
          </button>
        ))}
      </div>

      {/* Popup show kare */}

      {/* {selectedItem && (
        <Variation_popup
          item={selectedItem}
          onClose={()=>setSelectedItem(null)}
          />
      )} */}

      {selectedItem && (
        <Variation_popup
        item={selectedItem}
        onClose={()=>setSelectedItem(null)}
        />
      )}
      
    </div>
  );
};

export default Maincontent;

