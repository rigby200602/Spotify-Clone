import React from 'react'
import { Routes,Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'

const Display = () => {
  return (
    <div>
      <div className='w-[100%] m-2 px-6 pt-4 rounded-sm bg-[#121212] text-white overflow-auto lg:w-[25%] lg:ml-0'>
        <Routes>
            <Route path='/' element={DisplayHome}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default Display
