"use client"

import React from 'react'
import { useState } from 'react'
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { IoMdWine } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { LuNotebookPen } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { TbRectangleRoundedTop } from "react-icons/tb";
import { TbRectangleFilled,TbReload  } from "react-icons/tb";

interface Category {
    name: string;
    item: string[]
}

interface Cartitem{
    name:string;
    qty:number;
    price:number;
}


const Menusidebar: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>("Beverages")
    const [cart,setCart]=useState<Cartitem[]>([])
    const [showform,setShowform]=useState<boolean>(false)
    const [scrollup,setScrollup]=useState<boolean>(false)


    const categories: Category[] = [
        { name: "Beverage", item: ["Coke", "Pepsi", "Sprite", "Cold Coffee",] },
        { name: "New Pizza Lovers", item: ["Veggie Delight", "Cheese Burst", "Paneer Tandoori"] },

        {
            name: "Premium Pizza", item: ["Classic Margherita",
                "Signature Paradise Pizza",
                "Supreme Corn Cheese",
                "Supreme Garden Fresh",
                "Signature Paneer Makhani",
                "Premium Tandoori Paneer",]
        },

        { name: "Signature Pizza", item: ["Paneer Maharaja Pizza", "Paneer Overload", "Cheese Feast", "Signature Peri Peri Chicken Pizza"] },
        { name: "Supreme Pizza", item: ["Veggie Supreme", "Non-Veg Supreme", "Paneer Veggie Supreme", "Cheese Veggie Supreme"] },
        { name: "Classic Pizza", item: ["Onion Pizza", "Capsicum Pizza", "Pizza Margherita", "Margherita Pizza"] },
        { name: "Combo", item: ["Meal for 2", "Meal for 4"] },
        { name: "Burger Meals", item: ["Chicken Burger", "Classic Burger", "Cheese Burger", "Veg Burger"] },
        { name: "Delicious Sides", item: ["Garlic Bread", "Choco Lava Cake"] },

    ];

    const addtocart = (item:string)=>{
        setCart((prev)=>{
            const existing=prev.find((i)=>i.name===item);
            if(existing){
                return prev.map((i)=>
                i.name===item?{...i,qty:i.qty+1}:i
                )
            }
            return [...prev,{name:item,price:499,qty:1}]
        })

    }

    const updateQty = (item: string, change: number) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.name === item ? { ...i, qty: Math.max(i.qty + change, 1) } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);




  const removefromcart=(item:string)=>{
    setCart((x)=>x.filter((i)=>i.name!==item))
  }


