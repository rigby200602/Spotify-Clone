import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/assets';

const DisplayAlbum = () => {
    
    const {id} = useParams();
    // get data from albumsData through id
    const albumData = albumsData[id]
    
    return (
    <>
      <Navbar/>
      <div className='flex mt-10 gap-8 flex-col md:flex-row md:items-end '>
        <img src={albumData.image} alt="album image" />
      </div>
    </>
  )
}

export default DisplayAlbum
