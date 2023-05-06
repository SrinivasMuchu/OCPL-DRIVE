import React from 'react'
import './Work.css'
import {motion} from 'framer-motion'
import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.webp'
import img4 from '../../assets/img4.webp'
import img5 from '../../assets/img5.webp'
import img6 from '../../assets/img6.webp'

function Work() {
  return (
    <div className='work'>
      <div className='title-name'>
        <h3>Kaleidoscope of Solutions</h3>
      </div>
      <div>
      <div className='vertical-line'></div>
      <div className='route'>
        <motion.div className='box-1' initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 3 }}> 
         
          <div className='box1'>
            <h3>Requirement Gathering And Analysis</h3>
            <ul>
              <li>It involves identifying, analyzing, and documenting the needs and objectives of the stakeholders and users, 
                and transforming them into a set of detailed requirements that the software must meet.</li>
                <li>Collaborating with cross-functional teams including 
                  designers, product managers, and other developers to create high-quality products.</li>
            </ul>
          </div>
          <div className='img'><img src={img1} alt='img1' width="50px" height="50px" style={{borderRadius:"50%"}}/></div>
        </motion.div>
        <motion.div className='box-2' initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 3 }}> 
         
          <div className='box2'>
            <h3>Design</h3>
            <ul>
              <li>software requirements are analyzed and transformed into a
                 detailed system design document that outlines how the software will be built.</li>
                <li>This document describes the technical specifications of the software system including information about the software's architecture, 
                  design patterns, data models, interfaces, and algorithms that will be used to build the system.</li>
            </ul>
          </div>
          <div className='img'><img src={img2} alt='img1' width="50px" height="50px" style={{borderRadius:"50%"}}/></div>
        </motion.div>
        <motion.div className='box-1' initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 3 }}>
         
          <div className='box1'>
            <h3>Implementation</h3>
            <ul>
              <li>During this phase, the software is developed according
                 to the requirements and specifications defined by the client.</li>
                <li>Then the actual code is written using a programming language that is suitable for the project.</li>
            </ul>
          </div>
          <div className='img'><img src={img3} alt='img1' width="50px" height="50px" style={{borderRadius:"50%"}}/></div>
        </motion.div>
        <motion.div className='box-2' initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 3 }}> 
         
          <div className='box2'>
            <h3>Testing</h3>
            <ul>
              <li>In this step, the test team identifies the scope of the testing, the objectives,
                 the types of tests that will be performed, and the resources required for testing.</li>
                <li>Then prepares a final report which includes the overall quality of the software,
                   the effectiveness of the testing process, and any recommendations for improvement.</li>
            </ul>
          </div>
          <div className='img'><img src={img4} alt='img1' width="50px" height="50px" style={{borderRadius:"50%"}}/></div>
        </motion.div>
        <motion.div className='box-1' initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 3 }}> 
         
          <div className='box1'>
            <h3>Deployment</h3>
            <ul>
              <li>The deployment phase is the final stage of the Software Development Life Cycle
                 (SDLC), where the software is released for use by the end-users.</li>
                <li>It involves deploying the software to the production environment and making it available for use.</li>
            </ul>
          </div>
          <div className='img'><img src={img5} alt='img1' width="50px" height="50px" style={{borderRadius:"50%"}}/></div>
        </motion.div>
        <motion.div className='box-2' initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 3 }}> 
         
          <div className='box2'>
            <h3>Maintenance</h3>
            <ul>
              <li>The Maintenance phase is where the software is monitored, updated, and improved after deployment.</li>
                <li>It is a continuous process that aims to keep the software functioning correctly, meet new user
                   requirements, and fix any issues that arise.</li>
            </ul>
          </div>
          <div className='img'><img src={img6} alt='img1' width="50px" height="50px" style={{borderRadius:"50%"}}/></div>
        </motion.div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Work