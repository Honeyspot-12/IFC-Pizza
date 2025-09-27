import React from 'react'
import { RxCross1 } from "react-icons/rx";

const Comments = ({setShowcomments}:{setShowcomments:React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div className='bg-black/50 fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-screen text-black'>
      <div className='bg-white h-auto w-full md:w-1/4 rounded pb-3'>
       <span className='p-2 px-3 flex items-center justify-between border-b border-[#A5A5A5]  text-[#363636]'>Order Wise Comments <button 
       className='cursor-pointer'
       onClick={()=>setShowcomments(false)}
       ><RxCross1/></button></span>

       <div className='grid gap-2 px-3 py-2 pb-4 border-b border-[#A5A5A5]'>
        <span className='text-[#363636] font-medium'>Comments</span>
        <textarea name="" id="" className='px-2 py-1 border border-[#A5A5A5] rounded'></textarea>
       </div>

       <div className='flex justify-end px-3  pt-3 gap-3'>
                    <button className='border-1 p-1 px-2 font-medium rounded border-[#363636] cursor-pointer'
                        onClick={()=>setShowcomments(false)}
                    >Cancel</button>
                    <button className='bg-[#994D1C] p-1 px-7 font-medium rounded text-white cursor-pointer'>Move</button>
                </div>

      </div>
    </div>
  )
}

export default Comments
