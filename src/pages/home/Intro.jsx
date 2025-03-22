import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Intro() {
  return (
    <div className='grid grid-cols-[1fr_1.7fr] items-center'>

      <div className='h-[450px] w-full object-cover'>
      <DotLottieReact
      src="https://lottie.host/8277e3d1-1dc2-45c6-ab89-57896aaf998a/pCHtfaKIhy.lottie"
      background="transparent"
      speed="1"
      loop
      autoplay
      
      />
      </div>
      <div>
        <h1 className='font-bold text-2xl'>Hi, I am INIMA</h1>
        <p className='text-pink-600 font-semibold'>Developer, Freelancer</p>
        <p className='text-gray-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quia quisquam quidem molestiae necessitatibus magni, sint sapiente. 
          Distinctio asperiores, quae delectus, nemo corrupti a magnam dolorem 
          illo praesentium incidunt tenetur sint!
        </p>
      </div>

      <div className='col-span-2 flex justify-center mt-6'>
        <h1 className='text-center text-4xl font-bold'>Technology Use</h1>
      </div>

    </div>
  );
}
