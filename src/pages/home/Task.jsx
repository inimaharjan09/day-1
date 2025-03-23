import React from 'react'

export default function Task() {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white p-10 md:p-20 grid md:grid-cols-2 gap-10 items-center">
    <div className="max-w-2xl text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Streamline your Tailwind CSS projects</h1>
      <p className="text-lg text-gray-600 mt-4">
        Expertly made, responsive, accessible components in React and HTML ready to be used on your website or app. Just copy and paste them on your Tailwind CSS project.
      </p>
      <div className="flex items-center mt-6 text-gray-700 space-x-4">
        <span className="flex items-center"><span className="mr-1">📦</span> 42 Components</span>
        <span className="flex items-center"><span className="mr-1">📦</span> 952 Variations</span>
        <span className="flex items-center"><span className="mr-1">🎨</span> 21 Colors</span>
      </div>
      <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all">
        Explore components →
      </button>
    </div>
    <div className="flex justify-center">
      <img src="/src/assets/undraw.png" alt="Illustration" className="w-80 md:w-96" />
    </div>
  </div>
);
}
