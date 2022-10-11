import './HeroContactStyles.css';

import React, { Component } from 'react'
import ContactImage from '../assets/hero-section-bkgd.jpg';
// import { Link } from 'react-router-dom';

class HeroContact extends Component {
  render() {
    return (
      <div className='contact-section'>
        <div className='contact-image'>
          <img src={ContactImage} alt='ContactImage' />
        </div>
        <div className='contact-content'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default HeroContact