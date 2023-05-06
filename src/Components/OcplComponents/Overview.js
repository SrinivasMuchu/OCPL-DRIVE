import React from 'react'
import './Overview.css'
import cloud from '../../assets/cloud.webp'
import setting1 from '../../assets/setting.webp'
import settings2 from '../../assets/setting2.webp'
import setting3 from '../../assets/setting3.webp'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'


const card=[
  { id: 1, imageUrl: cloud, title: "Cloud Computing" },
  { id: 2, imageUrl: setting3, title: "Kubernetes, Docker and Microservices" },
  { id: 3, imageUrl: setting1, title: "AI and Machine Learning" },
  { id: 4, imageUrl: settings2, title: "Edge Computing" },
  { id: 5, imageUrl: settings2, title: "Internet of Things (IoT)" },
  { id: 6, imageUrl: setting1, title: "Blockchain Development" },
  { id: 7, imageUrl: setting3, title: "Web and Mobile Development" },
  { id: 8, imageUrl: cloud, title: "DevSecOps" },
  { id: 9, imageUrl: cloud, title: "Predictive Analytics" },
  { id: 9, imageUrl: setting1, title: "No-code Development" },
  { id: 9, imageUrl: settings2, title: "Outsourcing Development" },
  { id: 9, imageUrl: setting3, title: "API" },
]

function Overview() {
  return (
    <div id='overview' className='overview'>
      <div className='overview-con'>
        <div className='title-con'>
          <p >
            INTRODUCTION
          </p>
          <h1 >
            Overview.
          </h1>
        </div>
        <div className='para'>
          <p >
            At Ocpl Tech, we are a leading Blockchain Development Company dedicated to driving innovation
            for businesses in India and worldwide. Our talented team of experts skillfully leverages
            cutting-edge technology to create custom blockchain solutions and high-speed web, Android,
            and iOS applications. By partnering with us, you'll experience a powerful blend of dedication
            and advanced technology that simplifies processes and accelerates your
            business growth. Choose Ocpl Tech and embark on a journey toward remarkable success.
          </p>
        </div>
      </div>
<div>
<motion.div className='cards-div' initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 100 }}>
        {card.map((index) =>

          <Tilt key={index} className='cards' >
            <img src={index.imageUrl} alt="img" width="50px" style={{background:"none"}}/>
            <p style={{textDecoration:"none",background:"none"}}>{index.title}</p>
          </Tilt>
          
        )}
        </motion.div>
</div>

    </div>

  )
}

export default Overview