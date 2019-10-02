import React from "react";
import Header from "./header";
import Hero from "./hero";

const PageLayout = (props) => {
  return (
    <>
      <Header />
      <Hero />
      {props.children}
    </>
  );
}

export default PageLayout;