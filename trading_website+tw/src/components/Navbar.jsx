import { useState } from 'react'
import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className='w-full h-[90px] bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
            <div>
                <h1 className='text-[var(--primary-blue)]'>DEFI</h1>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex text-white items-center'>
                    <li>Platform</li>
                    <li>Developers</li>
                    <li>Community</li>
                    <li>About</li>
                    <button className='ml-4'>Use Defi</button>
                </ul>
                
            </div>

            {/* Mobile Menu */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}

            </div>


            <div className={nav ? 'flex justify-center text-center w-full bg-black text-white absolute top-[90px] left-0': 'absolute left-[-100%]'}>
                <ul>
                    <li className='text-2xl'>Platform</li>
                    <li className='text-2xl'>Developers</li>
                    <li className='text-2xl'>Community</li>
                    <li className='text-2xl'>About</li>
                    <button className='m-8'>Use Defi</button>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar