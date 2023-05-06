import React from 'react'
import Home from '../OcplComponents/Home'
import Overview from '../OcplComponents/Overview'
import TopNavbar from '../OcplComponents/TopNavbar'
import Work from '../OcplComponents/Work'
import Catalog from '../OcplComponents/Catalog'
import Contact from '../OcplComponents/Contact'
import Footer from '../OcplComponents/Footer'

import './OcplPage.css'


function OcplPage() {
  return (
    <div>
      <TopNavbar/>
       <Home/>
       <Overview/>
       <Work/>
       <Catalog/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default OcplPage