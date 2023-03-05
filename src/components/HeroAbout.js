import './HeroAboutStyles.css';
import React, { Component } from 'react';
// import AboutImage from '../assets/hero-section-bkgd.jpg';

class HeroAbout extends Component {
  render() {
    return (
      <div className='about-section'>
        <div className='about-content'>
          <div className='heading-about-me'>
            <h1 className='about-me'>About Me</h1>
            <p className='about-me-subhead'>FULL-stack  &nbsp;|&nbsp;  FULL-creative  &nbsp;|&nbsp;  FULL-service!</p>
          </div>
          <div className='about-me-text'>
            <p>
              Hi, my name is Ron Dronet and I want to thank you for visiting my website! I offer my clients the best of both worlds by not only providing the creative and design to push their brand to new heights, but also seeing projects through to full-stack development from concept to completion.
            </p>
            <p>
              I am currently a one man design studio working for the City of Houston. As far back as I can remember I've been creative and to this day I chuckle at how far I've come and how passionate I am about my career.
            </p>
            <p>
              My energy and motivation has allowed me to work on many exciting and satisfying projects. I have grown to be an extremely diversified Full-stack Developer and Graphic Artist. I am always willing to listen, learn and collaborate to get the job done.
            </p>
            <p>
              By viewing my portfolio you will see that I take pride in my work and enjoy what I do. It has been a pleasure to help businesses develop a strong sense of presence through my skills and experience.
            </p>
            <p>
              Moving forward, I will continue to challenge and educate myself, keeping current with the latest trends and software. In the meantime, thank you for taking the time to view my website. If you have any questions, please don't hesitate to contact me.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroAbout