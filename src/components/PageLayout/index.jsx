import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../Header';
import Hero from '../Hero';
import { rhythm } from '../../utils/typography';
import * as styles from './style.module.scss';

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          timeout={250}
          classNames='page'
          appear
        >
          <div
            className={styles.page}
            style={{
              maxWidth: rhythm(36),
              padding: `${rhythm(0)} ${rhythm(3 / 4)}`,
              paddingBottom: rhythm(1),
            }}
          >
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

const PageLayout = ({ children, location, pageResources }) => {
  const is404 = pageResources ? pageResources.page.path === '/404.html' : false;

  return (
    <>
      <Header currentPath={location.pathname} is404={is404} />
      <Hero isHome={location.pathname === '/'} is404={is404} />
      <main style={{ textAlign: is404 ? 'center' : null }}>
        <Transition location={location}>{children}</Transition>
      </main>
    </>
  );
};

export default PageLayout;
