import './NavStyles.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Resume from '../assets/ron-dronet-resume-2022.pdf';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/new-dronet-logo.png'

const Nav = () => {
  const [menuClick, setMenuClick] = useState(false);
  const handleClick = () => setMenuClick(!menuClick);
  return (
    <div className='header'>
      <div className='logo-section'>
        <div className='logo'>
          <img src={Logo} alt="logo" className='new-dronet-logo' />
        </div>
        <Link to={'/'}>
        <h3 className='dronet-title'>Dronet Dev Design <span className='subtitle'>&nbsp; | &nbsp; Ron Dronet</span></h3>
        </Link>
      </div>
      <ul className={menuClick ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <a href={Resume} target="_blank" rel="noreferrer" className='resume-button' id='dronet-resume'>Resume</a>
        </li>
      </ul>
      <div className='hamburger-menu' onClick={handleClick}>
        {menuClick ? (<FaTimes size={20} style={{ color: '#A4ACB7' }
        } />) : (<FaBars size={20} style={{ color: '#A4ACB7' }
        } />)}
      </div>
    </div>
  )
}

export default Nav