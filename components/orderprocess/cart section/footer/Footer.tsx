// import React, { useState } from 'react';
// import { useCart } from "@/context/CartContext";
// import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { TbReload } from "react-icons/tb";
// import { useRouter } from 'next/navigation';

// interface FooterProps {
//     setShowform: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const Footer: React.FC<FooterProps> = ({ setShowform }) => {
//     const { total } = useCart();
//     const [scrollup, setScrollup] = useState<boolean>(false);
//     const Router = useRouter();

//     const handleKOT = () => {
//         Router.push('/post_table');
//     };

//     const MdOutlineKeyboardArrowUp = ({ size = 24, className = "" }) => (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={size}
//           height={size}
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className={className}
//         >
//           <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
//         </svg>
//       );

//       const MdOutlineKeyboardArrowDown = ({ size = 24, className = "" }) => (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={size}
//           height={size}
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className={className}
//         >
//           <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
//         </svg>
//       );

//       const CustomShape = ({ className, ...props }: { className?: string;[key: string]: any }) => {
//         const pathData = [
//           'M 0 20',
//           'L 20 0',
//           'L 60 0',
//           'L 80 20',
//           'Z',
//         ].join(' ');

//         return (
//           <svg
//             width="80"
//             height="20"
//             viewBox="0 0 80 20"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className={className}
//             {...props}
//           >
//             {/* <path d={pathData} fill="#0C0C0C" /> */}
//             <path d={pathData} fill={scrollup ? "#303030" : "#0C0C0C"}/>

//           </svg>
//         );
//       };

//     return (
//   <>
//     {/* Fixed Footer Wrapper */}
//      <div className="absolute bottom-0 left-0 w-full z-40">

//       {/* Toggle Button */}
//       <div className="flex items-center justify-center bg-[#f8f8f8]">
//         <button
//           onClick={() => setScrollup(!scrollup)}
//           className="relative inline-flex items-center justify-center cursor-pointer group"
//         >
//           <CustomShape className="" />
//           <div className="absolute top-0.5 left-1/2 -translate-x-1/2 pointer-events-none">
//             {scrollup ? (
//               <MdOutlineKeyboardArrowDown
//                 size={16}
//                 className="transition-transform duration-300 group-hover:-translate-y-0.5 text-white"
//               />
//             ) : (
//               <MdOutlineKeyboardArrowUp
//                 size={16}
//                 className="transition-transform duration-300 group-hover:-translate-y-0.5 text-white"
//               />
//             )}
//           </div>
//         </button>
//       </div>

//       {/* Scroll-up panel — sits above footer */}
//       {scrollup && (
//         <div className="absolute bottom-full left-0 w-full grid gap-4 px-3 py-4 bg-[#353535] text-white font-medium text-sm border-t border-[#575757]">
//           <div className='flex items-center justify-between border-b border-[#575757]'>
//             <span>Sub Total</span>
//             <span>820.00</span>
//           </div>
//           <div className='flex items-center justify-between border-b border-[#575757]'>
//             <span>Discount</span>
//             <span>{(total * 0.10).toFixed(2)}</span>
//           </div>
//           <div className='flex items-center justify-between border-b border-[#575757]'>
//             <span>Delivery Charge</span>
//             <span>50.00</span>
//           </div>
//           <div className='flex items-center justify-between border-b border-[#575757]'>
//             <span className='flex items-center gap-2'>
//               <button className='cursor-pointer'><TbReload className='cursor-pointer w-5 h-5' /></button>
//               Container Charge
//             </span>
//             <span>20.00</span>
//           </div>
//         </div>
//       )}

//       {/* Split Button */}
//       <div className='flex justify-between px-4 bg-[#0C0C0C] py-3 items-center'>
//         <button className="bg-[#8B4513] text-white px-6 py-1.5 rounded cursor-pointer text-sm font-light">
//           Split
//         </button>
//         <div className='flex gap-3 items-center'>
//           <span className='text-white font-small text-sm'>Total</span>
//           <span className='text-[#FEBA17] font-bold text-md'>{total.toFixed(2)}</span>
//         </div>
//       </div>

