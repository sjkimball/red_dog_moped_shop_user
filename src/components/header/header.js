import React from 'react';
import "./header.css";

let Header = (props) => {
  return (
    <header className="header">
        <h1 className="header__heading header__heading--white">
          <a href="/">Red D<span className="header__heading header__heading--red">ø</span>g M<span className="header__heading header__heading--red">ø</span>ped</a>
        </h1>
    </header>
  );
}

export default Header;
