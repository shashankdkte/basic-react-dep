import React from 'react'
import Header from '../../Header/Header'
import {Outlet} from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Home