import React from 'react'

const SongItems = ({image,id,name,desc}) => {
    return (
    <div className='min-w-[180px] p-2 px-3 rounded-sm cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded-sm' src={image} alt="Song Image" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItems
