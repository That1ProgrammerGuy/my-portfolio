import React, {useState} from "react";
import {IoMdClose,IoMdMenu} from 'react-icons/io'
import {TbSquareRoundedLetterG,TbSquareRoundedLetterJ,TbSquareRoundedLetterK} from 'react-icons/tb'
import {Link} from 'react-scroll'


const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false)

        const handleMenu = () => {
            setIsOpen(!isOpen)
        }
        return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <div id="webLogo" className="flex justify-between items-center h-24 max-w-[1240px] px-4 text-white">
                <TbSquareRoundedLetterJ className='text-6xl font-bold text-[#00DED3]'/>
                <TbSquareRoundedLetterK className='text-6xl font-bold text-[#00DED3]'/>
                <TbSquareRoundedLetterG className='text-6xl font-bold text-[#00DED3]'/>
                <h1 className='w-full text-3xl font-bold text-white'>amora</h1>
            </div>
            <ul className='cursor-pointer hidden md:flex'>
                <li className='p-4'><Link to="home">Home</Link></li>
                <li className='p-4'><Link to="about">About</Link></li>
                <li className='p-4'><Link to="projects">Projects</Link></li>
                <li className='p-4'><Link to="contact">Contact</Link></li>
                <button className='w-[150px] rounded-xl font-medium  bg-[#00DED3] text-[black] my-3 py-1'>
                    <Link to="contact">Contact Me</Link>
                </button>
            </ul>
            
            <div onClick={handleMenu} className='block md:hidden'>
                {isOpen ? <IoMdClose className='text-3xl cursor-pointer'/> : <IoMdMenu className='text-3xl cursor-pointer'/>}
            </div>
            <div className={isOpen ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <div id="webLogo" className="flex justify-between items-center h-24 max-w-[1240px] px-4 text-white">
                    <TbSquareRoundedLetterJ className='text-6xl font-bold text-[#00DED3]'/>
                    <TbSquareRoundedLetterK className='text-6xl font-bold text-[#00DED3]'/>
                    <TbSquareRoundedLetterG className='text-6xl font-bold text-[#00DED3]'/>
                    <h1 className='w-full text-3xl font-bold text-white'>amora</h1>
                </div>
                    <ul className='cursor-pointer md:flex p-4 uppercase mx-auto'>
                        <li className='p-4 border-b border-gray-600'><Link to="home">Home</Link></li>
                        <li className='p-4 border-b border-gray-600'><Link to="about">About</Link></li>
                        <li className='p-4 border-b border-gray-600'><Link to="projects">Projects</Link></li>
                        <li className='p-4 border-b border-gray-600'><Link to="contact">Contact</Link></li>
                    </ul>
            </div>
        </div>
    )
}

export default Navbar;