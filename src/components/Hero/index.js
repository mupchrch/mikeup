import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.scss';

const Hero = () => {
  const [isAnimating, setAnimating] = useState(true);
  const animationClassName = isAnimating ? '' : styles.paused;

  return (
    <div className={styles.hero}>
      <button onClick={()=> setAnimating(!isAnimating)}>
        <FontAwesomeIcon icon={isAnimating ? faPause : faPlay} />
        <span className='sr-only'>{isAnimating ? 'Pause animations' : 'Play animations'}</span>
      </button>
      <div className={`${styles.farStars} ${animationClassName}`} />
      <div className={`${styles.midStars} ${animationClassName}`} />
      <div className={`${styles.nearStars} ${animationClassName}`} />
      <div className={styles.bigText}>
        Software Developer
      </div>
      <svg viewBox="0 0 100 100" className={styles.earth}>
        <circle cx="50" cy="50" r="50" fill="lightblue" />
      </svg>
    </div>
  );
}

export default Hero;