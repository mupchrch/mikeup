// custom typefaces
import "typeface-montserrat";
import "typeface-merriweather";
import "./src/styles/global.css";

import React from "react";
import PageLayout from "./src/components/page-layout";

export const wrapPageElement = ({ element, props }) => (
  <PageLayout {...props}>{element}</PageLayout>
);