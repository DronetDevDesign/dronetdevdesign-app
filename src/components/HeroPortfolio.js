import './HeroPortfolioStyles.css';
import React, { Component } from 'react';

class HeroPortfolio extends Component {
  render() {
    return (
      <div className='portfolio-section'>
          <div className='heading'>
            <h1>Portfolio</h1>
            <p>Welcome to the development section of my website! Here you'll find my most recent projects built with the latest JavaScript frameworks and libraries. To view the deployed apps click the VIEW WEBSITE button and to view the GitHub repository click the VIEW GITHUB button within each project section</p>
          </div>
      </div>
    );
  }
}

export default HeroPortfolio