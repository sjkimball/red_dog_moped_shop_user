import React, { Component } from 'react';
import Header from './components/header/header.js';
import Nav from './components/navigation/nav/nav.js';
import './App.css';

let categories = ["today", "rescue", "queue", "bikes", "parts"];

class App extends Component {
  render() {
    return (
      <div className="l-container">
        <Header />
        <Nav cats={categories} />
      </div>
    );
  }
}

export default App;
