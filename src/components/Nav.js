import './NavStyles.css';

import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../img/dronet-logo.png';

const Nav = () => {
  return (
    <div className='header'>
      <Link to={'/'}>
        <div className='logo-title'>
          <img src={Logo} alt='dronet Dev Design Logo' className='dronet-logo' />
          <h3 className='dronet-title'>Ron Dronet | Development | Design</h3>
        </div>
      </Link>
      <ul className='nav-menu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav