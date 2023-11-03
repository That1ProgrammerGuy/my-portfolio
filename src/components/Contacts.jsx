import React from 'react'
import ucphoto from "../assets/images/underconstruction.png";

const Contacts = () => {
  return (
    <div className="section w-full h-[800px] bg-white text-black py-16 px-4 justify-center items-center" id='contact'>
      <div className="max-w-[1240px] mx-auto center">
        <img className='rounded-full w-[400px] mx-auto my-4' src={ucphoto}  alt="Under Construction by pngtree.com" />
      </div>
    </div>
  );
};

export default Contacts