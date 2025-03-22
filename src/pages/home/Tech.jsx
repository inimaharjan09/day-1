import React from 'react'
import { DiDart, DiGithub, DiGo, DiJava, DiJavascript, DiNodejs, DiPython, DiReact, DiRuby } from 'react-icons/di'

export default function Tech() {
  return (
    <div className='grid grid-cols-(--my-grid) justify-items-center'>
        <DiReact className='hover:scale-110 hover:text-blue-500 transition ease-out cursor-pointer duration-300 ' size={200} />
        <DiPython className='hover:scale-110 hover:text-yellow-500 transition ease-out cursor-pointer duration-300 ' size={200}/>
        <DiJavascript className='hover:scale-110 hover:text-orange-500 transition ease-out cursor-pointer duration-300 ' size={200}/>
        <DiNodejs className='animate-bounce'  size={200}/>
        <DiDart className='hover:scale-110 hover:text-brown-500 transition ease-out cursor-pointer duration-300 ' size={200}/>
        <DiJava className='hover:scale-110 hover:text-yellow-500 transition ease-out cursor-pointer duration-300 ' size={200}/>
        <DiGithub className='hover:scale-110 hover:text-yellow-500 transition ease-out cursor-pointer duration-300 ' size={200}/>
        <DiGo className='hover:scale-110 hover:text-yellow-500 transition ease-out cursor-pointer duration-300 ' size={200}/>
        <DiRuby className='hover:scale-110 hover:text-yellow-500 transition ease-out cursor-pointer duration-300 ' size={200}/>

        

        <SomeCompo>
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ex!</p>
        </SomeCompo>


    </div>
  )
}

function SomeCompo({ childern}){
// console.log(prop);
    return(
        <div>
            {childern}

        </div>
    )
}
