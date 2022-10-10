import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HeroAbout from '../components/HeroAbout';

const About = () => {
  return (
    <div>
      <Nav />
      <HeroAbout heading='About Me' text='FULL-stack &nbsp;|&nbsp; FULL-creative &nbsp;|&nbsp; FULL-service!' />
      <Footer />
    </div>
  )
}

export default About