import React from 'react';
import { Link } from 'gatsby';
import styles from './style.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.name}>
        Mike Upchurch
      </div>
      <ul className={styles.menu}>
        <MenuItem text='Home' link='/' emoji='🏡' />
        <MenuItem text='About' link='/about' emoji='📰' />
        <MenuItem text='Contact' link='/contact' emoji='👋' />
      </ul>
    </header>
  );
}

const MenuItem = ({ text, link, emoji }) => (
  <li className={styles.menuItem}>
    <Link className={styles.itemBig} to={link}>{text}</Link>
    <Link className={styles.itemSmall} to={link}>
      <span role='img' aria-label={text}>{emoji}</span>
    </Link>
    <div className={styles.menuHighlight}/>
  </li>
);

export default Header;