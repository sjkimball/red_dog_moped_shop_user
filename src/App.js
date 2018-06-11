import React, { Component } from 'react';
import Header from './components/header/header.js';
import Nav from './components/navigation/nav/nav.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="l-container">
        <Header />
        <Nav />
      </div>
    );
  }
}

export default App;
