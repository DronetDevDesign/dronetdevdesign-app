import './HeroSectionStyles.css';

import React from 'react'
import IntroImage from '../assets/main-front.png';
import HeadImage from '../assets/main-head.png';
import GlowImage from '../assets/main-yellow-glow.png';
import LightsOne from '../assets/main-lights-01.png';
import LightsTwo from '../assets/main-lights-02.png';
import Bubbles from '../assets/main-bubbles.png';
import JavascriptIcon from '../assets/main-javascript.png';
import IllustratorIcon from '../assets/main-illustrator.png';
import ReactIcon from '../assets/main-react.png';
import NodeIcon from '../assets/main-node.png';
import ExpressIcon from '../assets/main-express.png';
import CssIcon from '../assets/main-css3.png';
import MongoIcon from '../assets/main-mongo-db.png';
import HtmlIcon from '../assets/main-html5.png';
import XdIcon from '../assets/main-xd.png';
import PhotoshopIcon from '../assets/main-photoshop.png';
import SketchIcon from '../assets/main-sketch.png';
import AffinityIcon from '../assets/main-affinity.png';
import IndesignIcon from '../assets/main-indesign.png';
import BlenderIcon from '../assets/main-blender.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='hero-container'>
    <div className='hero-section'>
      <div className='hero-content'>
          <h1><span className='thinner-heading'>Capturing </span>Creativity</h1>
          <p className='subhead-title'>Hello, my name is Ron Dronet and by integrating Full-stack Development and Graphic Design I'm capturing creativity.</p>
        <div className='hero-buttons'>
          <Link to='/portfolio' className='portfolio-button'>Portfolio</Link>
          <a href="mailto:ron@dronetdevdesign.com" className='contact-button'>Contact</a>
        </div>
      </div>
        <div className='image-container'>
          <div className='javascript-icon'>
            <img src={JavascriptIcon} alt="javacsript icon"></img>
          </div>
          <div className='illustrator-icon'>
            <img src={IllustratorIcon} alt="illustrator icon"></img>
          </div>
          <div className='react-icon'>
            <img src={ReactIcon} alt="react icon"></img>
          </div>
          <div className='node-icon'>
            <img src={NodeIcon} alt="nodeJS icon"></img>
          </div>
          <div className='express-icon'>
            <img src={ExpressIcon} alt="expressJS icon"></img>
          </div>
          <div className='css-icon'>
            <img src={CssIcon} alt="css icon"></img>
          </div>
          <div className='mongo-icon'>
            <img src={MongoIcon} alt="mongo icon"></img>
          </div>
          <div className='html-icon'>
            <img src={HtmlIcon} alt="html icon"></img>
          </div>
          <div className='xd-icon'>
            <img src={XdIcon} alt="xd icon"></img>
          </div>
          <div className='photoshop-icon'>
            <img src={PhotoshopIcon} alt="photoshop icon"></img>
          </div>
          <div className='sketch-icon'>
            <img src={SketchIcon} alt="sketch icon"></img>
          </div>
          <div className='affinity-icon'>
            <img src={AffinityIcon} alt="affinity icon"></img>
          </div>
          <div className='indesign-icon'>
            <img src={IndesignIcon} alt="indesign icon"></img>
          </div>
          <div className='blender-icon'>
            <img src={BlenderIcon} alt="blender icon"></img>
          </div>
          <div className='glow'>
            <img src={GlowImage} alt="glow"></img>
          </div>
          <div className='bubbles'>
            <img src={Bubbles} alt="glow"></img>
          </div>
          <div className='head'>
            <img src={HeadImage} alt="head"></img>
          </div>
          <img src={IntroImage} alt="capturing creativity illustration"></img>
          <div className='lights-one'>
            <img src={LightsOne} alt="head"></img>
          </div>
          <div className='lights-two'>
            <img src={LightsTwo} alt="head"></img>
          </div>
        </div>
    </div>
    </div>
  )
}

export default HeroSection