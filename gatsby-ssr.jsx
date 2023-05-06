/*** ATTN: gatsby-browser.js & gatsby-ssr.js MUST STAY IN SYNC ***/
import PageLayout from './src/components/PageLayout';

import './src/styles/global.scss';
import 'prismjs/themes/prism-tomorrow.css';

export const wrapPageElement = ({ element, props }) => (
  <PageLayout {...props}>{element}</PageLayout>
);

export const onRenderBody = ({ setHtmlAttributes }) => {
  // Initialize to dark theme - less of a jarring flash
  setHtmlAttributes({
    'data-theme': 'dark',
  });
};
