import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
// import Item from "@/components/orderprocess/itemlistsdata/itemdata"


interface specialnoteprops {
    setshowspecial: React.Dispatch<React.SetStateAction<boolean>>
    item: { name: string, size: string }
}
const Specialnote: React.FC<specialnoteprops> = ({ setshowspecial, item }) => {

    const [notes, setNotes] = useState<string[]>([])
    const [inputvalue, setInputvalue] = useState<string>("")

    const addNote=()=>{
        if(inputvalue.trim() && !notes.includes(inputvalue)){
            setNotes([...notes,inputvalue.trim()])
            setInputvalue("")
        }
    }

    const removeNote=(note:string)=>{
        setNotes(notes.filter((n)=>n!==note))
    }

    return (
        <div className='bg-black/50  fixed  top-0 left-0 z-50 items-center justify-center h-screen w-full text-black flex flex-col'>
            <div className='bg-white h-auto w-full md:w-1/3 rounded pb-3'>
                <span className='p-2 px-3 flex items-center justify-between border-b border-[#A5A5A5] font-medium text-sm text-[#363636]'>{item.name} ({item.size})
                    <button
                        className='cursor-pointer'
                        onClick={() => setshowspecial(false)}
                    ><RxCross1 /></button></span>

                <div className='grid gap-2 px-3 py-2 pb-4 border-b border-[#A5A5A5]'>
                    <span className='text-[#363636] font-medium text-sm'>Special Notes</span>

                    <div className='flex items-center flex-wrap gap-2 px-2 py-2 border border-[#A5A5A5] rounded min-h-[40px] text-sm'>
                        {notes.map((note, index) => (
                            <div
                                key={index}
                                className='flex items-center bg-[#56A65C] text-white px-4 py-1.5 rounded gap-2'
                            >
                                <button
                                    className=' text-[12px] font-bold cursor-pointer '
                                    onClick={() => removeNote(note)}
                                >✕</button>
                                <span>{note}</span>
                            </div>
                        ))}
                        <input type="text"
                            // className='px-2 py-1 border border-[#A5A5A5] rounded'
                            value={inputvalue}
                            onChange={(e) => setInputvalue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") addNote();
                            }}
                            className="flex-1 min-w-[100px] border-none outline-none "
                           
                        />
                    </div>

                </div>

                <div className='flex justify-end px-3  pt-3 gap-3'>
                    <button className='border-1 p-1 px-2 font-medium rounded border-[#363636] cursor-pointer text-sm text-[#363636]'
                        onClick={() => setshowspecial(false)}
                    >Cancel</button>
                    <button className='bg-[#994D1C] p-1.5 px-7 rounded text-white cursor-pointer text-sm'>Move</button>
                </div>

            </div>
        </div>
    )
}

export default Specialnote
