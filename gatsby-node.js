const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('./src/templates/post.jsx');

  const blogPostResult = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(blog)/" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  );

  if (blogPostResult.errors) {
    throw blogPostResult.errors;
  }

  // Create blog posts pages.
  const posts = blogPostResult.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: postTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
        isBlog: true,
      },
    });
  });

  const projectResult = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(about)/" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  );

  if (projectResult.errors) {
    throw projectResult.errors;
  }

  // Create projects pages.
  const projects = projectResult.data.allMarkdownRemark.edges;

  projects.forEach((project, index) => {
    const previous =
      index === projects.length - 1 ? null : projects[index + 1].node;
    const next = index === 0 ? null : projects[index - 1].node;

    createPage({
      path: project.node.fields.slug,
      component: postTemplate,
      context: {
        slug: project.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const relativeFilePath = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value: `/${fileNode.sourceInstanceName}${relativeFilePath}`,
    });
  }
};
