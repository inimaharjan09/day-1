import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(1);

  const increment = () => setCount(Count => Count + 1);
  const decrement = () => setCount(Count => Count - 1);
  const reset = () => setCount(0);
  console.log(count);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="text-3xl font-semibold mb-4">Count: {count}</div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white disabled:bg-gray-400"
          
        >
          -
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white"
        >
          +
        </button>
      </div>
      
    </div>
  );
}
