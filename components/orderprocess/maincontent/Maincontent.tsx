"use client";

import React, { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { items as allitems, Item } from "@/components/orderprocess/itemlistsdata/itemdata";
import { useCart } from "@/context/CartContext";
import Variation_popup from "@/components/orderprocess/variationpopup/Variation_popup";
// Assuming other imports are correct...

// ... (Your categories object remains the same)

const categories: Record<string, string[]> = {
 beverages: ["Coke", "Pepsi", "Sprite", "Cold Coffee"],
 "new-pizza-lovers": ["Veggie Delight", "Cheese Burst", "Paneer Tandoori"],
 "premium-pizza": [
  "Classic Margherita",
  "Signature Paradise Pizza",
  "Supreme Corn Cheese",
  "Supreme Garden Fresh",
  "Signature Paneer Makhani",
  "Premium Tandoori Paneer",
 ],
 "signature-pizza": [
  "Paneer Maharaja Pizza",
  "Paneer Overload",
  "Cheese Feast",
  "Signature Peri Peri Chicken Pizza",
 ],
 "supreme-pizza": [
  "Veggie Supreme",
  "Non-Veg Supreme",
  "Paneer Veggie Supreme",
  "Cheese Veggie Supreme",
 ],
 "classic-pizza": [
  "Onion Pizza",
  "Capsicum Pizza",
  "Pizza Margherita",
  "Margherita Pizza",
 ],
 combo: ["Meal for 2", "Meal for 4"],
 "burger-meals": ["Chicken Burger", "Classic Burger", "Cheese Burger", "Veg Burger"],
 "delicious-sides": ["Garlic Bread", "Choco Lava Cake"],

 "triple-treat-meal":["Veg" , "Non-Veg"],
 "special-pizza-magic-mania":["Special Pizza Magic Mania"],
 "double-pizza-magic-mania":["Double Pizza Magic Mania"],
 "single-pizza-magic-mania":["Single Pizza Magic Mania"]
};

const Maincontent: React.FC = () => {
    const params = useParams();
    const category = params.category as string;
    const items = categories[category] || [];

    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const { searchterm } = useCart();

    const filteredItem = useMemo(() => {
        if (!searchterm.trim()) {
            return items;
        }
        return items.filter(item =>
            item.toLowerCase().includes(searchterm.toLowerCase())
        );
    }, [items, searchterm]);

    const findItem = (name: string): Item | undefined =>
        allitems.find((i) => i.name === name);

    return (
        <>
            <div className="flex-1 p-4 h-full">
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredItem.map((itemName) => (
                        <div
                            key={itemName}
                            // Yeh brown background div hai, jo white button ke peeche hai
                            // className="relative w-full aspect-[16/10] bg-[#8B4513] rounded-2xl shadow-md"
                            className="relative w-full aspect-[18/10]"
                        >
                            <div className="absolute inset-0 bg-[#8B4513] rounded-xl rounded-tr-[7px] shadow-md translate-y-1.5"></div>
                            {/* Yeh white button hai jo brown div ke upar hai */}
                            <button
                                onClick={() => {
                                    const found = findItem(itemName);
                                    if (found) {
                                        setSelectedItem(found);
                                    }
                                }}
                                className="absolute inset-0 border-1 border-[#8B4513] bg-white rounded-xl rounded-tr-[50px] flex items-center justify-center text-center  font-medium text-black text-md p-2 cursor-pointer"
                            >
                                {itemName}
                            </button>
                        </div>
                    ))}
                </div>

                {selectedItem && (
                    <Variation_popup
                        item={selectedItem}
                        onClose={() => setSelectedItem(null)}
                    />
                )}
            </div>
        </>
    );
};

export default Maincontent;