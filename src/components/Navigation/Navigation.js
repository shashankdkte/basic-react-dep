import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link to='/' className='logo-container' >React</Link>
        <div className="nav-links-container">
          <Link className='nav-link' to='/shop'>Shop</Link>
          <Link className='nav-link' to='/sign-in'>Sign</Link>
        </div>
      </div>
    </>
  )
}

export default Navigation