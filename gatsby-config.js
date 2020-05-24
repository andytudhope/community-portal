const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Gatsby + Dai-Ui Starter`,
    description: `Gatsby DaiUI Starter`,
    author: `Réjon Taylor-Foster (@Maximum_Crash)`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
