import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import Mun from './mun';
import Earth from './earth';
import * as styles from './style.module.scss';

const Hero = ({ isHome, is404 }) => {
  const [isAnimating, setAnimating] = useLocalStorage(
    'isBackgroundAnimating',
    true,
  );
  const animationClassName = isAnimating ? '' : styles.paused;

  return (
    <>
      <CSSTransition
        timeout={{
          appear: 6000,
          enter: 1000,
          exit: 1000,
        }}
        classNames='hero'
        appear
        in={isHome}
      >
        <div
          className={styles.hero}
          style={{
            background: isHome || is404 ? null : 'var(--background-color)',
          }}
        >
          {(isHome || is404) && (
            <>
              <div className={`${styles.farStars} ${animationClassName}`} />
              <div className={`${styles.midStars} ${animationClassName}`} />
              <div className={`${styles.nearStars} ${animationClassName}`} />
            </>
          )}
          <Mun className={styles.mun} />
          <Earth className={styles.earth} />
        </div>
      </CSSTransition>
      {/* Play/Pause button is separate so it can float above any overlaying page */}
      <CSSTransition
        timeout={500}
        classNames='playPause'
        in={isHome || is404}
        appear
      >
        <button
          className={styles.playPause}
          onClick={() => setAnimating(!isAnimating)}
        >
          <FontAwesomeIcon icon={isAnimating ? faPause : faPlay} />
          <span className='sr-only'>
            {isAnimating ? 'Pause animations' : 'Play animations'}
          </span>
        </button>
      </CSSTransition>
    </>
  );
};

// https://usehooks.com/useLocalStorage/
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item =
        typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== 'undefined')
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default Hero;
