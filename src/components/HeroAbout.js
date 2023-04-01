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
            <p className='about-me-subhead'>I'm Ron Dronet.</p>
            <p className='about-me-job-title'>Full-stack Developer & Graphic Designer</p>
            {/* <p className='about-me-subhead'>FULL-stack  &nbsp;|&nbsp;  FULL-creative  &nbsp;|&nbsp;  FULL-service!</p> */}
          </div>
          <div className='about-me-text'>
            <p>
              I’m a junior full-stack developer leveraging an extensive graphic design background to build a more intuitive user experience on the web. I recently earned a certificate from the Rice University Full-stack Development Coding program with newly developed skills in HTML, CSS, JavaScript, Node, Express, MongoDB, React, GraphQL, GitHub and responsive web design. I’ve become known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience. I applied aspects of UI/UX and agile development in a recent project named Birthday Plan It. I worked on a team of three to develop a single-page MERN app that allows users to create an invitation which is then sent to the recipients via email then has them log in to RSVP the birthday event. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web and contribute to the success of a company.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroAbout