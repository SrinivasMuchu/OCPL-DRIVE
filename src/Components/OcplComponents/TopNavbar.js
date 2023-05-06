import React from 'react'
import logo1 from '../../assets/ocpl-logo.webp'
import MenuDrawer from './TopbarDrawer';


import './Topnavbar.css'
function TopNavbar() {
  return (
    <div className='topnavbar'>
        <div>
            <a href='/Home'><img src={logo1} alt="logo" /></a>
        </div>
        <div className='menu'><MenuDrawer/></div>
        <div className='hyper-links'>
        <a href="/">
            <p className="link">Home</p>
          </a>
          <a href="/register">
            <p className="link">Register</p>
          </a>
          <a href="/login">
            <p className="link">Login</p>
            </a>
            <a href="/account">
            <p className="link">Account</p>
            </a>

 

        </div>
    </div>
  )
}

export default TopNavbar