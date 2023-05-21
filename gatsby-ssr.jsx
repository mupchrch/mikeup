/*** ATTN: gatsby-browser.js & gatsby-ssr.js MUST STAY IN SYNC ***/
import PageLayout from './src/components/PageLayout';

import './src/styles/global.scss';
import 'prismjs/themes/prism-tomorrow.css';

export const wrapPageElement = ({ element, props }) => (
  <PageLayout {...props}>{element}</PageLayout>
);

export const onRenderBody = ({ setHtmlAttributes, setPostBodyComponents }) => {
  // Initialize to dark theme - less of a jarring flash
  setHtmlAttributes({
    'data-theme': 'dark',
  });
  // Cloudflare Web Analytics
  setPostBodyComponents([
    <script
      key='cloudflare-web-analytics'
      defer
      src='https://static.cloudflareinsights.com/beacon.min.js'
      data-cf-beacon='{"token": "04a0c8d125e242ab8366140a4f7d3b66"}'
    ></script>,
  ]);
};
