import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'

const App = () => {
  
  const {audioRef} = useContext();
  
  return (
    <div className='bg-black h-screen'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio preload='auto'></audio>
    </div>
  )
}

export default App
