import React, { forwardRef, useCallback, useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faAddressBook, faRss } from '@fortawesome/free-solid-svg-icons';
import { rhythm } from '../../utils/typography';
import styles from './style.module.scss';

const menuItems = [
  { text: 'Home', link: '/', icon: faHome },
  { text: 'About', link: '/about/', icon: faNewspaper },
  { text: 'Blog', link: '/blog/', icon: faRss },
  { text: 'Contact', link: '/contact/', icon: faAddressBook }
];

const Header = ({ currentPath, is404 }) => {
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
    if (typeof window !== 'undefined') window.addEventListener('resize', handleWindowResize);
    return () => { if (typeof window !== 'undefined') window.removeEventListener('resize', handleWindowResize); };
  }, []);

  return (
    <header className={styles.header} style={{ boxShadow: currentPath === '/' || is404 ? null : '0 0 10px rgba(0, 0, 0, 0.7)' }}>
      <div className={currentPath === '/' ? styles.nameHome : styles.name} style={{ paddingLeft: rhythm(1) }}>
        <Link to={'/'}>Mike Upchurch</Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menuItems.map(({ text, link, icon }) => {
            const isWithinPath = (currentPath === '/' && link === '/') || (link !== '/' && currentPath.startsWith(link));
            return (
              <MenuItem key={link} text={text} link={link} icon={icon} ref={isWithinPath ? selectedItemCallbackRef : null} />
            );
          })}
          <div className={styles.selectedDecorator} style={selectedDecoratorStyles} />
        </ul>
      </nav>
    </header>
  );
}

const MenuItem = forwardRef(({ text, link, icon }, ref) => (
  <li ref={ref} className={styles.menuItem}>
    <Link className={styles.itemBig} to={link}>{text}</Link>
    <Link className={styles.itemSmall} to={link} title={text}>
      <FontAwesomeIcon icon={icon} />
      <span className='sr-only'>{text}</span>
    </Link>
  </li>
));

export default Header;