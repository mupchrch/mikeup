const USERNAME = 'mupchrch';

module.exports = {
  jsxRuntime: 'automatic',
  siteMetadata: {
    title: 'Mike Upchurch',
    author: 'Mike Upchurch',
    job: 'Senior Software Developer',
    description: 'A personal website/blog for Mike Upchurch.',
    siteUrl: 'https://www.mikeup.church',
    social: {
      twitter: `https://twitter.com/${USERNAME}`,
      instagram: `https://www.instagram.com/${USERNAME}`,
      github: `https://github.com/${USERNAME}`,
      linkedin: `https://www.linkedin.com/in/${USERNAME}`,
    },
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './content/about',
        name: 'about',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './content/blog',
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              showCaptions: true,
            },
          },
          'gatsby-remark-autolink-headers', // Must be before prismjs
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              prompt: {
                user: 'user',
                host: 'pc',
                global: true,
              },
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-embedded-codesandbox',
            options: {
              directory: './content/blog/',
              protocol: 'embed-code://',
              embedOptions: {
                fontsize: 14,
                codemirror: 1,
                hidenavigation: 1,
              },
              getIframe: (url) =>
                `<iframe src="${url}" width="3" height="2" class="embedded-codesandbox" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
            {
              site {
                siteMetadata {
                  title
                  description
                  siteUrl
                  site_url: siteUrl
                }
              }
            }
          `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map((node) =>
                Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                }),
              ),
            query: `
                {
                  allMarkdownRemark(
                    sort: { frontmatter: { date: DESC } },
                  ) {
                    nodes {
                      excerpt
                      html
                      fields { 
                        slug 
                      }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              `,
            output: '/rss.xml',
            title: 'mikeup.church RSS feed',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mike Upchurch',
        short_name: 'Upchurch',
        start_url: '/',
        background_color: '#1c1c1c',
        theme_color: '#7aa9e6',
        display: 'minimal-ui',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-sass',
  ],
};
