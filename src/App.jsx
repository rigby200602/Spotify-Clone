import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'

const App = () => {
  return (
    <div className='bg-black h-screen'>
      <div className='h-[90%]'>
        <Sidebar/>
      </div>
      <Player/>
    </div>
  )
}

export default App
