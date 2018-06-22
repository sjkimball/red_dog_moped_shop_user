import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header/header.js';
import Nav from './components/navigation/nav/nav.js';
import Main from './components/main/main.js';

import './App.css';

let categories = ["today", "rescue", "queue", "bikes", "parts"];

class App extends Component {

  render() {
    return (
      <Router>
        <div className="l-container">
          <Header />
          <Nav cats={categories} />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
