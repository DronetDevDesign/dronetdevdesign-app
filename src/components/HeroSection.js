import './HeroSectionStyles.css';

import React from 'react'
import IntroImage from '../assets/hero-section-bkgd.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='intro-image'>
        <img src={IntroImage} alt='IntroImage' />
      </div>
      <div className='hero-content'>
        <h4 className='subtitle'>My superpower is:</h4>
        <h1>Capturing Creativity By Integrating Full-stack Development and Graphic Design.</h1>
        <Link to='/portfolio' className='portfolio-button'>Portfolio</Link>
        <Link to='/contact' className='contact-button'>Contact</Link>
        <div className='about-me-text'>
          <p>
            Hi, my name is Ron Dronet and I want to thank you for visiting my website! I offer my clients the best of both worlds by not only providing the creative and design to push their brand to new heights, but also seeing projects through to full-stack development from concept to completion.
          </p>
          <p>
            I am currently a one man design studio working for the City of Houston. As far back as I can remember I've been creative and to this day I chuckle at how far I've come and how passionate I am about my career.
          </p>
          <p>
            My energy and motivation has allowed me to work on many exciting and satisfying projects. I have grown to be an extremely diversified Full-stack Developer and Graphic Artist. I am always willing to listen, learn and collaborate to get the job done.
          </p>
          <p>
            By viewing my portfolio you will see that I take pride in my work and enjoy what I do. It has been a pleasure to help businesses develop a strong sense of presence through my skills and experience.
          </p>
          <p>
            Moving forward, I will continue to challenge and educate myself, keeping current with the latest trends and software. In the meantime, thank you for taking the time to view my website. If you have any questions, please don't hesitate to contact me.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection