const username = 'mupchrch';

module.exports = {
  siteMetadata: {
    title: 'Mike Upchurch',
    author: 'Mike Upchurch',
    description: 'A personal website/blog for Mike Upchurch.',
    siteUrl: 'https://www.mikeup.church',
    social: {
      twitter: `https://twitter.com/${username}`,
      instagram: `https://www.instagram.com/${username}`,
      github: `https://github.com/${username}`,
      linkedin: `https://www.linkedin.com/in/${username}`
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/about`,
        name: `about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              showCaptions: true
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-embedded-codesandbox`,
            options: {
              directory: `${__dirname}/content/blog/`,
              protocol: 'embed-code://',
              embedOptions: {
                fontsize: 14,
                codemirror: 1,
                hidenavigation: 1
              },
              getIframe: url => `<iframe src="${url}" width="3" height="2" class="embedded-codesandbox" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mike Upchurch`,
        short_name: `Upchurch`,
        start_url: `/`,
        background_color: `#1c1c1c`,
        theme_color: `#7aa9e6`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
