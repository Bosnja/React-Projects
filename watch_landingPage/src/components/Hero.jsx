import React, { useState , useEffect } from 'react'
import { ReactTyped } from 'react-typed'
import { motion } from "motion/react"

import watch1 from '../assets/watch1.jpg'
import watch2 from '../assets/watch2.jpg'
import watch3 from '../assets/watch3.jpg'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);

  
  
  
  const images = [
  watch1,
  watch2,
  watch3,
];

  const line1 = "Make every second count and"
  const line2 = "create lasting memories"
  const shop = "Go to Shop"
  
  const sentence = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.05
      }
    }
  }

  const letter = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0
    }
  }

  const buttonVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8, 
      duration: 0.3
    }
  }
};

  useEffect(() => {
    const timer = setInterval(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex(prev => (prev + 1) % images.length);
      setTimeout(() => setPreviousIndex(null), 1000);
    }, 10000)
    return () => clearInterval(timer);
  }, [currentIndex]);



  return (
    
    //nav
    <div>
      <div className='text-black montserrat justify-between items-center h-24 mx-auto px-4 absolute w-full z-20 bg-transparent text-center' >
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
      </div>



    <div className='relative w-full h-[100vh] overflow-hidden'>
        {images.map((img, index) => (
          //<div className='absolute inset-0 bg-black/10 z-10'>
        <img key={index} src={img} alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 
            ${(index === currentIndex || index === previousIndex) ? "opacity-100 z-10 zoom" : "opacity-0 z-0"}`}/>
            //</div>
         ))}

        <div className='w-full h-screen flex justify-center items-center flex-col text-black montserrat px-4 text-center md:text-5xl sm:text-4xl text-4xl '>
            
            <motion.h3 className='z-10 montserrat md:pl-4 pl-2 mt-4 bordered-text lg:text-6xl md:text-5xl sm:text-4xl' variants={sentence} initial="hidden" animate="visible" >
              {line1.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                    </motion.span>
                )
              })}
              <br />
              {line2.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                    </motion.span>
                )
              })}
            </motion.h3>

            <motion.button className='z-10 montserrat md:pl-4 mt-4 text-lg md:text-xl lg:text-2xl pt-10' variants={buttonVariant} initial="hidden" animate="visible" >
                {shop.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                    </motion.span>
                )
              })}
              </motion.button>

            
        </div>
        </div>
    </div>
  )
}

export default Hero