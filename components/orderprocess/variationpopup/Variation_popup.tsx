
"use client";

import React, { useState } from "react";
import { Item, Variations } from "../itemlistsdata/itemdata";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "@/context/CartContext";

interface VariationPopupProps {
    item: Item;
    onClose: () => void;
}

const Variation_popup: React.FC<VariationPopupProps> = ({ item, onClose }) => {

    const [selectedSize, setSelectedSize] = useState<number | null>(null);
    const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
    const { addtocart,total } = useCart();

    //toggle topping
    const handleToppingChange = (toppingName: string) => {
        setSelectedToppings(prev =>
            prev.includes(toppingName)
                ? prev.filter(t => t !== toppingName)
                : [...prev, toppingName]
        );
    };

    const handleSave = () => {
        if (selectedSize === null) {
            alert("Please select a size");
            return;
        }

        // 1. Get the selected size variation (like Small, Medium, or Large)
        const selectedVariation = item.variations[selectedSize]; // Example: 'Medium' pizza object

        // 2. Find and add up prices of all selected toppings
        const toppingsPrice = item.toppings
            .filter(topping => selectedToppings.includes(topping.name)) // Only keep toppings that were chosen
            .reduce((sum, topping) => sum + topping.price, 0); // Add their prices together

        // 3. Add pizza price and toppings price to get total price
        const totalPrice = selectedVariation.price + toppingsPrice; // The final answer

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
    <div className="bg-black/50 fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-black">
        <div className="w-[50%] h-[56%] flex flex-col bg-white gap-3 rounded-lg">
            <div className="flex items-center justify-between px-6 py-3 border-b-2 border-[#A5A5A5]">
                <span className="font-semibold text-lg">{item.name}</span>
                <button className="cursor-pointer" onClick={onClose}>
                    <RxCross2 className="text-[#868686] font-bold" />
                </button>
            </div>

            {/* Example: Show variations */}
            <div className="  px-4 ">
                <h3 className="font-medium ">Variations:</h3>
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

            <h3 className="font-medium px-3 mt-1 mb-2 ">Toppings:</h3>
            <div className="grid grid-cols-5 gap-3 px-2 border-b pb-5 border-[#A5A5A5]">
                {item.toppings.map((topping, index) => (
                    <div key={index} className="  ">
                        <div className="border-1 border-[#994D1C] rounded text-xs font-medium p-3  flex gap-2  items-center justify-between">
                            <div className="grid ">
                                <span>{topping.name}</span>
                                <span>₹{topping.price}</span>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    className="cursor-pointer"
                                    checked={selectedToppings.includes(topping.name)}
                                    onChange={() => handleToppingChange(topping.name)}
                                />
                            </div>
                        </div>


                    </div>
                ))}
            </div>

            <div className="flex gap-3 items-center justify-end px-3">

                <button className="border-1 border-[#994D1C] p-2 rounded text-sm px-3 cursor-pointer"
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
