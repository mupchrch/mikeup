import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import useLocalStorage from '../../utils/useLocalStorage';
import Mun from './mun';
import Earth from './earth';
import * as styles from './style.module.scss';

const Hero = ({ isHome, is404 }) => {
  const [isAnimating, setAnimating] = useLocalStorage(
    'mikeup-hero-animating',
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
          // Prevent tab interaction when on pages not showing hero
          tabIndex={isHome || is404 ? undefined : -1}
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

export default Hero;
