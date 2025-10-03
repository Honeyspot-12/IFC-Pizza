
import React, { useState } from 'react'
import { MdTableBar } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { LuNotebookPen } from "react-icons/lu";
import { useRouter, useSearchParams } from 'next/navigation';
import Comments from '../../comments/Comments';

const Header = () => {
    const [showform, setShowform] = useState<boolean>(false);
    const [showcomments, setShowcomments] = useState<boolean>(false);
    const searchParams = useSearchParams();
    const tablenumber = searchParams.get("table");

    return (
        <>
            <div className="flex bg-[#f8f8f8] border-b border-[#A5A5A5] justify-between items-center">
                {/* Left side */}
                <div className="flex">
                    {/* Table number */}
                    <div className="border-r-2 border-r-[#A5A5A5] flex flex-col items-center justify-center px-4 py-2">
                        <MdTableBar />
                        <span className="font-medium">{tablenumber || "N/A"}</span>
                    </div>

                    {/* Person icon */}
                    <div className="border-r-2 border-r-[#A5A5A5] flex items-center justify-center px-4">
                        <button onClick={() => setShowform(!showform)} className="cursor-pointer">
                            <IoPersonOutline
                                className={showform ? "text-[#994D1C]" : ""}
                                size={20}
                            />
                        </button>
                    </div>

                    {/* Group icon */}
                    <div className="border-r-2 border-r-[#A5A5A5] flex items-center justify-center px-4">
                        <GrGroup size={20} />
                    </div>

                    {/* Notebook / comments */}
                    <div className="border-r-2 border-r-[#A5A5A5] flex items-center justify-center px-4">
                        <button
                            className="cursor-pointer"
                            onClick={() => setShowcomments(true)}
                        >
                            <LuNotebookPen size={20} />
                        </button>
                        {showcomments && <Comments setShowcomments={setShowcomments} />}
                    </div>
                </div>

                {/* Right side */}
                <div className="px-5 h-full bg-[#FEBA17] flex items-center">
                    <button className="cursor-pointer font-medium text-sm">General</button>
                </div>
            </div>



            <div>
                {showform && (
                    <div className='bg-[#f8f8f8] px-4 grid gap-2 font-medium py-2'>
                        <div className='flex gap-8 '>
                            <span>Mobile:</span>
                            <input type="mobile" className='border-1 border-[#A5A5A5] rounded w-1/3' />
                        </div>
                        <div className='flex gap-10'>
                            <span>Name:</span>
                            <input type="text" className='border-1 border-[#A5A5A5] rounded w-1/2' />
                        </div>
                        <div className='flex gap-13'>
                            <span>Add:</span>
                            <input type="address " className='border-1 border-[#A5A5A5] rounded w-full' />
                        </div>
                        <div className='flex gap-7'>
                            <span>Locality:</span>
                            <input type="text" className='border-1 border-[#A5A5A5] rounded w-full' />
                        </div>
                        <div className='flex gap-3'>
                            <span>Information:</span>
                            <input type="text" className='border-1 border-[#A5A5A5] rounded w-full' />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Header
