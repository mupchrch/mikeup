import React, { useLayoutEffect, useRef } from 'react';
import { Link, graphql } from 'gatsby';
import Seo from '../components/seo';
import Bio from '../components/Bio';
import { rhythm, scale } from '../utils/typography';

const PostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next, isBlog } = pageContext;

  const date = isBlog ? post.frontmatter.date : new Date(post.frontmatter.date).getFullYear();

  const postBodyRef = useRef(null);
  useLayoutEffect(() => {
    if (postBodyRef.current) {
      const unsupportedImages = postBodyRef.current.querySelectorAll(':not(figure) > img[src$=".gif"]');

      for (let img of unsupportedImages) {
        img.style = 'margin: 0';

        const figureElem = document.createElement('figure');
        figureElem.className = 'gatsby-resp-image-figure';
        img.parentNode.insertBefore(figureElem, img);
        figureElem.appendChild(img);

        const figcaptionElem = document.createElement('figcaption');
        figcaptionElem.className = 'gatsby-resp-image-figcaption';
        figcaptionElem.innerHTML = img.alt;
        figureElem.appendChild(figcaptionElem);
      }
    }
  });

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
        <section ref={postBodyRef} dangerouslySetInnerHTML={{ __html: post.html }} />
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
  );
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
