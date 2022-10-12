import React from 'react';
import Navigation from '../components/Navigation';
import HeroContact from '../components/HeroContact';
import Footer from '../components/Footer';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navigation />
      <HeroContact heading='Contact Me' text='Send me a message and I will contact you.' />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact