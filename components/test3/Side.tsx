"use client"

import React, { useState, useEffect } from 'react'


interface product{
    id:string;
    category:string;
}

interface sideprops{
    onCategorySelect:(category:string)=>void
    
}

const Side: React.FC<sideprops> = ({onCategorySelect}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  
  useEffect(()=>{
    async function demo(){
        try{
            const fetchdata=await fetch("https://fakestoreapi.com/products")
            const data: product[] = await fetchdata.json()
            // Create a unique list of categories from the products
            const uniqueCategories = [...new Set(data.map(product => product.category))];            
            setCategories(uniqueCategories);
            
        }catch(error){
            console.log("Fetching error",error)
        }
    }
    demo()
  },[])

  const handleCategoryClick=(categoryName:string)=>{
    setActiveCategory(categoryName)
    onCategorySelect(categoryName)
  }
  
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-56 h-[85vh] flex-shrink-0 p-4 bg-white">
        <div className="h-full bg-[#994D1C] text-sm  rounded-lg overflow-y-auto no-scrollbar">
          <ul>
              {categories.map((categoryName) => {
                const isActive = activeCategory === categoryName;
                return (
                    <li
                  key={categoryName}
                  className={`
                    relative my-1
                    ${isActive ? "before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-7 before:bg-white before:rounded-r-sm" : ""}
                  `}
                >
                  <button
                    onClick={() => handleCategoryClick(categoryName)}
                    className={`w-full text-left px-4 py-3 rounded-lg  transition-colors duration-200 ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-white/70 hover:bg-white/10"
                    }`}
                  >
                  {categoryName}  
                  </button>
                </li>
                )
              })}
                
              
           
          </ul>
        </div>
      </div>

      
    </>
  )
}

export default Side;
