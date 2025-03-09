import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    
    const {id} = useParams();
    // get data from albumsData through id
    const albumData = albumsData[id]
    const {playWithId} = useContext(PlayerContext)

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
      {/* Create 4 col, 3 if small screen */}
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><strong className='mr-4'>#</strong>Titile</p>
        <p>Album</p>
        <p className='hidden sm:block'>Data Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="clock" />
      </div>
      <hr />
      {/* show song in album */}
      {
        songsData.map((item,index)=>(
            <div onClick={() => {
              playWithId(item.id)
            }
            } key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                <p className='text-white'>
                    <strong className='mr-4 text-[#a7a7a7]'>{index + 1}</strong>
                    <img className='inline w-10 mr-5'src={item.image} alt="Song image" />
                    {item.name}
                </p>
                <p className='text-[15px]'>{albumData.name}</p>
                <p className='text-[15px] hidden sm:block'>5 days ago</p>
                <p className='text-[15px] text-center'>{item.duration}</p>
            </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum
