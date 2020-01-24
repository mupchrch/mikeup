import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import styles from './style.module.scss';

const Hero = ({ isHome }) => {
  const [isAnimating, setAnimating] = useState(true);
  const animationClassName = isAnimating ? '' : styles.paused;

  return (
    <CSSTransition
      timeout={{
        appear: 6000,
        enter: 1000,
        exit: 1000
      }}
      classNames='hero'
      appear
      in={isHome}
    >
      <div className={styles.hero}>
        <button onClick={()=> setAnimating(!isAnimating)}>
          <FontAwesomeIcon icon={isAnimating ? faPause : faPlay} />
          <span className='sr-only'>{isAnimating ? 'Pause animations' : 'Play animations'}</span>
        </button>
        <div className={`${styles.farStars} ${animationClassName}`} />
        <div className={`${styles.midStars} ${animationClassName}`} />
        <div className={`${styles.nearStars} ${animationClassName}`} />
        <svg viewBox="0 0 100 100" className={styles.moon}>
          <circle cx="50" cy="50" r="50" fill="lightgray" />
        </svg>
        <svg viewBox="0 0 100 100" className={styles.earth}>
          <circle cx="50" cy="50" r="50" fill="lightblue" />
        </svg>
        <div className={styles.bigText}>Software Developer</div>
      </div>
    </CSSTransition>
  );
}

export default Hero;