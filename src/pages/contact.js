import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Seo from '../components/seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faInstagram, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { rhythm } from '../utils/typography';
import styles from './contact.module.scss';

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/headshot.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            instagram
            github
            linkedin
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata

  return (
    <>
      <Seo title='Contact' />
      <h1>Contact</h1>
      <div className={styles.imageAndNameCard} style={{ margin: rhythm(2) }}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={'meh'}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <h2>Hello, I'm {author}.</h2>
      </div>
      <a href='mailto:&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#109;&#105;&#107;&#101;&#117;&#112;&#046;&#099;&#104;&#117;&#114;&#099;&#104;'>
        &#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#109;&#105;&#107;&#101;&#117;&#112;&#046;&#099;&#104;&#117;&#114;&#099;&#104;
      </a>
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
    </>
  );
};

export default Contact;