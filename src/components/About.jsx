import React from "react";
import myphoto from "../assets/images/myphoto.png";
import {Link} from 'react-scroll'


const About = () => {
  return (
    <div className="section w-full h-[800px] bg-white text-black py-16 px-4 justify-center items-center" id='about'>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='rounded-full w-[400px] mx-auto my-4' src={myphoto}  alt="John Kenneth Gamora" />
        <div className="flex flex-col justify-center">
          <p className='text-[#00DED3] md:text-5xl sm:text-4xl text-3xl py-2 font-bold uppercase '>About Me</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>John Kenneth Gamora</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ab provident architecto tempore? Distinctio obcaecati nobis, mollitia, est cumque quae quos, quaerat perspiciatis exercitationem ex possimus reiciendis ea odio sequi!</p>
          <button className='bg-black text-[#00DED3] w-[200px] rounded-xl font-bold my-6 mx-auto md:mx-0 py-3'>
          <Link to="contact">Contact Me</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
