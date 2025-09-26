// 'use client'

// import React from 'react'
// import { SiTicktick } from "react-icons/si";

// const Test2 = () => {
//     return (
//         <section className='relative flex items-center justify-center min-h-screen text-white'>
//             {/*top curve */}
//             <div className=''>
//             <div className="absolute top-0 left-0 w-full pointer-events-none z-20 overflow-hidden">
//         <svg
//           className="block w-full mt-18 md:h-15"
//           viewBox="0 0 1440 120"
//           preserveAspectRatio="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {/* path gives smooth concave dip in the center */}
//           <path d="M0,0 C360,100 1080,100 1440,0 L1440,120 L0,120 Z" fill="#000000" />
//         </svg>
//       </div>
//       </div>


//             <div className='py-16 px-6 bg-[#8B3E1D] w-full'>

//                 <div className='grid md:grid-cols-2 items-center  '>
//                     {/*Image Section*/}
//                     <div className='flex justify-center'>
//                         <div className='bg-white rounded-xl p-2 shadow-lg'>
//                             <img src="./girl.png" alt=""
//                                 width={350}
//                                 height={350}
//                             />
//                         </div>
//                     </div>


//                     {/* Content */}
//                     <div>
//                         <button className='bg-white text-black px-5 py-1 rounded-2xl cursor-pointer'>About Us</button>
//                         <h2 className='text-3xl mt-3'>Where Every Slice Tell A Story Of</h2>
//                         <h2 className='text-3xl'>Taste, Quality And Passion</h2>

//                         <div className='mt-3'>
//                         <p> At IFC Pizza, We Believe That Pizza Is More Than Just Food—It’s A Way To Bring Joy</p>
//                         <p>To Every Table. With Carefully Selected Ingredients, Unique Flavors, And A Passion</p>
//                         <p>For Excellence</p>
//                         </div>

//                         <div className='grid grid-cols-2 gap-4 mt-3'>
//                             {["Authentic Taste","Wood Fired","Fresh Serve","Wide Variety","Best Quality"].map((feature,i)=>(

//                                 <button
//                                 key={i}
//                                 className='bg-white text-orange-400 p-2 rounded-3xl flex gap-3 items-center cursor-pointer'
//                                 >
//                                     <SiTicktick className='bg-orange-400 text-white p-1 rounded-full'/>
//                                     {feature}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>



//                 </div>
//             </div>


//         </section>
//     )
// }

// export default Test2
















// app/components/AboutSection.tsx
// "use client";

// import React from "react";

// const Test2 = () => {
//     return (
//         // Set a specific height for the container, e.g., h-screen for full viewport height
//         <div className="relative bg-[#8B3E1D] text-white overflow-hidden">
//   {/* <!-- Top curve --> */}
//   <div className="absolute -top-[40px] left-0 w-full h-[80px] 
//               [clip-path:ellipse(70%_100%_at_50%_0)] 
//               bg-white"></div>

//   {/* <!-- Content --> */}
//   <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
//     <div className="grid md:grid-cols-2 gap-8 items-center">

//       {/* <!-- Left image --> */}
//       <div className="flex justify-center">
//         <div className="bg-white rounded-xl p-2 shadow-lg">
//           <img src="./girl.png" alt="girl" className="w-[350px] h-auto rounded-lg" />
//         </div>
//       </div>

//       {/* <!-- Right text --> */}
//       <div>
//         <button className="bg-white text-black px-5 py-1 rounded-2xl cursor-pointer">About Us</button>
//         <h2 className="text-3xl mt-3">Where Every <span className="font-bold">Slice Tells</span> A Story Of</h2>
//         <h2 className="text-3xl font-bold">Taste, Quality, And Passion</h2>

//         <div className="mt-3 text-gray-200">
//           <p>At IFC Pizza, We Believe That Pizza Is More Than Just Food—It’s A Way To Bring Joy</p>
//           <p>To Every Table. With Carefully Selected Ingredients, Unique Flavors, And A Passion</p>
//           <p>For Excellence</p>
//         </div>

//         <div className="grid grid-cols-2 gap-4 mt-6">
//           <button className="bg-white text-orange-400 p-2 rounded-3xl flex gap-3 items-center cursor-pointer">
//             <span className="bg-orange-400 text-white p-1 rounded-full">✔</span>
//             Authentic Taste
//           </button>
//           <button className="bg-white text-orange-400 p-2 rounded-3xl flex gap-3 items-center cursor-pointer">
//             <span className="bg-orange-400 text-white p-1 rounded-full">✔</span>
//             Wood-Fired
//           </button>
//           <button className="bg-white text-orange-400 p-2 rounded-3xl flex gap-3 items-center cursor-pointer">
//             <span className="bg-orange-400 text-white p-1 rounded-full">✔</span>
//             Fresh Serve
//           </button>
//           <button className="bg-white text-orange-400 p-2 rounded-3xl flex gap-3 items-center cursor-pointer">
//             <span className="bg-orange-400 text-white p-1 rounded-full">✔</span>
//             Wide Variety
//           </button>
//           <button className="bg-white text-orange-400 p-2 rounded-3xl flex gap-3 items-center cursor-pointer">
//             <span className="bg-orange-400 text-white p-1 rounded-full">✔</span>
//             Best Quality
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* <!-- Bottom curve --> */}
//   <div className="absolute -bottom-[40px] left-0 w-full h-[80px] 
//               [clip-path:ellipse(70%_100%_at_50%_100%)] 
//               bg-white"></div>
// </div>

