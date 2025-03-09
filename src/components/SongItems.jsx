import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItems = ({image,id,name,desc}) => {
  // play choosen song
  const {playWithId} = useContext(PlayerContext)
  
  return (
    <div onClick={() => {
      playWithId(id)
    }} className='min-w-[180px] p-2 px-3 rounded-sm cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded-sm' src={image} alt="Song Image" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItems
