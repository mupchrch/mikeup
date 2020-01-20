// custom typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';
import './src/styles/global.scss';

import React from 'react';
import PageLayout from './src/components/PageLayout';

export const wrapPageElement = ({ element, props }) => (
  <PageLayout {...props}>{element}</PageLayout>
);