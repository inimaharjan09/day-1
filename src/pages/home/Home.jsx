// import { useState } from "react";

// export default function CounterApp() {
//   const [count, setCount] = useState(1);

//   const increment = () => setCount(Count => Count + 1);
//   const decrement = () => setCount(Count => Count - 1);
//   const reset = () => setCount(0);
//   console.log(count);

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
//       <div className="text-3xl font-semibold mb-4">Count: {count}</div>
//       <div className="flex gap-2 mb-4">
//         <button
//           onClick={decrement}
//           className="px-4 py-2 bg-red-500 text-white disabled:bg-gray-400"
          
//         >
//           -
//         </button>
//         <button
//           onClick={reset}
//           className="px-4 py-2 bg-gray-500 text-white"
//         >
//           Reset
//         </button>
//         <button
//           onClick={increment}
//           className="px-4 py-2 bg-green-500 text-white"
//         >
//           +
//         </button>
//       </div>
      
//     </div>
//   );
// }

import { faker } from '@faker-js/faker';
import React from 'react'
import { useState } from 'react'

export default function Home() {

  const [users, setUsers] = useState([]);

  // const [show, setShow] = useState(false);
  // const handleShow =()=>{
  //   setShow((prev)=>!prev);
  // }

  const handleUser=()=>{

    const user={
      id:faker.string.ulid(),
      image: faker.image.avatarGitHub(),
      username: faker.internet.displayName(),
      email: faker.internet.email(),
      reaction: faker.internet.emoji()
    };
    setUsers((prev)=>[...prev, user]);
    
  }
  // console.log(users);

  return (
    <div className='p-5'>

      {/* <h1>{`${show}`}</h1>
      {show && <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, totam.</h2>} */}

      <button onClick={handleUser} className='bg-black text-white px-5 py-1 cursor-pointer'>Add User</button>
      {users.map((user)=>{
        return <div key={user.id} className='space-y-2 flex gap-7 items-start'>
          <div>
            <h2>{user.username}</h2>
            <img src={user.image} className='h-[200px]' alt="" />
          </div>

        </div>
      })}
      
    </div>
  )
}
