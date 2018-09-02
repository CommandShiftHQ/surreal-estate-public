import React from 'react';
import Favourite from './Favourite.css';

const Favourite = ({ _id, title, onRemoveFavourite }) => (
  <div className="Favourite">
    <strong>{title}</strong>
    <a
      href="#"
      onClick={() => onRemoveFavourite(_id)}
      className="remove"
    >
      Remove
    </a>
  </div>
);

export default Favourite;
