import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';

const About = ({ data }) => {
  const sections = data.allMarkdownRemark.edges;

  return (
    <div className='about'>
      <Seo title='About' />
      {sections.map(section => (
        <React.Fragment key={section.node.id}>
          <div className='headerAccent' />
          <h2>{section.node.frontmatter.title}</h2>
          <p>{section.node.frontmatter.description}</p>
        </React.Fragment>
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