import React from 'react';
import "./nav.css";
import NavItem from '../nav__item/nav__item.js';

let makeItem = (props) => {
  return <NavItem label={props}/>
}

let makeNavList = (cats) => {
    return cats.map(item => makeItem(item));
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
