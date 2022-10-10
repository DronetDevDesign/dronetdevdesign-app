import './HeroPortfolioStyles.css';
import React, { Component } from 'react';
import IntroImage from '../assets/hero-section-bkgd.jpg';

class HeroPortfolio extends Component {
  render() {
    return (
      <div className='portfolio-section'>
        <div className='intro-image'>
          <img src={IntroImage} alt='IntroImage' />
          <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroPortfolio