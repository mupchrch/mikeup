import React, { useState } from 'react';
import styles from './style.module.scss';

const Hero = () => {
  const [isAnimating, setAnimating] = useState(true);
  const animationClassName = isAnimating ? null : styles.paused;

  return (
    <div className={styles.hero}>
      <button onClick={()=> setAnimating(!isAnimating)}>
        {isAnimating ? 'pause' : 'play'}
      </button>
      <div className={`${styles.farStars} ${animationClassName}`} />
      <div className={`${styles.midStars} ${animationClassName}`} />
      <div className={`${styles.nearStars} ${animationClassName}`} />
      <div className={styles.bigText}>
        Software Developer
      </div>
    </div>
  );
}

export default Hero;