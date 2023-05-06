import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import useThemeMode from '../../utils/useThemeMode';
import * as styles from './theme-toggle.module.scss';

const ThemeToggle = ({ isHome }) => {
  const isInitialHomeLoad = useRef(isHome).current;
  const { themeMode, setThemeMode } = useThemeMode();

  return (
    <>
      <Helmet htmlAttributes={{ 'data-theme': themeMode }} />
      <div
        className={`${styles.toggle} ${isInitialHomeLoad ? styles.fadeIn : ''}`}
      >
        <input
          type='checkbox'
          className={styles.checkbox}
          checked={themeMode === 'light'}
          onChange={() =>
            setThemeMode(themeMode === 'light' ? 'dark' : 'light')
          }
        />
        <div className={styles.slider} />
        <div
          className={`${styles.option} ${
            themeMode === 'dark' ? styles.selected : ''
          }`}
        >
          dark
        </div>
        <div
          className={`${styles.option} ${
            themeMode === 'light' ? styles.selected : ''
          }`}
        >
          light
        </div>
        <div className={styles.background} />
      </div>
    </>
  );
};

export default ThemeToggle;
