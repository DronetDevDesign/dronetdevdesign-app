import './NavStyles.css';

import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../img/dronet-logo.png';

const Nav = () => {
  return (
    <div className='header'>
      <Link to={'/'}>
        <img src={Logo} alt='Ron Dronet Logo' className='dronet-logo' />
      </Link>
      <h3 className='dronet-title'>Ron Dronet</h3>
      <ul className='nav-menu'>
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
          <Link to='/resume'>Resume</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav