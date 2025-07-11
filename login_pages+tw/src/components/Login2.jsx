import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

import loginImg from '../assets/login.jpg'

export default function Login2() {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="" />
    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-4'>BRAND.</h2>
            <div className='flex justify-between py-8 relative' >
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' />Google</p>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' />Facebook</p>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Username</label>
                <input className='border relative bg-gray-100 p-2' type='text'></input>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2' type='password'></input>
            </div>
            <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign in</button>
            <p className='flex items-center'>
                <input className='mr-2 relative' type='checkbox'></input>Remember me
            </p>
            <p className='text-center mt-8'>Not a member? Sign up now</p>
        </form>
    </div>
    
    </div>


  )}