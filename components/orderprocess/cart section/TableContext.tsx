"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Table {
  id: string;
  status: 'available' | 'occupied';
  totalPrice?: number;
  orderTime?: string;
}

interface TableContextType {
  tables: Table[];
  updateTableStatus: (tableId: string, status: 'available' | 'occupied', totalPrice?: number) => void;
  getTable: (tableId: string) => Table | undefined;
}

// Initial state for 12 tables
const initialTables: Table[] = Array.from({ length: 12 }, (_, i) => ({
  id: `${i + 1}`,
  status: 'available',
}));

const TableContext = createContext<TableContextType | undefined>(undefined);

export const TableProvider = ({ children }: { children: ReactNode }) => {
  const [tables, setTables] = useState<Table[]>(initialTables);

  const updateTableStatus = (tableId: string, status: 'available' | 'occupied', totalPrice?: number) => {
    setTables(prevTables =>
      prevTables.map(table =>
        table.id === tableId
          ? {
              ...table,
              status,
              totalPrice: totalPrice !== undefined ? totalPrice : table.totalPrice,
              orderTime: status === 'occupied' ? new Date().toLocaleTimeString() : undefined,
            }
          : table
      )
    );
  };

  const getTable = (tableId: string) => {
    return tables.find(table => table.id === tableId);
  };

  return (
    <TableContext.Provider value={{ tables, updateTableStatus, getTable }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTables = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('useTables must be used within a TableProvider');
  }
  return context;
};
