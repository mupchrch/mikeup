import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-github';
import { bodyColor, headerColor, linkColor, quoteColor, foregroundColor } from '../styles/variables.module.scss';

const typography = new Typography({
  ...fairyGatesTheme,
  headerColor,
  bodyColor,
  overrideThemeStyles: ({ adjustFontSizeTo, rhythm }) => ({
    'h1,h2': {
      borderBottom: 'none'
    },
    h6: {
      color: headerColor
    },
    'th,td': {
      border: '1px solid hsla(0, 0%, 65%, 0.2)'
    },
    'th:first-child,td:first-child': {
      paddingLeft: rhythm(2/3)
    },
    'th:last-child,td:last-child': {
      paddingRight: rhythm(2/3)
    },
    'tr:nth-child(even)': {
      background: foregroundColor
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
    },
    blockquote: {
      color: quoteColor,
      borderLeft: `4px solid ${quoteColor}` //'4px solid hsla(0,0%,0%,0.13)'
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
