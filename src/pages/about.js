import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import { rhythm } from '../utils/typography';
import styles from './about.module.scss';

const About = ({ data }) => {
  const sections = data.allMarkdownRemark.edges;

  const verticalLine = (
    <svg viewBox='0 0 1 20' style={{ height: rhythm(4)}}>
      <path d='M.5 0 L.5 20' className={styles.line} />
    </svg>
  );

  const horizontalLine = (
    <svg viewBox='0 0 20 1' className={styles.horizontalLine}>
      <path d='M0 .5 L20 .5' className={styles.line} />
    </svg>
  );

  return (
    <div className={styles.about}>
      <Seo title='About' />
      <h1>About</h1>
      <p>
        I am a Software Developer who graduated in 2015 from the
        University of New Hampshire with a B.S. in Computer Science. I live
        in Manchester, NH and I am currently employed with Pegasystems Inc.
      </p>
      <h2>Projects</h2>
      <div className={styles.timeline} style={{ marginTop: rhythm(4), marginBottom: rhythm(2) }}>
        {sections.map((section, i) => {
            const projectYear = (new Date(section.node.frontmatter.date)).getFullYear();

            return (
              <React.Fragment key={section.node.id}>
                {i !== 0 && verticalLine}
                <div className={styles.projectContainer}>
                  <h2 className={styles.projectYear} style={{ margin: rhythm(0) }}>{projectYear}</h2>
                  <div className={styles.projectYearCenterPoint}>
                    <div
                      className={`${styles.projectCard} ${i % 2 ? styles.evenCard : styles.oddCard}`}
                      style={{ margin: rhythm(0), padding: rhythm(1) }}
                    >
                      {horizontalLine}
                      <h3>{section.node.frontmatter.title}</h3>
                      <p style={{ marginBottom: rhythm(0) }}>{section.node.frontmatter.description}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(about)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
          }
        }
      }
    }
  }
`;