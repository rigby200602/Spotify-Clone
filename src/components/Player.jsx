import React from 'react'
import { assets, songsData } from '../assets/assets'

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      {/* Songs Info  */}
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={songsData[0].image} alt="Song image" />
        <div>
            <p>{songsData[0].name}</p>
            <p>{songsData[0].desc.slice(0,12)}</p>
        </div>
      </div>
      {/* Control icon  */}
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
            <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="Shuffle" />
            <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="Prev" />
            <img className='w-4 cursor-pointer' src={assets.play_icon} alt="Play" />
            <img className='w-4 cursor-pointer' src={assets.next_icon} alt="Next" />
            <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop" />
        </div>
      </div>
    </div>
  )
}

export default Player
