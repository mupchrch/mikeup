import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div className="header">
      <div className="myName">
        Michael Upchurch
      </div>
      <ul className="menuItems">
        <MenuItem text="Home" link="/" emoji="🏡" />
        <MenuItem text="About" link="/about" emoji="📰" />
        <MenuItem text="Contact" link="/contact" emoji="👋" />
      </ul>
    </div>
  );
}

const MenuItem = ({ text, link, emoji }) => (
  <li className="menuItem">
    <Link className="itemBig" to={link}>{text}</Link>
    <Link className="itemSmall" to={link}>
      <span role="img" aria-label={text}>{emoji}</span>
    </Link>
    <div className="menuHighlight"></div>
  </li>
);

export default Header;