import React from 'react';
import readwithkam from "../assets/images/readwithkam.png";
import githubprojects from "../assets/images/githubprojects.png";

const Projects = () => {
  return (
    <div id='projects' className='section w-full py-[10rem] px-4 bg-black text-white'>
      <div className='max-w-[1180px] mx-auto mb-5'>
        <p className='text-[#00DED3] md:text-4xl sm:text-3xl text-2xl py-2 font-bold uppercase'>Projects</p>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, provident.</h1>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        {/* Github Projects */}
        <div className="gp relative overflow-hidden border-2 border-[#00DED3]/50 rounded-xl mx-5 md:text-4xl sm:text-3xl text-2xl">
          <a href="https://github.com/That1ProgrammerGuy" rel="noopener noreferrer" target="_blank">
            <img src={githubprojects} alt="Github Projects" className="w-full" />
          </a>
          {/* Hover effect */}
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
            Visit My Github Projects
          </div>
        </div>

        {/* ReadwithKam Website */}
        <div className="gp relative overflow-hidden border-2 border-[#00DED3]/50 rounded-xl mx-5 md:text-4xl sm:text-3xl text-2xl">
          <a href="https://readwithkam.netlify.app/index.html" rel="noopener noreferrer" target="_blank">
            <img src={readwithkam} alt="ReadwithKam Website" className="w-full" />
          </a>
          {/* Hover effect */}
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
            Visit My First Website
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;