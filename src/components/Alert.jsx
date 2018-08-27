import React from 'react';
import './Alert.css';

const Alert = ({ message, success }) => (
  <div className={`Alert${success ? ' success' : ''}`}>
    {message}
  </div>
);

export default Alert;
