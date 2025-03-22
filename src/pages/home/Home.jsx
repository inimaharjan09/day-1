import React from 'react'
import Intro from './Intro'
import Tech from './Tech'
import Info from './Info'
import Footer from './Footer'
// import { NavLink, Outlet } from 'react-router'

export default function Home() {
  return (
    <div className=''>
    {/* <h1 className='text-primary text-x1 h-[200px] w-[100px] border-2 border-amber-500 animate-myAni'>Hello WORLD</h1> */}

      <Intro />
      <Tech />
      <Info/>
      <Footer/>
      
    </div>
  )
}