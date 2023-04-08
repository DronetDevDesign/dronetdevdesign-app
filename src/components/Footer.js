import './FooterStyles.css';
import React from 'react';
import { FaHome, FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';
import Logo from '../assets/dronetdevdesign-gradient-logo.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='contact'>
          <div className='address'>
            <div className='icons'>
              <div className='home-container'>
              <FaHome size={25} style={{ color: '#8A66DB', marginRight: '8px' }} />
              I am located in Houston, Texas and looking for remote work!
              </div>
            </div>
          </div>
          <div className='contact-section'>
            <div className='contact-me'>
              <div className='icons'>
                <a href="mailto:ron@dronetdevdesign.com"><FaMailBulk size={25} style={{ color: '#8A66DB', marginRight: '8px' }} />Click here to email me directly</a>
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
      <div className='footer-heading'>
        <img src={Logo} alt="logo" className='new-dronet-logo-footer' />
        <h3 className='dronet-footer-title'><span className='dronet-bold-footer'>Dronet</span> Development & Design</h3>
      </div>
      <div className='copyright-statement'>
        <p>All graphic elements and illustrations in this website:</p>
        <p className='copyright-p'><span class="copyright-symbol-footer">&copy;</span>Copyright 2023 Ron Dronet</p>
      </div>
    </div>
  )
}

export default Footer