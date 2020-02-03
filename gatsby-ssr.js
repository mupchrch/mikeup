/*** ATTN: gatsby-browser.js & gatsby-ssr.js MUST STAY IN SYNC ***/
import React from 'react';
import PageLayout from './src/components/PageLayout';

import './src/styles/global.scss';
import 'prismjs/themes/prism-tomorrow.css';

export const wrapPageElement = ({ element, props }) => (
  <PageLayout {...props}>{element}</PageLayout>
);