import './HeroSectionStyles.css';

import React from 'react'
import IntroImage from '../assets/dronet-illustration-no-background.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='hero-container'>
    <div className='hero-section'>
      <div className='hero-content'>
          <h1><span className='thinner-heading'>Capturing </span>Creativity</h1>
          <p className='subhead-title'>Hello, my name is Ron Dronet and by integrating Full-stack Development and Graphic Design I'm capturing creativity.</p>
        <div className='hero-buttons'>
          <Link to='/portfolio' className='portfolio-button'>Portfolio</Link>
          <a href="mailto:ron@dronetdevdesign.com" className='contact-button'>Contact</a>
        </div>
      </div>
        <div className='image-container'>
          <img src={IntroImage} alt="capturing creativity illustration"></img>
        </div>
    </div>
    </div>
  )
}

export default HeroSection