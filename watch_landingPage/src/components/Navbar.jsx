import { useState } from "react"
import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"


const Navbar = ({ visible }) => {
    const [nav, setNav] = useState(false);
  

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div
      className={`text-black montserrat justify-between items-center h-28 mx-auto px-4 w-full z-20 text-center
      fixed top-0 left-0 transition-transform duration-500 ${
        visible ? 'translate-y-0 opacity-100 bg-white shadow-md' : '-translate-y-full opacity-100 bg-white shadow-md'
      }`}
    >
        <h2 className='montserrat mt-4 font-bold text-2xl'>FiREWATCH.</h2>
        <ul className='hidden md:inline-flex lg:text-lg text-sm h-12'>
            <li className={`p-4 mx-1 cursor-pointer ${location.pathname === '/' ? 'border-b border-black ' : 'border-b border-transparent hover:border-black'}`}>
            <a href="/">Home</a></li>
            <li className={`p-4 mx-1 cursor-pointer ${location.pathname === '/shop' ? 'border-b border-black' : 'border-b border-transparent hover:border-black'}`}>
            <a href="/shop">Shop</a></li>
            <li className={`p-4 mx-1 cursor-pointer ${location.pathname === '/about' ? 'border-b border-black' : 'border-b border-transparent hover:border-black'}`}>
            <a href="/about">About</a></li>
            <li className={`p-4 mx-1 cursor-pointer ${location.pathname === '/contact' ? 'border-b border-black' : 'border-b border-transparent hover:border-black'}`}>
            <a href="/contact">Contact</a></li>
        </ul>
        <div onClick={handleNav} className="ml-[95%] my-[-40px] md:hidden"> 
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-{60%} h-full border-r border-r-gray-900 bg-gray-100 ease-in-out duration-500' : 'fixed left-[-100%]'} >
                    <h2 className='montserrat w-full text-3xl font-bold text-black mt-4 '>Menu</h2>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600 cursor-pointer'>Home</li>
                <li className='p-4 border-b border-gray-600 cursor-pointer'>Shop</li>
                <li className='p-4 border-b border-gray-600 cursor-pointer'>About</li>
                <li className='p-4 cursor-pointer'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

// create hover effects on menu, create a better mobile menu navigation, navigation appear from 2nd component, create smooth sliding effect from buttons,  