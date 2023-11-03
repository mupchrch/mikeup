import { Link } from 'gatsby';
import Seo from '../components/seo';
import { rhythm } from '../utils/typography';
import * as styles from './index.module.scss';

const Index = () => {
  const linkStyles = {
    height: rhythm(2),
    lineHeight: rhythm(2),
    padding: `0 ${rhythm(1)}`,
    margin: rhythm(0.25),
    borderRadius: '4px',
  };

  return (
    <>
      <Seo title='Home' />
      <div className={styles.greeting}>
        <div className={styles.bigText}>Software Developer</div>
        <div
          className={styles.actionsContainer}
          style={{ marginTop: rhythm(1) }}
        >
          <Link to='/about/' className={styles.aboutLink} style={linkStyles}>
            Want to know more?
          </Link>
          <Link
            to='/contact/'
            className={styles.contactLink}
            style={linkStyles}
          >
            Get in touch.
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
