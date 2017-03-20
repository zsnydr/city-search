import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = { color: 'green' };

const Nav = () => (
  <nav className="nav">
    <NavLink exact activeStyle={activeStyle} to="/">Home</NavLink>
    <NavLink activeStyle={activeStyle} to="/search">Search</NavLink>
  </nav>
);

export default Nav;
