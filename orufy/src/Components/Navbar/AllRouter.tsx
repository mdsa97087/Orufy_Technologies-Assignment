import React from 'react'
import Home from '../Home/Home'
import { Routes,Route } from 'react-router-dom'
import Notification from '../Notification/Notification'
import Profile from '../Profile/Profile'
import Category from '../Category/Category'

function AllRouter() {
  return (
    <div>
      <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/category" element={<Category/>}></Route>
            <Route path="/notification" element={<Notification />}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRouter