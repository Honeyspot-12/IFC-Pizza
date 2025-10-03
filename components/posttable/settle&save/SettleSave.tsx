import React from 'react'
import { RxCross1 } from "react-icons/rx";


const SettleSave = () => {
  return (
    <div className='bg-black/50 fixed left-0 top-0 flex flex-col items-center justify-center w-full h-screen text-black'>
      <div className='bg-white  h-auto object-cover rounded pb-3'>
        <span className='flex p-2 px-4 font-medium items-center justify-between border-b border-[#A5A5A5] text-sm'>Settlt & Save - Table 3 <RxCross1
          className='cursor-pointer'
        // onClick={()=>setshowprop(false)}
        /></span>

        <div className='flex-1 px-4 py-2'>
          <h3 className='font-medium mb-2 text-md'>Payment Type</h3>
          <div className='flex flex-wrap  gap-2 items-center justify-between'>
            {["cash", "card", "Due", "Other", "Part"].map((type) => (
              <div key={type} className='flex items-center gap-2 '>
                <div className=' '>
                  <input type="radio" name="paymentType" id={type} className={`
      cursor-pointer appearance-none 
      w-5 h-5 border border-black rounded-full relative 
      checked:before:content-[''] 
      checked:before:block 
      checked:before:w-3 
      checked:before:h-3 
      checked:before:rounded-full 
      checked:before:bg-black 
      checked:before: 
      checked:before:
    `} />
                </div>
                <label htmlFor={type} className='text-[#868686]'>{type}</label>
              </div>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-2 px-3 gap-x-4 gap-y-2 justify-between'>
          <h3 className='grid gap-2  font-medium '>Customer Paid
            <input type="amount" name="" id=""
              className='border-1 border-[#A5A5A5] rounded w-full px-1'
              placeholder='0'
            />
          </h3>

          <h3 className='grid gap-2 font-medium'>Return To Customer
            <span className='text-[#994D1C] font-medium'>₹0</span>
          </h3>


          <h3 className='grid gap-2  font-medium text-left'>Tip
            <input type="amount" name="" id=""
              className='border-1 border-[#A5A5A5] rounded w-full px-1'
              placeholder='0'
            />
          </h3>
          <h3 className='grid gap-2 font-medium '>Settlement Amount
            <input type="amount" name="" id=""
              className='border-1 border-[#A5A5A5] rounded w-full px-1'
              placeholder='0'
            />
          </h3>
        </div>
        <div className='border-b py-2 border-[#A5A5A5] '></div>

        <div className='pt-2 flex items-center justify-end gap-4 px-3'>
          <button className='font-medium text-[#363636] cursor-pointer'
          // onClick={()=>setshowprop(false)}
          >Cancel</button>
          <button className=' bg-[#994D1C] px-2 py-1 rounded text-white cursor-pointer'>Settle & Save</button>
        </div>


      </div>
    </div>
  )
}

export default SettleSave


