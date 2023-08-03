import React from 'react'
import Typed from 'react-typed'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div className='section text-white' id='home'>
        <div className='m-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <Typed className='md:text-6xl sm:text-4xl text-2xl text-[#00DED3] font-bold p-2 ' 
            strings ={['Hello and Welcome']}
            typeSpeed={40} showCursor={false}/>
          <Typed className='md:text-5xl sm:text-3xl text-1xl font-bold md:py-6' 
            strings = {['^2000 I am John Kenneth Gamora']}
            typeSpeed={40} showCursor={false}/>
            <div className='flex justify-center items-center'>
              <Typed className='md:text-5xl sm:text-4xl text-2xl font-bold py-4' 
                strings = {['^4000An aspiring']} 
                typeSpeed={60} showCursor={false}/>
              <Typed className='md:text-5xl sm:text-4xl text-2xl font-bold md:pl-4 pl-2 text-[#00DED3]' 
                strings={['^5000Front-end Developer','Back-end Developer' , 'Video Editor', 'Game Developer', 'Software Engineer']} 
                startDelay={200} 
                typeSpeed={40} 
                backSpeed={40}
                showCursor={false}
                loop/>
            </div>
            <button className='bg-[#00DED3] text-black w-[200px] rounded-xl font-bold my-6 mx-auto py-4'><Link to="contact">Contact Me</Link></button>
        </div>
    </div>
  )
}

export default Hero