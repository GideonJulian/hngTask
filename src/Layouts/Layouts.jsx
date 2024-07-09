import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layouts = () => {
  return (
    <div className='home-container'>
        <Header /> 
            <div className="main">
            <Outlet />
            </div>
        <Footer />
    </div>
  )
}

export default Layouts