const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Akaw Beach Resort`,
    description: `Akaw beach resort is a travel site intended for people who want a website for their travel business`,
    author: `Donny Layug`,
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
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Akaw Beach Resort`,
        short_name: `Akaw`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`pacifico`, `belleza`],
        display: `swap`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@common": path.resolve(__dirname, "src/components/common"),
          "@images": path.resolve(__dirname, "src/images"),
          "@sections": path.resolve(__dirname, "src/components/sections"),
          "@styles": path.resolve(__dirname, "src/styles/"),
          "@static": path.resolve(__dirname, "static/"),
          "@elements": path.resolve(__dirname, "src/elements"),
        },
      },
    },
  ],
}
