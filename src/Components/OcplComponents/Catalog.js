import React from 'react'
import nextgen from '../../assets/nxtgen.webp'
import chatai from '../../assets/chatai.webp'
import soon from '../../assets/soon.webp'
import Tilt from 'react-parallax-tilt';
import './Catalog.css'

function Catalog() {
  return (
    <div className='catalog'>
      <div className='title-box'>
        <h1>Catalog of Products.</h1>
        <p>We offer a range of products designed to help businesses leverage the power of blockchain technology.
          With chatbots and voice assistants among your offerings, you are helping businesses automate
          their operations and deliver better customer
          experiences, while also ensuring that user data is protected and transactions are secure</p>
      </div>
      <div className='boxx'>
        <Tilt className='boxes'>
          <img src={nextgen} alt="nextGen" />
          <h3>NexGen Auth</h3>
          <p>NexGenAuth is an authentication solution that will redefine security, privacy, and convenience in the
            digital age. With our cutting-edge technology, businesses can unlock the full potential of a passwordless
            future, ensuring the ultimate user experience while fortifying their online defenses. Our advanced
            authentication system boasts unparalleled protection against cyber threats,
            empowering users to enjoy seamless, hassle-free access to their favorite platforms with total peace.</p>
        </Tilt>
  
          <Tilt className='boxes'>
            <img src={chatai} alt="chatai" />
            <h3>Chat Wise AI</h3>
            <p>ChatWise AI™ is an intelligent, intuitive, and interactive AI chatbot that integrates seamlessly with
              WhatsApp, one of the world's most popular messaging platforms. With its advanced natural language
              processing capabilities, it understands user queries and responds accurately, providing real-time support
              and personalized experiences to customers around the globe providing benefits such as 24/7 Customer
              Support, Improved Customer Engagement, Cost Savings, Enhanced Business Efficiency etc. Click Here for a
              demo</p>
          </Tilt>
          <Tilt className='boxes'>
            <img src={soon} alt="commingsoon" />
            <h3>VOX Genius</h3>
            <p>Voxgenius™ is an intelligent, intuitive, and interactive AI voice assistant that integrates seamlessly
              with your organisation's data. With its advanced natural language processing capabilities, it understands
              user queries and responds accurately, providing real-time support and personalized experiences to customers around the globe providing benefits
              such as 24/7 Customer Support, Improved Customer Engagement, Cost Savings, Enhanced Business Efficiency
              etc.</p>
          </Tilt>

      </div>
    </div>
  )
}

export default Catalog