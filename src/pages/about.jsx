import React from 'react';
import { graphql, Link } from 'gatsby';
import Seo from '../components/seo';
import { rhythm } from '../utils/typography';
import * as styles from './about.module.scss';

const About = ({ data }) => {
  const skillsList = [
    'Javascript / ES6',
    'React',
    'Sass / CSS',
    'Git',
    'Webpack',
    'Node.js',
    'Mocha / Chai / Jasmine / Jest',
    'Puppeteer',
    'Scrum Certified',
  ];
  const skillStyles = { margin: `${rhythm(0.5)} ${rhythm(1)}` };
  const sections = data.allMarkdownRemark.edges;

  const verticalLine = (
    <svg viewBox='0 0 1 20' style={{ height: rhythm(4) }}>
      <path d='M.5 0 L.5 20' className={styles.line} />
    </svg>
  );

  const horizontalLine = (
    <svg viewBox='0 0 20 1'>
      <path d='M0 .5 L20 .5' className={styles.line} />
    </svg>
  );

  return (
    <>
      <Seo title='About' />
      <h1>About</h1>
      <p>
        I am a Software Developer who graduated in 2015 from the{' '}
        <a href='https://www.unh.edu/'>University of New Hampshire</a> with a
        B.S. in Computer Science.
      </p>
      <p>
        I live in Manchester, NH, and I have worked at{' '}
        <a href='https://www.pega.com/'>Pegasystems</a> since 2015.
      </p>
      <h2>Skills</h2>
      <ul className={styles.skillsList}>
        {skillsList.map((skill) => (
          <li key={skill} style={skillStyles}>
            {skill}
          </li>
        ))}
      </ul>
      <h2>Projects</h2>
      <div
        className={styles.timeline}
        style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}
      >
        {sections.map((section, i) => {
          const projectYear = new Date(
            section.node.frontmatter.date,
          ).getFullYear();

          return (
            <React.Fragment key={section.node.id}>
              {i !== 0 && verticalLine}
              <div
                className={`${
                  i % 2
                    ? styles.projectContainerEven
                    : styles.projectContainerOdd
                }`}
              >
                <h3
                  className={styles.projectYear}
                  style={{ margin: rhythm(0) }}
                >
                  {projectYear}
                </h3>
                <div className={styles.projectCardWrapper}>
                  <div
                    className={styles.projectCard}
                    style={{ margin: rhythm(0) }}
                  >
                    <div style={{ margin: rhythm(1 / 2) }}>
                      <h4 style={{ marginTop: rhythm(0) }}>
                        <Link to={section.node.fields.slug}>
                          {section.node.frontmatter.title}
                        </Link>
                      </h4>
                      <p style={{ marginBottom: rhythm(0) }}>
                        {section.node.frontmatter.description}
                      </p>
                    </div>
                  </div>
                  {horizontalLine}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
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
          fields {
            slug
          }
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
