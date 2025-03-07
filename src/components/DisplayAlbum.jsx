import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/assets';

const DisplayAlbum = () => {
    
    const {id} = useParams();
    // get data from albumsData through id
    const albumData = albumsData[id]
    
    return (
    <>
      <Navbar/>
      <div className='flex mt-10 gap-8 flex-col md:flex-row md:items-end '>
        <img className='w-48 rounded-sm' src={albumData.image} alt="album image" />
        <div className='flex flex-col'>
            <p>Playlist</p>
            {/* get album name */}
            <h2 className='text-[5px] font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className='mt-1'>
                <img className='inline-block w-5 m-2' src={assets.spotify_logo} alt="logo" />
                <strong>Spotify</strong>
                . 1,232,085 likes
                . <strong>50 songs,</strong> about 2 hr 30 mins
            </p>
        </div>
      </div>
    </>
  )
}

export default DisplayAlbum
