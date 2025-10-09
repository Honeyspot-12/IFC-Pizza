// "use client"
// import React, { useState } from 'react'

// import Header from './header/Header';
// import Itemaddingsection from './itemaddingsection/Itemaddingsection';
// import Footer from './footer/Footer';

// const Cartsection: React.FC = () => {
//   const [showform, setShowform] = useState<boolean>(false);
  
//   return (
//     <>
//       <div className='hidden lg:block  col-span-4'>
//         <div className=" bg-white  border-l-2 border-[#A5A5A5] flex flex-col text-black h-full">
//           <Header showform={showform} setShowform={setShowform} />
//           <div className='flex-1 overflow-y-auto'>
//           <Itemaddingsection/>
//           </div>
//           <Footer setShowform={setShowform} />
//         </div>
//       </div>


//       {/* <Cart /> */}
//     </>
//   )
// }

// export default Cartsection






// "use client"
// import React, { useState } from 'react'
// import Header from './header/Header';
// import Itemaddingsection from './itemaddingsection/Itemaddingsection';
// import Footer from './footer/Footer';

// const Cartsection: React.FC = () => {
//   const [showform, setShowform] = useState<boolean>(false);
  
//   return (
//     <>
//       <div className='hidden lg:block col-span-4'>

//         <div className="bg-white border-l-2 border-[#A5A5A5] flex flex-col text-black h-full">
//           <Header showform={showform} setShowform={setShowform} />
          
//           <div className='overflow-y-auto h-[320px]'>
//             <Itemaddingsection />
//           </div>
//           <Footer setShowform={setShowform} />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Cartsection;











"use client"
import React, { useState } from 'react'
import Header from './header/Header';
import Itemaddingsection from './itemaddingsection/Itemaddingsection';
import Footer from './footer/Footer';

const Cartsection: React.FC = () => {
  const [showform, setShowform] = useState<boolean>(false);

  return (
    <>
      <div className='hidden lg:block col-span-4'>
        {/* 👇 Make this relative so Footer can be absolute inside it */}
        <div className="relative bg-[#f8f8f8] border-l-2 border-[#A5A5A5] flex flex-col text-black h-full">
          <Header showform={showform} setShowform={setShowform} />

          {/* Scrollable item area (give padding-bottom so footer doesn’t overlap content) */}
          <div className='overflow-y-auto h-[320px] pb-48'>
            <Itemaddingsection />
          </div>

          {/* Footer stays fixed inside this container */}
          <Footer setShowform={setShowform} />
        </div>
      </div>
    </>
  )
}

export default Cartsection;

