import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';

const About = ({ data }) => {
  const sections = data.allMarkdownRemark.edges;

  return (
    <div className='aboutPanel'>
      <Seo title='About' />
      <div class='aboutPanelContent'>
        {sections.map(section => (
          <>
            <div className='headerAccent' />
            <h2>{section.node.frontmatter.title}</h2>
            <p>{section.node.frontmatter.description}</p>
          </>
        ))}
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
    ) {
      edges {
        node {
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;