import './HeroPortfolioStyles.css';
import React from 'react';
import IntroImage from '../assets/hero-section-bkgd.jpg';

const HeroPortfolio = () => {
  return (
    <div className='portfolio-section'>
      <div className='intro-image'>
        <img src={IntroImage} alt='IntroImage' />
      <div className='heading'>
        <h1>This is a heading</h1>
        <p>This is text</p>
      </div>
      </div>
    </div>
  )
}

export default HeroPortfolio