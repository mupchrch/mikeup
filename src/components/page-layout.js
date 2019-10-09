import React from "react";
import Header from "./header";
import Hero from "./hero";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          timeout={500}
          classNames="page"
        >
          {children}
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

const PageLayout = ({ children, location }) => {
  return (
    <>
      <Header />
      <Hero />
      <Transition location={location}>{children}</Transition>
    </>
  );
}

export default PageLayout;