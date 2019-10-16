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
          appear
        >
          {children}
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

const PageLayout = ({ children, location }) => {
  let heroMovement;
  switch(location.pathname) {
    case "/about":
      heroMovement = "right";
      break;
    case "/contact":
      heroMovement = "left";
      break;
    default:
      heroMovement = null;
  }

  return (
    <>
      <Header />
      <Hero movement={heroMovement} />
      <Transition location={location}>{children}</Transition>
    </>
  );
}

export default PageLayout;