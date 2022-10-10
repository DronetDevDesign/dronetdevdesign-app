import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HeroPortfolio from '../components/HeroPortfolio';

const Portfolio = () => {
  return (
    <div>
      <Nav />
      <HeroPortfolio heading='Portfolio' text='Check out my recent projects.' />
      <Footer />
    </div>
  )
}

export default Portfolio