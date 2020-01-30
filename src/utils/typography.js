import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-github';
import { bodyColor, headerColor } from '../styles/variables.scss';

const typography = new Typography({
  ...fairyGatesTheme,
  headerColor,
  bodyColor,
  overrideThemeStyles: (bleh, options, styles) => {console.log(bleh, options, styles); return {
    'h1,h2': {
      borderBottom: 'none'
    }
  }}
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
