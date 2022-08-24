import React from "react";
import logo from './React-icon.png';

export default function Header() {
    return (
      <header>
        <nav className='nav-main'>
            <img src={logo} alt="react logo" className='react-logo'/>
            <ul className='nav-items'>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
        </nav>
      </header>
    )
  }