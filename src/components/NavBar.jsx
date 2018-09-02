import React from 'react';
import { withRouter } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import './NavBar.css';

const NavBar = ({
  history, userID, onLogin, onLogout,
}) => (
  <div className="NavBar">
    <div className="logo"><i className="fab fa-fort-awesome" /> Surreal Estate</div>
    <ul className="nav">
      <li className="item" onClick={() => history.push('/')}>View Properties</li>
      <li className="item" onClick={() => history.push('/saved-properties')}>Saved Properties</li>
      <li className="item" onClick={() => history.push('/add-property')}>Add a Property</li>
    </ul>
    <div className="fblogin">
      {userID ? <button onClick={() => window.FB.logout(onLogout)}>Sign Out</button> : (
        <FacebookLogin
          appId="211809719694152"
          autoLoad
          fields="name,email,picture"
          callback={onLogin}
        />
      )}
    </div>
  </div>
);

export default withRouter(NavBar);
