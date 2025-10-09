import Header from '@/components/addcategory/header/Header'
import Categorylisting from '@/components/categorylisting/Categorylisting'
import Listheader from '@/components/itemlisting/listheader/Listheader'
import Searchbar from '@/components/itemlisting/listsearchbar/Searchbar'
import Topbar from '@/components/Topbar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white pb-7'>
        <Topbar/>
      <Categorylisting/>
    </div>
  )
}

export default page
