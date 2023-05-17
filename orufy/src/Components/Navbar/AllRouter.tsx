import React from 'react'
import Home from '../Home/Home'
import { Routes,Route } from 'react-router-dom'

function AllRouter() {
  return (
    <div>
      <Routes>
            <Route path="/" element={<Home/>}></Route>
            {/* <Route path="" element={/}></Route>
            <Route path="" element={/}></Route>
            <Route path="" element={/}></Route> */}
      </Routes>
    </div>
  )
}

export default AllRouter