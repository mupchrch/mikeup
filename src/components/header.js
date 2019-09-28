import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="myName">
        Michael Upchurch
      </div>
      <ul className="menuItems">
        <li className="menuItem">
          <a className="home itemBig" href="#home">Home</a>
          <a className="home itemSmall" title="Home" href="#home">🏡</a>
          <div className="menuHighlight"></div>
        </li>
        <li className="menuItem">
          <a className="about itemBig" href="#about">About</a>
          <a className="about itemSmall" title="About" href="#about">📰</a>
          <div className="menuHighlight"></div>
        </li>
        <li className="menuItem">
          <a className="contact itemBig" href="#contact">Contact</a>
          <a className="contact itemSmall" title="Contact" href="#contact">👋</a>
          <div className="menuHighlight"></div>
        </li>
      </ul>
    </div>
  );
}

export default Header;