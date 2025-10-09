// "use client"

// import React, { useState } from 'react'
// import { useRouter, usePathname,useSearchParams  } from "next/navigation";
// import { IoMenu } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";



// interface Category {
//   name: string;
//   slug: string;
// }

// const Sidebar: React.FC = () => {
//   const router = useRouter()
//   const pathname = usePathname()
//   const [isopen, setIsopen] = useState<Boolean>(false)

//    const searchParams = useSearchParams();
//   const tableNumber = searchParams.get('table');

//   const categories: Category[] = [
//     { name: "Beverages", slug: "beverages" },
//     { name: "New Pizza Lovers", slug: "new-pizza-lovers" },
//     { name: "Premium Pizza", slug: "premium-pizza" },
//     { name: "Signature Pizza", slug: "signature-pizza" },
//     { name: "Supreme Pizza", slug: "supreme-pizza" },
//     { name: "Classic Pizza", slug: "classic-pizza" },
//     { name: "Combo", slug: "combo" },
//     { name: "Burger Meals", slug: "burger-meals" },
//     { name: "Delicious Sides", slug: "delicious-sides" },
//     { name: "Triple Treat Meal", slug: "triple-treat-meal"},
//     { name: "Special Pizza Magic Mania", slug: "special-pizza-magic-mania"},
//     { name: "Double Pizza Magic Mania", slug: "double-pizza-magic-mania"},
//     { name: "Single Pizza Magic Mania", slug: "single-pizza-magic-mania"}
//   ];

//   return (
//     <>
//       {/* Desktop Sidebar (left) */}
//       <div className="hidden md:block w-56 h-[85vh] flex-shrink-0 p-4 bg-white ">

//         <div className="h-full bg-[#994D1C] text-[#FFFFFF99] text-sm p-2 rounded-lg overflow-y-auto no-scrollbar">
//           <ul>
//             {categories.map((cat) => {
//               const isActive = pathname.includes(cat.slug)
//               return (
//                 <li key={cat.slug}>
//                   <button
//                     // onClick={() => router.push(`/orderprocess/${cat.slug}`)}
//                     onClick={() => {
//                     const newUrl = `/orderprocess/${cat.slug}`;
//                     const urlWithTable = tableNumber ? `${newUrl}?table=${tableNumber}` : newUrl;
//                     router.push(urlWithTable);
//                   }}
//                     className={`w-full text-left px-4 py-4 rounded font-medium transition cursor-pointer ${isActive
//                       ? "text-[#994D1C] bg-white font-semibold"
//                       : "hover:bg-[#A0522D]"
//                       }`}
//                   >
//                     {cat.name}
//                   </button>
//                 </li>
//               )
//             })}
//           </ul>
//         </div>
//       </div>

//       {/* Menu Button */}
//       <div className="md:hidden flex items-center justify-center bg-[#994D1C] text-white p-2">
//         <button onClick={() => setIsopen(true)}>
//           <IoMenu size={28} />
//         </button>
//         <span className="ml-2 font-semibold">Menu</span>
//       </div>



      

//       {/* Mobile Sidebar Overlay */}
//       {isopen && (
//         <div className="fixed inset-0 z-50 bg-black/50 bg-opacity-50 md:hidden">
//           <div className="absolute left-0 top-0 w-64 h-screen bg-[#994D1C] text-white p-4 shadow-lg transform transition-transform overflow-y-auto no-scrollbar">
//             {/* Close Button */}
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="font-bold">Categories</h2>
//               <button onClick={() => setIsopen(false)}>
//                 <IoClose size={28} />
//               </button>
//             </div>
//             <ul>
//               {categories.map((cat) => {
//                 const isActive = pathname.includes(cat.slug)
//                 return (
//                   <li key={cat.slug}>
//                     <button
//                       onClick={() => {
//                         router.push(`/orderprocess/${cat.slug}`)
//                         setIsopen(false) // close after selecting
//                       }}
//                       className={`w-full text-left px-4 py-2 rounded font-medium transition cursor-pointer ${isActive
//                         ? "text-[#994D1C] bg-white font-semibold"
//                         : "hover:bg-[#A0522D]"
//                         }`}
//                     >
//                       {cat.name}
//                     </button>
//                   </li>
//                 )
//               })}
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Sidebar










"use client"

