import React, { Component } from 'react';
import axios from 'axios';
import './AddProperty.css';

class AddProperty extends Component {
  state = {
    fields: {
      title: '',
      type: 'Flat',
      bedrooms: '',
      bathrooms: '',
      city: 'Manchester',
      price: '',
      email: '',
    },
  };

  handleAddProperty = event => {
    event.preventDefault();

    axios.post('http://localhost:3000/v1/api/PropertyListing', this.state.fields)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  handleFieldChange = event => {
    console.log(event);
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="AddProperty">
        <form onSubmit={this.handleAddProperty}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select
              id="type"
              name="type"
              value={this.state.fields.type}
              onChange={this.handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="bedrooms">Bedrooms</label>
            <input
              type="number"
              min="0"
              id="bedrooms"
              name="bedrooms"
              value={this.state.bedrooms}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bathrooms">Bathrooms</label>
            <input
              type="text"
              id="bathrooms"
              name="bathrooms"
              value={this.state.bathrooms}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <select
              id="city"
              name="city"
              value={this.state.fields.city}
              onChange={this.handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Leeds">Leeds</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              min="0"
              step="0.01"
              id="price"
              name="price"
              value={this.state.price}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleFieldChange}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
