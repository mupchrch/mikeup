import React, { forwardRef, useCallback, useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../../utils/typography';
import styles from './style.module.scss';

const menuItems = [{ text: 'Home', link: '/', emoji: '🏡' }, { text: 'About', link: '/about', emoji: '📰' }, { text: 'Contact', link: '/contact', emoji: '👋' }];

const Header = ({ currentPath }) => {
  const selectedItemRef = useRef(null); // used for window resize
  const [selectedDecoratorStyles, setSelectedDecoratorStyles] = useState({ transform: 'translateX(0)', width: 0 });

  // need to know when the ref changes elements
  const selectedItemCallbackRef = useCallback(element => {
    selectedItemRef.current = element; // keep track of a ref for use in window resize
    
    if (element !== null) {
      setSelectedDecoratorStyles({ transform: `translateX(${element.offsetLeft}px)`, width: element.offsetWidth });
    }
  }, []);

  // handle resize of underline
  useEffect(() => {
    const handleWindowResize = () => {
      setSelectedDecoratorStyles({ transform: `translateX(${selectedItemRef.current.offsetLeft}px)`, width: selectedItemRef.current.offsetWidth });
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <header className={styles.header} style={{ boxShadow: currentPath === '/' ? null : '0 0 10px rgba(0, 0, 0, 0.7)' }}>
      <div className={currentPath === '/' ? styles.nameHome : styles.name} style={{ paddingLeft: rhythm(1) }}>Mike Upchurch</div>
      <ul className={styles.menu}>
        {menuItems.map(({ text, link, emoji }) => {
          const isWithinPath = (currentPath === '/' && link === '/') || (link !== '/' && currentPath.startsWith(link));
          return (
            <MenuItem key={link} text={text} link={link} emoji={emoji} ref={isWithinPath ? selectedItemCallbackRef : null} />
          );
        })}
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