return (
    <div className="flex overflow-hidden bg-white">
      
  {/* Sidebar */}

  <div className="w-55 fixed top-0 left-0 flex flex-col ml-3 mt-4 bg-[#994D1C] text-white p-2 overflow-y-auto rounded-lg ">
    <ul className="space-y-1">
      {categories.map((cat) => (
        <li key={cat.name}>
          <button
            onClick={() => setActiveCategory(cat.name)}
            className={`w-full text-left px-4 py-2 rounded font-medium transition ${
              activeCategory === cat.name
                ? "bg-white text-[#8B4513] font-semibold"
                : "hover:bg-[#A0522D]"
            }`}
          >
            {cat.name}
          </button>
        </li>
      ))}
    </ul>
  </div>




  {/* Main Content */}
  <div className="flex-1 p-6 overflow-y-auto bg-white">
    <div className="grid grid-cols-4 gap-4">
      {categories
        .find((cat) => cat.name === activeCategory)
        ?.item.map((item) => (
          <button
            key={item}
            onClick={() => addtocart(item)}
            className="relative border border-[#8B4513] rounded-lg p-4 py-8 text-center font-medium text-[#8B4513] shadow-sm hover:shadow-md cursor-pointer overflow-hidden "
          >
            <div className="absolute top-0 right-0 w-6 h-6 bg-[#8B4513] rounded-bl-lg "></div>
            
            {item}
          </button>
        ))}
    </div>
  </div>




  {/* Cart Section */}

  

  <div className="w-130  bg-white border-l-2 border-[#A5A5A5] flex flex-col  text-black">
    <div className='flex bg-[#f8f8f8] border-b border-[#A5A5A5] ' >
        
    <div className='grid border-r-2 border-r-[#A5A5A5] items-center justify-center p-2 '>
        <div className='mr-3 ml-3'>
        <IoMdWine />
        <span className='font-medium'>10</span>
        </div>
        
    </div>
    <div className='grid border-r-2 border-r-[#A5A5A5]  items-center justify-center p-2'>
        
        <div className='mr-3 ml-3'>
        <button 
        
        onClick={()=>{
          
          setShowform(!showform)}}
        className="cursor-pointer"
        >
          <IoPersonOutline className={`cursor-pointer${
          showform===true
          ? "text-[#994D1C] cursor-pointer"
          : " cursor-pointer"
        
        }`} size={20}/>
        </button>
        </div>
        
    </div>
    <div className='grid border-r-2 border-r-[#A5A5A5]  items-center justify-center p-2'>
        
        <div className='mr-3 ml-3'>
        <GrGroup size={20}/>

        </div>
        
    </div>
    <div className='grid border-r-2 border-r-[#A5A5A5]  items-center justify-center p-2'>
        
        <div className='mr-3 ml-3'>
        <LuNotebookPen size={20}/>
        </div>
        
    </div>
    
    </div>

    <div>
      {showform && (
        <div className='bg-[#f8f8f8] px-4 grid gap-2 font-medium py-2'>
          <div className='flex gap-8 '>
            <span>Mobile:</span>
            <input type="mobile" className='border-1 border-[#A5A5A5] rounded '  />
          </div>
          <div className='flex gap-10'>
            <span>Name:</span>
            <input type="text" className='border-1 border-[#A5A5A5] rounded'/>
          </div>
          <div className='flex gap-13'>
            <span>Add:</span>
            <input type="address " className='border-1 border-[#A5A5A5] rounded'/>
          </div>
          <div className='flex gap-7'>
            <span>Locality:</span>
            <input type="text" className='border-1 border-[#A5A5A5] rounded'/>
          </div>
          <div className='flex gap-3'>
            <span>Information:</span>
            <input type="text" className='border-1 border-[#A5A5A5] rounded'/>
          </div>
        </div>
      )}
    </div>


    <div className='flex gap-12 bg-white py-3 ml-11 text-[#868686]'>
        <span className=''>ITEMS</span>
        <span className='ml-[51%]'>QTY.</span>
        <span className=''>PRICE</span>
    </div>
    


    <div className="flex-1 overflow-y-auto p-4 bg-[#f8f8f8]">
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center mt-6">No items added</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between border-b border-[#A5A5A5] py-2 font-medium " 
          >

            <div className='flex items-center justify-center gap-3'>
            <button className='text-white border-1 border-[#994D1C] px-1 py-1 rounded-full bg-[#994D1C] cursor-pointer '
            onClick={()=>removefromcart(item.name)}
            >
              <RxCross2 />
              </button> 
            <span className='border-b-2 '>{item.name}</span>
            </div>


            <div className="flex items-center space-x-2   ">
              <button
                onClick={() => updateQty(item.name, -1)}
                className="px-2 bg-[#f8f8f8] rounded border-1 border-[#A5A5A5]"
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => updateQty(item.name, 1)}
                className="px-2 bg-[#f8f8f8] border-1 border-[#A5A5A5] rounded"
              >
                +
              </button>
              
              <span className="ml-4">₹{item.price * item.qty}</span>
            </div>
            
          </div>
        ))
      )}
    </div>

    {/* Footer Section */}

    
   {/*Scroll up button*/ }
    
   <div className='flex items-center justify-center bg-[#f8f8f8]'>
  <button
  onClick={()=>setScrollup(!scrollup)}
  className={`relative w-10 h-10 flex items-center justify-center`}>
    <TbRectangleFilled  size={40} className='' />
    <MdOutlineKeyboardArrowUp
      size={24}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
    />
  </button>
  </div>
  {scrollup && (
      <div className='grid gap-4 px-3 py-3 bg-[#353535] text-white font-medium'>
        
        <div className='flex items-center justify-between border-b border-[#575757]'>
          <span>Sub Total</span>
          <span>820.00</span>
        </div>
        
        <div className='flex items-center justify-between border-b border-[#575757]'>
          <span>Discount</span>
          <span>{(total* 0.10).toFixed(2)}</span>
        </div>
        <div className='flex items-center justify-between border-b border-[#575757]'>
          <span>Delivery Charge</span>
          <span>50.00</span>
        </div>
        <div className='flex items-center justify-between border-b border-[#575757]'>
          
          <span className='flex items-center gap-2'><TbReload  />Container Charge</span>
          <span>20.00</span>
        </div>
      </div>
    )}

    


 {/* Split Button */}
    <div className='flex justify-between px-4 bg-[#0C0C0C] py-3 items-center'>
      
      
      <button className="bg-[#8B4513] text-white px-6 py-2 rounded cursor-pointer">
        Split
      </button>
      <div className='flex gap-3 items-center'>
      <span className='text-white font-small'>Total</span>
      <span className='text-[#FEBA17] font-bold text-lg'>{total}</span>
      </div>
      </div>

      {/* Payment Options */}
      <div className="flex gap-6 justify-center items-center py-3  bg-[#353535] text-white">
        {["Cash", "Card", "Due", "Other", "Part"].map((method) => (
          <div className='flex items-center justify-between ' key={method}>
          <label key={method} className="flex items-center gap-2 text-sm">
            <div className=' flex items-center border-1 border-white rounded-full  px-1 py-1'>
            <input type="radio" name="payment" className="appearance-none  p-1 rounded-full checked:bg-white
            " />
            </div>
            {method}
          </label>
          </div>
        ))}
      </div>
      
      {/* Checkboxes */}
      <div className="flex flex-wrap gap-7    items-center justify-center  p-3 bg-[#0C0C0C] text-white ">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="appearance-none border-1 p-2 rounded checked:appearance-auto " />
          It’s Paid
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className=" appearance-none border-1 p-2 rounded checked:appearance-auto " />
          Loyalty
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="appearance-none border-1 p-2 rounded checked:appearance-auto " />
          Send Feedback SMS
        </label>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 p-3 bg-[#f8f8f8]">
        <button className="flex-1 bg-[#8B4513] text-white py-2 rounded  cursor-pointer">
          Save
        </button>
        <button className="flex-1 bg-[#8B4513] text-white py-2 px-2 rounded cursor-pointer">
          Print & eBill
        </button>
        <button className="flex-1 bg-black text-white py-2 rounded cursor-pointer">
          KOT
        </button>
        <button className="flex-1 bg-black text-white py-2 px-2 rounded cursor-pointer">
          KOT & Print
        </button>
        <button className="flex-1 text-black py-2 rounded border-2  cursor-pointer">
          Hold
        </button>
      </div>


  </div>
</div>

  );
};

export default Menusidebar;






//     return (
//         <div className=' flex h-screen bg-white'>


//             {/*Sidebar */}
//             <div className='w-55 h-140 ml-3 mt-4 bg-[#994D1C] text-white p-2 overflow-y-auto rounded-lg' >
//                 <ul className='space-y-1'>
//                     {categories.map((cat) => (
//                         <li key={cat.name} className='flex'>
                            
//                             <button
//                                 onClick={() => setActiveCategory(cat.name)}
//                                 className={`w-full text-left px-1 py-3 rounded font-medium text-[#FFFFFF99] cursor-pointer flex items-center  transition ${activeCategory === cat.name
//                                     ? " text-white font-semibold "
//                                     : "hover: bg-[#994D1C]"
//                                     }`}
//                             >
//                                 {activeCategory===cat.name && <TbRectangleVerticalFilled  size={20} className=''/>}
//                                 {cat.name}
//                             </button>
//                         </li>
//                     ))}
//                 </ul>

//             </div>

//             {/*Right Content*/}

//             <div className="flex-1 p-6 overflow-y-auto border-r">
//                 <div className='grid grid-cols-4  gap-4'>
//                     {categories
//                         .find((cat) => cat.name === activeCategory)
//                         ?.item.map((item) => (
//                             <button
//                                 key={item}
//                                 className="relative border border-[#8B4513] rounded-lg p-4 w-35 text-center font-medium text-[#8B4513] shadow-sm hover:shadow-md cursor-pointer overflow-hidden"
//                             >
//                                 <div className='absolute top-0 right-0 w-6 h-6 bg-[#8B4513] rounded-bl-lg'></div>
//                                 {item}
//                             </button>
//                         ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Menusidebar
