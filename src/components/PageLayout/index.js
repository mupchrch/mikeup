import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../Header';
import Hero from '../Hero';
import styles from './style.module.scss';

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          timeout={500}
          classNames='page'
          appear
        >
          {children}
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

const PageLayout = ({ children, location }) => {
  return (
    <div className={styles.pageLayout}>
      <Header currentPath={location.pathname} />
      <Hero />
      <Transition location={location}>{children}</Transition>
    </div>
  );
}

export default PageLayout;