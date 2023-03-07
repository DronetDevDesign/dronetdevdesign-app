import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroPortfolio from '../components/HeroPortfolio';
import Work from '../components/Work';

const Portfolio = () => {
  return (
    <div>
      <Navigation />
      <HeroPortfolio />
      <Work />
      <Footer />
    </div>
  )
}

export default Portfolio