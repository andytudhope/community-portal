const path = require('path')

module.exports = {
  siteMetadata: {
    title: `MakerDAO Community Portal`,
    description: `Gatsby DaiUI Starter`,
    author: `Réjon Taylor-Foster (@Maximum_Crash)`,
    copyright: "",

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby + Dai-Ui Starter`,
        short_name: `Gatsby + Dai-Ui`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    { resolve: 'gatsby-plugin-theme-ui',
      options: {
        prismPreset: 'night-owl',
        preset: '@makerdao/dai-ui-theme-maker'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/modules/layouts/site_layout.js`),
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('./src/modules/layouts/default_layout.js')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`
          },
        ],
      },
    },
    { //NOTE(Rejon): This is what allows us to do aliased imports like "@modules/ect..."
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@modules": path.resolve(__dirname, 'src/modules'),
          "@src": path.resolve(__dirname, 'src'),

          "@pages": path.resolve(__dirname, 'src/pages'),
          "@images": path.resolve(__dirname, 'public/images'),
        },
        extensions: [ //NOTE(Rejon): You don't have to write .js at the end of js files now.
          "js"
        ]
      }
    }
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
