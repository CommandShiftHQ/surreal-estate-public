import React from 'react';
import { withRouter } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ history }) => (
  <div className="NavBar">
    <div className="logo"><i className="fab fa-fort-awesome" /> Surreal Estate</div>
    <ul className="nav">
      <li className="item" onClick={() => history.push('/')}>View Properties</li>
      <li className="item" onClick={() => history.push('/add-property')}>Add a Property</li>
    </ul>
  </div>
);

export default withRouter(NavBar);
