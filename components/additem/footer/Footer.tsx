import React from 'react'

const Footer = () => {
    return (
        <div className="flex justify-center md:justify-end pb-4 px-9 gap-4">
            <button className="bg-[#A85916] text-white px-5 py-2 rounded-md cursor-pointer whitespace-nowrap text-[13px]">
                Save & Exit
            </button>
            <button className="border border-[#A85916] text-[#A85916] px-5 py-2 rounded-md cursor-pointer whitespace-nowrap
                    font-medium text-[13px] ">
                Save & Add Menu Items
            </button>
        </div>
    )
}

export default Footer