import React, { useState, useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";

interface Category {
  name: string;
  slug: string;
}

const Sidebar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isopen, setIsopen] = useState<Boolean>(false);
  const searchParams = useSearchParams();
  const tableNumber = searchParams.get('table');

  // useEffect(() => {
  //   async function demo() {
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       const products = await response.json();
  //       console.log("products", products);
  //     } catch (error) {
  //       console.error("Failed to fetch products:", error);
  //     }
  //   }

  //   demo();
  // }, []);

 

  const categories: Category[] = [
    { name: "Beverages", slug: "beverages" },
    { name: "New Pizza Lovers", slug: "new-pizza-lovers" },
    { name: "Premium Pizza", slug: "premium-pizza" },
    { name: "Signature Pizza", slug: "signature-pizza" },
    { name: "Supreme Pizza", slug: "supreme-pizza" },
    { name: "Classic Pizza", slug: "classic-pizza" },
    { name: "Combo", slug: "combo" },
    { name: "Burger Meals", slug: "burger-meals" },
    { name: "Delicious Sides", slug: "delicious-sides" },
    { name: "Triple Treat Meal", slug: "triple-treat-meal" },
    { name: "Special Pizza Magic Mania", slug: "special-pizza-magic-mania" },
    { name: "Double Pizza Magic Mania", slug: "double-pizza-magic-mania" },
    { name: "Single Pizza Magic Mania", slug: "single-pizza-magic-mania" }
  ];

  
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-56 h-[85vh] flex-shrink-0 p-4 bg-white">
        <div className="h-full bg-[#994D1C] text-sm  rounded-lg overflow-y-auto no-scrollbar">
          <ul>
            {categories.map((cat) => {
              const isActive = pathname.includes(cat.slug);
              return (
                <li
                  key={cat.slug}
                  className={`
                    relative my-1
                    ${isActive ? "before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-7 before:bg-white before:rounded-r-sm" : ""}
                  `}
                >
                  <button
                    onClick={() => {
                      const newUrl = `/orderprocess/${cat.slug}`;
                      const urlWithTable = tableNumber ? `${newUrl}?table=${tableNumber}` : newUrl;
                      router.push(urlWithTable);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg  transition-colors duration-200 ${
                      isActive
                        ? "text-white "
                        : "text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {cat.name}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-center bg-[#994D1C] text-white p-2">
        <button onClick={() => setIsopen(true)}>
          <IoMenu size={28} />
        </button>
        <span className="ml-2 font-semibold">Menu</span>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isopen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
          <div className="absolute left-0 top-0 w-64 h-full bg-[#994D1C] p-4 shadow-lg overflow-y-auto no-scrollbar">
            <div className="flex justify-between items-center mb-4 text-white">
              <h2 className="font-bold">Categories</h2>
              <button onClick={() => setIsopen(false)}>
                <IoClose size={28} />
              </button>
            </div>
            <ul>
              {categories.map((cat) => {
                const isActive = pathname.includes(cat.slug);
                return (
                  <li
                    key={cat.slug}
                    className={`
                      relative my-1
                      ${isActive ? "before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-white before:rounded-r-md" : ""}
                    `}
                  >
                    <button
                      onClick={() => {
                        const newUrl = `/orderprocess/${cat.slug}`;
                        const urlWithTable = tableNumber ? `${newUrl}?table=${tableNumber}` : newUrl;
                        router.push(urlWithTable);
                        setIsopen(false); // Close mobile sidebar on click
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-white/70 hover:bg-white/10"
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar;







// "use client"

// import React, { useState, useEffect } from 'react'
// import { useRouter, usePathname, useSearchParams } from "next/navigation";
// import { IoMenu, IoClose } from "react-icons/io5";

// interface Category {
//   name: string;
//   slug: string;
// }

// interface product{
//   id:string;
//   title:string;
//   category:string;
// }


// const Sidebar: React.FC = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isopen, setIsopen] = useState<Boolean>(false);
//   const searchParams = useSearchParams();
//   const tableNumber = searchParams.get('table');
//   const [products,setProducts]=useState<product[]>([])

//   // useEffect(() => {
//   //   async function demo() {
//   //     try {
//   //       const response = await fetch("https://fakestoreapi.com/products");
//   //       const products = await response.json();
//   //       console.log("products", products);
//   //     } catch (error) {
//   //       console.error("Failed to fetch products:", error);
//   //     }
//   //   }

//   //   demo();
//   // }, []);


//   useEffect(()=>{
//     async function demo(){
//       try{
//         const fetchdata=await fetch("https://fakestoreapi.com/products")
//         const data=await fetchdata.json()
//         setProducts(data)
//         console.log("Products",data)
//       }catch(error){
//         console.log("Fetching Error",error)
//       }
//     }
//     demo()
//   },[])



//   const categories: Category[] = [
//     { name: "Beverages", slug: "beverages" },
//     { name: "New Pizza Lovers", slug: "new-pizza-lovers" },
//     { name: "Premium Pizza", slug: "premium-pizza" },
//     { name: "Signature Pizza", slug: "signature-pizza" },
//     { name: "Supreme Pizza", slug: "supreme-pizza" },
//     { name: "Classic Pizza", slug: "classic-pizza" },
//     { name: "Combo", slug: "combo" },
//     { name: "Burger Meals", slug: "burger-meals" },
//     { name: "Delicious Sides", slug: "delicious-sides" },
//     { name: "Triple Treat Meal", slug: "triple-treat-meal" },
//     { name: "Special Pizza Magic Mania", slug: "special-pizza-magic-mania" },
//     { name: "Double Pizza Magic Mania", slug: "double-pizza-magic-mania" },
//     { name: "Single Pizza Magic Mania", slug: "single-pizza-magic-mania" }
//   ];

  
//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <div className="hidden md:block w-56 h-[85vh] flex-shrink-0 p-4 bg-white">
//         <div className="h-full bg-[#994D1C] text-sm  rounded-lg overflow-y-auto no-scrollbar">
//           <ul>
//             {products.map((product) => {
//               const isActive = pathname.includes(product.title);
//               // const isActive=(false);
//               return (
//                 <li
//                   key={product.id}
//                   className={`
//                     relative my-1
//                     ${isActive ? "before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-7 before:bg-white before:rounded-r-sm" : ""}
//                   `}
//                 >
//                   <button
//                     onClick={() => {
//                       const newUrl = `/orderprocess/${product.category}`;
//                       const urlWithTable = tableNumber ? `${newUrl}?table=${tableNumber}` : newUrl;
//                       router.push(urlWithTable);
//                     }}
//                     className={`w-full text-left px-4 py-3 rounded-lg  transition-colors duration-200 ${
//                       isActive
//                         ? "text-white "
//                         : "text-white/70 hover:bg-white/10"
//                     }`}
//                   >
//                     {product.title}
//                   </button>
//                 </li>
//               )
//             })}
//           </ul>
//         </div>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden flex items-center justify-center bg-[#994D1C] text-white p-2">
//         <button onClick={() => setIsopen(true)}>
//           <IoMenu size={28} />
//         </button>
//         <span className="ml-2 font-semibold">Menu</span>
//       </div>

//       {/* Mobile Sidebar Overlay */}
//       {isopen && (
//         <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
//           <div className="absolute left-0 top-0 w-64 h-full bg-[#994D1C] p-4 shadow-lg overflow-y-auto no-scrollbar">
//             <div className="flex justify-between items-center mb-4 text-white">
//               <h2 className="font-bold">Categories</h2>
//               <button onClick={() => setIsopen(false)}>
//                 <IoClose size={28} />
//               </button>
//             </div>
//             <ul>
//               {categories.map((cat) => {
//                 const isActive = pathname.includes(cat.slug);
//                 return (
//                   <li
//                     key={cat.slug}
//                     className={`
//                       relative my-1
//                       ${isActive ? "before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-white before:rounded-r-md" : ""}
//                     `}
//                   >
//                     <button
//                       onClick={() => {
//                         const newUrl = `/orderprocess/${cat.slug}`;
//                         const urlWithTable = tableNumber ? `${newUrl}?table=${tableNumber}` : newUrl;
//                         router.push(urlWithTable);
//                         setIsopen(false); // Close mobile sidebar on click
//                       }}
//                       className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
//                         isActive
//                           ? "text-white font-semibold"
//                           : "text-white/70 hover:bg-white/10"
//                       }`}
//                     >
//                       {cat.name}
//                     </button>
//                   </li>
//                 )
//               })}
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Sidebar;