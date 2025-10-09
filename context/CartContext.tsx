

// // cart context kese banaye

// "use client"

// import React from "react";
// import { createContext,useContext,useState} from "react";

// export interface cartitem{
//   id:string;
//   name:string;
//   variation:string;
//   size:string;
//   topping:string[];
//   qty:number;
//   price:number;

// }

// interface cartcontexttype{
//   cart:cartitem[];
//   addtocart:(item:cartitem)=>void;
//   removeFromCart:(id:string)=>void;
//   total:number;
//   increase:(id:string,change:number)=>void;
//   decrease:(id:string,change:number)=>void;
//   searchterm:string;
//   setSearchterm:(item:string)=>void;
  
// }

// //context Banaya hai
// const cartcontext=createContext<cartcontexttype|undefined>(undefined);

// //context provider jo wrapper component hai
// export const CartProvider=({children}:{children:React.ReactNode})=>{
//   const [cart,setCart]=useState<cartitem[]>([])
//   const [searchterm, setSearchterm] = useState("");

//   const addtocart=(item:cartitem)=>{
//     setCart((prev)=>{
//       const existing=prev.find((i)=>i.id===item.id)
//       if(existing){
//         return prev.map((i)=>
//         i.id===item.id ? {...i,qty:i.qty+1}:i
//         )
//       }
//       return [...prev,item]
//     })
//   }


//   const removeFromCart=(item:string)=>{
//     setCart((prev)=>prev.filter((i)=>i.id!==item))
//   }

//   const total=cart.reduce((sum,i)=>sum+i.qty*i.price,0)

//   const increase=(id:string,change:number)=>{
//     setCart((prev)=>
//      prev.map((i)=>
//       i.id===id ?{...i,qty:i.qty+change}:i
//      )
//     )
//   }

//   const decrease=(id:string,change:number)=>{
//     setCart((prev)=>
//      prev.map((i)=>
//       i.id===id ? {...i,qty:i.qty-change}:i
//      )
//      .filter((i)=>i.qty>0)
//     )
//   }

//   return (
//     <cartcontext.Provider value={{cart,addtocart,removeFromCart,total,increase,decrease,searchterm,setSearchterm
//         }}>
//       {children}
//     </cartcontext.Provider>
//   )

// }

// export const useCart=()=>{
//   const context=useContext(cartcontext)
//   if(!context) throw new Error("context error")
//   return context;
// }









"use client"

import React from "react"
import { createContext,useContext,useState } from "react"

interface cartitem{
  id:string;
  name:string;
  variation:string;
  size:string;
  topping:string[]
  qty:number;
  price:number;
}

interface cartcontenttype{
  cart:cartitem[];
  addtocart:(item:cartitem)=>void;
  removeFromCart:(item:string)=>void;
  total:number;
  increase:(item:string,change:number)=>void
  decrease:(item:string,change:number)=>void;
  searchterm:string;
  setSearchterm:(item:string)=>void;
}

const cartcontext=createContext<cartcontenttype | undefined>(undefined)

export const CartProvider=({children}:{children:React.ReactNode})=>{
  const [cart,setCart]=useState<cartitem[]>([])
  const [searchterm,setSearchterm]=useState("")

  const addtocart=(item:cartitem)=>{
    setCart((prev)=>{
      const existing=prev.find((i)=>i.id===item.id)
      if(existing){
        return prev.map((i)=>
        i.id===item.id ? {...i,qty:i.qty+1}:i
        )
      }
      return [...prev,item]
    })
  }

  const removeFromCart=(item:string)=>{
    setCart((prev)=>prev.filter((i)=>i.id!==item))
  }

  const total=cart.reduce((sum,i)=>sum+i.qty*i.price,0)

  const increase=(item:string,change:number)=>{
    setCart((prev)=>
     prev.map((i)=>
     i.id===item? {...i,qty:i.qty+change}:i
    )
    )
  }

  const decrease=(item:string,change:number)=>{
    setCart((prev)=>
     prev.map((i)=>
      i.id===item ? {...i,qty:i.qty-change}:i
     )
     .filter((i)=>i.qty>0)
    )
  }

  return (
    <cartcontext.Provider value={{cart,addtocart,removeFromCart,total,increase,decrease,searchterm,setSearchterm}}>
      {children}
    </cartcontext.Provider>
  )
}

export const useCart=()=>{
  const context=useContext(cartcontext)
  if(!context) throw new Error("Context error")
  return context;
}

