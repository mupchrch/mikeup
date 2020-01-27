import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../Header';
import Hero from '../Hero';
import { rhythm } from '../../utils/typography';
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
          <div
            className={styles.page}
            style={{
              maxWidth: rhythm(36),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

const PageLayout = ({ children, location }) => {
  return (
    <div className={styles.pageLayout}>
      <Header currentPath={location.pathname} />
      <Hero isHome={location.pathname === '/'} />
      <main className={styles.pageWrapper}>
        <Transition location={location}>{children}</Transition>
      </main>
    </div>
  );
}

export default PageLayout;