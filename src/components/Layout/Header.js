import React from 'react';

import  './Header.scss';
import img from "../../img/icon.png"
import { NavLink } from 'react-router-dom';
const Header = () => (
  <nav className='header'>
    <NavLink to="/#">
    <img src={img} alt="logo"/>
      <h1 className="heading1">Vendet Stock</h1>
      </NavLink>
  </nav>
);

export default Header;
