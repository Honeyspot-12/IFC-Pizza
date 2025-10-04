
import React from 'react'
import { MdOutlineTableBar } from 'react-icons/md'
import { RiNewspaperLine } from 'react-icons/ri'
import { LuEye } from 'react-icons/lu'
import { useRouter } from 'next/navigation';

interface TableGridProps {
    tables: number[];
    table3: number[];
    table4: number[];
    floor: string;
}

const TableGrid: React.FC<TableGridProps> = ({ tables, table3, table4, floor }) => {
    const Router = useRouter()

    return (
        <div className='font-medium'>
            <div className='flex '>
                <span className='border-3 border-[#A85916] mt-5 mb-1 ml-4'></span>
                <h3 className='text-black ml-2 mt-4 font-medium text-[15px]'>{floor}</h3>
            </div>

            <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-11 gap-4 text-black mx-4 mt-6 mb-5 ' >
                {tables.map((num) => (
                    <button
                        key={num}
                        className={`rounded-md cursor-pointer ${table3.includes(num)
                                ? 'bg-[#328E6E] text-white p-2 text-sm text-center'
                                : table4.includes(num)
                                    ? "bg-[#FEBA17] text-white p-2 text-sm text-center"
                                    : 'bg-[#F7EFE8] text-[#A85916] border-1 border-[#A85916] border-dashed p-[18px] py-[28px] grid justify-center items-center text-sm'
                            } 
                        `

                        }
                        onClick={() => Router.push(`/orderprocess?table=${num}`)}
                    >
                        {table3.includes(num) ? (
                            <div className='relative'>
                                <div className="flex flex-col mb-3">
                                    <span className="font-medium">Table {num}</span>
                                    <span>15 Min</span>
                                    <span className='font-medium'>₹2798.00</span>
                                </div>
                                <div className='absolute top-15 left-1/2 -translate-x-1/2 flex justify-center items-center w-8 h-8 border-2 border-white rounded-full bg-[#328E6E]'>
                                    <RiNewspaperLine className='w-5 h-5' />

                                </div>
                            </div>

                        ) : table4.includes(num)
                            ? (
                                <div className='relative'>
                                    <div className='flex flex-col mb-3'>
                                        <span className='font-medium'>Table {num}</span>
                                        <span>2 Min</span>
                                        <span className='font-medium'>₹476.00</span>
                                    </div>
                                    <div className='absolute top-15 left-1/2 -translate-x-1/2 flex justify-center items-center w-8 h-8 border-2 border-white rounded-full bg-[#FEBA17]'>
                                        <LuEye className='w-5 h-5' />
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div className='flex flex-col items-center'>
                                    {/* <MdOutlineTableBar className="ml-5" /> */}
                                    <img src="/table.svg" alt=""  
                                    className='w-5 h-5'
                                    />
                                    <span>Table {num}</span>
                                </div>
                            )}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default TableGrid
