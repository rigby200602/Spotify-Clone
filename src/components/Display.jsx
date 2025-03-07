import React from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { useRef } from 'react'

const Display = () => {
  
  const displayRef = useRef();
  // get location
  const location = useLocation();
  // check if album size or not
  const isAlbum = location.pathname.includes('album');
  

  return (
      <div ref={displayRef} className='w-full h-[96%] m-2 px-6 pt-4 rounded-sm bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<DisplayHome/>}></Route>
            <Route path='/album/:id' element={<DisplayAlbum/>}></Route>
        </Routes>
      </div>
  )
}

export default Display
