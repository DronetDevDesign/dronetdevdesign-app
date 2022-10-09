import './FooterStyles.css';
import React from 'react';
import { FaHome, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='contact'>
          <div className='address'>
            <FaHome size={20} style={{color: '#DFE2E6', marginRight: '32px'}} />
            <div>
              <p>Houston, Texas</p>
              <p>United States of America</p>
            </div>
          </div>
          <div className='contact-me'></div>
          <p>Please use the contact form to get in touch with me. Due to scammers and spam-bots I will not reveal my phone number or email address here. I apologize for the inconvenience.</p>
        </div>
        <div className='social-media'>
          <h4>Check out my social media profiles:</h4>
          <div className='social-icons'>
            <FaFacebook size={30} style={{ color: '#DFE2E6', marginRight: '16px' }} />
            <FaLinkedin size={30} style={{ color: '#DFE2E6', marginRight: '32px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer