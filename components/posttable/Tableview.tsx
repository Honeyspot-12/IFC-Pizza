
"use client"

import React, { useState } from 'react'
import SettleSave from './settle&save/SettleSave';
import Header from './header/Header';
import TableInfo from './table-info/TableInfo';
import TableGrid from './table-grid/TableGrid';

const Tableview = () => {
    const [gtable, setGtable] = useState(Array.from({ length: 22 }, (_, i) => i + 1))
    const [stable, setStable] = useState(Array.from({ length: 11 }, (_, i) => i + 1))
    // const [showSettleSavePopup, setShowSettleSavePopup] = useState<boolean>(false)
    const [table3, setTable3] = useState<number[]>([3])
    const [table4, setTable4] = useState<number[]>([4])

    return (
        <div className='h-full bg-white w-full'>
            <Header />
            <TableInfo />
            <TableGrid tables={gtable} table3={table3} table4={table4} floor="GROUND FLOOR" />
            <TableGrid tables={stable} table3={[]} table4={[]} floor="SECOND FLOOR" />
            {/* {showSettleSavePopup && <SettleSave setshowprop={setShowSettleSavePopup} />} */}

        </div>
    )
}

export default Tableview