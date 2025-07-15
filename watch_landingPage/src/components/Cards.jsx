import React from 'react'

import prod1 from '../assets/prod1.jpg'
import prod2 from '../assets/prod2.jpg'
import prod3 from '../assets/prod3.jpg'
import Carousel from './Carousel'

const Cards = () => {

    const prod = [
        prod1,
        prod2,
        prod3,
    ]
  return (          
    <div className='relative w-full min-h-screen overflow-hidden
      bg-[#f5f3ef]'>
        <div className='min-h-screen w-full grid md:grid-cols-2'>
            
            <div className='flex w-full justify-center items-center '>
                
                <Carousel autoSlide={true} autoSlideInterval={4000}>
                    {prod.map((p) => (
                        <img src={p} />
                    ))}
                </Carousel>
            </div>
            
            <div className='h-full items-center md:items-start flex flex-col justify-center'>
                <p className='text-black font-bold '>Our universe</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> We select the most exclusive watches</h1>
                <p className='w-[85%] lg:w-[70%]'>From sleek and modern designs to classic and timeless styles, our diverse offering has something for every taste and occasion. Whether you're dressing up for a special event or adding the finishing touch to your everyday outfit, our watches will elevate your look and make a lasting impression. Check out our pieces and start creating memories with one of our exquisite timepieces today.</p>
                <button className='text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>Go to Shop</button>
            </div>
        </div>
    </div>
  )
}
               

export default Cards