//     );
// };

// export default Test2;












// import React from "react";
// import { SiTicktick } from "react-icons/si";

// const Test2 = () => {
//     return (

//         <div className="relative bg-[#8B3E1D]   text-white  ">
//             {/* Top curve */}
//             <div
//                 className="absolute -top-[10px] left-0 w-full h-[80px] 
//                       [clip-path:ellipse(58%_99%_at_50%_0)]
//               bg-white"
//             ></div>

//             {/* Background Image*/}

//             {/* <div className=""> */}
//                 <div className="relative w-full h-screen overflow-hidden">
//                     {/* Background image */}
//                     <img
//                         src="./Pizza.jpg"
//                         alt="pizza"
//                         className="w-full h-full py-16 " 
//                     />

//                     {/*  Content */}
//                     <div className="absolute inset-0 bg-black/40 my-16  grid grid-cols-2 justify-center items-center p-8">

//                         {/* <div className=" "> */}
//                             <div className="bg-white rounded-xl  shadow-lg flex justify-center mx-35 ">
//                                 <img src="./girl.png" alt="girl" className="w-full  h-auto rounded-lg" />
//                             </div>
//                         {/* </div> */}

//                         <div className="">
//                             <button className="bg-white text-black px-5 py-1 rounded-2xl cursor-pointer">
//                                 About Us
//                             </button>
//                             <h2 className="text-3xl mt-3">
//                                 Where Every <span className="font-bold">Slice Tells</span> A Story
//                                 Of
//                             </h2>
//                             <h2 className="text-3xl ">
//                                 Taste, Quality, And <span className="font-bold">Passion</span>
//                             </h2>


//                             {/* <div className="mt-3 text-gray-200"> */}
//                                 <p className="mt-3">
//                                     At IFC Pizza, We Believe That Pizza Is More Than Just Food—It’s
//                                     A Way To Bring Joy
//                                 </p>
//                                 <p>
//                                     To Every Table. With Carefully Selected Ingredients, Unique
//                                     Flavors, And A Passion
//                                 </p>
//                                 <p>For Excellence</p>
//                             {/* </div> */}

//                             <div className="grid grid-cols-2  gap-4 mt-6">
//                                 {["Authentic Taste", "Wood Fired", "Fresh Serve", "Wide Variety", "Best Quality"].map((feature, i) => (

//                                     <button
//                                         key={i}
//                                         className='bg-white text-orange-400  pl-2 py-2 rounded-3xl flex gap-3 items-center cursor-pointer'
//                                     >
//                                         <SiTicktick className='bg-orange-400 text-white p-1 rounded-full' />
//                                         {feature}
//                                     </button>

//                                 ))}
//                             </div>


//                         </div>
//                     </div>
//                 </div>
//             {/* </div> */}

//             {/* Bottom curve */}
//             <div
//                 className="absolute -bottom-[10px] left-0 w-full h-[80px] 
//                 [clip-path:ellipse(55%_99%_at_50%_100%)] 
//               bg-white"
//             ></div>
//         </div>

//     );
// };

// export default Test2;












// import React from "react";
// import { SiTicktick } from "react-icons/si";

// const Test2 = () => {
//     return (

//         <div className="relative bg-[#8B3E1D]   text-white  ">
//             {/* Top curve */}
//             <div
//                 className="absolute -top-[10px] left-0 w-full h-[80px]
//                       [clip-path:ellipse(58%_99%_at_50%_0)]
//               bg-white"
//             ></div>

//             {/* Background Image*/}


//             <div className="relative w-full h-screen overflow-hidden">
//                 {/* Background image */}
//                 <img
//                     src="./Pizza.jpg"
//                     alt="pizza"
//                     className="w-full h-full py-16 "
//                 />

//                 {/*  Content */}
//                 <div className="absolute inset-0 bg-black/40 my-16  grid grid-cols-2 justify-center items-center p-8">


//                     {/* <div className="bg-white rounded-xl  shadow-lg flex justify-center mx-40 
//                             [clip-path:ellipse(130px_140px_at_10%_20%)] [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]
//                             ">
//                                 <img src="./girl.png" alt="girl" className="w-full  h-auto rounded-lg" />
//                             </div> */}

//                 <div className="px-50 ">
//                     <div className="border border-white rounded-[65px] bg-white flex items-center justify-center 
//                     w-[300px] h-[320px] [clip-path:polygon(0%_0,105%_39%,103%_247%,0_85%)]
                      
//                     ">
//                     <img
//                         src="./girl.png"
//                         alt="Girl eating pizza"
//                         className="w-[300px] h-[320px] object-cover "
//                     />
//                     </div>
//                 </div>

                
//                     <div className="">
//                         <button className="bg-white text-black px-5 py-1 rounded-2xl cursor-pointer">
//                             About Us
//                         </button>
//                         <h2 className="text-3xl mt-3">
//                             Where Every <span className="font-bold">Slice Tells</span> A Story
//                             Of
//                         </h2>
//                         <h2 className="text-3xl ">
//                             Taste, Quality, And <span className="font-bold">Passion</span>
//                         </h2>



//                         <p className="mt-3">
//                             At IFC Pizza, We Believe That Pizza Is More Than Just Food—It’s
//                             A Way To Bring Joy
//                         </p>
//                         <p>
//                             To Every Table. With Carefully Selected Ingredients, Unique
//                             Flavors, And A Passion
//                         </p>
//                         <p>For Excellence</p>


//                         <div className="grid grid-cols-2  gap-4 mt-6">
//                             {["Authentic Taste", "Wood Fired", "Fresh Serve", "Wide Variety", "Best Quality"].map((feature, i) => (

//                                 <button
//                                     key={i}
//                                     className='bg-white text-orange-400  pl-2 py-2 rounded-3xl flex gap-3 items-center cursor-pointer'
//                                 >
//                                     <SiTicktick className='bg-orange-400 text-white p-1 rounded-full' />
//                                     {feature}
//                                 </button>

//                             ))}
//                         </div>


//                     </div>
//                 </div>
//             </div>


//             {/* Bottom curve */}
//             <div
//                 className="absolute -bottom-[10px] left-0 w-full h-[80px] 
//                 [clip-path:ellipse(55%_99%_at_50%_100%)] 
//               bg-white"
//             ></div>
//         </div>

//     );
// };

// export default Test2;







import React from "react";
import { SiTicktick } from "react-icons/si";
 
const serviceItems = [
    { name: 'Online Order', image: '/phone.png' },
    { name: '24/7 Service', image: '/24hours.png' },
    { name: 'Pre-Reservation', image: '/calender.png' },
    { name: 'Oragonized Foodhut Place', image: '/calender.png' }, // Typo from original image
    { name: 'Super Chef', image: '/calender.png' },
    { name: 'Clean Kitchen', image: '/calender.png' },
];
const MultipleService = () => {
    return (
 
        <div className="relative bg-[#834510]   text-white  ">
            {/* Top curve */}
            <div
                className="absolute -top-[10px] left-0 w-full h-[80px]
                      [clip-path:ellipse(58%_99%_at_50%_0)]
              bg-white"
            ></div>
 
            {/* Background Image*/}
 
 
            <div className="relative w-full h-screen overflow-hidden">
                {/*  Content */}
                <div className="absolute inset-0 bg-[url('/pizza.jpg')] my-16  bg-cover bg-no-repeat grid grid-cols-1 lg:grid-cols-2 justify-center items-center p-2 lg:p-8 ">
 
 
                    <div className=" rounded-xl  shadow-lg flex justify-center mx-40
                            clip-path-[ellipse(130px_140px_at_10%_20%)]
                            ">
                        <img src="/girl.png" alt="girl" className=" hidden lg:block w-full  h-auto rounded-lg " />
                    </div>
 
 
                    <div className="flex flex-col items-center justify-center text-center">
                        <button className="bg-white/50 text-white px-5 py-1 rounded-2xl cursor-pointer">
                            About Us
                        </button>
                        <h2 className="text-3xl mt-3">
                            Where Every <span className="font-bold">Slice Tells</span> A Story
                            Of
                        </h2>
                        <h2 className="text-3xl ">
                            Taste, Quality, And <span className="font-bold">Passion</span>
                        </h2>
 
 
 
                        <p className="mt-3">
                            At IFC Pizza, We Believe That Pizza Is More Than Just Food—It’s
                            A Way To Bring Joy
                        </p>
                        <p>
                            To Every Table. With Carefully Selected Ingredients, Unique
                            Flavors, And A Passion
                        </p>
                        <p>For Excellence</p>
 
 
                        <div className="grid grid-cols-2 max-w-lg gap-4 mt-6">
                            {serviceItems.map((feature, i) => ((
                                <button
                                    key={i}
                                    className='bg-white text-primary  pl-2 py-2 px-2 rounded-3xl flex gap-3  items-center cursor-pointer'
                                >
                                    <SiTicktick className='bg-primary text-white p-1 rounded-full'/>
                                    {feature.name}
                                </button>
 
                            )))}
                        </div>
 
 
                    </div>
                </div>
            </div>
 
 
            {/* Bottom curve */}
            <div
                className="absolute -bottom-[10px] left-0 w-full h-[80px]
                [clip-path:ellipse(55%_99%_at_50%_100%)]
              bg-white"
            ></div>
        </div>
 
    );
};
 
export default MultipleService;
