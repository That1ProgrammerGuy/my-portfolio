import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='m-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='md:text-4xl sm:text-3xl text-1xl text-[#00DED3] font-bold p-2 '>Hello and Welcome</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>I am John Kenneth Gamora</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-2xl font-bold'>An aspiring </p>
                <Typed className='md:text-5xl sm:text-4xl text-2xl font-bold md:pl-4 pl-2' 
                strings={['Front-end Developer','Back-end Developer' , 'Video Editor', 'Game Developer', 'Software Engineer']} 
                typeSpeed={60} 
                loop />
            </div>
        </div>
    </div>
  )
}

export default Hero