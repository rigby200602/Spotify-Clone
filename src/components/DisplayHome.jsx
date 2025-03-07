import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import DisplayItems from './DisplayItems'

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      {/* for album */}
      <div className='mb-4 '>
        <h1 className='my-5 font-bold text-2xl'>Feature Charts</h1>
        <div className='flex overflow-auto'>
          {/* for each item it will render 1 album, get data from albumsData */}
          {albumsData.map((item, index) =>
            <DisplayItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
          )}
        </div>
      </div>
      {/* biggest hit songs */}
      <div className='mb-4 '>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hit</h1>
        <div className='flex overflow-auto'>
          {/* for each item it will render 1 album, get data from songsData */}
          {songsData.map((item, index) =>
            <DisplayItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
          )}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
