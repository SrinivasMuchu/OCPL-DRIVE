import React from 'react'
import logo from '../../assets/footerlogo.webp'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-con'> 
        <div className='flex-con'>
        <div className='logo'>
        <img src={logo} alt='flogo' width="50px" height="50px"/>
        <span>OCPL Tech</span>
        </div>
        <div className='policy'>
            <p>Privacy Policy</p>
            <p>License</p>
            <p>Terms and conditions</p>

        </div>
        </div>
        <div className='horizon'></div>
        <div className='copyright'>
            &copy; 2023 &nbsp; <p>OCPL Tech</p>. All Rights Reserved. 
        </div>
    </div>
  )
}

export default Footer