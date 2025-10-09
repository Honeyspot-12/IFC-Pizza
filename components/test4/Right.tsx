


// "use client"

// import React, { useEffect, useState } from "react";
// import Side from "@/components/test3/Side";


// interface Product {
//   id: number;
//   title: string;
//   category: string;
// }

// const CategoryPage: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Fetching products failed", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   // Filter products based on selected category
//   const filteredProducts = selectedCategory
//     ? products.filter((p) => p.category === selectedCategory)
//     : products;

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Side onCategorySelect={setSelectedCategory} />

//       {/* Product Titles */}
//       <div className="flex-1 p-6 bg-gray-50 overflow-y-auto h-[85vh]">
//         <h2 className="text-xl font-semibold mb-4">
//           {selectedCategory ? `Products in "${selectedCategory}"` : "All Products"}
//         </h2>

//         <ul className="space-y-3">
//           {filteredProducts.map((item) => (
//             <li
//               key={item.id}
//               className="bg-white p-3 rounded-md shadow-sm border text-gray-800"
//             >
//               {item.title}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default CategoryPage;



"use client"
import { useState , useEffect} from "react"
import Side from "../test3/Side"
import { useRouter } from "next/navigation";

interface product{
    id:string;
    title:string;
    category:string;
}

// interface productprops{
//     onProductSelect:(product:string)=>void
// }

const Right:React.FC = () => {
    const [selectedCategory,setSelectedCategory]=useState<string|null>(null)
    const [products,setProducts]=useState<product[]>([])
    const Router=useRouter()

    useEffect(()=>{
        async function demo(){
            try{
                const fetchdata=await fetch("https://fakestoreapi.com/products")
                const data=await fetchdata.json()
                setProducts(data)
                console.log("products",data)
            }catch(error){
                console.log("fetching Error",error)
            }
        }
        demo()
    },[])


    const filteredProducts=selectedCategory
    ? products.filter((p)=>p.category===selectedCategory)
    : products;

    const handleProductSelect=(id:string)=>{
        // onProductSelect(product)
        Router.push(`/test4/${id}`)
    }
    
  return (
    <div className="flex">
       {/* Sidebar */}
       <Side onCategorySelect={setSelectedCategory} />

       {/* Product Titles */}
       <div className="flex-1 p-6 bg-gray-50 overflow-y-auto h-[85vh]">
         <h2 className="text-xl font-semibold mb-4 text-[#994D1C]">
          {selectedCategory ? `Products in "${selectedCategory}"` : "All Products"}
         </h2>

         <ul className="space-y-3 flex flex-col ">
           {filteredProducts.map((item) => (
            <button
              key={item.id}
              className="bg-white p-3 rounded-md shadow-sm border text-gray-800 text-left cursor-pointer"
              onClick={()=>handleProductSelect(item.id)}
            >
              {item.title}
            </button>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Right

