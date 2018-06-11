import React from 'react';
import "./nav.css";
// import NavItem from '../nav__item/nav__item.js';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="l-nav">
        <ul id="nav__list" className="nav__list">
          <li id="bikes" className="nav__item">
            <div className="nav__item-label"><p>Bikes</p></div>
            <div className="nav__item-light"></div>
            <div className="nav__item-light"></div>
            <div className="nav__item-light"></div>
          </li>
          <li id="parts" className="nav__item">
            <div className="nav__item-label"><p>Parts</p></div>
            <div className="nav__item-light"></div>
            <div className="nav__item-light"></div>
            <div className="nav__item-light"></div>
          </li>
          <li id="service" className="nav__item">
            <div className="nav__item-label"><p>Service</p></div>
            <div className="nav__item-light"></div>
            <div className="nav__item-light"></div>
            <div className="nav__item-light"></div>
          </li>
          <li id="rescue" className="nav__item">
            <div className="nav__item-label"><p>Rescue</p></div>
            <div className="nav__item-light"></div>
            <div className="nav__item-light"></div>
            <div className="nav__item-light"></div>
          </li>
          <li id="army" className="nav__item">
            <div className="nav__item-label"><p>Army</p></div>
            <div className="nav__item-light"></div>
            <div className="nav__item-light"></div>
            <div className="nav__item-light"></div>
          </li>
        </ul>
      </nav>
    )
  }
};
