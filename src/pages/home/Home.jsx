// import React from 'react';

// export default function Home() {
//   return (
//     <div className="p-10 flex items-center justify-center">
//       <div className="text-center">
//         <h2 className="text-4xl font-bold">Transfer Money Anytime, Anywhere</h2>
//         <p className="pt-2 text-gray-500 mt-2 max-w-xl mx-auto">
//           We want to provide a user-friendly experience with eye-catching design and develop products quickly with the ability to solve user problems.
//         </p>

//         {/* Container for the Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Card 1 */}
//           <div className="p-6 border-gray-500 border-opacity-100 rounded-lg overflow-hidden">
//             <div className="hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
//               <h1 className="text-xl font-semibold">Real Time Problem Solution</h1>
//               <p>
//                 Build your beautiful agency website with us that converts more visitors than other websites and has the ability to interact and rotate products to solve user problems.
//               </p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="p-6 border-gray-500 border-opacity-100 rounded-lg overflow-hidden">
//             <div className="hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
//               <h1 className="text-xl font-semibold">Safe & Secured Payments</h1>
//               <p>
//                 Build your beautiful agency website with us that converts more visitors than other websites and has the ability to interact and rotate products to solve user problems.
//               </p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="p-6 border-gray-500 border-opacity-100 rounded-lg overflow-hidden">
//             <div className="hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
//               <h1 className="text-xl font-semibold">Customer Support 24/7</h1>
//               <p>
//                 Build your beautiful agency website with us that converts more visitors than other websites and has the ability to interact and rotate products to solve user problems.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
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