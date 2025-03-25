import React from 'react'
import Intro from './Intro'
import Tech from './Tech'
import Info from './Info'

//somes
export default function Home() {
  return (
    <div className='p-4 max-sm:bg-amber-600'>



      <Intro />
      <Tech />
      <Info />

    </div>
  )
}
