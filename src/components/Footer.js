import './FooterStyles.css';
import React from 'react';
import { FaHome, FaLinkedin, FaFacebook, FaPhone, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='contact'>
          <div className='address'>
            <div className='icons'>
              <FaHome size={25} style={{ color: '#8A66DB', marginRight: '8px' }} />
            </div>
            <div>
              <p>Houston, Texas &nbsp; | &nbsp; United States of America</p>
            </div>
          </div>
          <div className='contact-section'>
            <div className='contact-me'>
              <div className='icons'>
                <FaPhone size={22} style={{ color: '#8A66DB', marginRight: '8px' }} />
                <FaMailBulk size={25} style={{ color: '#8A66DB', marginRight: '8px' }} />
              </div>
              <p>Please use the contact form to get in touch with me. Due to scammers and spam-bots I will not reveal my phone number or email address here. I apologize for the inconvenience.</p>
            </div>
          </div>
        </div>
        <div className='social-media'>
          <div className='social-icons'>
            <FaFacebook size={25} style={{ color: '#8A66DB', marginRight: '10px' }} />
            <FaLinkedin size={25} style={{ color: '#8A66DB', marginRight: '10px' }} />
          </div>
          <h4>Check me out on social media</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer