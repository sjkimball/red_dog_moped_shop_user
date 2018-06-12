import React from 'react';
import NavItemLight from '../nav__item-light/nav__item-light.js'
import './nav__item.css';

let NavItem = (props) => {
  let itemID = props.label.toLowerCase();
  let itemLabel = itemID.charAt(0).toUpperCase() + itemID.substr(1);

  return (
    <li id={itemID} className="nav__item">
      <div className="nav__item-label"><p>{itemLabel}</p></div>
      <NavItemLight />
      <NavItemLight />
      <NavItemLight />
    </li>
  );
}

export default NavItem;
