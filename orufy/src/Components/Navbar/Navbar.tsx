import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className='nav'>
      <div className='nav1Div'>
        <Link to="/">
          <img src="https://i.imgur.com/mKHibaP.png" alt="logo"
            width={90} /></Link>
        <div className='inputDiv'>
          <input className='navInput' type="text" placeholder='Search' />
          <img src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png" alt="" width={25} />
        </div>

      </div>
      <div className='nav1Div'>
        <Link style={{
          display: "flex",
          alignItems: 'center',
          gap: '8px'
        }} to="/category" ><img src="https://cdn-icons-png.flaticon.com/128/1828/1828075.png" alt="" width={30} height={20} /><span>Categories</span> </Link>
        <Link to="/notification"><svg width="30" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg></Link>
        <Link to="/profile"><img style={{
          borderRadius: "50%"
        }} src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1" alt="" /></Link>
      </div>
    </nav>
  )
}

export default Navbar