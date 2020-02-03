import React, { useEffect, useRef } from 'react';
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
          timeout={250}
          classNames='page'
          appear
        >
          <div
            className={styles.page}
            style={{
              maxWidth: rhythm(36),
              padding: `${rhythm(0)} ${rhythm(3 / 4)}`,
              paddingBottom: rhythm(1)
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
  const scrollRef = useRef(null);
  const didMountRef = useRef(false);
  const is404 = pageResources ? pageResources.page.path === '/404.html' : false;

  useEffect(() => {
    if (didMountRef.current && scrollRef.current) {
      // only scroll to top on navigation, not on refresh
      scrollRef.current.scrollTop = 0;
    } else {
      // allow scroll to top on navigation from now on
      didMountRef.current = true;
    }
  });

  return (
    <div className={styles.pageLayout}>
      <Header currentPath={location.pathname} is404={is404} />
      <Hero isHome={location.pathname === '/'} is404={is404} />
      <main className={styles.pageWrapper} style={{ textAlign: is404 ? 'center' : null }} ref={scrollRef}>
        <Transition location={location}>{children}</Transition>
      </main>
    </div>
  );
}

export default PageLayout;