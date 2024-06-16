import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <a href="#" className="logo">Portfolio</a>
      <div className="menu-items">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default MenuBar;
