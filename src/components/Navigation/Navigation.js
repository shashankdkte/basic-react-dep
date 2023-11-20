import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link to='/' className='logo-container' >React</Link>
        <div className="nav-links-container">
          <Link className='nav-link' to='/basic-react-dep/shop'>Shop</Link>
         
          <Link className='nav-link' to='/basic-react-dep/sign-in'>Sign</Link>
        </div>
      </div>
    </>
  )
}

export default Navigation