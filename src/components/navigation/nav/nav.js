import React from 'react';
import "./nav.css";
import NavItem from '../nav__item/nav__item.js';

let makeItem = (...navName) => {
  return <NavItem label={navName[0]} key={navName[1]}/>
}

let makeNavList = (cats) => {
    return cats.map((item, index) => makeItem(item, index));
}

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="l-nav">
        <ul id="nav__list" className="nav__list">
          {makeNavList(this.props.cats)}
        </ul>
      </nav>
    )
  }
};
