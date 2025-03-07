import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
      {/* Left and right btn */}
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img className='w-8 cursor-pointer bg-black rounded-2xl p-2' src={assets.arrow_left} alt="Arrow Left" />
          <img className='w-8 cursor-pointer bg-black rounded-2xl p-2' src={assets.arrow_right} alt="Arrow Right" />
        </div>
        {/* explore, install, username */}
        <div className='flex items-center gap-4'>
          <p className='bg-white cursor-pointer text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block'>Explore Prenium</p>
          <p className='bg-black px-3 py-1 rounded-2xl cursor-pointer text-[15px]'>Install App</p>
          <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>D</p>
        </div>
      </div>
      {/* Show all, music or popcasts only */}
      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black rounded-2xl px-4 py-1 cursor-pointer'>All</p>
        <p className='bg-black py-1 px-4 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black py-1 px-4 rounded-2xl cursor-pointer'>Popcasts</p>
      </div>
    </>
  )
}

export default Navbar
