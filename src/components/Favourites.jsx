import React, { Component } from 'react';
import Favourite from './Favourite';
import axios from 'axios';
import './Favourites.css';

class Favourites extends Component {
  state = {
    favourites: [],
  };

  componentDidMount() {
    const { userID } = this.props;

    axios.get(`http://localhost:3000/api/v1/Favourite?query={"fbUserId":"${userID}"}&populate=propertyListing`)
      .then(({ data: favourites }) => this.setState({ favourites }))
      .catch(err => console.error(err));
  }

  componentDidUpdate() {
    this.componentDidMount();
  }

  handleRemoveFavourite = favouriteId => {
    axios.delete(`http://localhost:3000/api/v1/Favourite/${favouriteId}`)
      .then(() => this.componentDidMount())
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div className="Favourites">
        {this.state.favourites.map(favourite => (
          <Favourite key={favourite._id} {...favourite} onRemoveFavourite={this.handleRemoveFavourite} />
        ))}
      </div>
    );
  }
}

export default Favourites;
