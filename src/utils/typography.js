import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-github';
import { bodyColor, headerColor, linkColor } from '../styles/variables.scss';

const typography = new Typography({
  ...fairyGatesTheme,
  headerColor,
  bodyColor,
  overrideThemeStyles: ({ adjustFontSizeTo }) => ({
    'h1,h2': {
      borderBottom: 'none'
    },
    hr: {
      background: 'hsla(0, 0%, 65%, 0.2)'
    },
    a: {
      color: linkColor
    },
    figcaption: {
      textAlign: 'center',
      ...adjustFontSizeTo('14px'),
      fontStyle: 'italic',
      color: headerColor
    }
  })
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
