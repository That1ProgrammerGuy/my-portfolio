import React from "react";
import myphoto from "../assets/images/myphoto.png";
import {Link} from 'react-scroll'
import {BsLinkedin, BsGithub} from 'react-icons/bs'


const About = () => {
  return (
    <div className="section w-full h-[800px] bg-white text-black py-16 px-4 justify-center items-center" id='about'>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div>
          <img className='rounded-full w-[400px] mx-auto my-4' src={myphoto}  alt="John Kenneth Gamora" />
            <div className="flex text-4xl justify-center">
              <a href="https://www.linkedin.com/in/jkgamora/" rel="noopener noreferrer" target="_blank" className="mx-4 my-4 text-blue-500 hover:text-blue-600">
                <BsLinkedin />
              </a>
              <a href="https://github.com/That1ProgrammerGuy" rel="noopener noreferrer" target="_blank" className="mx-4 my-4 text-gray-500 hover:text-gray-600">
                <BsGithub />
              </a>
            </div>
          </div>
        <div className="flex flex-col justify-center">
          <p className='text-[#00DED3] md:text-5xl sm:text-4xl text-3xl py-2 font-bold uppercase '>About Me</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>John Kenneth Gamora</h1>
          <p>I am an enthusiastic aspiring programmer, video editor and gamer, eager to explore the limitless possibilities of the digital realm!</p>
          <button className='bg-black text-[#00DED3] w-[200px] rounded-xl font-bold my-6 mx-auto md:mx-0 py-3'>
          <Link to="contact" smooth>Contact Me</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
