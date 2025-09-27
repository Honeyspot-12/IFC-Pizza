"use client";

import React from 'react';
import { useTables } from '@/context/TableContext';
import { useRouter } from 'next/navigation';

const PostTablePage: React.FC = () => {
  const { tables } = useTables();
  const router = useRouter();

  const handleTableClick = (tableId: string) => {
    router.push(`/orderprocess/beverages?table=${tableId}`);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Table Status</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tables.map((table) => (
          <div
            key={table.id}
            onClick={() => handleTableClick(table.id)}
            className={`p-4 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 ${
              table.status === 'occupied' ? 'bg-yellow-400' : 'bg-green-400'
            }`}
          >
            <h2 className="text-xl font-bold text-white text-center">Table {table.id}</h2>
            {table.status === 'occupied' && (
              <div className="mt-4 text-center text-white">
                <p className="font-semibold">Price: ₹{table.totalPrice?.toFixed(2)}</p>
                <p className="text-sm">Time: {table.orderTime}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostTablePage;