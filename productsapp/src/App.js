import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicContainer from './Containers/BasicContainer';
import Navigation from './Containers/NavContainer';

class App extends Component {
  render() {
    return (
      <div className="primary-container">
        <Navigation />
        <BasicContainer />
      </div>
    ) 
  }
}

export default App;
