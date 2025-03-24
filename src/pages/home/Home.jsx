import React, { useState } from 'react'

export default function Home() {
    // let count=0;
    const [count, setCount] = useState(1);

    const handleIncrement =()=>{
        // count++;
        //count=9;
        setCount((count) => count + 1);
        // console.log(count);
    };
    const handleDecrement =()=>{
        // count++;
        //count=9;
        setCount((count) => count - 1);
        // console.log(count);
    };
    
    // console.log('render');
    // console.log(count);
  return (
    <div className='p-4 flex gap-10'>
        <h1>{count}</h1>
        <button onClick={handleIncrement} className='bg-black text-white px-2 py-1 cursor-pointer'>Increment</button>
        <button onClick={handleDecrement} className='bg-black text-white px-2 py-1 cursor-pointer'>Decrement</button>
      
    </div>
  )
}
