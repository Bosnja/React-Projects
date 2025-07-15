import React from 'react'
import prod1 from '../assets/prod1.jpg'
import prod2 from '../assets/prod2.jpg'

const Story = () => {
  return (
    <div className='w-full min-h-screen bg-white relative '>
            
            <div className='flex flex-col min-h-screen md:pt-16'>
                
                <div className='flex flex-col text-center justify-center h-full items-center montserrat'>
                    <p className='text-black font-bold pt-8'>Our story</p>
                    <h1 className=' font-bold py-2 '> Quality and diversity</h1>
                    <p className='w-[85%] lg:w-[70%]'>With Adonis Modern Watches, our mission is to provide our customers with the highest-quality luxury watches from the world's most renowned brands. We are dedicated to sourcing and trading the most sought-after, rare, and exclusive timepieces. We strive to offer a vast selection of watches, catering to a variety of preferences, styles, and budgets, to be the premier destination for discerning collectors and watch enthusiasts alike.</p>
                    <button className='text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>Our Story</button>
                </div>
                
                
                
                <div className='grid md:grid-cols-2'>
                    
                    <div className='relative h-[300px] md:h-[400px] m-4 '>
                        <img src={prod1} alt="/" className='w-full h-full object-cover ' />
                        <div className='absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4'>
                        <h2 className='text-2xl font-semibold'>Discover our vintage watches</h2>
                        <p className='mt-2 italic'>Veritas Vintage Watches &gt;</p>
                        </div>
                        
                    </div>

                    <div className='relative h-[300px] md:h-[400px] m-4 '>
                        <img src={prod2} alt="/" className='w-full h-full object-cover' />
                        <div className='absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4'>
                            <h2 className='text-2xl font-semibold'>Ask us for a specific request</h2>
                            <p className='mt-2 italic'>Contact us &rarr;</p>
                        </div>
                    </div>
                    
                    
                
                </div>
                
                
            </div>
        </div>
  )
}

export default Story