import React from 'react'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'


const Contact = () => {
  return (
        <div className='w-full mx-auto py-16 px-24 grid lg:grid-cols-3 gap-8 text-gray-500 bg-[#f5f3ef]'>
        <div className='lg:pt-0 md:pt-24'>
            <h2 className='w-full text-3xl font-bold text-gray-500'>It is all about passion</h2>
            <h3 className='w-full text-medium font-bold text-gray-500'>Let us help you to find the perfect timepiece</h3>
            <p2 className='py-4'><br />EMAIL or whatsapp US FOR ANY QUESTION​
                                info@firewatch.ba
                                +387 62 774 653
                                general sales conditions<br /><br />

                                ©2025 FiREWATCH.<br />
                                TVA TZ-193.611.367<br />
                                Tuzla, Bosnia and Herzegowina</p2>
            <div className='flex justify-between md:w-[75%] my-6 '>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6 ml-16 lg:pt-0 md:pt-24'>
            
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Sourcing</li>
                    <li className='py-2 text-sm'>Shipping</li>
                    <li className='py-2 text-sm'>Payments</li>
                    <li className='py-2 text-sm'>Sales Conditions</li>
                </ul>
        </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li> 
                </ul>
            </div>


        
    </div>
    </div>
  


  )
}

export default Contact