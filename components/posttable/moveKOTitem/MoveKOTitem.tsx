// "use client"

// import React, { useState } from 'react'
// import { RxCross2 } from "react-icons/rx";


// interface table{
//     name:string;
// }

// const MoveKOTitem = ({setShowpopup}:{setShowpopup:React.Dispatch<React.SetStateAction<boolean>>})=>{


//     const [book, setBook] = useState(Array.from({ length: 17 }, (_, i) => i + 1))
//     const [active,setActive]=useState<string>("Table Wise");

//     const type:table[]=[
//         {name:"Table Wise"},
//         {name:"KOT Wise"},
//         {name:"item Wise"}
//     ];


//     return (
//         <div className='bg-black/50 fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-black '>
//             <div className='w-[50%]   flex flex-col  bg-white gap-3 rounded-lg'>
//                 <div className='flex  items-center justify-between px-6 py-4 border-b-2 border-[#A5A5A5] '>
//                     <span className='text-[#363636] font-medium' >MoveKOT/items-3</span>
//                     <button
//                         className='cursor-pointer'
//                         onClick={()=>setShowpopup(false)}
//                     >
//                         <RxCross2 className='text-[#868686] font-bold' />
//                     </button>
//                     {/* {setShowpopup} */}
//                 </div>

//                 <div className='border-1 border-[#A5A5A5]  mx-4 gap-2 pb-9'>
//                     <div className='flex border-b border-[#A5A5A5] '>
//                         {/* <button className='bg-[#994D1C] border-r border-[#A5A5A5] p-1 px-4 text-white  cursor-pointer'>Table Wise</button>
//                         <button className='border-r border-[#A5A5A5] p-1 px-4 text-black cursor-pointer'>KOT Wise</button>
//                         <button className='border-r border-[#A5A5A5] p-1 px-4 text-black cursor-pointer'>Item Wise</button> */}
//                         {type.map((cat)=>(
//                             <button key={cat.name} 
//                             onClick={()=>setActive(cat.name)}
//                             className={`border-r border-[#A5A5A5] p-1 px-4 cursor-pointer ${active===cat.name
//                             ? "bg-[#994D1C] text-white"
//                             : "text-black"
//                             }
//                             `}>
//                                 {cat.name}
//                             </button>
//                         ))}
//                     </div>


//                     <div className='grid px-3 py-2 gap-2'>
//                         <span className='font-medium'>Other</span>
//                         <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-13 gap-3'>
//                             {book.map((num) => (
//                                 <button key={num} className='border-1 border-dashed border-[#A5A5A5] bg-[#F2F2F2] rounded p-2 cursor-pointer'>100</button>
//                             ))}

//                         </div>
//                     </div>
//                 </div>

//                 <div className='grid lg:flex gap-3 px-3 my-9 py-3 items-center justify-center lg:justify-between  border-t-2 border-[#A5A5A5]'>
//                     <div>
//                     <span>Table No.</span>
//                     <input type="text" placeholder=''
//                         className='mx-3 border-1 p-1 rounded border-[#363636] text-[#808080] placeholder:text-[#808080]'
//                     />
//                     </div>

//                     <div className='flex gap-3'>
//                     <button className='border-1 p-1 px-2 font-medium rounded border-[#363636] cursor-pointer' 
//                     onClick={()=>setShowpopup(false)}
//                     >Cancel</button>
//                     <button className='bg-[#994D1C] p-1 px-7 font-medium rounded text-white cursor-pointer'>Move</button>                   
//                     </div>

//                 </div>


//             </div>
//         </div>
//     )
// };

// export default MoveKOTitem;





"use client";

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface Table {
    name: string;
}

const MoveKOTitem = ({
    setShowpopup
}: {
    setShowpopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [book] = useState(Array.from({ length: 17 }, (_, i) => i + 1));
    const [active, setActive] = useState<string>("Table Wise");

    const type: Table[] = [
        { name: "Table Wise" },
        { name: "KOT Wise" },
        { name: "Item Wise" },
    ];

    return (
        <div className="bg-black/50 fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen text-black p-4">
            {/* Popup Box */}
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] bg-white flex flex-col gap-3 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#A5A5A5]">
                    <span className="text-[#363636] font-medium">Move KOT / items - 3</span>
                    <button
                        className="cursor-pointer"
                        onClick={() => setShowpopup(false)}
                    >
                        <RxCross2 className="text-[#868686] font-bold text-lg" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="border border-[#A5A5A5] mx-3 sm:mx-4 pb-6 rounded">
                    <div className="flex flex-wrap border-b border-[#A5A5A5] ">
                        {type.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => setActive(cat.name)}
                                className={`border-r border-[#A5A5A5] py-2 px-3 sm:px-7  text-sm cursor-pointer ${active === cat.name
                                        ? "bg-[#994D1C] text-white "
                                        : "text-[#363636] bg-transparent"
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="grid px-3 py-3 gap-2">
                        <span className="font-medium">Other</span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-13 gap-3">
                            {book.map((num) => (
                                <button
                                    key={num}
                                    className="border border-dashed border-[#A5A5A5] bg-[#F2F2F2] rounded py-2 text-sm cursor-pointer text-[#868686]"
                                >
                                    100
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col lg:flex-row gap-4 px-3 sm:px-6 py-4 items-center justify-center lg:justify-between border-t border-[#A5A5A5]">
                    <div className="flex items-center w-full lg:w-auto">
                        <span className="whitespace-nowrap text-[#363636]">Table No.</span>
                        <input
                            type="text"
                            className="flex-1 lg:flex-none ml-3 border p-2 rounded border-[#363636] text-[#808080] placeholder:text-[#808080]"
                        />
                    </div>

                    <div className="flex gap-3 w-full lg:w-auto justify-center lg:justify-end">
                        <button
                            className="border p-2 px-4 font-medium rounded border-[#363636] cursor-pointer w-full sm:w-auto"
                            onClick={() => setShowpopup(false)}
                        >
                            Cancel
                        </button>
                        <button className="bg-[#994D1C] p-2 px-6 font-medium rounded text-white cursor-pointer w-full sm:w-auto">
                            Move
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoveKOTitem;

