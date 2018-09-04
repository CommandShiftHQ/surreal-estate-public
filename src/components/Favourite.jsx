import React from 'react';
import './Favourite.css';

const Favourite = ({ _id, propertyListing, onRemoveFavourite }) => (
  <div className="Favourite">
    <strong>{propertyListing.title}</strong>
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
