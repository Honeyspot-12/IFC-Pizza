// "use client";

// // import { useProduct } from '@/context/ProductContext';
// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react';

// interface Description{
//     id:string;
//     title:string;
//     price:string;
//     description:string;
//     category:string;
//     image:string;
// }

// const Description: React.FC = () => {
//     // const { selectedProduct } = useProduct();
//     const[products,setProducts]=useState<Description[]>([])
//     const{id}=useParams();

//    useEffect(()=>{
//     async function demo(){
//         try{
//             const fetchdata=await fetch("https://fakestoreapi.com/products")
//             const data=await fetchdata.json()
//             setProducts(data)
//         }catch(error){
//             console.log("Fetching Error",error)
//         }
//     }
//     // demo()
//     if(id) demo()

    
//    },[id])

//    if(!products){
//         return <p className="p-8 text-gray-500 text-center">Loading product details...</p>;
//     }

//     return (
//         <div className="container mx-auto p-8 bg-white">
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex">
//                 <div className="md:w-1/3">
//                 {products.map((product)=>{
//                     return(
//                         <div key={product.id} className="md:w-2/3 p-6">
//                     <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
//                     <p className="text-sm text-gray-500 bg-gray-100 inline-block px-3 py-1 rounded-full mb-4">{product.category}</p>
//                     <p className="text-gray-700 text-lg mb-4">${product.price}</p>
//                     <p className="text-gray-600">{product.description}</p>
//                 </div>
//                     )
//                 })}
//                     {/* <Image src={} alt={} width={400} height={400} className="object-cover w-full h-full" /> */}
//                 </div>
                
//             </div>
//         </div>
//     );
// };

// export default Description;
















"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

const Description: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    if(id) fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="p-8 text-gray-500 text-center">Loading product details...</p>;
  }

  return (
    <div className="container mx-auto p-8 bg-white">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        <div className="md:w-1/3">
          <img
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="object-cover "
          />
        </div>

        <div className="md:w-2/3 p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
          <p className="text-sm text-gray-500 bg-gray-100 inline-block px-3 py-1 rounded-full mb-4">
            {product.category}
          </p>
          <p className="text-gray-700 text-lg mb-4">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
