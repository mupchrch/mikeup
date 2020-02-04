import React from 'react';
import { Link, graphql } from 'gatsby';
import Seo from '../components/seo';
import Bio from '../components/Bio';
import { rhythm, scale } from '../utils/typography';

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { previous, next, isBlog } = this.props.pageContext;

    const date = isBlog ? post.frontmatter.date : new Date(post.frontmatter.date).getFullYear();

    return (
      <>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1 style={{ marginBottom: 0 }}>
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          {isBlog && <footer><Bio /></footer>}
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              margin: `${rhythm(1)} 0`
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="next">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="prev">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </>
    )
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;