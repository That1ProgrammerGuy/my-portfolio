import React from 'react'
import readwithkam from "../assets/images/readwithkam.png";
import githubprojects from "../assets/images/githubprojects.png";

const Projects = () => {
  return (
    <div id='projects' className='section w-full py-[10rem] px-4 bg-black text-white' >
      <div className='max-w-[1180px] mx-auto mb-5'>
      <p className='text-[#00DED3] md:text-4xl sm:text-3xl text-2xl py-2 font-bold uppercase'>Projects</p>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, provident.</h1>
      </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
        <div className='gp flex flex-col overflow-hidden border-2 border-[#00DED3]/50 justify-center rounded-xl mx-5 md:text-4xl sm:text-3xl text-2xl'>
          <a href='https://github.com/That1ProgrammerGuy' target='_blank'>
            <img src={githubprojects} alt='Github Projects' className='w-full'></img>
          </a>
            {/* <div className='gp-hover:bg-black/70 w-full h-full absolute top-0 left-0 transition-all duration-300'></div>  */}
          </div>
          <div className='gp flex flex-col overflow-hidden border-2 border-[#00DED3]/50 justify-center rounded-xl mx-5 md:text-4xl sm:text-3xl text-2xl'>
            <a href='https://readwithkam.netlify.app/index.html' target='_blank'>
              <img src={readwithkam} alt='ReadwithKam Website' className='w-full'></img>
            </a> 
        </div>
      </div>
    </div>
  )
}

export default Projects