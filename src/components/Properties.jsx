import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import PropertyCard from './PropertyCard';
import './Properties.css';
import './SearchForm.css';

class Properties extends Component {
  state = {
    properties: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then(({ data: properties }) => this.setState({ properties }))
      .catch(err => console.error(err));
  }

  componentDidUpdate(prevProps) {
    const { location: { search } } = this.props;

    if (search !== prevProps.location.search) {
      axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(err => console.error(err));
    }
  }

  buildQueryString = (operation, valueObj) => {
    const { location: { search } } = this.props;

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  handleSearch = event => {
    event.preventDefault();

    const { history } = this.props;
    history.push(this.buildQueryString('query', {
      title: { $regex: this.state.search },
    }));
  };

  render() {
    return (
      <div className="Properties">
        <div className="sidebar">
          <ul>
            <li>
              <span>
                <form className="SearchForm" onSubmit={this.handleSearch}>
                  <input type="text" onChange={e => this.setState({ search: e.target.value })} />
                  <button type="submit"><i className="fas fa-search" /></button>
                </form>
              </span>
            </li>
          </ul>
          <ul>
            <li><span><strong>Filter by city</strong></span></li>
            <li><Link to={this.buildQueryString('query', { city: 'Manchester' })}>Manchester</Link></li>
            <li><Link to={this.buildQueryString('query', { city: 'Sheffield' })}>Sheffield</Link></li>
            <li><Link to={this.buildQueryString('query', { city: 'Liverpool' })}>Liverpool</Link></li>
            <li><Link to={this.buildQueryString('query', { city: 'Leeds' })}>Leeds</Link></li>
          </ul>
          <ul>
            <li><span><strong>Sort by</strong></span></li>
            <li><Link to={this.buildQueryString('sort', { price: 1 })}>Price Ascending</Link></li>
            <li><Link to={this.buildQueryString('sort', { price: -1 })}>Price Descending</Link></li>
          </ul>
        </div>
        <div className="main">
          {this.state.properties.map(property => (
            <div key={property._id} className="property">
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Properties;
