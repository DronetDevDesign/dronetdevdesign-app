import './HeroPortfolioStyles.css';
import React, { Component } from 'react';

class HeroPortfolio extends Component {
  render() {
    return (
      <div className='portfolio-section'>
          <div className='heading'>
            <h1>Portfolio</h1>
            <p className='portfolio-subhead'>Welcome to the development section of my website! Here you'll find my most recent projects built with the latest JavaScript frameworks and libraries.</p>
          <br></br>
            <p>To view the deployed apps, click the <span className='bold-text'>VIEW WEBSITE</span> button.</p>
            <p>To view the GitHub repository for each project click the <span className='bold-text'>VIEW GITHUB</span> button.</p>
          </div>
      </div>
    );
  }
}

export default HeroPortfolio