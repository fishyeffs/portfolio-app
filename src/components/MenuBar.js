import React from 'react';
import './MenuBar.css';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <a href="#" className="logo">Portfolio</a>
      <div className="menu-items">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default MenuBar;
