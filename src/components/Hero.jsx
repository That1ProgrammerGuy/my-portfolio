import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='m-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <Typed className='md:text-4xl sm:text-3xl text-1xl text-[#00DED3] font-bold p-2 ' 
            strings ={['Hello and Welcome']}
            typeSpeed={40} showCursor={false}/>
            <Typed className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6' 
            strings = {['^2000 I am John Kenneth Gamora']}
            typeSpeed={40} showCursor={false}/>
            <div className='flex justify-center items-center'>
                <Typed className='md:text-5xl sm:text-4xl text-2xl font-bold' 
                strings = {['^4000An aspiring']} 
                typeSpeed={60} showCursor={false}/>
                <Typed className='md:text-5xl sm:text-4xl text-2xl font-bold md:pl-4 pl-2 text-[#00DED3]' 
                strings={['^5000Front-end Developer','Back-end Developer' , 'Video Editor', 'Game Developer', 'Software Engineer']} 
                startDelay={200} typeSpeed={40} backSpeed={40}
                loop/>
            </div>
        </div>
    </div>
  )
}

export default Hero