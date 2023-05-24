import Typography from 'typography';
import theme from 'typography-theme-github';

const typography = new Typography({
  ...theme,
  headerColor: 'var(--header-color)',
  bodyColor: 'var(--body-color)',
  overrideThemeStyles: ({ adjustFontSizeTo, rhythm }) => ({
    'h1,h2': {
      borderBottom: 'none',
    },
    h6: {
      color: 'var(--header-color)',
    },
    'th,td': {
      border: '1px solid hsla(0, 0%, 65%, 0.2)',
    },
    'th:first-child,td:first-child': {
      paddingLeft: rhythm(2 / 3),
    },
    'th:last-child,td:last-child': {
      paddingRight: rhythm(2 / 3),
    },
    'tr:nth-child(even)': {
      background: 'var(--foreground-color)',
    },
    hr: {
      background: 'hsla(0, 0%, 65%, 0.2)',
    },
    a: {
      color: 'var(--link-color)',
    },
    figcaption: {
      textAlign: 'center',
      ...adjustFontSizeTo('14px'),
      fontStyle: 'italic',
      color: 'var(--header-color)',
    },
    blockquote: {
      color: 'var(--quote-color)',
      borderLeft: '4px solid var(--quote-color)',
    },
  }),
  overrideStyles: (...args) => ({
    ...theme.overrideStyles(...args),
    // https://github.com/KyleAMathews/typography.js/issues/244
    'td,th': {
      textAlign: null,
    },
    html: {
      overflowY: 'initial',
    },
  }),
});

// Hot reload typography in development.
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
