import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import { rhythm } from '../utils/typography';
import styles from './about.module.scss';

const About = ({ data }) => {
  const sections = data.allMarkdownRemark.edges;

  return (
    <div className={styles.about} style={{ marginTop: rhythm(1) }}>
      <Seo title='About' />
      <h1>about me</h1>
        {sections.map(section => (
          <div key={section.node.id} className={styles.projectCard} style={{ marginBottom: rhythm(1), padding: rhythm(1) }}>
            <div className='headerAccent' />
            <h2>{section.node.frontmatter.title}</h2>
            <p style={{ marginBottom: rhythm(0) }}>{section.node.frontmatter.description}</p>
          </div>
        ))}
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
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;