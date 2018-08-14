import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Properties from './components/Properties';
import AddProperty from './components/AddProperty';
import './App.css';

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Properties} />
      <Route exact path="/add-property" component={AddProperty} />
    </Switch>
  </Fragment>
);

export default App;
