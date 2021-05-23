import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import {
  Search,
  Language,
  ExpandMore,
} from '@material-ui/icons';

function Header() {
  return (
    <div className='header'>
      <img
        className="header__icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png"
        alt="Header Logo"
      />

      <div className="header__center">
        <input type="text" id="text" />
        <Search />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  )
}

export default Header
