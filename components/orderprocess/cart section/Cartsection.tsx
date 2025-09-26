// "use client"
import React, { useState } from 'react'
import { useCart } from "@/context/CartContext";
import { IoMdWine } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { LuNotebookPen } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbRectangleFilled, TbReload } from "react-icons/tb";

const Cartsection: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const [showform, setShowform] = useState<boolean>(false)
  const [scrollup, setScrollup] = useState<boolean>(false)

  console.log("cart", cart)

  const { total, increase, decrease } = useCart()
  return (
    <>
      <div className='hidden md:block'>
        <div className=" w-auto bg-white h-screen border-l-2 border-[#A5A5A5] flex flex-col text-black">
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

                  onClick={() => {

                    setShowform(!showform)
                  }}
                  className="cursor-pointer"
                >
                  <IoPersonOutline className={`cursor-pointer${showform === true
                    ? "text-[#994D1C] cursor-pointer"
                    : " cursor-pointer"

                    }`} size={20} />
                </button>
              </div>

            </div>
            <div className='grid border-r-2 border-r-[#A5A5A5]  items-center justify-center p-2'>

              <div className='mr-3 ml-3'>
                <GrGroup size={20} />

              </div>

            </div>
            <div className='grid border-r-2 border-r-[#A5A5A5]  items-center justify-center p-2'>

              <div className='mr-3 ml-3'>
                <LuNotebookPen size={20} />
              </div>

            </div>

          </div>

          <div>
            {showform && (
              <div className='bg-[#f8f8f8] px-4 grid gap-2 font-medium py-2'>
                <div className='flex gap-8 '>
                  <span>Mobile:</span>
                  <input type="mobile" className='border-1 border-[#A5A5A5] rounded ' />
                </div>
                <div className='flex gap-10'>
                  <span>Name:</span>
                  <input type="text" className='border-1 border-[#A5A5A5] rounded' />
                </div>
                <div className='flex gap-13'>
                  <span>Add:</span>
                  <input type="address " className='border-1 border-[#A5A5A5] rounded' />
                </div>
                <div className='flex gap-7'>
                  <span>Locality:</span>
                  <input type="text" className='border-1 border-[#A5A5A5] rounded' />
                </div>
                <div className='flex gap-3'>
                  <span>Information:</span>
                  <input type="text" className='border-1 border-[#A5A5A5] rounded' />
                </div>
              </div>
            )}
          </div>


          <div className='flex justify-between px-3 gap-12 bg-white py-3 text-[#868686]'>
            <span className=''>ITEMS</span>
            <div className='flex gap-7'>
              <span className=''>QTY.</span>
              <span className=''>PRICE</span>
            </div>
          </div>



          <div className="flex-1 overflow-y-auto p-4 bg-[#f8f8f8]">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center mt-6">No items added</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-[#A5A5A5] py-2 font-medium "
                >

                  <div className='flex items-center justify-center gap-3'>
                    <button className='text-white border-1 border-[#994D1C] px-1 py-1 rounded-full bg-[#994D1C] cursor-pointer '
                      onClick={() => removeFromCart(item.id)}
                    >
                      <RxCross2 />
                    </button>
                    <span className='md:border-b-2 '>{item.name} ({item.size})</span>
                  </div>


                  <div className="flex items-center space-x-2  text-right ">
                    <button
                      onClick={() => decrease(item.name, 1)}
                      className="px-2 bg-[#f8f8f8] rounded border-1 border-[#A5A5A5] cursor-pointer"
                    >
                      -
                    </button>
                    <span className='px-2 bg-[#f8f8f8] border-1 border-[#A5A5A5] rounded'>{item.qty}</span>
                    <button
                      onClick={() => increase(item.name, 1)}
                      className="px-2 bg-[#f8f8f8] border-1 border-[#A5A5A5] rounded cursor-pointer"
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


          {/*Scroll up button*/}

          <div className='flex items-center justify-center bg-[#f8f8f8]'>
            <button
              onClick={() => setScrollup(!scrollup)}
              className={`relative w-10 h-10 flex items-center justify-center cursor-pointer`}>
              <TbRectangleFilled size={40} className='' />
              {scrollup ? (
                < MdOutlineKeyboardArrowDown
                  size={24}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                />
              ) : (
                <MdOutlineKeyboardArrowUp
                  size={24}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                />
              )}

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
                <span>{(total * 0.10).toFixed(2)}</span>
              </div>
              <div className='flex items-center justify-between border-b border-[#575757]'>
                <span>Delivery Charge</span>
                <span>50.00</span>
              </div>
              <div className='flex items-center justify-between border-b border-[#575757]'>

                <span className='flex items-center gap-2'><button className='cursor-pointer'><TbReload className='cursor-pointer' /></button>Container Charge</span>
                <span>20.00</span>
              </div>
            </div>
          )}




          {/* Split Button */}
          <div className='flex justify-between px-4 bg-[#0C0C0C]  py-3 items-center'>


            <button className="bg-[#8B4513] text-white px-6 py-1 rounded cursor-pointer">
              Split
            </button>
            <div className='flex gap-3 items-center'>
              <span className='text-white font-small'>Total</span>
              <span className='text-[#FEBA17] font-bold text-lg'>{total}</span>
            </div>
          </div>

          {/* Payment Options */}
          <div className="flex gap-6 justify-center items-center py-3 px-4 bg-[#353535] text-white">
            {["Cash", "Card", "Due", "Other", "Part"].map((method) => (
              <div className='flex items-center justify-between ' key={method}>
                <label key={method} className="flex items-center gap-2 text-sm">
                  <div className=' flex items-center border-1 border-white rounded-full  px-1 py-1 cursor-pointer'>
                    <input type="radio" name="payment" className="appearance-none  p-1 rounded-full checked:bg-white cursor-pointer" />
                  </div>
                  {method}
                </label>
              </div>
            ))}
          </div>


          {/* Checkboxes */}
          <div className="flex flex-wrap gap-7    items-center justify-center  p-3 bg-[#0C0C0C] text-white ">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="appearance-none border-1 p-2 rounded checked:appearance-auto cursor-pointer" />
              It’s Paid
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className=" appearance-none border-1 p-2 rounded checked:appearance-auto cursor-pointer" />
              Loyalty
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="appearance-none border-1 p-2 rounded checked:appearance-auto cursor-pointer" />
              Send Feedback SMS
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 p-3 bg-[#f8f8f8]">
            <button className="flex-1 bg-[#8B4513] text-white rounded cursor-pointer whitespace-nowrap">
              Save
            </button>
            <button className="flex-1 bg-[#8B4513] text-white py-2 px-2 rounded cursor-pointer whitespace-nowrap">
              Print & eBill
            </button>
            <button className="flex-1 bg-black text-white py-2 rounded cursor-pointer whitespace-nowrap">
              KOT
            </button>
            <button className="flex-1 bg-black text-white py-2 px-2 rounded cursor-pointer whitespace-nowrap">
              KOT & Print
            </button>
            <button className="flex-1 text-black py-2 rounded border-2 cursor-pointer whitespace-nowrap">
              Hold
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Cartsection
