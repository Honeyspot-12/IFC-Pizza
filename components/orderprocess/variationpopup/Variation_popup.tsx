"use client";

import React, { useState } from "react";
import { Item, Toppings } from "../itemlistsdata/itemdata";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "@/context/CartContext";

interface VariationPopupProps {
    item: Item;
    onClose: () => void;
}

const Variation_popup: React.FC<VariationPopupProps> = ({ item, onClose }) => {

    const [selectedSize, setSelectedSize] = useState<number | null>(null);
    const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
    const { addtocart } = useCart();


    //toggle topping
    // const handleToppingChange = (toppingName: string) => {
    //     setSelectedToppings(prev =>
    //         prev.includes(toppingName)
    //             ? prev.filter(t => t !== toppingName)
    //             : [...prev, toppingName]
    //     );
    // };

    const handleToppingChange=(toppingName:string)=>{
        setSelectedToppings(prev=>
            prev.includes(toppingName)
            ? prev.filter(t=>t!==toppingName)
            :[...prev,toppingName]
        )
    }

    // const getToppingPrice = (topping: Toppings, sizeIndex: number | null): number => {
    //     if (sizeIndex === null) {
    //         return topping.price;
    //     }

    //     const size = item.variations[sizeIndex].size;
    //     switch (size) {
    //         case 'Large':
    //             return topping.price * 2;
    //         case 'Medium':
    //             return topping.price + 15;
    //         default:
    //             return topping.price;
    //     }
    // };


    // 1. Get the selected size variation price, default to 0 if nothing is selected
    const basePrice = selectedSize !== null ? item.variations[selectedSize].price : 0;
    

    // 2. Find and add up prices of all selected toppings based on size
    const toppingsPrice = item.toppings
        .filter(topping => selectedToppings.includes(topping.name))
        // .reduce((sum, topping) => sum + getToppingPrice(topping, selectedSize), 0);
        .reduce((sum,topping)=>sum+topping.price,0)

    // 3. Add base price and toppings price to get total price
    const totalPrice = basePrice + toppingsPrice;

    const handleSave = () => {
        if (selectedSize === null) {
            alert("Please select a size");
            return;
        }
        const selectedVariation = item.variations[selectedSize]; // Example: 'Medium' pizza object

        // 4. Create a unique ID for the cart item
        const uniqueId = `${item.name}-${selectedVariation.size}-${selectedToppings.sort().join('-')}`;

        addtocart({
            id: uniqueId,
            name: item.name,
            variation: item.name,
            size: selectedVariation.size,
            topping: selectedToppings,
            price: totalPrice,
            qty: 1,
        });

        onClose(); // Close popup after adding to cart


    }

    return (
        <div className="bg-black/50 fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-screen text-black">
            <div className=" w-full lg:w-[50%] h-auto flex flex-col bg-white gap-3 rounded-lg py-2">
                <div className="flex items-center justify-between px-6 py-3 border-b-2 border-[#A5A5A5]">
                    <span className="font-medium text-sm">{item.name}</span>
                    <button className="cursor-pointer" onClick={onClose}>
                        <RxCross2 className="text-[#868686] font-bold" />
                    </button>
                </div>

                {/* Example: Show variations */}
                <div className="  px-5 ">
                    <h3 className="text-sm ">Variations</h3>
                    <div className="flex gap-3">
                        {item.variations.map((variation, index) => (
                            <div key={index} className="flex py-2">

                                <button
                                    onClick={() => setSelectedSize(index)}
                                    className={`cursor-pointer rounded px-4 py-2 text-xs font-medium ${selectedSize === index
                                        ? "bg-[#994D1C] text-white"
                                        : "border-1 border-[#994D1C] text-[#994D1C]"
                                        }`}
                                >
                                    {variation.size}@{variation.price}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <h3 className="text-sm px-5 mt-1 mb-2 ">Choose Your Toppings</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 px-5 border-b  pb-5 border-[#A5A5A5]">
                    {item.toppings.map((topping, index) => (
                        <div key={index} className="  ">
                            <div className="border-1 border-[#994D1C] h-full  rounded text-xs font-medium p-3  flex gap-2  items-center justify-between">
                                <div className="grid ">
                                    <span>{topping.name}</span>
                                    {/* <span>₹{getToppingPrice(topping, selectedSize)}</span> */}
                                    <span>₹{topping.price}</span>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 cursor-pointer appearance-none border border-[#994D1C] rounded-sm 
             checked:bg-[#994D1C] checked:border-[#994D1C] 
             relative
             before:content-['✓'] before:absolute before:text-white before:text-[12px] before:font-bold before:opacity-0 checked:before:opacity-100 items-center flex justify-center"
                                        checked={selectedToppings.includes(topping.name)}
                                        onChange={() => handleToppingChange(topping.name)}
                                    />
                                </div>
                            </div>


                        </div>
                    ))}
                </div>

                <div className="flex gap-3 items-center justify-end px-3">
                    <span className="text-sm">₹{totalPrice}</span>
                    <button className="border-1 border-[#363636] p-2 rounded text-sm px-3 cursor-pointer"
                        onClick={onClose}
                    >Cancel</button>
                    <button className="bg-[#994D1C] p-2 rounded text-sm text-white px-6 cursor-pointer "
                        onClick={handleSave}
                    >Save</button>
                </div>
            </div>
        </div>

    );
};

export default Variation_popup;