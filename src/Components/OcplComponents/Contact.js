import React from 'react'
import './Contact.css'
import {motion} from 'framer-motion'

function Contact() {
  return (
    <div className='contact-con'>
      <motion.div className='contact' initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type:"spring", duration: 5 }}>
        <p>GET IN TOUCH</p>
        <h3>Contact.</h3>
        <form>
          <label>Your Name</label>
          <input placeholder="What's your good name?" className='name'/>
          <label>Your Name</label>
          <input placeholder="What's your web address?" className='email'/>
          <label>Your Message</label>
          <input placeholder="What want you say?" className='message'/>
          <button>Send</button>
        </form>
      </motion.div>
    </div>
  )
}

export default Contact