//       {/* Payment Options */}
//       <div className="flex gap-6 justify-center items-center py-3 px-4 bg-[#353535] text-white">
//         {["Cash", "Card", "Due", "Other", "Part"].map((method) => (
//           <div className='flex items-center justify-between ' key={method}>
//             <label key={method} className="flex items-center gap-2 text-sm ">
//               <div className=' flex items-center border-1 border-white rounded-full  px-1 py-1 cursor-pointer'>
//                 <input
//                   type="radio"
//                   name="payment"
//                   className="appearance-none p-1 rounded-full checked:bg-white cursor-pointer"
//                   onClick={() => {
//                     if (method === "Part") Router.push('/payment_part');
//                     if (method === "Due") setShowform(true);
//                   }}
//                 />
//               </div>
//               {method}
//             </label>
//           </div>
//         ))}
//       </div>

//       {/* Checkboxes */}
//       <div className="flex flex-wrap gap-7 items-center justify-center p-3 bg-[#0C0C0C] text-white">
//         {["It’s Paid", "Loyalty", "Send Feedback SMS"].map((label, idx) => (
//           <label key={idx} className="flex items-center gap-2 text-sm font-light">
//             <input
//               type="checkbox"
//               className="w-4 h-4 cursor-pointer appearance-none border border-[#A5A5A5] rounded-sm 
//                 checked:bg-[#363636] checked:border-black 
//                 relative
//                 before:content-['✓'] before:absolute before:text-white before:text-[12px] before:font-bold before:opacity-0 checked:before:opacity-100 items-center flex justify-center"
//             />
//             {label}
//           </label>
//         ))}
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-2 p-3 px-7 bg-[#f8f8f8] text-sm">
//         <button className="flex-1 bg-[#8B4513] text-white px-3 rounded cursor-pointer whitespace-nowrap">
//           Save
//         </button>
//         <button className="flex-1 bg-[#8B4513] text-white px-3 rounded cursor-pointer whitespace-nowrap">
//           Print & eBill
//         </button>
//         <button
//           className="flex-1 bg-black text-white px-3 rounded cursor-pointer whitespace-nowrap"
//           onClick={handleKOT}
//         >
//           KOT
//         </button>
//         <button className="flex-1 bg-black text-white px-3 rounded cursor-pointer whitespace-nowrap">
//           KOT & Print
//         </button>
//         <button className="flex-1 text-black py-1 px-3 rounded border-2 cursor-pointer whitespace-nowrap">
//           Hold
//         </button>
//       </div>
//     </div>
//   </>
// );

// }

// export default Footer;









// "use client";
// import React, { useState } from 'react';
// import { useCart } from "@/context/CartContext";
// import { TbReload } from "react-icons/tb";
// import { useRouter } from 'next/navigation';
// import { MdKeyboardArrowUp } from "react-icons/md";

// const ScrollUpButton = ({ onClick }: { onClick: () => void }) => {
//   return (
//     <button
//       className="relative top-2 flex items-center justify-center w-20 h-8 bg-black rounded-t-[16px] shadow-md cursor-pointer transition-transform hover:scale-105"
//       onClick={onClick}
//     >
//       {/* Triangle top effect */}
//       {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[10px] border-transparent border-b-black -translate-y-[8px]" /> */}
//       {/* Up arrow icon */}
//       <MdKeyboardArrowUp className="text-white text-lg z-10" />
//     </button>
//   );
// };

// const Footer = () => {
//   const { total } = useCart();
//   const [scrollup, setScrollup] = useState<boolean>(false);
//   const Router = useRouter();

//   const handleKOT = () => {
//     Router.push('/post_table');
//   };

//   return (
//     <>
//       {/* Scroll Up Button */}
//       <div className="flex items-center justify-center bg-[#f8f8f8] py-2">
//         <ScrollUpButton onClick={() => setScrollup(!scrollup)} />
//       </div>

//       {/* Scroll-up content */}
//       {scrollup && (
//         <div className='grid gap-4 px-3 py-4 bg-[#353535] text-white font-medium text-sm'>
//           <div className='flex items-center justify-between border-b border-[#575757]'>
//             <span>Sub Total</span>
//             <span>820.00</span>
//           </div>
//           <div className='flex items-center justify-between border-b border-[#575757]'>
//             <span>Discount</span>
//             <span>{(total * 0.10).toFixed(2)}</span>
//           </div>
//           <div className='flex items-center justify-between border-b border-[#575757]'>
//             <span>Delivery Charge</span>
//             <span>50.00</span>
//           </div>
//           <div className='flex items-center justify-between border-b border-[#575757]'>
//             <span className='flex items-center gap-2'>
//               <button className='cursor-pointer'>
//                 <TbReload className='cursor-pointer w-5 h-5' />
//               </button>
//               Container Charge
//             </span>
//             <span>20.00</span>
//           </div>
//         </div>
//       )}

//       {/* Split Button */}
//       <div className='flex justify-between px-4 bg-[#0C0C0C] py-3 items-center'>
//         <button className="bg-[#8B4513] text-white px-6 py-1.5 rounded cursor-pointer text-sm font-light">
//           Split
//         </button>
//         <div className='flex gap-3 items-center'>
//           <span className='text-white text-sm'>Total</span>
//           <span className='text-[#FEBA17] font-bold text-md'>{total}</span>
//         </div>
//       </div>

//       {/* Payment Options */}
//       <div className="flex gap-6 justify-center items-center py-3 px-4 bg-[#353535] text-white">
//         {["Cash", "Card", "Due", "Other", "Part"].map((method) => (
//           <div className='flex items-center justify-between ' key={method}>
//             <label key={method} className="flex items-center gap-2 text-sm ">
//               <div className='flex items-center border-1 border-white rounded-full px-1 py-1 cursor-pointer'>
//                 <input
//                   type="radio"
//                   name="payment"
//                   className="appearance-none p-1 rounded-full checked:bg-white cursor-pointer"
//                   onClick={() => {
//                     if (method === "Part") {
//                       Router.push('/payment_part');
//                     }
//                   }}
//                 />
//               </div>
//               {method}
//             </label>
//           </div>
//         ))}
//       </div>

//       {/* Checkboxes */}
//       <div className="flex flex-wrap gap-7 items-center justify-center p-3 bg-[#0C0C0C] text-white">
//         {["It’s Paid", "Loyalty", "Send Feedback SMS"].map((label) => (
//           <label key={label} className="flex items-center gap-2 text-sm font-light">
//             <input
//               type="checkbox"
//               className="w-4 h-4 cursor-pointer appearance-none border border-[#A5A5A5] rounded-sm 
//                 checked:bg-[#363636] checked:border-black 
//                 relative before:content-['✓'] before:absolute before:text-white before:text-[12px] before:font-bold before:opacity-0 
//                 checked:before:opacity-100 flex justify-center items-center"
//             />
//             {label}
//           </label>
//         ))}
//       </div>

//       {/* Bottom Buttons */}
//       <div className="flex gap-2 p-3 px-7 bg-[#f8f8f8] text-sm">
//         <button className="flex-1 bg-[#8B4513] text-white px-3 rounded cursor-pointer whitespace-nowrap">
//           Save
//         </button>
//         <button className="flex-1 bg-[#8B4513] text-white px-3 rounded cursor-pointer whitespace-nowrap">
//           Print & eBill
//         </button>
//         <button
//           className="flex-1 bg-black text-white px-3 rounded cursor-pointer whitespace-nowrap"
//           onClick={handleKOT}
//         >
//           KOT
//         </button>
//         <button className="flex-1 bg-black text-white px-3 rounded cursor-pointer whitespace-nowrap">
//           KOT & Print
//         </button>
//         <button className="flex-1 text-black py-1 px-3 rounded border-2 cursor-pointer whitespace-nowrap">
//           Hold
//         </button>
//       </div>
//     </>
//   );
// };

// export default Footer;














"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { TbReload } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowUp,MdOutlineKeyboardArrowDown } from "react-icons/md";

interface FooterProps {
    setShowform: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer: React.FC<FooterProps> = ({ setShowform }) => {
    const { total } = useCart();
    const [scrollup, setScrollup] = useState<boolean>(false);
    const Router = useRouter();

    const handleKOT = () => {
        Router.push("/post_table");
    };


    // Updated trapezoid-shaped Scroll Up button:
    const ScrollUpButton = ({ onClick }: { onClick: () => void }) => (
        <button
            onClick={onClick}
            className="relative flex items-center justify-center w-[80px] h-6 bg-black cursor-pointer "
            style={{
                clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0 100%)',
            }}
        >
            {/* Upward arrow */}
            {/* <span className="w-2.5 h-2.5 border-l-2 border-b-2 border-white rotate-45"></span> */}
            {scrollup ? (
                <MdOutlineKeyboardArrowDown
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 text-white"
                />
            ) : (
                <MdOutlineKeyboardArrowUp
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 text-white"
                />
            )}
        </button>
    );

    return (
        <>
            <div className="absolute bottom-0 left-0 w-full z-40">
                <div className="flex items-center justify-center bg-[#f8f8f8]">
                    <ScrollUpButton onClick={() => setScrollup(!scrollup)} />
                </div>

                {/* Expanding section when clicked */}
                {scrollup && (
                    <div className="absolute bottom-full left-0 w-full grid gap-4 px-3 py-4 bg-[#353535] text-white font-medium text-sm border-t border-[#575757]">
                        <div className="flex items-center justify-between border-b border-[#575757]">
                            <span>Sub Total</span>
                            <span>820.00</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-[#575757]">
                            <span>Discount</span>
                            <span>{(total * 0.1).toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-[#575757]">
                            <span>Delivery Charge</span>
                            <span>50.00</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-[#575757]">
                            <span className="flex items-center gap-2">
                                <button className="cursor-pointer">
                                    <TbReload className="cursor-pointer w-5 h-5" />
                                </button>
                                Container Charge
                            </span>
                            <span>20.00</span>
                        </div>
                    </div>
                )}

                {/* Split & Total Row */}
                <div className="flex justify-between px-4 bg-[#0C0C0C] py-3 items-center">
                    <button className="bg-[#8B4513] text-white px-6 py-1.5 rounded cursor-pointer text-sm font-light">
                        Split
                    </button>
                    <div className="flex gap-3 items-center">
                        <span className="text-white font-small text-sm">Total</span>
                        <span className="text-[#FEBA17] font-bold text-md">
                            {total}
                        </span>
                    </div>
                </div>

                {/* Payment Options */}
                <div className="flex gap-6 justify-center items-center py-3 px-4 bg-[#353535] text-white">
                    {["Cash", "Card", "Due", "Other", "Part"].map((method) => (
                        <div className="flex items-center justify-between" key={method}>
                            <label className="flex items-center gap-2 text-sm">
                                <div className="flex items-center border border-white rounded-full px-1 py-1 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="appearance-none p-1 rounded-full checked:bg-white cursor-pointer"
                                        onClick={() => {
                                            if (method === "Part") Router.push("/payment_part");
                                            if (method === "Due") setShowform(true);
                                        }}
                                    />
                                </div>
                                {method}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Checkboxes */}
                <div className="flex flex-wrap gap-7 items-center justify-center p-3 bg-[#0C0C0C] text-white">
                    {["It’s Paid", "Loyalty", "Send Feedback SMS"].map((label, idx) => (
                        <label
                            key={idx}
                            className="flex items-center gap-2 text-[13px] "
                        >
                            <input
                                type="checkbox"
                                className="w-4 h-4 cursor-pointer appearance-none border border-[#A5A5A5] rounded-sm 
                        checked:bg-[#363636] checked:border-black 
                        relative
                        before:content-['✓'] before:absolute before:text-white before:text-[12px] before:font-bold before:opacity-0 checked:before:opacity-100 items-center flex justify-center"
                            />
                            {label}
                        </label>
                    ))}
                </div>
                {/* Action Buttons */}
                <div className="flex gap-2 p-3 px-7 bg-[#f8f8f8] text-sm">
                    <button className="flex-1 bg-[#8B4513] text-white px-3 rounded cursor-pointer whitespace-nowrap">
                        Save
                    </button>
                    <button className="flex-1 bg-[#8B4513] text-white px-3 rounded cursor-pointer whitespace-nowrap">
                        Print & eBill
                    </button>
                    <button
                        className="flex-1 bg-black text-white px-3 rounded cursor-pointer whitespace-nowrap"
                        onClick={handleKOT}
                    >
                        KOT
                    </button>
                    <button className="flex-1 bg-black text-white px-3 rounded cursor-pointer whitespace-nowrap">
                        KOT & Print
                    </button>
                    <button className="flex-1 text-black py-1 px-3 rounded border-2 cursor-pointer whitespace-nowrap">
                        Hold
                    </button>
                </div>
            </div>
        </>
    );
};

export default Footer;

