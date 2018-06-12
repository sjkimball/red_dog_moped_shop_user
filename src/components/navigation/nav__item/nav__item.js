import React from 'react';
import NavItemLight from '../nav__item-light/nav__item-light.js'
import './nav__item.css';

let removeSelected = () => {
  let nav__items = document.getElementById("nav__list").children;
  for (let item of nav__items) {
    for (let child of item.children) {
      if (child.className === "nav__item-light--selected") {
        child.className = "nav__item-light";
      }
    }
  }
}

let itemHighlight = (e) => {
  removeSelected();
  let parts = e.currentTarget.children;
  for (var i = 1; i < parts.length; i++) {
    parts[i].classList.replace("nav__item-light", "nav__item-light--selected");
  }
}

let NavItem = (props) => {
  let itemID = props.label.toLowerCase();
  let itemLabel = itemID.charAt(0).toUpperCase() + itemID.substr(1);

  return (
    <li id={itemID} className="nav__item" onClick={itemHighlight}>
      <div className="nav__item-label"><p>{itemLabel}</p></div>
      <NavItemLight />
      <NavItemLight />
      <NavItemLight />
    </li>
  );
}

export default NavItem;
