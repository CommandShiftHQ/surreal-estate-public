import React from 'react';
import './NavBar.css';

const NavBar = () => (
  <div className="NavBar">
    <div className="logo"><i className="fab fa-fort-awesome" /> Surreal Estate</div>
    <ul className="nav">
      <li className="item">View Properties</li>
      <li className="item">Add a Property</li>
    </ul>
  </div>
);

export default NavBar;
