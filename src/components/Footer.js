import './FooterStyles.css';
import React from 'react';
import { FaHome, FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='contact'>
          <div className='address'>
            <div className='icons'>
              <div className='home-container'>
              <FaHome size={25} style={{ color: '#8A66DB', marginRight: '8px' }} />
              <p>I am located in Houston, Texas and looking for remote work!</p>
              </div>
            </div>
          </div>
          <div className='contact-section'>
            <div className='contact-me'>
              <div className='icons'>
                <a href="mailto:ron@dronetdevdesign.com"><FaMailBulk size={25} style={{ color: '#8A66DB', marginRight: '8px' }} />Please email me directly!</a>
              </div>
            </div>
          </div>
        </div>
        <div className='social-media'>
          <h4>Discover more about me by clicking the links below:</h4>
          <ul className='social-icons'>
            <li className='linkedin-icon'><a href='https://www.linkedin.com/in/ron-dronet-339078232/' target="_blank" rel="noreferrer"><FaLinkedin size={25} style={{ color: '#8A66DB', marginRight: '10px' }} /><p>Visit my LinkedIn profile</p></a></li>
            <li className='github-icon'><a href='https://github.com/DronetDevDesign' target="_blank" rel="noreferrer"><FaGithub size={25} style={{ color: '#8A66DB', marginRight: '10px' }} /><p>Visit my GitHub profile</p></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer