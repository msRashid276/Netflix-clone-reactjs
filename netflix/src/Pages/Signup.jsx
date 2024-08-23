import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate()
  return (
    <>
        <div className='w-full h-screen'>
            
            <img className=' hidden sm:block object-cover w-full h-full absolute' src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-1200-80.jpg" alt="/" />
            <div className='fixed w-full h-screen bg-black/60 left-0 right-0'></div>
            <div className='w-full px-4 py-24 z-50 fixed '> 
                <div className='bg-black/75 max-w-[450px] mx-auto h-[600px]  text-white'>
                    <div className='max-w-[320px] py-16 mx-auto'>
                        <h1 className='text-3xl text-center font-bold'>Sign Up</h1>
                        <form action="" className='w-full flex flex-col py-4 justify-between'>
                        <input className='p-3 my-2 rounded bg-gray-700' type="text" placeholder='Your Name'/>
                            <input className='p-3 my-2 rounded bg-gray-700' type="text" placeholder='email'/>
                            <input className='p-3 my-2 rounded bg-gray-700' type="password" name="" id="" placeholder='password' />
                            <button className='bg-red-600 my-6 py-3 rounded font-bold' onClick={() => {navigate("/")}}>Sign Up</button>

                            <div className='flex justify-between items-center text-gray-600 text-sm'>
                                <p><input className='mr-2' type="checkbox" name="" id="" />Remember me</p>
                                <p>Need help?   </p>
                            </div>
                            <p className='py-8'><span className='text-gray-600'>Already subscribed to Netflix? </span>
                            <Link to='/signin'>Sign In
                            </Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup