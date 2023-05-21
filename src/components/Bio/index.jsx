import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faInstagram,
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { rhythm } from '../../utils/typography';
import * as styles from './style.module.scss';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          social {
            twitter
            instagram
            github
            linkedin
          }
          job
        }
      }
    }
  `);

  const { author, social, job } = data.site.siteMetadata;

  return (
    <>
      <div className={styles.imageAndNameCard} style={{ margin: rhythm(1) }}>
        <StaticImage
          src='./headshot.jpg'
          alt={author}
          placeholder='none'
          style={{
            marginBottom: 0,
            minWidth: 50,
            borderRadius: '100%',
          }}
          imgStyle={{
            borderRadius: '50%',
          }}
          width={180}
          height={180}
        />
        <div>
          <h2>I&apos;m {author}.</h2>
          <p>I live and work in New Hampshire as a {job}.</p>
          <a href='mailto:&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#109;&#105;&#107;&#101;&#117;&#112;&#046;&#099;&#104;&#117;&#114;&#099;&#104;'>
            &#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#109;&#105;&#107;&#101;&#117;&#112;&#046;&#099;&#104;&#117;&#114;&#099;&#104;
          </a>
        </div>
      </div>
      <div className={styles.socialLinks}>
        <a href={social.github}>
          <FontAwesomeIcon icon={faGithubSquare} /> Github
        </a>
        <a href={social.instagram}>
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        <a href={social.twitter}>
          <FontAwesomeIcon icon={faTwitterSquare} /> Twitter
        </a>
        <a href={social.linkedin}>
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </div>
    </>
  );
};

export default Bio;
