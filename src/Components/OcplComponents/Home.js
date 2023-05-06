import React from 'react'
import './Home.css'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { motion } from 'framer-motion'

function Home() {
  return (
    <div className='home-con' id='home'>
        <div className='title'>
        <h1 >
        Cresco Together <span>!</span>
        </h1>
        <p>Web 3.0 Unlocked: Embrace the Power of Digital Opulence.</p>
        </div>
        <motion.div className='key-con' 
           initial={{ y: -10 }}
           animate={{ y: 10 }}
           transition={{
             type: "smooth",
             repeatType: "mirror",
             duration: 2,
             repeat: Infinity,
           }}
        >
            <ExpandMoreRoundedIcon className='key'/>
        </motion.div>
    </div>
  )
}

export default Home