import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img className='w-8 cursor-pointer bg-black rounded-2xl p-2' src={assets.arrow_left} alt="Arrow Left" />
          <img className='w-8 cursor-pointer bg-black rounded-2xl p-2' src={assets.arrow_right} alt="Arrow Right" />
        </div>
      </div>
    </>
  )
}

export default Navbar
