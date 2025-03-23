// import React from 'react'

// export default function Home() {
//   return (
//     <div className='p-10 flex items-center justify-center'>
//       <div className='text-center'>
//       <h2 className='text-4xl font-bold'>Transfer Money Anytime, Anywhere</h2>
//       <p className='pt-2 text-gray-500 mt-2 max-w-xl mx-auto'>We want to provide a user friendly experience with the eyes capture design and develop product quickly with the ability to solve user problems.</p>

//       <div className='grid grid-cols-1 md:grid-cols-2'>
//         <div>
//           <span className=''></span>
//         </div>
//         <h3></h3>
//       </div>
//     </div>
//     </div>
//   )
// }


import React from 'react'
import Intro from './Intro'
import Tech from './Tech'
import Info from './Info'
import Task from './Task'
// import { NavLink, Outlet } from 'react-router'

export default function Home() {
  return (
    <div className='p-4'>

      {/* <div className='h-[400px] w-[400px] border-2'>

        <svg viewBox='0 0 300 300'>
          <rect x={10} y={10} height={100} width={100} fill='red' stroke='black'></rect>
          <rect x={100} y={100} height={100} width={100} fill='blue' ></rect>
          
        </svg>


      </div> */}
    {/* <h1 className='text-primary text-x1 h-[200px] w-[100px] border-2 border-amber-500 animate-myAni'>Hello WORLD</h1> */}

      <Intro />
      <Tech />
      <Info/>

      {/* <Task/> */}
      
    </div>
  )
}