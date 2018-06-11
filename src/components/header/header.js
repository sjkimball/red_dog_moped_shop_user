import React from 'react';
import "./header.css";

let Header = (props) => {
  return (
    <header class="header">
        <h1 class="header__heading header__heading--white">
          <a href="/">Red D<span class="header__heading header__heading--red">ø</span>g M<span class="header__heading header__heading--red">ø</span>ped</a></h1>
    </header>
  );
}

export default Header;
