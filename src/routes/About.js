import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroAbout from '../components/HeroAbout';

const About = () => {
  return (
    <div>
      <Navigation />
      <HeroAbout heading='About Me' text='FULL-stack &nbsp;|&nbsp; FULL-creative &nbsp;|&nbsp; FULL-service!' />
      <Footer />
    </div>
  )
}

export default About