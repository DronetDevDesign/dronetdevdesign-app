import './HeroSectionStyles.css';

import React from 'react'
// import IntroImage from '../assets/hero-section-bkgd.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-content'>
        <h4 className='subtitle'>Hi, my name is Ron Dronet and my passion is:</h4>
        <h1>Capturing Creativity By Integrating Full-stack Development and Graphic Design.</h1>
        <Link to='/portfolio' className='portfolio-button'>Portfolio</Link>
        <Link to='/contact' className='contact-button'>Contact</Link>
      </div>
      <div className='image-container'></div>
    </div>
  )
}

export default HeroSection