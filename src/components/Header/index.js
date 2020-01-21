import React, { forwardRef, useCallback, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styles from './style.module.scss';

const Header = ({ currentPath }) => {
  const [selectedDecoratorStyles, setSelectedDecoratorStyles] = useState({ transform: 'translateX(0)', width: 0 });

  const menuItems = [{ text: 'Home', link: '/', emoji: '🏡' }, { text: 'About', link: '/about', emoji: '📰' }, { text: 'Contact', link: '/contact', emoji: '👋' }];

  useEffect(() => {
    const handleWindowResize = () => {
      // TODO handle resize of underline
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });

  // useCallback so it is known when the ref changes elements
  const selectedItemRef = useCallback(element => {
    if (element !== null) {
      setSelectedDecoratorStyles({ transform: `translateX(${element.offsetLeft}px)`, width: element.offsetWidth });
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.name}>
        Mike Upchurch
      </div>
      <ul className={styles.menu}>
        {menuItems.map(({ text, link, emoji }) => (
          <MenuItem key={link} text={text} link={link} emoji={emoji} ref={link === currentPath ? selectedItemRef : null} />
        ))}
        <div className={styles.selectedDecorator} style={selectedDecoratorStyles} />
      </ul>
    </header>
  );
}

const MenuItem = forwardRef(({ text, link, emoji }, ref) => (
  <li ref={ref} className={styles.menuItem}>
    <Link className={styles.itemBig} to={link}>{text}</Link>
    <Link className={styles.itemSmall} to={link}>
      <span role='img' aria-label={text}>{emoji}</span>
    </Link>
  </li>
));

export default Header;