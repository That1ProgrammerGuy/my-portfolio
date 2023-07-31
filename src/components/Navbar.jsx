import React, {useState} from "react";
import {IoMdClose,IoMdMenu} from 'react-icons/io'

const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false)

        const handleMenu = () => {
            setIsOpen(!isOpen)
        }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Projects</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleMenu} className='block md:hidden'>
                {isOpen ? <IoMdClose className='text-3xl cursor-pointer'/> : <IoMdMenu className='text-3xl cursor-pointer'/>}
            </div>
            <div className={isOpen ? 'fixed left-0 top-0 w-{60%} h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-8'>React.</h1>
                    <ul className='p-4 uppercase'>
                        <li className='p-4 border-b border-gray-600'>Home</li>
                        <li className='p-4 border-b border-gray-600'>About</li>
                        <li className='p-4 border-b border-gray-600'>Projects</li>
                        <li className='p-4'>Contact</li>
                    </ul>
            </div>
        </div>
    )
}

export default Navbar;