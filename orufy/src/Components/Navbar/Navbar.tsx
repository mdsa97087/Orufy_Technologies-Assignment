import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div>
        {/* <a href="">Logo</a> */}
            <Link to="/">Logo</Link>
            <input type="text" placeholder='Search' />
      </div>
      <div>
            {/* <Link to="" >Categories</Link> */}
            {/* <Link to="">bell</Link> */}
            {/* <Link to="">profile</Link> */}
      </div>
    </div>
  )
}

export default Navbar